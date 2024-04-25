import { getRandomResult } from './utils.js'

class Elements {
  constructor(button, output) {
    this.type = Number(button.getAttribute('data-type'))
    this.button = button
    this.output = output

    this.initButton()

  }

  showThrow() {
    console.log(this.output, "output1")

    this.output.innerHTML = "testR"
  }


  initButton() {
    console.log(this.button, "this")
    this.button.addEventListener("click", () => {
      const getThrow = getRandomResult(this.type)
      console.log(this.type, "this")

      //necesito reconocer qué botón he hecho click para 
      //if es botón 1 else rock
      //if es botón 2 else paper
      // if es bottón 3 else tijeras



      this.showThrow(getThrow)
    })
    const array = this.bottom
    array.forEach(element => {
      console.log(element, "element")
    });
  }
}

export {
  Elements
}

//localstorage
//save data from player





//save data from machine
//compare data from localstorage
//return winner





if (document.querySelector("#claim-create .grid.grid-ai-center.mb-300 .text-input_textarea > input[type=text]").value === '') {
  let getRandomNumber = Math.floor(Math.random() * 1000)
  let newRandomResult = document.querySelector("#claim-create .grid.grid-ai-center.mb-300 .text-input_textarea > input[type=text]").value = 'TestBillma' + [getRandomNumber]
  return newRandomResult;

}


/*
if(document.querySelector("#claim-create .grid.grid-ai-center.mb-300 .text-input_textarea > input[type=text]").value === ''){
  let newValue = Math.floor(Math.random() * 1000)
  document.querySelector("#claim-create .grid.grid-ai-center.mb-300 .text-input_textarea > input[type=text]").value = 'TestBillma'+[newValue]
}
var randomNumberBetween0and19 = Math.floor(Math.random() * 20);

function randomWholeNum() {

  // Only change code below this line.

  return Math.random();
}*/