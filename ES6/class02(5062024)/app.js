// Ternary Operator

// let age = +prompt("Enter Your Age");
// let gender = prompt("Enter Your Gender Male/Female");

// let check = age >= 18 ? gender === "Male" 
// ? console.log("allowed") : console.log("not allowed") : console.log("Age Not Match") 


// let check = age >= 18 ? gender !== "Female" 
// ? "allowed" : "not allowed" : "Age Not Match";

// console.log(check);
// let result = +prompt("Enter your number");
// if (result >= 40 && result <= 50){
//     console.log(`Grade A`)
// } else if (result >= 60 && result<= 70) {
//     console.log("Grade A+")
// } 

// let check = result >= 40 && result <= 50 ? "Grade A" : result >= 60 && result<= 70 ? "Grade A+": "Fail"
// console.log("check");

// let exp = true + 2 && undefined && "allowed";
// console.log(exp)
// let exp = true + 2 &&(10*2)*false ||"allowed";

//  console.log(exp)\\

// let exp = (true + 2) * true || null || " " && "faraz";
// // let exp = (true + 2) * true || null || " " && "faraz";
// console.log(exp)\\

// let exp =2 || true
// console.log(exp)

let obj = {
    name : "Shahid",
    city : "Karachi",
    email : "shd@gmail.com",
}

let {name, city,  email } = obj

console.log(`${name} 
${city}`)