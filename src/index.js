function updateTime() {
  // New York
  let NYElement = document.querySelector("#newyork");
  if (NYElement) {
    let NYDateElement = NYElement.querySelector(".date");
    let NYTimeElement = NYElement.querySelector(".time");
    let NYTime = moment().tz("America/New_York");
    NYDateElement.innerHTML = NYTime.format("MMMM Do, YYYY");
    NYTimeElement.innerHTML = NYTime.format("h:mm:ss [<small>]A[</small>]");
  }

  // Paris
  let parisElement = document.querySelector("#paris");
  if (parisElement) {
    let parisDateElement = parisElement.querySelector(".date");
    let parisTimeElement = parisElement.querySelector(".time");
    let parisTime = moment().tz("Europe/Paris");
    parisDateElement.innerHTML = parisTime.format("MMMM Do, YYYY");
    parisTimeElement.innerHTML = parisTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }
}

function updateCity(event) {
  let cityTimezone = event.target.value;
  let cityName = cityTimezone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimezone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `
   <div class="city">
   <div>
      <h2>${cityName}</h2>
        <div class="date">${cityTime.format("MMMM Do, YYYY")}</div>
        </div>
        <div class="time">${cityTime.format(
          "h:mm:ss"
        )} <small>${cityTime.format("A")}</small></div>
   </div>
  `;
}

updateTime();
setInterval(updateTime, 1000);

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);
