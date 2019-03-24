function newdate(){
  fetch('https://www.cbr-xml-daily.ru/daily_json.js')
    .then( response => response.json())
    .then( data => {
      document.querySelector('#USD').innerHTML =(data.Valute.USD.Value/(data.Valute.UAH.Value/data.Valute.UAH.Nominal));
      document.querySelector('#EUR').innerHTML =(data.Valute.EUR.Value/(data.Valute.UAH.Value/data.Valute.UAH.Nominal));
      document.querySelector('#RUB').innerHTML =1/(data.Valute.UAH.Value/data.Valute.UAH.Nominal);
    })
  var currentdate = document.querySelector('#currentdate');
  var date = new Date();
  var options = {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  weekday: 'long',
  timezone: 'UTC',
  hour: 'numeric',
  minute: 'numeric',
  second: 'numeric'
  };
  currentdate.innerHTML = date.toLocaleString("ru", options);
  setTimeout('newdate()', 1000);
}
