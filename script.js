// Imagen
// let imgOnboard = '../Assets/Images/bgOnboarding.png'

//------------->Servicios<--------------
let servicios = document.getElementById("servicios");

let prueba =[{nombre:"casa", precio:3455}, {nombre:"ala", precio:234}]

let masoterapia = [
    {nombre: "Drenajes linfatico", precio: 5000, descripcion: "Descripción de Masajes", imagen: "../Assets/Images/drenajeLinfatico.png"},
    {nombre: "Masajes abdominales", precio: 5000, descripcion: "Descripción de Masajes", imagen: "../Assets/Images/masajesAbdominales.png"},
    {nombre: "Masajes relajante", precio: 5000, descripcion: "Descripción de Masajes", imagen: "../Assets/Images/masajesDescontracturantes.png"},
    {nombre: "Masajes descontracturantes", precio: 5000, descripcion: "Descripción de Masajes", imagen: "../Assets/Images/masajesDescontracturantes.png"},
    {nombre: "Masajes sedantes", precio: 5000, descripcion: "Descripción de Masajes", imagen: "../Assets/Images/masajesSedantes.png"},
    {nombre: "Masaje Thai", precio: 5000, descripcion: "Descripción de Masajes", imagen: "../Assets/Images/masajesThai.png"}
];
// let tratamientosFaciales =[
//     {nombre:"", precio: , descripcion:"",imagen:""},
//     {nombre:"", precio: , descripcion:"",imagen:""}
// ];
console.log(masoterapia)
let manicura =[
    {nombre:"Manicura", precio: 2000, descripcion:"Descripción manicura",imagen:"./Assets/Images/manicura.png"},
    // {nombre:"", precio: , descripcion:"",imagen:""}
];
//------------->Servicios<--------------

for (let i = 0; i < masoterapia.length; i++) {
   let modelo =`<div class="servicio">
   
    <h3>${masoterapia[i].nombre}</h3>
    <p>${masoterapia[i].descripcion}</p>
    <h4>3000${masoterapia[i].precio}</h4>
</div>`
servicios.innerHTML += modelo;
};
{/* <img src="${servicios[i].imagen} alt=""> */}