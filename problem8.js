function secondSmallest(numbers){
    let smallest = numbers[0];
    for(let i = 0; i < numbers.length; i++){
        const element = numbers[i];
        if(element < smallest){
            smallest = element;
            
        }

    }
    let secondlarge = numbers[0];
    for(let i = 0; i < numbers.length; i++){
        const element = numbers[i]
        if(element > smallest && element < secondlarge ){
            secondlarge = element
        
        }
    }
    return secondlarge;
}

const number = [70,20,80,60,100,50,90];
const result = secondSmallest(number);
console.log(result);