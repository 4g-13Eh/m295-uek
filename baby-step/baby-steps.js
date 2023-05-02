const arguments = process.argv.slice(2);

let sum = 0;
for (const argument of arguments){
    const num = parseFloat(argument);
    if (!isNaN(num)){
        sum += num;
    }
}

console.log(sum)