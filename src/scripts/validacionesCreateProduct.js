let qs = (par) => {
    return document.querySelector(par)
}

let nombre = qs('#nombreProducto')
let precio = qs('#precioProducto')
let submit = qs('#btnCrearProducto')

function validacionesCreateProduct(e) {
    if(nombre.value === ''){
        e.preventDefault()
    }
    if(precio.value === ''){
        e.preventDefault()
    }
}

submit.addEventListener('click', validacionesCreateProduct)