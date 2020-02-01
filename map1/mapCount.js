myMap = {
    'a': 'aaa', 
    'b': 'bb', 
    'c': 'cake'
}

const mapCount = (someMap) => {
    let keysArr = Object.keys(someMap);
    console.log(keysArr)
    let counter = 0;
    for (let i = 0; i < keysArr.length; i++) {
      if (keysArr[i] === "a" || keysArr[i] === "b" || keysArr[i] === "c") {
        counter += 1;
      }
    }
    return counter;
}

console.log(mapCount(myMap))