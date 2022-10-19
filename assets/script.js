 /*  
  

*/
var map = L.map('map').setView([39.952583,-75.165222], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 15,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
   }).addTo(map);
// L.marker([39.924827,-75.172945]).addTo(map);
// L.marker([39.919390, -75.165419]).addTo(map);


var todayslocation;

var mondaybutton=document.querySelector("#monday")
   mondaybutton.addEventListener("click", function(){
   todayslocation=mondaybutton.innerHTML
   console.log(todayslocation)
   L.marker([39.924827,-75.172945]).addTo(map);
})

var tuesdaybutton=document.querySelector("#tuesday")
tuesdaybutton.addEventListener("click", function(){
   todayslocation=tuesdaybutton.innerHTML
   console.log(todayslocation)
   L.marker([39.919390, -75.165419]).addTo(map);
})