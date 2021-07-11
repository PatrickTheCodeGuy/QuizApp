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
    
    console.log("passed value type", typeof(passedValue))
    if(typeof(passedValue) === 'string'){
        list.forEach((specialChar, index) => {
            console.log("obj: ", Object.entries(list))
            console.log("special char: ", specialChar)
            for(const [key, value] of Object.entries(specialChar)){
                console.log("passedValue: ", passedValue)
                console.log("value: ", value)
                console.log('key: ', key)
                questionStr !== '' ? questionStr = questionStr.replace(value, key) : questionStr = passedValue.replace(value, key);
                
            }
        })
        console.log("scrubbed str: ", questionStr)
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
   
