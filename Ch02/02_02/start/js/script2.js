(() => {
  const url = "http://api.openweathermap.org/data/2.5/weather?q=London,England";
  const apiKey = "05e62f86576a85bc20cce0e46674216f"; // Replace "API KEY" with your own API key; otherwise, your HTTP request will not work
  let httpRequest;

  fetch(`${url}&appid=${apiKey}`).then(function(response) {
    if (!response.ok) {
      console.log("Problem");
    }
    console.log(response);
  });
})();
