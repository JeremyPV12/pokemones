async function traerPokemon(){
    number=10;
    for (let index = 1; index<=number; index++) {
        const data= await fetch(`https://pokeapi.co/api/v2/pokemon/${index}/`)
        const response= await data.json()
        const name=response.name
        const image=response.sprites.front_default

        console.log(image)
        
        const contenedor=document.querySelector("#poke")

        const div_main=document.createElement("div")

        const img=document.createElement("img")
        img.innerText=image.front_default
        img.src=image
        img.alt=name
        div_main.append(img)


        const h1=document.createElement("h1")
        h1.innerText=name
        div_main.append(h1)
        
        contenedor.append(div_main)
    }
}
traerPokemon()