document.addEventListener('DOMContentLoaded', function () {
  var randomNumber = Math.floor(Math.random() * 151) + 1;
  fetch(`https://pokeapi.co/api/v2/pokemon/${randomNumber}`)
    .then(response => response.json())
    .then(data => {
      const sprite = data.sprites.other['home'].front_default;
      document.getElementById('poke').src = sprite;
    })
    .catch(err => console.log(err));
});
