// this is my function that sums two numbers
const sum = (a,b) => {
    return a + b
}

// just a console log for ourselves.
console.log(sum(7,3))

const fromEuroToDollar = (euro) => {
    return euro * 1.2;
}

const fromDollarToYen = (dolar) => {
    return dolar * 147.78
} 

const fromYenToPound = (yen) => {
    return yen * 0.0055
} 

// export the function to be used on other files 
// (similar to the keyword `export` when using webpack)
module.exports = { sum , fromEuroToDollar, fromDollarToYen, fromYenToPound };