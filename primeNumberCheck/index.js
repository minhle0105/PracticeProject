let numbers = prompt("How many prime numbers do you want? ")
let count = 0;
let N = 2;
while (count < numbers) {
      let factor_count = 0
      for (let i = 1; i <= N; i++) {
            if (N%i == 0) {
                  factor_count++;
            }
      }
      if (factor_count == 2) {
            count++;
            document.write(N + "<br>");
      }
      N++;
}
