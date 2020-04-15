// Given a non-empty array, return true if there is a place 
// to split the array so that the sum of the numbers on one 
// side is equal to the sum of the numbers on the other side.

// Examples

// canBalance([1, 1, 1, 2, 1]) → true
// canBalance([2, 1, 1, 2, 1]) → false
// canBalance([10, 10]) → true

input1 = [1, 1, 1, 2, 1]
input2 = [2, 1, 1, 2, 1]
input3 = [10, 10]

const canBalance = (arr) => {
    let forwardAcc = arr[0]
    let reverseAcc = arr[arr.length - 1]
    for(let i = 0; i < arr.length; i++){
        if (forwardAcc === reverseAcc) {
            return true
        } else {
            forwardAcc += arr[i + 1]
            for(let j = arr.length; j >= 0; j--) {
                if (forwardAcc === reverseAcc) {
                    return true
                } else {
                    reverseAcc += arr[j - 1]
                }
            }
        }
    }
    return false
}

console.log(canBalance(input1))
console.log(canBalance(input2))
console.log(canBalance(input3))
