let mapContainer=document.getElementById("map");
function displayMap(params={
   q:"India",
}){
   mapContainer.innerHTML=`<iframe
   style="border:0;width:100vw; height:100vh"
   loading="lazy"
   allowfullscreen
   referrerpolicy="no-referrer-when-downgrade"
   src="https://www.google.com/maps/embed/v1/place?key=AIzaSyCV-im_l-AEXmGhpSytEhqMOf2Gy6dB80g
   ${checkParams(params)}
     ">
 </iframe>`;
}
function checkParams(params){
 let str=``;
 for(let key in params){
    str=str+"&"+key+"="+params[key];
 }
 return str;
}
displayMap();