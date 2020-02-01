// Map-1 -- mapBully
// Modify and return the given map as follows: if the key "a" has a value, set the key "b" 
// to have that value, and set the key "a" to have the value "". 
// Basically "b" is a bully, taking the value and replacing it 
// with the empty string.

// Examples

// Note that the displayed Map syntax has been simplified 
// for user readability, but would not actually create a 
// Map() properly.

// mapBully({'a': 'candy', 'b': 'dirt'}) → {'a': '', 'b': 'candy'}
// mapBully({'a': 'candy'}) → {'a': '', 'b': 'candy'}
// mapBully({'a': 'candy', 'b': 'carrot', 'c': 'meh'}) → {'a': '', 'b': 'candy', 'c': 'meh'}

const mapBully = (someMap) => {
    let keysArr = Object.keys(someMap);
    const aValue = '';
    let bValue = '';
    let aExists = 0;
    let bExists = 0;
    let bulliedMap = {}
    for (let i = 0; i < keysArr.length; i++) {
        if (keysArr[i] === "a") {
            aExists = 1;
        } else if (keysArr[i] === "b") {
            bExists = 1;
            bValue = someMap[a];
        }
    }
    if (aExists === 1 && bExists === 1) {
        bulliedMap = {
            "a" : aValue,
            "b" : bValue
        }
    }
    return bulliedMap
}