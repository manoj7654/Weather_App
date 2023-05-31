// const { query } = require("express");

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
      `http://localhost:4500/weathers/location/?q=${location}`
    );

    const res = await result.json();
    // console.log(data)
    console.log(res);
    renderData(res);
  } catch (error) {
    console.log(error);
  }
}

// getData()
function renderData(res) {
  let render = document.querySelector(".render");
  render.innerHTML = "";

  render.innerHTML = `
   <div class="render">
   <h1>${res.name}</h1>
   <div class="ren">
   <div>
   <h2>${(res.main.temp - 273.15).toFixed(2)}°C</h2>
   <p>Humidity:${res.main.humidity}%</p>
   <p>Wind:${res.wind.speed}k/h</p>
   </div>
   <div id="image">
   <img src="https://cdn3d.iconscout.com/3d/premium/thumb/weather-3260422-2725115.png"/>
   </div>
   </div>
   </div>
   `;

  console.log(res);
}
