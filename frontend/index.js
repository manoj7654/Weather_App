// const { query } = require("express");
let token=localStorage.getItem("token");
if(token){
  let btn = document.querySelector("#btn");
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    let location = document.getElementById("location").value;
  
    getData(location);
  });
  let bag = [];
  async function getData(location) {
    try {
      const result = await fetch(
        `https://lavender-pelican-toga.cyclic.app/weathers/location/?q=${location}`
      );
  
      const res = await result.json();
      // console.log(data)
      // console.log(res);
      renderData(res);
    } catch (error) {
      console.log(error);
    }
  }
}else{
  alert("Please Login first")
  window.location.href="./signin.html"
}


// getData()
 function renderData(res) {

  let render = document.querySelector(".render");
  render.innerHTML = "";

  render.innerHTML = `
   <div class="render1">
   <h1>${res.name}</h1>
   <div class="ren">
     <div id="desc">
      <h2>${(res.main.temp - 273.15).toFixed(2)}°C</h2>
       <p>Humidity:${res.main.humidity}%</p>
        <p>Wind:${res.wind.speed}k/h</p>
        <p> Wind Direction:${res.wind.deg}</p>
   </div>
   <div id="image">
      <img src="https://openweathermap.org/img/wn/${res.weather[0].icon}.png"/>
   </div>
   </div>
   <button id="save">SAVE</button>
   </div>
   `;

  console.log(res);
  let btn=document.getElementById("save");
 
 
btn.addEventListener("click",()=>{
  let obj={
    location:res.name,
    temp:res.main.temp,
    humidity:res.main.humidity,
    speed:res.wind.speed
  }
  // console.log(obj)
  saveData(obj)
  async function saveData(obj){
    try {
      const result=await fetch("https://lavender-pelican-toga.cyclic.app/weathers/save",{
        method:"POST",
        headers:{
          "Content-Type":"application/json",
          "Authorization":token
        },
        body:JSON.stringify(obj)
      })
      if(result.ok){
        alert("History has been saved")
      }
    } catch (error) {
      console.log("Something went wrong while saving data")
    }
  }
 
})
}

