import { Injectable } from '@angular/core';
import { Operator } from '../calculator/calculator.model';
import { CalculationProperties } from './calculator.model';

@Injectable({
  providedIn: 'root'
})
export class CalculationService extends CalculationProperties {



  constructor() { 
    super();
  }

  public add(leftOperand, rightOperand) {
    return parseFloat(leftOperand) + parseFloat(rightOperand);
  }
  public subract(leftOperand, rightOperand) {
    return leftOperand - rightOperand;
  }
  public multiply(leftOperand, rightOperand) {
    return leftOperand * rightOperand;
  }
  public divide(leftOperand, rightOperand) {
    return leftOperand / rightOperand;
  }

}
