function validation(event){
      var data = event.key;
      var isChar = isNaN(data); 
      if(isChar){
            event.preventDefault();
      }
}
function insert(num){
      document.form.textview.value = document.form.textview.value + num;
}

function clean() {
      document.form.textview.value = '';
}

function calculate() {
      var validNum = document.form.textview.value;
      if (validNum) {
            document.form.textview.value = eval(validNum);
      }   
}