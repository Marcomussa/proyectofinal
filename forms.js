const btnNuevaCuenta = document.querySelector('#btnNuevaCuenta')
const btnCrearCuenta = document.querySelector('#btnCrearCuenta')
const btnLogIn = document.querySelector('#buttonLogIn')
const inputLogInEmail = document.querySelector('#inputLogInEmail')
const inputLogInContrasena = document.querySelector('#inputLogInContrasena')
const logInErrores = document.querySelector('#logInErrores')
const contenedorCrearCuenta = document.querySelector('#crearCuenta')

function mostrarCrearCuenta(){
    btnNuevaCuenta.addEventListener('click', function(){
        contenedorCrearCuenta.style.display = 'block'
    })
}

function validarEmailContrasena(){
    btnLogIn.addEventListener('click', function(){
        if(inputLogInEmail.value === '' && inputLogInContrasena.value === ''){
            logInErrores.innerHTML = 'Inserte un Email y Contrasena'
        } else if(inputLogInEmail.value === ''){
            logInErrores.innerHTML = 'Inserte un Email'
        } else if(inputLogInContrasena.value === ''){
            logInErrores.innerHTML = 'Inserte una Contrasena'
        } else {
            console.log('Todo OK')
        }
    })
}

function funcionMadre(){
    mostrarCrearCuenta()
    validarEmailContrasena()
}
funcionMadre()