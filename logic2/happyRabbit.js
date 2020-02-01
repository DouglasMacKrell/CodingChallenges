// Hungry Rabbit
// A very hungry rabbit is placed in the center of of a garden, represented by a rectangular N x M 2D matrix.

// The values of the matrix will represent numbers of carrots available to the rabbit in each square of the garden. If the garden does not have an exact center, the rabbit should start in the square closest to the center with the highest carrot count.

// On a given turn, the rabbit will eat the carrots available on the square that it is on, and then move up, down, left, or right, choosing the square that has the most carrots. If there are no carrots left on any of the adjacent squares, the rabbit will go to sleep. You may assume that the rabbit will never have to choose between two squares with the same number of carrots.

// Write a function which takes a garden matrix and returns the number of carrots the rabbit eats. You may assume the matrix is rectangular with at least 1 row and 1 column, and that it is populated with non-negative integers. For example,

myMatrix = [[5, 7, 8, 6, 3],
 [0, 0, 7, 0, 4],
 [4, 6, 3, 4, 9],
 [3, 1, 0, 5, 8]]
// Should return

// 27



const feedTheRabbit = (inputMatrix) => {
    let carrotMap = []
    let carrotRow = {}
    let numberOfRows = inputMatrix.length
    let largestCarrotInRow = 0
    for (let row = 0; row < inputMatrix.length; row++) {
        for (let i = 0; i < inputMatrix[row].length; i++) {
            carrotRow = {
                [i] : inputMatrix[row][i],
                'row' : [row]
            }
            carrotMap.push(carrotRow)
        }
    }
    if (numberOfRows % 2 === 1) {
        for (let i = 0; i < carrotMap.length; i++) {
            if (carrotMap[i][row] === Math.ceil(numberOfRows / 2)) {
                let findLargestCarrot = Object.values(carrotMap[i])
                for (let i = 0; i < findLargestCarrot.length; i++) {
                    if (findLargestCarrot[i] > largestCarrotInRow) {
                        largestCarrotInRow = findLargestCarrot[i]
                    }
                }
            }
        }
    }
}

feedTheRabbit(myMatrix)