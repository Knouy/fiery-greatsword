export function fetchCharacters () {
  const D = document;
  const CHARACTER_LIST = D.getElementById('characterList');
  CHARACTER_LIST.innerHTML = '';
  T.API_KEY = '?access_token=' + (document.getElementById('apiKey1')
    .value.length !== 0
    ? D.getElementById('apiKey1').value
    : T.API_KEY);
  const REQUEST = 'https://api.guildwars2.com/v2/';
  fetch(`${REQUEST}characters${T.API_KEY}`)
    .then((response) => response.json())
    .then(charactersData => {
      charactersData.forEach(element => {
        fetch(`${REQUEST}characters/${element}/core${T.API_KEY}`)
          .then((response) => response.json())
          .then(characterData => {
            /**
             * @namespace characterData.profession */
            CHARACTER_LIST.innerHTML +=
              `<li>${characterData.name} ${characterData.profession}</li>`;
          });
      });
    })
    .catch((error) => console.log(error));
}
