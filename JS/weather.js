const form = document.querySelector("section.top-banner form");

const input = document.querySelector(".container input");
const msg = document.querySelector("span.msg");
const list = document.querySelector(".ajax-section .cities");

localStorage.setItem(
  "tokenKeyEncrypted",
  EncryptStringAES(
    "6/Cit6TZjKI4DKIhl/4Cf+Ai7Yz91X96Swt2Hp5kDTbGenKTFeRcFWyedjSJI3iH"
  )
);

form.addEventListener("submit", (event) => {
  event.preventDefault();
  getWeatherDataFromApi();
});

//Get api function(http metthods ==verbs)

const getWeatherDataFromApi = async () => {
  //alert("http request is gone!");
  const tokenKey = DecryptStringAES(localStorage.getItem("tokenKey"));
  alert(tokenKey);
  const inputValue = input.value;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputValue}&appid=${tokenKey}&units=${units}&lang=${lang}`;

  const response = await fetch(url).then((response) => response.json());

  console.log(response);
};
