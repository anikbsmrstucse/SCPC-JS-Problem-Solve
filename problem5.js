function calculator(x,y,operator){
   if(operator == "+"){
    return x+y;
   }
   else if(operator == "-"){
    return x - y;
   }
   else if(operator == "*"){
    return x * y;
   }
   else{
    return x / y;
   }
}

const result = calculator(6,6,"+");
console.log(result);