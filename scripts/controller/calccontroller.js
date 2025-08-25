class CalcController {
  constructor() {
    this._displayCalc = "0";
    this.currentDate;
    this.initialize;
  }
  
  initialize() {

    let displayCalcEl = document.getElementById("display");
    let dateEl = document.querySelector("#data");
    let timeEl = document.querySelector("#hora");

    displayCalcEl.innerHTML = "1234";
  }

  get displayCalc() {
    return this._displayCalc;
  }
  set displayCalc(value) {
    this._displayCalc = valor;
  }
  get dataAtual() {
    return this.currentDate;
  }
  set currentDate(value) {
    this._currentDate;
  }
}
