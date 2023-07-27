//Task 2 : Create a function that takes an array of numbers as input and returns the sum of all positive numbers in the array. 


function sumPostiveNumber(data){
    let sumNumber = 0;
    for(let i = 0; i < data.length; i++){
        let element = data[i];
        if(element > 0){
            sumNumber += element;
        }
    }
    return sumNumber;
}

const inputString = [2, -5, 10, -3, 7];
const result = sumPostiveNumber(inputString);
console.log(result);