export function replaceSpecialCharacters(passedValue)  {
    let questionStr = '';

    var list = [
        {'\"': /&quot;/},
        {'"': /&rdquo;/},
        {'"': /&ldquo;/},
        {'\'': /&#039;/},
        {'\'': /&apos;/},
        {'&': /&amp;/},
        {'<': /&lt;/},
        {'>': /&gt;/},
        {'¡': /&iexcl;/},
        {'¢': /&cent;/},
        {'£': /&pound;/},
        {'¤': /&curren;/},
        {'¥': /&yen;/},
        {'¦': /&brvbar;/}
    ]

    if(typeof(passedValue) === 'string'){
        list.forEach((specialChar, index) => {
            for(const [key, value] of Object.entries(specialChar)){
                questionStr = passedValue.replace(value, key);
            }
            
        })
        return questionStr;
    }
    else if(typeof(passedValue) === 'object'){
        console.log("passed value: ", passedValue)
        for(let i =0; i<passedValue.length; i++){
            list.forEach((specialChar, index) => {
                console.log("index: ", index)
                console.log("specialChar", specialChar);
                console.log("array string: ", passedValue[i])
                for(const [key, value] of Object.entries(specialChar)){
                    passedValue[i] = passedValue[i].replace(value, key);
                }
                
            })
        }
        console.log("passed Value scrubbed: ", passedValue)
        return passedValue;
    }
}
   
