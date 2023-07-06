let reversed = text =>{
    let reversedText = '';
    for(let i = text.length -1; i >= 0; i-- ){
        let element = text[i]
        // console.log(element);
        reversedText = reversedText + element
    }

    return reversedText;
}

const myText = 'i am a good boy';
const result = reversed(myText);
console.log(myText, ': Reversed test is : ', result);