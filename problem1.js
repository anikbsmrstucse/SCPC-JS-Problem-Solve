// Create a function that takes a string as input and returns the reversed version of the string without using the built-in reverse() method. 


function reverseFunction(data){
    let dataLower = data.toLowerCase(data);
    let reversed = ""
    for(let i = (dataLower.length-1); i >= 0; i--){
        const element = dataLower[i];
        reversed += element;
        
    }

    return reversed;
}

const inputString = "hello world";
const result = reverseFunction(inputString);
console.log(result);