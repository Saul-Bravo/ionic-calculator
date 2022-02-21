import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  lastNumber = '';
  lastOperator = '';
  operator = '';
  operation = '0';
  result: number;

  firstNumber: number;
  secondNumber: number;

  constructor() {}

  typeNumber(num: string) {
    if(this.operation==='0'){
      this.operation='';
    }
    this.operation=this.operation + num;
  }

  typeOperator(op: string){
    this.operator = op;
    console.log(this.operator);
    this.lastNumber = this.operation;
    this.firstNumber = Number(this.operation);
    this.operation = '0';
  }

  deleteDigit(){
    if(this.operation!=='0'){
      this.operation = this.operation.slice(0,-1);
      if(this.operation===''){
        this.operation='0';
      }
    }
  }

  deleteAll(){
    this.operation = '0';
    this.lastOperator = '';
    this.lastNumber = '';
    this.operator = '';
  }

  equals(){
    this.secondNumber = Number(this.operation);
    switch (this.operator) {
      case '+':
        this.result = (this.firstNumber + this.secondNumber);
        this.operation = this.result.toString();
        this.lastNumber = this.secondNumber.toString();
        this.lastOperator = this.operator;
        this.operator = '';
        break;
      case '-':
        this.result = (this.firstNumber - this.secondNumber);
        this.operation = this.result.toString();
        this.lastNumber = this.secondNumber.toString();
        this.lastOperator = this.operator;
        this.operator = '';
        break;
      case '/':
        this.result = (this.firstNumber / this.secondNumber);
        this.operation = this.result.toString();
        this.lastNumber = this.secondNumber.toString();
        this.lastOperator = this.operator;
        this.operator = '';
        break;
      case '%':
        this.result = (this.firstNumber % this.secondNumber);
        this.operation = this.result.toString();
        this.lastNumber = this.secondNumber.toString();
        this.lastOperator = this.operator;
        this.operator = '';
        break;
      case '*':
        this.result = (this.firstNumber * this.secondNumber);
        this.operation = this.result.toString();
        this.lastNumber = this.secondNumber.toString();
        this.lastOperator = this.operator;
        this.operator = '';
        break;

      default:
        break;
    }
  }

}
