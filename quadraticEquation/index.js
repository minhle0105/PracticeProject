function quadSolve() {
      let a = document.getElementById("a").value;
      let b = document.getElementById("b").value;
      let c = document.getElementById("c").value;
      let x1 = 0;
      let x2 = 0;
      let delta = 0;
      if (a == 0) {
            if (b == 0 && c == 0) {
                  document.getElementById("result").innerText = "Phuong trinh vo so nghiem.";
            }
            else if (b == 0 && c != 0) {
                  document.getElementById("result").innerText = "Phuong trinh vo nghiem."
            }
            else {
                  document.getElementById("result").innerText = "Phuong trinh co 1 nghiem: " + (-c/b)
            }
      }
      else {
            delta = (b*b) - (4*a*c);
            if (delta < 0) {
                  document.getElementById("result").innerText = "Phuong trinh vo nghiem.";
            }
            else if (delta == 0) {
                  x1 = -b/(2*a);
                  x2 = -b/(2*a);
                  document.getElementById("result").innerText = "Phuong trinh co nghiem kep x1 = x2 = " + x1;
            }
            else {
                  let deltaSquare = Math.pow(delta, 0.5);
                  x1 = (-b+deltaSquare)/(2*a);
                  x2 = (-b-deltaSquare)/(2*a);
                  document.getElementById("result").innerText = "Phuong trinh co 2 nghiem phan biet: " + x1 + ", " + x2;
            }
      }
}