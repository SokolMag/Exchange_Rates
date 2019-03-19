document.querySelector('#list').onclick = function(event) {
  var images = document.querySelectorAll('.container .image img');
  if (event.target.tagName != 'SPAN') {return;}
  var number = connection(event.target.innerHTML);
  for (i = 0; i < images.length; i++){
    if (i !== number) {
      images[i].className = ''
    } else {
      images[i].className = 'showed'
    }
  }
}

function connection(currency){
  fetch('https://www.cbr-xml-daily.ru/daily_json.js')
    .then( response => response.json())
    .then( data => {
        document.querySelector('#content').innerHTML =
        'Информация о валюте. <br>Символьный код: '+data.Valute[currency].CharCode+
        '<br>ID: '+data.Valute[currency].ID+
        '<br>Наименование: '+data.Valute[currency].Name+
        '<br>Номинал: '+data.Valute[currency].Nominal+
        '<br>Числовой код: '+data.Valute[currency].NumCode+
        '<br>Предыдущая стоимость: '+(data.Valute[currency].Previous/(data.Valute.UAH.Previous/data.Valute.UAH.Nominal))+
        '<br>Текущая стоимость: '+(data.Valute[currency].Value/(data.Valute.UAH.Value/data.Valute.UAH.Nominal));})
        switch (currency) {
          case 'AMD': return 0; break;
          case 'AUD': return 1; break;
          case 'AZN': return 2; break;
          case 'BGN': return 3; break;
          case 'BRL': return 4; break;
          case 'BYN': return 5; break;
          case 'CAD': return 6; break;
          case 'CHF': return 7; break;
          case 'CNY': return 8; break;
          case 'CZK': return 9; break;
          case 'DKK': return 10; break;
          case 'EUR': return 11; break;
          case 'GBP': return 12; break;
          case 'HKD': return 13; break;
          case 'HUF': return 14; break;
          case 'INR': return 15; break;
          case 'JPY': return 16; break;
          case 'KGS': return 17; break;
          case 'KRW': return 18; break;
          case 'KZT': return 19; break;
          case 'MDL': return 20; break;
          case 'NOK': return 21; break;
          case 'PLN': return 22; break;
          case 'RON': return 23; break;
          case 'SEK': return 24; break;
          case 'SGD': return 25; break;
          case 'TJS': return 26; break;
          case 'TMT': return 27; break;
          case 'TRY': return 28; break;
          case 'UAH': return 29; break;
          case 'USD': return 30; break;
          case 'UZS': return 31; break;
          case 'XDR': return 32; break;
          case 'ZAR': return 33; break;
          default: return 0;
        }
}
