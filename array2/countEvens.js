

const countEvens = (nums) => {
    let counter = 0
    for (let number of nums) {
        if (number % 2 === 0) {
            counter += 1
        }
    }
    return counter
}