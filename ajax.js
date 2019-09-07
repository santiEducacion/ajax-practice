
$("#btn-personajes").click(function () {
    console.log("click")

    //consultar Personajes
    consultarPersonajes()
})


function consultarPersonajes() {
    $.ajax({
        method: "GET",
        url: "https://rickandmortyapi.com/api/character/",
    })

        .done(function(response) {
            console.log(response)
            var personajes= response.results

            //Recorrer los personajes
            for(var personaje of personajes){
                console.log("Personaje: ", personaje)
                $(".contenedor-personajes").append(
                    renderizarPersonaje(personaje)
                )
            }

        })
        .fail(function(error) {
            console.log("Hubo un error", JSON.parse(error.responseText).error) 
        })



}

function renderizarPersonaje(obj_personaje){
    var personaje_html=`
        <div class="personaje">
            <img src="${obj_personaje.image}">
            <h3>${obj_personaje.name}</h3>
            <button> + Favorito </button>

        </div>
    `
    return personaje_html
}