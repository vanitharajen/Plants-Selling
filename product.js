var sidenav=document.getElementById("sidenav")
var menuicon=document.getElementById("menuicon")
var closenav=document.getElementById("closenav")
menuicon.addEventListener("click", function(){
    sidenav.style.right=0;
})
closenav.addEventListener("click",function(){
    sidenav.style.right="-50%";
})
// productsearch
var productcontainer=document.getElementById("productcontainer")
var search=document.getElementById("search")
var productlist=productcontainer.querySelectorAll("div")
search.addEventListener("keyup",function(){
    var enteredvalue=Event.target.value.toUpperCase()
    for(count=0;count<productlist.length;count=count+1){
        productname=productlist.querySelectorAll("h1").textcontent
        if(productname[count].toUpperCase.indexof(enteredvalue)<0){
productlist[count].style.display="none"
        }
        else{
            productlist[count].style.display="block"
        }
        }
    }
})
