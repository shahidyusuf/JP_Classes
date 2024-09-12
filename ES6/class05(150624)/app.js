// let arrobj = [
//     {
//         p_id:1,
//         p_name:"Samsung A2",
//         p_img_src:"https://images.priceoye.pk/samsung-galaxy-a2-core-pakistan-priceoye-jgy1e.jpg"
//     },
//     {
//         p_id:2,
//         p_name:"infinix note 7",
//         p_img_src:"https://images.priceoye.pk/infinix-note-7-pakistan-priceoye-j870u.jpg"
//     },
//     {
//         p_id:3,
//         p_name:"realme c53",
//         p_img_src:'https://www.moosani.pk/images/product_gallery/1715602323_gold.webp'
//     },
//     {
//         p_id:4,
//         p_name:"iphone11",
//         p_img_src:"https://regen.pk/cdn/shop/files/REGEN-iPhone11-Backfront-Purple-Pakistan.png?v=1684752662"
//     },
//     {
//         p_id:5,
//         p_name:"qmobile",
//         p_img_src:"https://qmobile.com.pk/cdn/shop/files/Main-Image_0b3fbc87-845f-4f4c-a511-3309c4b6a9f9_1024x1024.png?v=1707292182"
//     }
// ];


// // for (var i=0; i<= arrobj.length; i++){
// //     console.log(arrobj[i])
// // }
// let arrNew = arrobj.map(function(v, i) {
//     return (v, i)
// })
// console.log(arrNew)


// Fetch Method;

// if u import API data so u used fetch method-comunication between interface
//4.curd operation:
// get,
// post,
// update,
// delete

// how many types of asyncrones ?
// 3 types of methods to Asynchronous..
//1.Call back, 2.Promise, 3. Async Await..

//Promises: pending, fulfilled, reject..

// let response = fetch()
// // .then((response)=> console.log("response===>", response))
// .then((response)=> response.json())

// let promise = new Promise((resolve, reject)=>{
//     console.log("promise call..")
// })

// fetch('https://jsonplaceholder.typicode.com/users')
//     //   .then((response) => console.log("res ==>", response))
//     .then((response) => response.json())
//     .then((response) => console.log("response ==>", response))
//       .catch((err)=> console.log("err ==>", reject(err)))

// let promise = new Promise((resolve, reject)=> {

// fetch('https://jsonplaceholder.typicode.com/users')
// .then((response)=>response.json())
// .then((response)=>{
//     resolve(response)
// })
// .catch((err)=> console.log("err==>", reject(err)))  
// })

// promise
// .then((res)=>console.log(res))
// .catch((err)=>console.log(err))
// practice assignment
// let arrobj = [
//     {
//         p_id:1,
//         p_name:"Samsung A2",
//         p_img_src:"https://images.priceoye.pk/samsung-galaxy-a2-core-pakistan-priceoye-jgy1e.jpg"
//     },
//     {
//         p_id:2,
//         p_name:"infinix note 7",
//         p_img_src:"https://images.priceoye.pk/infinix-note-7-pakistan-priceoye-j870u.jpg"
//     },
//     {
//         p_id:3,
//         p_name:"realme c53",
//         p_img_src:'https://www.moosani.pk/images/product_gallery/1715602323_gold.webp'
//     },
//     {
//         p_id:4,
//         p_name:"iphone11",
//         p_img_src:"https://regen.pk/cdn/shop/files/REGEN-iPhone11-Backfront-Purple-Pakistan.png?v=1684752662"
//     },
//     {
//         p_id:5,
//         p_name:"qmobile",
//         p_img_src:"https://qmobile.com.pk/cdn/shop/files/Main-Image_0b3fbc87-845f-4f4c-a511-3309c4b6a9f9_1024x1024.png?v=1707292182"
//     }
// ];
// arrobj.map((e)=>{
//     let div = document.getElementById('box')
//     div.innerHTML += `<div class="card" style="width: 18rem;">
//   <img src=${e.p_img_src} class="card-img-top" alt="...">
//   <div class="card-body">
//     <p class="card-text">${e.p_name}.</p>
//   </div>
// </div>
//     `
// })

// const data = async ()=>{
//    await fetch('https://jsonplaceholder.typicode.com/users')
// .then((response)=>response.json())
// .then((response)=>{
//     resolve(response)
// })
// .catch((err)=> console.log("err==>", reject(err)))  
// })
// data()

// News Application

let div = document.getElementById('box');
let input = document.getElementById('userValue');

const getUserVal =()=>{
    
    fetch(`https://newsapi.org/v2/everything?q=tesla&from=2024-05-20&sortBy=publishedAt&apiKey=0702afe7b5f645218f5525e99f256205)  
    .then((response)=>response.json())
    
    .then((response)=>{
        for(var i = 0;i<response.articles.length;i++){
            console.log(response.articles[i])
            div.innerHTML += `<div class="card" style="width: 18rem;">
            <img src=${response.articles[i].urlToImage} class="card-img-top" alt="...">
            <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
            </div>`
        }
    })

    .catch((err)=>console.log(err))
}
