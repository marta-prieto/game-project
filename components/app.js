import { Elements } from './elements.js'

const app = document.querySelector('.js-app')
const output = app.querySelector('.js-output')
const buttons = app.querySelectorAll('.js-button')

buttons.forEach(button  => {
      const activeButton = new Elements (button, output)
      console.log("activeButton",activeButton)
})
