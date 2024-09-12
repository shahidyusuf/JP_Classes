let form = document.getElementById("myForm");

form.addEventListener("submit", function(e){
    e.preventDefault();

    let search = document.getElementById("search").value;
    // console.log(search);
    let originalName = search.split(' ').join('');

    // console.log(originalName);

    document.getElementById("result").innerHTML ="";

    fetch("https://api.github.com/users/" + originalName)
    .then((result) => result.json())
    .then((data) => {
        console.log(data);

        document.getElementById("result").innerHTML = `
        <a target="_blank" href ="https://www.github.com/${originalName}">
         <img src = "${data.avatar_url}" /></a>
        `;
    })


})
//https://www.youtube.com/watch?v=OEyZx0KttgY