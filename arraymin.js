let minArray = numbers =>{
    let minimum = numbers[0]
    for (let i = 0; i < numbers.length; i++) {
        const index = i;
        let element = numbers[index]
        console.log(element);
        if (element < minimum){
            minimum = element
        }
    }
    return minimum;
}

let array = [30, 32, 52, 75, 98, 12, 11, 32 ,41, 1];
let min = minArray(array);
console.log('Minimum number is = ',min);