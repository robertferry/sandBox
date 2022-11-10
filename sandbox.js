

const button1 = document.querySelector('.colorButton')

// button1.addEventListener('click', changeColor)
//////////////////////////////////////////////
function changeColor() {
    let color = document.getElementById('colorInputText').value;
    document.body.style.backgroundColor = color;
    event.preventDefault();
if (event.key === 'Enter'){
    event.preventDefault();
    document.querySelector('colorInputText').style.backgroundColor = color;
}
  }
///this above here is for the top input field with button assignment.
  //////////////////////////////////////////inside here is the only reason it is working.
function changeColor2() {
    let color = document.getElementById('colorInputText2').value;
    document.querySelector('.new').style.backgroundColor = color;
  }
  /////////////////////////////////////////////////////////////////////
