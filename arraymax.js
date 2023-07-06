let maxArray = numbers =>{
    let largest = numbers[0];
    for (let i = 0; i < numbers.length; i++) {
        let index = i;
        // console.log(index);
        let element = numbers[index]
        // console.log(element);
        if(element > largest){
            largest = element
        }
        
    }
    return largest;
}

let array = [12, 136, 233, 56, 96];
let max = maxArray(array);
console.log(max);