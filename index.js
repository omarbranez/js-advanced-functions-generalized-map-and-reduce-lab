// Add your functions here
function map(source, callbackFunction) {
    const newArray = [] // not "let"
    for (const el of source) {
        newArray.push(callbackFunction(el))
    }
    return newArray
}

function reduce(source, callbackFunction, startingPoint) {
    let total // it's an integer, not an array nor an object
    if (startingPoint) {
        total = startingPoint
        for (const el of source) {
            total = callbackFunction(el, total)
        }
        return total
    } else {
        total = source[0]
        source.shift() // get rid of the first element, it's been used
        for (const el of source) {
            total = callbackFunction(el, total)
        }
        return total
    }
}