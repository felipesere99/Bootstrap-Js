//Guardamos los datos del cliente en localstorage//

const DatosCliente = () => {

    let nombre = document.getElementById("nombre");
    let telefono = document.getElementById('telefono');
    let edad = document.getElementById('edad');

    localStorage.setItem("nombre", nombre.value)
    localStorage.setItem("telefono", telefono.value)
    localStorage.setItem("edad", edad.value)

    Toastify({
        text: "Sus datos han sido guardados!",
        className: "info",
        style: {
          background: "linear-gradient(to right, #00b09b, #96c93d)",
        }
      }).showToast();
}