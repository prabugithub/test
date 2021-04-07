export abstract class CalculationProperties {
    leftOperand: number;
    rightOperand: number;
    operator: Operator;
    index: number;
    add(leftOperand, rightOperand) {};
    subract(leftOperand, rightOperand) {};
    multiply(leftOperand, rightOperand) {};
    divide(leftOperand, rightOperand) {};
}

export enum Operator {
    PLUSS = "+",
    MINUS = "-",
    MULTIPLY = "*",
    DEVIDE = "-"
}