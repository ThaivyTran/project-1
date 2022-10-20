var map = L.map('map').setView([39.931675, -75.168120], 12);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 15,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
   }).addTo(map);

   
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

var wednesdaybutton=document.querySelector("#wednesday")
   wednesdaybutton.addEventListener("click", function(){
   todayslocation=wednesdaybutton.innerHTML
   console.log(todayslocation)
   L.marker([39.946824, -75.153572]).addTo(map);
})

   var thursdaybutton=document.querySelector("#thursday")
   thursdaybutton.addEventListener("click", function(){
   todayslocation=thursdaybutton.innerHTML
   console.log(todayslocation)
   L.marker([39.967285, -75.172344]).addTo(map);
})

var fridaybutton=document.querySelector("#friday")
fridaybutton.addEventListener("click", function(){
todayslocation=fridaybutton.innerHTML
console.log(todayslocation)
L.marker([39.961367, -75.159407]).addTo(map);
})

var saturdaybutton=document.querySelector("#saturday")
saturdaybutton.addEventListener("click", function(){
todayslocation=saturdaybutton.innerHTML
console.log(todayslocation)
L.marker([39.957194, -75.170760]).addTo(map);
})

var sundayybutton=document.querySelector("#sunday")
sundayybutton.addEventListener("click", function(){
todayslocation=sundayybutton.innerHTML
console.log(todayslocation)
L.marker([39.953615, -75.192071]).addTo(map);
})