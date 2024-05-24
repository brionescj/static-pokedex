const pokedex = [
    {
        number:1,
        name:"Bulbasaur",
        img: "https://img.pokemondb.net/sprites/home/normal/bulbasaur.png",
        color:"verde-morado",
        type:["Grass","Poison"]
    },
    {
        number:2,
        name:"Ivysaur",
        img: "https://img.pokemondb.net/sprites/home/normal/ivysaur.png",
        color:"verde-morado",
        type:["Grass","Poison"]
    },
    {
        number:3,
        name:"Venusaur",
        img: "https://img.pokemondb.net/sprites/home/normal/venusaur-mega.png",
        color:"verde-morado",
        type:["Grass","Poison"]
    },
    {
        number:4,
        name:"Charmander",
        img: "https://img.pokemondb.net/sprites/home/normal/charmander.png",
        color:"rojo",
        type:["Fire"]
    },
    {
        number:5,
        name:"Charmeleon",
        img: "https://img.pokemondb.net/sprites/home/normal/charmeleon.png",
        color:"rojo",
        type:["Fire"]
    },
    {
        number:6,
        name:"Charizard",
        img: "https://img.pokemondb.net/sprites/home/normal/charizard.png",
        color:"rojo-indigo",
        type:["Fire","Flying"]
    },
    {
        number:7,
        name:"Squirtle",
        img: "https://img.pokemondb.net/sprites/home/normal/squirtle.png",
        color:"azul",
        type:["Water"]
    },
    {
        number:8,
        name:"Wartortle",
        img: "https://img.pokemondb.net/sprites/home/normal/wartortle.png",
        color:"azul",
        type:["Water"]
    },
    {
        number:9,
        name:"Blastoise",
        img: "https://img.pokemondb.net/sprites/home/normal/blastoise.png",
        color:"azul",
        type:["Water"]
    },
    {
        number:10,
        name:"Caterpie",
        img: "https://img.pokemondb.net/sprites/home/normal/caterpie.png",
        color:"verde",
        type:["Bug"]
    },
    {
        number:11,
        name:"Metapod",
        img: "https://img.pokemondb.net/sprites/home/normal/metapod.png",
        color:"verde",
        type:["Bug"]
    },
    {
        number:12,
        name:"Butterfree",
        img: "https://img.pokemondb.net/sprites/home/normal/butterfree.png",
        color:"verde-indigo",
        type:["Bug","Flying"]
    },
    {
        number:13,
        name:"Weedle",
        img: "https://img.pokemondb.net/sprites/home/normal/weedle.png",
        color:"cafe-morado",
        type:["Bug","Poison"]
    }
    ,
    {
        number:14,
        name:"Kakuna",
        img:"https://img.pokemondb.net/sprites/home/normal/kakuna.png",
        color:"cafe-morado",
        type:["Bug","Poison"]
    }
    ,
    {
        number:15,
        name:"Beedrill",
        img: "https://img.pokemondb.net/sprites/home/normal/beedrill.png",
        color:"cafe-morado",
        type:["Bug","Poison"]
    }
    ,
    {
        number:16,
        name:"Pidgey",
        img:"https://img.pokemondb.net/sprites/home/normal/pidgey.png",
        color:"gris-indigo",
        type:["Normal","Flying"]
    }
    ,
    {
        number:17,
        name:"Pidgeotto",
        img: "https://img.pokemondb.net/sprites/home/normal/pidgeotto.png",
        color:"gris-indigo",
        type:["Bug","Flying"]
    }
    ,
    {
        number:18,
        name:"Pedgeot",
        img: "https://img.pokemondb.net/sprites/home/normal/pidgeot.png" ,
        color:"gris-indigo",
        type:["Bug","Flying"]
    }
]

let temp = []

let content = document.getElementById('content')

for(const poke of pokedex){
    temp.push( `
    <div class="recuadros ${poke.color}">
        <div class="cont-recuadros">
        <div class="content-header">#${poke.number} </div>
        <div class="content-body"><img src="${poke.img}"></div>
        <div class="content-footer ">
            ${poke.name}
            <br>
           ${poke.type?.map(type => type).toString().replace(",", " - ")}
        </div>
        </div>
    </div>    
    `
    )
}

content.innerHTML = temp

let searchPoke = document.getElementById('seekers')
searchPoke.onsubmit = (e) =>{
    e.preventDefault()
    const seeks = document.getElementById('seeks')
    const seeksText =seeks.value
    seeks.value= ''
    const filter = pokedex.filter( pokemon => pokemon.name.toLowerCase().includes(seeksText.toLowerCase()))

    let temp = []
      
    for(const poke of filter){
        temp.push( `
        <div class="recuadros ${poke.color}">
            <div class="cont-recuadros">
            <div class="content-header">#${poke.number} </div>
            <div class="content-body"><img src="${poke.img}"></div>
            <div class="content-footer ">${poke.name}</div>
            </div>
        </div>    
        `
        )
    }

    content.innerHTML = temp
}


let typePoke = document.getElementById('typeP')
typePoke.onchange = (e)=>{
    e.preventDefault()
    let typeText = typePoke.value
    const selectedPoke = pokedex.filter(pokemon => pokemon.type.includes(typeText))
    
    let temp = []
      
    for(const poke of selectedPoke){
        temp.push( `
        <div class="recuadros ${poke.color}">
            <div class="cont-recuadros">
            <div class="content-header">#${poke.number} </div>
            <div class="content-body"><img src="${poke.img}"></div>
            <div class="content-footer ">${poke.name}</div>
            </div>
        </div>    
        `
        )
    }

    content.innerHTML = temp

}



