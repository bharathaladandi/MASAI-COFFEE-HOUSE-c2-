// On clicking remove button the item should be removed from DOM as well as localstorage.



let coffeData = JSON.parse(localStorage.getItem("coffee")) || [];
window.addEventListener("load",function (){
    appendData(coffeData);
})

const bucket = document.getElementById("bucket");

function appendData(data){
   
        var total=0;
        document.querySelector("#bucket").innerText = "";
        data.map(function(el,i){
    let div = document.createElement("div");

    let image = document.createElement("img")
    image.src = el.image

        let title = document.createElement("h3");
        title.innerText = el.title;

        let price = document.createElement("h3");
        price.innerText = el.price

        var btn=document.createElement("button");
             btn.innerText="Remove From Cart";
             btn.addEventListener("click",function (){
               removeFun(el,i);
             });

        div.append(image,title, price, btn);

        
        document.querySelector("#bucket").append(div);
        
    });
    
    document.querySelector("h3").innerText=" Total Amount is :- "+total;
}

function removeFun(elem,index){
    coffeData.splice(index,1);
    localStorage.setItem("coffee",JSON.stringify(coffeData));
    window.location.reload();
}