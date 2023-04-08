const calc = (someString) => {
    if (someString.length == 0) {
        return 0
    }

    let numbers = someString.split(',')

    const ans = numbers.reduce((sum, curVal) => sum + parseInt(curVal), 0)
    
    return ans
};

export default calc;
