function maxNumber(a, b, c) {
    if (a>b && a>c) {
        console.log('a big number');
    } 
    else if (b>a && b>c) {
        console.log('b is big');
    }
    else{
        console.log('c is big');
    }

    return a+b+c;
}

let numbers = maxNumber(745, 556, 78);
// console.log('all numbers' + numbers);
