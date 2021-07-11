export function replaceSpecialCharacters(passedValue)  {

    var list = [
        {'\"': /&quot;/g},
        {'"': /&rdquo;/},
        {'"': /&ldquo;/},
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

    console.log("type of: ", typeof(passedValue))

    // if(typeof(passedValue) === String){

    // }
    // if(typeof(passedValue) === Array){

    // }

    

    const keysArray = Object.keys(list);

    

    list.forEach((specialChar, index) => {
        console.log("index: ", index)
        console.log("specialChar", specialChar);
        for(const [key, value] of Object.entries(specialChar)){
            questionStr = passedValue.replace(value, key);
        }
        
    })

    console.log("string scrubbed: ", questionStr)

    
    
    // Array of special code objects to loop through and covert.
    
        // ['§', /&sect;/g],
        // ['¨', /&uml;/g],
        // ['©', /&copy;/g],
        // ['ª', /&ordf;/g],
        // ['«', /&laquo;/g],
        // ['¬', /&not;/g],
        // ['­', /&shy;/g],
        // ['®', /&reg;/g],
        // ['¯', /&macr;/g],
        // ['°', /&deg;/g],
        // ['±', /&plusmn;/g],
        // ['²', /&sup2;/g],
        // ['³', /&sup3;/g],
        // ['´', /&acute;/g],
        // ['µ', /&micro;/g],
        // ['¶', /&para;/g],
        // ['·', /&middot;/g],
        // ['¸', /&cedil;/g],
        // ['¹', /&sup1;/g],
        // ['º', /&ordm;/g],
        // ['»', /&raquo;/g],
        // ['¼', /&frac14;/g],
        // ['½', /&frac12;/g],
        // ['¾', /&frac34;/g],
        // ['¿', /&iquest;/g],
        // ['×', /&times;/g],
        // ['÷', /&divide;/g],
        // ['À', /&Agrave;/g],
        // ['Á', /&Aacute;/g],
        // ['Â', /&Acirc;/g],
        // ['Ã', /&Atilde;/g],
        // ['Ä', /&Auml;/g],
        // ['Å', /&Aring;/g],
        // ['Æ', /&AElig;/g],
        // ['Ç', /&Ccedil;/g],
        // ['È', /&Egrave;/g],
        // ['É', /&Eacute;/g],
        // ['Ê', /&Ecirc;/g],
        // ['Ë', /&Euml;/g],
        // ['Ì', /&Igrave;/g],
        // ['Í', /&Iacute;/g],
        // ['Î', /&Icirc;/g],
        // ['Ï', /&Iuml;/g],
        // ['Ð', /&ETH;/g],
        // ['Ñ', /&Ntilde;/g],
        // ['Ò', /&Ograve;/g],
        // ['Ó', /&Oacute;/g],
        // ['Ô', /&Ocirc;/g],
        // ['Õ', /&Otilde;/g],
        // ['Ö', /&Ouml;/g],
        // ['Ø', /&Oslash;/g],
        // ['Ù', /&Ugrave;/g],
        // ['Ú', /&Uacute;/g],
        // ['Û', /&Ucirc;/g],
        // ['Ü', /&Uuml;/g],
        // ['Ý', /&Yacute;/g],
        // ['Þ', /&THORN;/g],
        // ['ß', /&szlig;/g],
        // ['à', /&agrave;/g],
        // ['á', /&aacute;/g],
        // ['â', /&acirc;/g],
        // ['ã', /&atilde;/g],
        // ['ä', /&auml;/g],
        // ['å', /&aring;/g],
        // ['æ', /&aelig;/g],
        // ['ç', /&ccedil;/g],
        // ['è', /&egrave;/g],
        // ['é', /&eacute;/g],
        // ['ê', /&ecirc;/g],
        // ['ë', /&euml;/g],
        // ['ì', /&igrave;/g],
        // ['í', /&iacute;/g],
        // ['î', /&icirc;/g],
        // ['ï', /&iuml;/g],
        // ['ð', /&eth;/g],
        // ['ñ', /&ntilde;/g],
        // ['ò', /&ograve;/g],
        // ['ó', /&oacute;/g],
        // ['ô', /&ocirc;/g],
        // ['õ', /&otilde;/g],
        // ['ö', /&ouml;/g],
        // ['ø', /&oslash;/g],
        // ['ù', /&ugrave;/g],
        // ['ú', /&uacute;/g],
        // ['û', /&ucirc;/g],
        // ['ü', /&uuml;/g],
        // ['ý', /&yacute;/g],
        // ['þ', /&thorn;/g],
        // ['ÿ', /&yuml;/g]];
    
    return questionStr;
}
   
