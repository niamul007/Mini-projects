
//make a funtion which will return 10 random numbers in one array
function generateRandomNumbers() {
  const randomNumbers = [];
  for (let i = 0; i < 10; i++) {
    randomNumbers.push(Math.floor(Math.random() * 6 + 1));
  }
  return randomNumbers;
}

console.log(generateRandomNumbers());