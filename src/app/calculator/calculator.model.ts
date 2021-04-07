
export interface CalculationProperties {
    leftOperand: number,
    rightOperand: number,
    operator: Operator
    index: number,
    result: number
}

export enum Operator {
    PLUSS = "+",
    MINUS = "-",
    MULTIPLY = "*",
    DEVIDE = "-"
}