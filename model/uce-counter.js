import {count} from "./count.js";

export function uceCounter () {
  document.title = 'UCE Counter - Guild Wars 2 - Knouy';
  const UCE = document.getElementById('uce');
  const REQUEST = 'https://api.guildwars2.com/v2/';
  const API_KEY = '?access_token=' + (document.getElementById('apiKey').value
    .length !== 0 ? document.getElementById('apiKey').value
    : '74C4807F-4E95-5B4F-A649-2C47D7F54965C4414169-033B-405A-BE36-5A638C14C1' +
    'D2');
  const S = document.getElementById('s');
  const GOLD = document.getElementById('gold');
  const SILVER = document.getElementById('silver');
  UCE.innerText = '0';
  fetch(REQUEST + 'account/bank' + API_KEY)
    .then(response => response.json())
    .then(responseJson => responseJson.forEach(element => {
      count(element, UCE, S, GOLD, SILVER);
    }));
  fetch(REQUEST + 'account/inventory' + API_KEY)
    .then(response => response.json())
    .then(responseJson => responseJson.forEach(element => {
      count(element, UCE, S, GOLD, SILVER);
    }));
  fetch(REQUEST + 'characters' + API_KEY)
    .then(response => response.json())
    .then(responseJson => responseJson.toString().split(',').forEach(
      element => {
        fetch(REQUEST + 'characters/' + element + '/inventory' + API_KEY)
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
