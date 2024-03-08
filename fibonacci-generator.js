function fibonacciGenerator (n) {
  //Do NOT change any of the code above 👆
      
      //Write your code here:
      var fibonacci = [];

      if (n === 1) {
        fibonacci = [0];
      } else {
        fibonacci = [0, 1];
        for (var i = 3; i <= n; i++) {
          fibonacci.push(fibonacci[i - 3] + fibonacci[i - 2]);
        }
      }

      return fibonacci;
  
      //Return an array of fibonacci numbers starting from 0.
      
  //Do NOT change any of the code below 👇
  }
  
  