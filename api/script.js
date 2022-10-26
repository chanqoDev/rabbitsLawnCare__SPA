var callAPI = (firstName, lastName) => {
  // instantiate a headers object
  var myHeaders = new Headers();
  // add content type header to object
  myHeaders.append("Content-Type", "application/json");
  var raw = JSON.stringify({ firstName: firstName, lastName: lastName });
  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };
  // Fetch API promise call
  fetch("Your-API-GOES-HERE", requestOptions)
    .then((response) => response.text())
    .then((result) => alert(JSON.parse(result).body))
    .catch((error) => console.log("error", error));
};
