export default function calculateAsyc(inputNumber){
  return new Promise(function(resolve, reject){
    if (true) {
      let squareOfSums = 0;
      for (let i = 0; i <= inputNumber; i++) {
        squareOfSums += i;
      }
      squareOfSums = Math.pow(squareOfSums, 2)
      //sum of squares
      let sumOfSquares = 0;
      for (let n = 0; n <= inputNumber; n++) {
        sumOfSquares += Math.pow(n, 2);
      }

      const value = squareOfSums - sumOfSquares;
      const result =  {
        "number": inputNumber,
        "squareOfSums": squareOfSums,
        "sumOfSquares": sumOfSquares,
        "value": value,
      };

      resolve(result);
    } else {
      reject('something went wrong!');
    }
  })
}
