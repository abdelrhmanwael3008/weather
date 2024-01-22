
async function getApi(Weather){
   let response =await fetch(`https://api.weatherapi.com/v1/forecast.json?key=93824416015f4b75901210944241301&q=${Weather}&days=3`)
  let finalresponse =await response.json()
  data1 = finalresponse.location;
    data2 = finalresponse.current;
    data6 = finalresponse.current.condition;
    data3 = finalresponse.forecast.forecastday;
    data4 = finalresponse.forecast.forecastday[0].day;
    data5 = finalresponse.forecast.forecastday[0].day.condition;
    data9 = finalresponse.forecast.forecastday[1].day;
    data7 = finalresponse.forecast.forecastday[1].day.condition;
    data8 = finalresponse.forecast.forecastday[2].day.condition;
    data10 = finalresponse.forecast.forecastday[2].day;
   displaydata()
}

getApi("Cairo")

data=[];
data2=[];
data3=[];
data4=[];
data5=[];
data6=[];
data7=[];
data8=[];




function displaydata(){
let data =`<div class="today forecast  ">
<div class="forecast-header d-flex justify-content-between  " id="today">
  <div class="day">${data4.avgtemp_c}</div>
  <div class=" date">${data3[0].date}</div>
</div> <!-- .forecast-header -->
<div class="  forecast-content   " id="current">
  <div class="location fa-2x">${data1.name}</div>
  <div class="degree ">
    <div class="num">${data4.maxtemp_c}<sup>o</sup>C</div>

    <div class="forecast-icon">
      <img src="${data5.icon}">
    </div>

  </div>
  <div class="custom mb-4 ">Clear</div>
  <span><img src="images/icon-umberella.png" alt=""> 20%</span>
  <span><img src="images/icon-wind.png" alt=""> 18km/h</span>
  <span><img src="images/icon-compass.png" alt=""> East</span>
</div>
</div>

<div class="forecast fbg ">
<div class="forecast-header">
  <div class="day">${data3[1].date}</div>
</div> <!-- .forecast-header -->
<div class="forecast-content fw-bold ">
  <div class="forecast-icon mb-2 ">
    <img src="${data7.icon}">
  </div>
  <div class="degree mb-4">${data9.maxtemp_c}<sup>o</sup>C</div>
  <small class="">${data9.mintemp_c}<sup>o</sup></small>
  <div class="custom ">Sunny</div>
</div>
</div>
<div class="forecast  ">
<div class="forecast-header">
  <div class="day">${data3[2].date}</div>
</div> <!-- .forecast-header -->
<div class="forecast-content fw-bold ">
  <div class="forecast-icon mb-2 ">
    <img src="${data8.icon}">
  </div>
  <div class="degree mb-4">${data10.maxtemp_c}<sup>o</sup>C</div>
  <small class="">${data9.mintemp_c}<sup>o</sup></small>
  <div class="custom ">Sunny</div>
</div>
</div>`



   
document.getElementById("myData").innerHTML=data; 
}

document.querySelector(".form-controlll").addEventListener("input" , function(){
  getSearch()
});
let searchh = document.getElementById("search");


function getSearch(){
  let dd = searchh.value;
  
  getApi(dd)
}