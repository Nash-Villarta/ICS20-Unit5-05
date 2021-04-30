//  This sets the variable number to 0
let number = 0

document.getElementById('button').addEventListener('click', calculate)
//  Once receiving the click from the fourth line, it will now calculate the square by receiving the input variable and multiplying the number into itself creating the area of a square
function calculate () {
  number = document.getElementById('input').value
  number = parseInt(number)
  //  The * symbol is used to multiply the two variables to eachother creating the area of a square
  number = number * number
  alert(number)
  //  I set the number variable outcome to replace text in the HTML.
  document.getElementById('answer').innerHTML = number
}
