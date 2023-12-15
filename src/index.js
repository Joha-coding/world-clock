function updateTime() {
  // New York
  let NYElement = document.querySelector("#newyork");
  let NYDateElement = NYElement.querySelector(".date");
  let NYTimeElement = NYElement.querySelector(".time");
  let NYTime = moment().tz("America/New_York");
  NYDateElement.innerHTML = NYTime.format("MMMM Do, YYYY");
  NYTimeElement.innerHTML = NYTime.format("h:mm:ss [<small>]A[</small>]");

  // Paris
  let parisElement = document.querySelector("#paris");
  let parisDateElement = parisElement.querySelector(".date");
  let parisTimeElement = parisElement.querySelector(".time");
  let parisTime = moment().tz("Europe/Paris");
  parisDateElement.innerHTML = parisTime.format("MMMM Do, YYYY");
  parisTimeElement.innerHTML = parisTime.format("h:mm:ss [<small>]A[</small>]");
}

updateTime();
setInterval(updateTime, 1000);
