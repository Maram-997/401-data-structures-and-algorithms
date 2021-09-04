'use strict';


// return boolean => representing whether or not the brackets in the string are balanced
validateBrackets = (string) => {
    let openBracket = [];
    let closeBracket = [];
    const array = string.split('');
    array.filter((element, idx) => {
        if (element == '(' || element == '{' || element == '[') {
            openBracket.push(element)
        } else if (element == ')' || element == '}' || element == ']') {
            closeBracket.push(element)
        }
    })

    if(openBracket.length == closeBracket.length){
        return true;
    }else{
        return false;
    }
}