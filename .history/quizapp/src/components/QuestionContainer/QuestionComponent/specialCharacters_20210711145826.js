/**
 * Strips and replaces words that have special characters e.x. `&quot;`
 * @param {string} data Either a String or an Array of Strings.
 * @return {string} The scrubbed String OR array of Strings.
 */
export function replaceSpecialCharacters(passedValue)  {
    let questionStr = '';

    var list = [
        {'\"': /&quot;/g},
        {'"': /&rdquo;/g},
        {'"': /&ldquo;/g},
        {'\'': /&#039;/g},
        {'\'': /&apos;/g},
        {'&': /&amp;/g},
        {'<': /&lt;/g},
        {'>': /&gt;/g},
        {'¡': /&iexcl;/g},
        {'¢': /&cent;/g},
        {'£': /&pound;/g},
        {'¤': /&curren;/g},
        {'¥': /&yen;/g},
        {'¦': /&brvbar;/g}
    ]
    if(typeof(passedValue) === 'string'){
        list.forEach((specialChar, index) => {
            for(const [key, value] of Object.entries(specialChar)){
                questionStr !== '' ? questionStr = questionStr.replace(value, key) : questionStr = passedValue.replace(value, key);
            }
        })
        return questionStr;
    }
    else if(typeof(passedValue) === 'object'){
        for(let i =0; i<passedValue.length; i++){
            list.forEach((specialChar, index) => {
                for(const [key, value] of Object.entries(specialChar)){
                    passedValue[i] = passedValue[i].replace(value, key);
                }
                
            })
        }
        return passedValue;
    }
}

// 
/**
 * Basic shuffle function for an array.
 * @param {array} array an array of anything.
 * @return {array} A shuffled array.
 */
 export function shuffleArray(array)  {
    for (let i = array.length - 1; i > 0; i--) {
        let randomIndex = Math.floor(Math.random() * (i + 1));
        let temp = array[i];
        array[i] = array[randomIndex];
        array[randomIndex] = temp;
    }
    return array;
}

   
