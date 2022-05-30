// Add the coffee to local storage with key "coffee"

//https://masai-mock-api.herokuapp.com/coffee/menu


// function get data(){
//     let name = document.getElementById("name").value
const url = `https://masai-mock-api.herokuapp.com/coffee/menu`


fetch(url).then(function (res){
     return res.json()
 })
 .then(function(res){
     console.log(res.menu.data)
      appendData(res.menu.data)
   
 })
 .catch(function(err){
     console.log(err);
 })

let coffeData = JSON.parse(localStorage.getItem("coffee")) || [];

function appendData(data){
    data.map(function(el){
  let div = document.createElement("div");

  let image = document.createElement("img")
  image.src = el.image

    let title = document.createElement("h3");
    title.innerText = el.title;

    let price = document.createElement("h3");
    price.innerText = el.price

    let btn = document.createElement("button");
    btn.innerText = "add to bucket";
    btn.addEventListener("click", function(){
        addToBucket(el);
    });

    div.append(image,title, price, btn);

    document.getElementById("menu").append(div)
    });
    
}



function addToBucket(el){
    coffeData.push(el)
    localStorage.setItem("coffee",JSON.stringify(coffeData))
    window.location.reload();
}
if(coffeData.length == null){
    document.getElementById("coffee_count").innerHTML = 0;

}else{
    document.getElementById("coffee_count").innerHTML - (coffeData.length);
}