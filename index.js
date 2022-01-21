// Write your solution in this file!
var customerName = `bob`
const leastFavoriteCustomer = `Bob will NEVER be the least favorite customer`

function upperCaseCustomerName() {
    customerName = customerName.toUpperCase();
    console.log(customerName)
}
//upperCaseCustomerName() //BOB

function setBestCustomer() {
    bestCustomer = `not bob`
    console.log(bestCustomer)
}
//setBestCustomer() //=> not bob

function overwriteBestCustomer() {
  bestCustomer =`maybe bob`
  console.log(bestCustomer)
}
//overwriteBestCustomer() //ACTUALLY, BOB IS THE BEST
function changeLeastFavoriteCustomer() {
    leastFavoriteCustomer = `[IRRELEVANT OPINION] Bob is the least favorite [/IRRELEVANT OPINION]`
    console.log(leastFavoriteCustomer)
}
//changeLeastFavoriteCustomer() //TypeError: Assignment to constant variable