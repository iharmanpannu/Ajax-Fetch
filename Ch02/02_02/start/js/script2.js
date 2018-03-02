(() => {
  const url = "http://api.openweathermap.org/data/2.5/weather?q=London,England";
  const apiKey = "05e62f86576a85bc20cce0e46674216f"; // Replace "API KEY" with your own API key; otherwise, your HTTP request will not work
  let httpRequest;
  makeRequest();

  // Create and send XHR Request

  function makeRequest() {
    httpRequest = new XMLHttpRequest();
    httpRequest.onreadystatechange = responseMethod;
    httpRequest.open("GET", `${url}&appid=${apiKey}`);
    httpRequest.send();
  }

  // Handle XHR response

  function responseMethod() {
    if (httpRequest.readyState === 4) {
      if (httpRequest.status === 200) {
        updateUISuccess(httpRequest.responseText);
      } else {
        updateUIError();
      }
    }
  }

  // Handle XHR success
  function updateUISuccess(responseText) {
    const response = JSON.parse(responseText);
    const condition = response.weather[0].main;
    const degC = response.main.temp - 273.15;
    const degCInt = Math.log.floor(degC);
    const degF = degC * 1.8 + 32;
    const degFInt = Math.floor(degF);
    const weatherBox = document.getElementById("weather");
    weatherBox.innerHTML = `<p>${degCInt}&#176; C / ${degFInt}&#176; F</p> <p>${condition}</p>`;
  }

  // handle XHR error

  function updateUIError() {
    const weatherBox = document.getElementById("weather");
    weatherBox.className = "hidden";
  }
})();
