function minNumber(a, b, c) {
    if (a < b && a < c) {
        console.log('a small number');
    } 
    else if (b<a && b<c) {
        console.log('b is small');
    }
    else{
        console.log('c is small');
    }

    return a+b+c;
}

let numbers = minNumber(45, 56, 78);
// console.log('all numbers' + numbers);
