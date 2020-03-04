fetch('https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json')
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data[3]);


let template = document.getElementById('currency-template');
let mainDiv = document.getElementsByClassName("main")[0];

for (let currency of data) {
let currencyDiv = template.cloneNode (true);
currencyDiv.removeAttribute("id");

let nameBlock = currencyDiv. querySelector (".txt");
let rateBlock = currencyDiv. querySelector (".rate")

nameBlock.innerText = currency.txt;
rateBlock.innerText = currency.rate;
mainDiv.appendChild(currencyDiv);
}
mainDiv.removeChild(template);
  });

function convert(elem) {
  let rate = elem.querySelector (".rate"). innerText;
  let name = elem.querySelector (".txt"). innerText;

    let sum = document.getElementById("sum").value;
if (sum>0) {
  console.log (sum);
}
let rezultElem = document.getElementById("rezult");
    rezultElem.innerText = sum / rate;

let currencyNameElem = document.getElementById("currency-txt");
currencyNameElem.innerText = name;
}
