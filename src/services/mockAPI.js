export default function calculateAsyc(inputNumber, occurences, lastDatetime){
  return new Promise(function(resolve, reject){
    if (true) {

      //closed form solution
      let squareOfSums = ((inputNumber/2)+.5)*inputNumber;
      squareOfSums = Math.pow(squareOfSums, 2)
      const sumOfSquares = inputNumber*(((inputNumber/3) + .5)*inputNumber + (1/6))

      /***************
      Alternate solutions using for loops
      // let squareOfSums = 0;
      // for (let i = 0; i <= inputNumber; i++) {
        // squareOfSums += i;
      // }
      let sumOfSquares
      for (let n = 0; n <= inputNumber; n++) {
        sumOfSquares += Math.pow(n, 2);
      // }
      ************/

      const value = squareOfSums - sumOfSquares;
      const result =  {
        "datetime" : Date.now(),
        "last_datetime" : lastDatetime,
        "number": inputNumber,
        "squareOfSums": squareOfSums,
        "sumOfSquares": sumOfSquares,
        "occurences": occurences + 1,
        "value": value,
      };

      resolve(result);
    } else {
      reject('Something went wrong!');
    }
  })
}
