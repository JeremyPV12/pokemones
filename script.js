async function traerPokemon(){
    number=24;
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
        h1.classList='flex justify-center w-full text-2xl font-medium'
        div_main.classList='col-span-2 border border-black rounded-lg flex flex-col m-5 w-48 bg-red-100 hover:bg-black hover:text-white shadow shadow-black transition duration-1000 '
        img.classList='w-36 h-36 flex mx-auto '
        contenedor.classList='flex flex-wrap justify-evenly bg-red-300'

        contenedor.append(div_main)
    }
}
traerPokemon()