// let arr1 = ["Shahid","Yusuf"];
// // let arr2 = ["Imran","Yusuf"];

// let arr2 = arr1
// // arr2 = ["Imran", "Yusuf"];
// let merge = [...arr1];
// arr2[2] = "Imran";
// console.log(merge,arr2)

let obj = {
    sName : "Shahid",
    fName : "Yusuf"
};
let obj1 = {
    sName : "Imran",
    fName : "Yusuf"
}

let merge = {...obj,...obj1};
obj1.education =  "it"

console.log(merge, obj1);