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
    
    console.log("passed value type", typeof(passedValue))
    if(typeof(passedValue) === 'string'){
        list.forEach((specialChar, index) => {
            console.log("obj: ", Object.entries(list))
            console.log("special char: ", specialChar)
            for(const [key, value] of Object.entries(specialChar)){
                console.log("questionStr: ", passedValue)
                console.log("value: ", value)
                console.log('key: ', key)
                passedValue = passedValue.replace(value, key);
            }
        })
        console.log("scrubbed str: ", questionStr)
        return passedValue;
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
   
