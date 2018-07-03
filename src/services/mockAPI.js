export default function calculateAsyc(inputNumber, occurences, lastDatetime){
  return new Promise(function(resolve, reject){
    if (true) {
      let squareOfSums = 0;
      for (let i = 0; i <= inputNumber; i++) {
        squareOfSums += i;
      }
      squareOfSums = Math.pow(squareOfSums, 2)
      let sumOfSquares = 0;
      for (let n = 0; n <= inputNumber; n++) {
        sumOfSquares += Math.pow(n, 2);
      }

      const value = squareOfSums - sumOfSquares;
      const result =  {
        "datetime" : Date.now(),
        "last_datetime" : lastDatetime,
        "number": inputNumber,
        "squareOfSums": squareOfSums,
        "sumOfSquares": sumOfSquares,
        "occurences": occurences,
        "value": value,
      };

      resolve(result);
    } else {
      reject('Something went wrong!');
    }
  })
}
