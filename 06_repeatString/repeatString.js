const repeatString = function(word, times) {
    if (times < 0) {
        return "ERROR";
    }
    let new_word = ""
    for(let i =0; i<times; i++){
        new_word+=word;
    }
    return new_word;
};

// Do not edit below this line
module.exports = repeatString;
