function yes() {
      document.getElementById("result").innerText = "I love you too";
}
function no() {
      let browserHeight = window.innerHeight;
      let browserWidth = window.innerWidth;
      let noButton = document.getElementById("no")
      noButton.style.top = Math.floor(Math.random() * browserHeight) + "px";
      noButton.style.left = Math.floor(Math.random() * browserWidth) + "px";
      console.log(browserHeight);
      console.log(browserWidth);
}