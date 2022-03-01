document.getElementById('pokeSubmit').onclick = function() {pokeUserSubmission()}; 
function pokeUserSubmission() {
    let pokeQuery = document.getElementById("userPokeNum").value;
    let pokeApiLink = `https://pokeapi.co/api/v2/pokemon/${pokeQuery}`;
    // https://pokeapi.co/api/v2/pokemon/1
    // get the data from the API via URL
    fetch(pokeApiLink)
    // use .then to handle the response/reject promise
    .then((res)=>{
        return res.json()
    })
    .then((data)=>{
        console.log(data.name + data.id);
        pokeName.innerHTML = data.name;
        pokeNum.innerHTML = 'No. '+ data.id+'<sub>/898</sub>';
        pokeWeight.innerHTML = 'Weight: '+data.weight;
        pokeHeight.innerHTML = 'Height: '+data.height;
        pokeAbility.innerHTML = 'Ability: '+data.abilities[0].ability.name;
        pokeHiddenAbility.innerHTML = 'Hidden Ability: '+data.abilities[1].ability.name;
        pokeSpriteFront.src = data.sprites.other.home.front_default;
        pokeSpriteShiny.src = data.sprites.other.home.front_shiny;
    })
    var pokeName = document.getElementById('pokeName');
    var pokeNum = document.getElementById('pokeNum');
    var pokeWeight = document.getElementById('pokeWeight');
    var pokeHeight = document.getElementById('pokeHeight');
    var pokeAbility = document.getElementById('pokeAbility');
    var pokeHiddenAbility = document.getElementById('pokeHiddenAbility');
    var pokeSpriteFront = document.getElementById('pokeSpriteFront');
    var pokeSpriteShiny = document.getElementById('pokeSpriteShiny');
}