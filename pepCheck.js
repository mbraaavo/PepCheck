document.getElementById("myInput").addEventListener(onkeyup, search_Function);

function search_Function(){

var input= document.getElementById("myInput");
var filter = input.value.toUpperCase();
var ul = document.getElementById("myUL");
var li = ul.getElementsByTagName('li');
var a = '';
var i = '';
var txtValue = ''; 

if(input.value.length == 0){
  ul.style.display = "none";
  return;
}else{
  ul.style.display = "flex";
}

for (i = 0; i < li.length; i++) {
   a = li[i].getElementsByTagName("a")[0];
   txtValue = a.textContent || a.innerText;
 
   if (txtValue.toUpperCase().indexOf(filter) > -1) {
     li[i].style.display = "block";
   }
    else{
     li[i].style.display = "none";
   };
}
}


fetch("./peppers.json")
.then(response => {
   return response.json();
})
.then(data => console.log(data));

