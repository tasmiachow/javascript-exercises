const reverseString = function(word) {
    let new_word ="";
    let arr = word.split("");
    let reverseArr = arr.reverse()
    for(let i=0; i<reverseArr.length; i++){
        new_word+=reverseArr[i]
    }
    return new_word
};

// Do not edit below this line
module.exports = reverseString;
