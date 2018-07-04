function twoCalculation(num) {
    const transNumStr = num.toString(2)
    //const countOne = transNumStr.match(/1/g)
    const oneArray = transNumStr.split('0')
    return Math.max(...oneArray).toString().length
}

module.exports = {
    twoCalculation
}
