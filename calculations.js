document.querySelector('#launch').onclick = function(){
  fetch('https://www.cbr-xml-daily.ru/daily_json.js')
    .then( response => response.json())
    .then( data => {
        valutes = data.Valute;
        if (document.querySelector('#from').value != document.querySelector('#to').value){
          const s = document.querySelector('#from').value+'_to_'+document.querySelector('#to').value;
          const result =converter[s](quantity.value);
          answer.value = result;
        } else answer.value = 1;})
}

const converter = new Proxy({}, {
  get (target, name) {
    if (target[name] !== undefined){
      return target[name];
    }
     const key = '_to_';
     const indexOfKey = name.indexOf(key);
     const fromCurrency = name.slice(0, indexOfKey);
     const toCurrency = name.slice(indexOfKey + key.length);
     const fromNominal = valutes[fromCurrency].Nominal;
     const fromValue = valutes[fromCurrency].Value;
     const toNominal = valutes[toCurrency].Nominal;
     const toValue = valutes[toCurrency].Value;
     return val => val* (fromValue / fromNominal)  / (toValue / toNominal);
  }
})
