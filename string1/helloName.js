// String-1 -- helloName
// Given a string name, e.g. "Bob", return a greeting of the 
// form "Hello Bob!".

// Examples

// helloName('Bob') → Hello Bob!
// helloName('Alice') → Hello Alice!
// helloName('X') → Hello X!

const helloName = (name) => {
    return `Hello ${name}`
}

console.log(helloName('Bob'))
console.log(helloName('Alice'))
console.log(helloName('X'))