const calc = (someString) => {
  if (someString.length == 0) {
    return 0;
  }

  const regexp = /^\/\/(.{1})/
  const match = someString.match(regexp)

  let numbers = []

  if (match) {
    let delim = match[1]
    const newString = someString.slice(3)
    numbers = newString.split(`${delim}`)
    console.log(numbers)
  }

  else {
    numbers = someString.split(/[,\n]/)
  }

  const ans = numbers.reduce((sum, curVal) => {
    return sum + parseInt(curVal);
  }, 0);

  return ans;
};

export default calc;
