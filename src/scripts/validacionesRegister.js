let qs = (par) => {
    return document.querySelector(par)
}

// Llamados a los inputs
let username = qs('.nameRegister')
let surname = qs('.surnameRegister')
let email = qs('.emailRegister')
let password = qs('.passwordRegister')
let submit = qs('#btnCrearCuenta')

// Llamados a los mensajes de inputs
let usernameMsg = qs('.userNameRegisterlMsg')
let surnameMsg = qs('.passRegisterMsg')
let emailMsg = qs('.emailRegisterMsg')
let passwordMsg = qs('.passwordRegisterMsg')

function validacionesRegister(e) {
    if(username.value === ''){
        e.preventDefault()
    }
    if(surname.value === ''){
        e.preventDefault()
    }
    if(password.value === ''){
        e.preventDefault()
    }
    if(email.value === ''){
        e.preventDefault()
    }
}   

submit.addEventListener('click', validacionesRegister)