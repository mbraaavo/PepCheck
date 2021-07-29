//This function is meant to create each pepper as an object

function pepper(pep_Name, nicknames, origin, sco_Min, sco_Max, heat, img) {
  this.pep_Name = pep_Name;
  this.nicknames = nicknames;
  this.origin = origin;
  this.sco_Min = sco_Min;
  this.sco_Max = sco_Max;
  this.heat = heat;
  this.img = img;
};

//This is the list of peppers created as objects and set to variables (they are in alphabetical order)

let pep01 = new pepper (
  "Anaheim",
  "California Chile, Magdalena, New Mexico Pepper, Chile Seco Del Norte",
  "New Mexico", 
  "500",
  "5000",
  "Mild",
  null
);

let pep02 = new pepper(
  "Bell Pepper",
  "Sweet Pepper, Capsicum, Pepper",
  "Mexico, Central America, and upper South America",
  "0",
  null,
  "Sweet",
  null
);

let pep03 = new pepper (
 "Habanero",
 "The Chinese Pepper, Caribbean Red, Chocolate Habanero",
 "The Amazonas Region",
 "100,000",
 "350,000",
 "HOT",
  null
);

let pep04 = new pepper (
  "Jalapeno",
  "Huachinango, Chile Gordo",
  "Xalapa, Veracruz",
  "3,500",
  "8,000",
  "Medium",
  null
);

let pep05 = new pepper (
  "Pepperoncini",
  "Peperone, Friggitello, Tuscan Pepper",
  "Italy and Greece",
  "0",
  "500",
  "Sweet",
  null
);

let pep06 = new pepper (
  "Poblano",
  "Chile Ancho",
  "Puebla, Mexico",
  "1,000",
  "2,500",
  "Mild",
  null
);

let pep07 = new pepper (
  "Serrano",
  null,
  "Sierra Mountain Range, Mexico",
  "10,000",
  "25,000",
  "Hot",
  null
);

console.log(pep07);
console.log(pep03);

//List of jquery event listeners for each button/anchor_tag and their functions for displaying their info

$("#pep01").click(function(){
  $("#pep_Name").append(pep01.pep_Name);
})

//This is the search function for the main search page! (Might want to convert to Jquery later :\)

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