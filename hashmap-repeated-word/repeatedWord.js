'use strict'
function repeatedWord(inString){
    const arr=inString.toLowerCase().split(/\W+/g);
    return arr.find( (word,index) =>
      arr.slice(0,index).includes(word)
    );
  }

module.exports = repeatedWord