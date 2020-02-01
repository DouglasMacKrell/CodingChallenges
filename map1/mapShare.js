// Map-1 -- mapShare
// Modify and return the given map as follows: if the key "a" 
// has a value, set the key "b" to have that same value. 
// In all cases remove the key "c", leaving the rest of the 
// map unchanged.

// Examples

// Note that the displayed Map syntax has been simplified for 
// user readability, but would not actually create a Map() 
// properly.

// mapShare({'a': 'aaa', 'b': 'bbb', 'c': 'ccc'}) → {'a': 'aaa', 'b': 'aaa'}
// mapShare({'b': 'xyz', 'c': 'ccc'}) → {'b': 'xyz'}
// mapShare({'a': 'aaa', 'c': 'meh', 'd': 'hi'}) → {'a': 'aaa', 'd': 'hi', 'b': 'aaa'}

const mapShare = (someMap) => {
    let keysArr = Object.keys(someMap);
}

