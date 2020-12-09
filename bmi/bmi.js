function calBMI() {
      let weight = parseInt(document.getElementById("weight").value);
      let height = parseInt(document.getElementById("height").value);
      let bmi = weight/(height^2);
      document.getElementById("result").innerText = "Your Body Mass Index: " + bmi;     
}