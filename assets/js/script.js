
//Creamos la clase para los objetos//

class Vehiculo{
    constructor(modelo, precio, year, km, img) {
    this.modelo = modelo;
    this.precio = precio;
    this.year = year;
    this.km = km;
    this.img = img;
    }
}

// Llamado al fetch para transferir los objetos en JSON y asi crear el listado de vehiculos//

const arrayDeVehiculos = []

const llamarFetch = () => {
fetch('/public/vehiculos.json')
    .then( (resp) => {return resp.json()} )
    .then( (data) => {
        data.forEach((vehiculos) => {
            arrayDeVehiculos.push(new Vehiculo(vehiculos.modelo, vehiculos.precio, vehiculos.year, vehiculos.km, vehiculos.img))
        }
    )
    for (let vehiculos of arrayDeVehiculos) {
        const divContenedor = document.createElement("div");
        divContenedor.classList.add('vehiculos');
        divContenedor.innerHTML = `
        <div class="card" style="width: 18rem;">
            <img class="card-img-top" src="${vehiculos.img}" alt="Card image cap">
            <div class="card-body">
            <h5 class="card-title">${vehiculos.modelo}</h5>
            <p class="card-text">Año: ${vehiculos.year}</p>
            <p class="card-text">Km: ${vehiculos.km}</p>
            <p class="card-text">U$S: ${vehiculos.precio}</p>
            <button class="btn btn-primary" onclick="botonCompra()" id="comprar">Comprar ${vehiculos.modelo}</button>
            </div>
      </div>`
        
    contenedor.appendChild(divContenedor)
    
    }
})}

llamarFetch();

console.log(arrayDeVehiculos)


// Funcion para publicar un nuevo vehiculo

const guardarVehiculo = document.getElementById("guardar-vehiculo")
let nuevoVehiculo = {};

const PublicarNuevoVehiculo = evt => {
    evt.preventDefault();
    let nuevoVehiculo = {
        modelo: document.querySelector('#modelo').value,
        precio: document.querySelector('#precio').value,
        year: document.querySelector('#year').value,
        km: document.querySelector('#km').value,
        img: ""

    }
    console.log(nuevoVehiculo)
    const divContenedor = document.createElement("div");
        divContenedor.classList.add('vehiculos');
        divContenedor.innerHTML = `
        <div class="card" style="width: 18rem; min-height: 15rem">
            <div class="card-body">
            <h5 class="card-title">${nuevoVehiculo.modelo}</h5>
            <p class="card-text">Año: ${nuevoVehiculo.year}</p>
            <p class="card-text">Km: ${nuevoVehiculo.km}</p>
            <p class="card-text">U$S: ${nuevoVehiculo.precio}</p>
            <button class="btn btn-primary" onclick="botonCompra()" id="comprar">Comprar ${nuevoVehiculo.modelo}</button>
            </div>
      </div>`
        
    contenedor.appendChild(divContenedor)
}

guardarVehiculo.addEventListener('click', PublicarNuevoVehiculo)



const botonCompra = () => {
    let nombreCliente = localStorage.getItem("nombre")
    let edadCliente = localStorage.getItem("edad")
    let telCliente = localStorage.getItem("telefono")

    if (edadCliente >= 18) {
        Swal.fire({
            icon: 'success',
            title: 'Gracias por su compra ' + nombreCliente,
            text: 'Nos comunicaremos al ' + telCliente,
          })
    } else if (edadCliente < 18) {
        Swal.fire("No vendemos vehiculos a menores!")
    } else {
        Swal.fire("Ingrese sus datos porfavor!")
    }
}

