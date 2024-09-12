// Templete Literal

let table = +prompt("Enter your number of table");
let tableRange = +prompt("Enter your number of table Range");

for(i = 1; i <= tableRange; i++){
    document.write(`${table} x ${i} = ${table * i}<br>`)
    
}