function upArrowPressed() {
      let element = document.getElementById("soccer");
      element.style.top = parseInt(element.style.top) - 5 + 'px';
}
function downArrowPressed() {
      var element = document.getElementById("soccer");
      element.style.top = parseInt(element.style.top) + 5 + 'px';
}
function leftArrowPressed() {
      var element = document.getElementById("soccer");
      element.style.left = parseInt(element.style.left) - 5 + 'px';
}
function rightArrowPressed() {
      var element = document.getElementById("soccer");
      element.style.left = parseInt(element.style.left) + 5 + 'px';
  
}
function moveSelection(evt) {
      switch (evt.keyCode) {
            case 37:
            case 65:
                  leftArrowPressed();
                  break;
            case 39:
            case 68:
                  rightArrowPressed();
                  break;
            case 38:
            case 87:
                  upArrowPressed();
                  break;
            case 40:
            case 83:
                  downArrowPressed();
                  break;
      }
}
function docReady() {
      window.addEventListener('keydown', moveSelection);
}