const container = document.querySelector(".container");
const coffees =[
    {
        name: "tecnologia",
        image: "images/tecnologia1.jpg"
    },
    {
        name: "tecnologia sin retorno",
        image: "images/tecnologia2.jpg"
    },
    {
        name: "tecnologia en el mundo",
        image: "images/tecnologia3.jpg"
    },
    {
        name: "Programación",
        image: "images/tecnologia4.jpg"
    },
    {
        name: "2021 tecnologia",
        image: "images/tecnologia5.jpg"
    },
    {
        name: "tecnologia ambiental",
        image: "images/tecnologia6.jpg"
    },
    {
        name: "Inventos tecnologicos",
        image: "images/tecnologia7.jpg"
    },
    {
        name: "Desarrollo tecnologico",
        image: "images/tecnologia8.jpg"
    },
    {
        name: "seguridad tecnologica",
        image: "images/tecnologia9.jpg"
    }
];
const showCoffees =()=>{
    let output="";
    coffees.forEach(
        ({name, image})=>
        (output += `
        <div class="card">
            <img class="card--avatar" src=${image} />
            <h1 class="card--title">${name}</h1>
            <a class="card--link" href="#">buscar</a>
        </div>
        `)
    );
    container.innerHTML=output;
};

document.addEventListener("DOMContentLoaded",showCoffees);

if ("serviceWorker" in navigator) {
    window.addEventListener("load", function(){
        navigator.serviceWorker
        .register("/serviceWorker.js")
        .then(res => console.log("service worker registrado"))
        .catch(err => console.log("service worker no registrado",err));
    });
} 