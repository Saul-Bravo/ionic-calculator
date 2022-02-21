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

  addition(){
    this.result = (this.firstNumber + this.secondNumber);
    this.showResult();
  }

  substraction(){
    this.result = (this.firstNumber - this.secondNumber);
    this.showResult();
  }

  division(){
    this.result = (this.firstNumber / this.secondNumber);
    this.showResult();
  }

  multiplication(){
    this.result = (this.firstNumber * this.secondNumber);
    this.showResult();
  }

  residue(){
    this.result = (this.firstNumber % this.secondNumber);
    this.showResult();
  }

  showResult(){
    this.operation = this.result.toString();
    this.lastNumber = this.secondNumber.toString();
    this.lastOperator = this.operator;
    this.operator = '';
  }

  equals(){
    this.secondNumber = Number(this.operation);
    switch (this.operator) {
      case '+':
        this.addition();
        break;
      case '-':
        this.substraction();
        break;
      case '/':
        this.division();
        break;
      case '%':
        this.residue();
        break;
      case '*':
        this.multiplication();
        break;

      default:
        break;
    }
  }

}
