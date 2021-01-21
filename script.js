$(document).ready(function(){
    for (var i = 0; i < 151; i++) {
        $('body').append(`<img id =${i} src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/${i}.png">`) 
    }
})
$(document).on('click' , 'img', function(){
    var pokeID = $(this).attr('id');
    var pokeData = "https://pokeapi.co/api/v2/pokemon/"+pokeID+"/";
    $.get(""+pokeData+"" , function(data){
        var Type = data.types[0].type.name //first type of pokemon
        var Height = data.height ; // pokemon height
        var Weight = data.weight; //pokemon weight
        var speciesName = data.species.name; // pokemon species name 
        console.log(Type, Height, Weight, speciesName)
        $('#pokedex').css('display', 'inline-block');
        $('#pokedex').html(`<h1>${speciesName}</h1>`)
        $('#pokedex').append(`<img src ="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/${pokeID}.png">`)
        $('#pokedex').append(`<h3>Types:<br>${Type}</h3> <h3>Height:<br>${Height}</h3> <h3>Weight:<br>${Weight}</h3>`)
    }, 'json');
})
