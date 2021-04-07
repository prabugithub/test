import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { CalculationService } from '../server/calculation.service';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  calculationForm: FormGroup;
  calculations: FormArray;

  constructor(private fb: FormBuilder, private calService: CalculationService) { }

  ngOnInit() {
    this.calculationForm = this.fb.group({
      arr: this.fb.array([this.getCalculationsForm()])
    })
  }
  getCalculationsForm() {
    return this.fb.group({
      leftOperand: [''],
      rightOperand: [''],
      operator: [''],
      result: [''],
      index: ['']
    })
  }
  addItem() {
    this.calculations = this.calculationForm.get('arr') as FormArray;
    this.calculations.push(this.getCalculationsForm());
  }
  onSubmit() {
    const formValue = (this.calculationForm.get('arr') as FormArray).value[0];
    const result =  this.doCalculation(formValue);
    (this.calculationForm.get('arr') as FormArray).controls[0].get('result').setValue(result);
  }
  doCalculation(formValue) {
    const value = formValue;
    switch(value.operator){
      case '+':
        return this.calService.add(value.leftOperand, value.rightOperand);
      case '-':
        return this.calService.subract(value.leftOperand, value.rightOperand)
      case '*':
        return this.calService.multiply(value.leftOperand, value.rightOperand)
      case '/':
        return this.calService.divide(value.leftOperand, value.rightOperand)
    }

    return 0;
  }
}
