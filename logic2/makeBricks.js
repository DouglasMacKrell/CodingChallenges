

const makeBricks = (small, big, goal) => {
    if (small + (big * 5) >= goal) {
        return true
    } else {
        return false
    }
}