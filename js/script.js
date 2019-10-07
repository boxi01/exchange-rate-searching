
let data = prompt("Podaj datę. Format RRRR-MM-DD");

fetch(`http://api.nbp.pl/api/exchangerates/tables/A/${data}/?format=json`).then(res=> res.json()).then(res=>{
  

    let data = document.createElement('tr');
    data.innerText = `Data: ${res[0].effectiveDate}`;
    document.querySelector("h2#data").appendChild(data);


for (i = 0; i <res[0].rates.length; i++){
    let myElement = document.createElement('tr');
    document.querySelector("tbody#courses").appendChild(myElement);

    let name = document.createElement('td');
    name.innerText = res[0].rates[i].currency;
    myElement.appendChild(name);
    let alias = document.createElement('td');
    alias.innerText = res[0].rates[i].code;
    myElement.appendChild(alias);
    let kurs = document.createElement('td');
    kurs.innerText = res[0].rates[i].mid;
    myElement.appendChild(kurs);
}

})
