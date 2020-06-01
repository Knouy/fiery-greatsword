export function uceCounter () {
  resetMenu();
  document.getElementById('menuUceCounter').style.borderBottomColor = '#FFFFFF';
  const UCE = document.getElementById('uce');
  const REQUEST = 'https://api.guildwars2.com/v2/';
  const S = document.getElementById('s');
  const GOLD = document.getElementById('gold');
  const SILVER = document.getElementById('silver');
  U.API_KEY = (document.getElementById('apiKey').value.length !== 0
    ? '?access_token=' + document.getElementById('apiKey').value : U.API_KEY);
  document.getElementById('apiKey').value = '';
  UCE.innerText = '0';
  GOLD.innerHTML = '0&nbsp';
  SILVER.innerHTML = '&nbsp&nbsp0&nbsp';
  fetch(REQUEST + 'account/bank' + U.API_KEY)
    .then(response => response.json())
    .then(responseJson => responseJson.forEach(element => {
      count(element, UCE, S, GOLD, SILVER);
    }));
  fetch(REQUEST + 'account/inventory' + U.API_KEY)
    .then(response => response.json())
    .then(responseJson => responseJson.forEach(element => {
      count(element, UCE, S, GOLD, SILVER);
    }));
  fetch(REQUEST + 'characters' + U.API_KEY)
    .then(response => response.json())
    .then(responseJson => responseJson.toString().split(',').forEach(
      element => {
        fetch(REQUEST + 'characters/' + element + '/inventory' + U.API_KEY)
          .then(response0 => response0.json())
          /**
           * @namespace response0Json.bags */
          .then(response0Json => response0Json.bags.forEach(bag => {
            /**
             * @namespace bag.inventory */
            if (bag !== null) {
              bag.inventory.forEach(bagInventory => {
                count(bagInventory, UCE, S, GOLD, SILVER);
              });
            }
          }));
      }
    ));
}
