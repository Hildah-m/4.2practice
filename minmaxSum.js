function getMinMaxSum(numbers){
    const[min,...rest] = numbers.sort((a,b) => a -b);
    const max = rest.pop();
    const sum = numbers.reduce((acc, num) => acc + num, 0);

    return {min,max,sum};
}

const numbers = [1,2,3,4,5];
const result = getMinMaxSum(numbers);

console.log(result);