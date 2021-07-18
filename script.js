const searchBtn = document.getElementById("searchBtn");
searchBtn.addEventListener("click", showData)

function showData() {
   const cityName = document.getElementById("inputField").value;
   const api = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=de9fca4c28fcfa367fb01b6cc7abd9d2`;

   fetch(api)
   .then(res => res.json())
   .then(data => {
      // const city = data.name;
      const temp = data.main.temp;
      const weather = data.weather[0].main;
      const icon = data.weather[0].icon;

      const celciusTemp = Math.round(temp - 273.15);

      // document.getElementById("city").innerText = city;
      document.getElementById("temp").innerText = celciusTemp;
      document.getElementById("weather").innerText = weather;
      document.getElementById("icon").setAttribute("src", `http://openweathermap.org/img/wn/${icon}@4x.png`);
   })
   .catch(err => console.log(err))
}

document.getElementById("inputField").addEventListener("keypress", function(event) {
   if (event.key === "Enter") {
      document.getElementById("searchBtn").click();
   }
})