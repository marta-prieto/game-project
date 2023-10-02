import {  getRandomResult } from './utils.js'

class Elements {
  constructor(button, output) {
    this.type = Number(button.getAttribute('data-type'))
    this.button = button
    this.output = output

    this.initButton()

  }

  showThrow() {
    this.output.innerHTML = "test"
  }


  initButton() {
    this.button.addEventListener("click", () => {
      const getThrow = getRandomResult(this.type)
      this.showThrow(getThrow)
    })
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