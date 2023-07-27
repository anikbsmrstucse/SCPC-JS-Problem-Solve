
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