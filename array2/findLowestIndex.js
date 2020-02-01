

const findLowestIndex = (nums) => {
    let lowest = Infinity
    let capturedIndex = 0
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] < lowest) {
            lowest = nums[i]
            capturedIndex = i
        }
    }
    return capturedIndex
}