
console.log("3x3 Multiplication Table:\n");

for (let i = 1; i <= 3; i++) {
    let row = "";

    
    for (let j = 1; j <= 3; j++) {
        row += `${i} x ${j} = ${i * j} \t`; 
    }

    console.log(row);  
}
