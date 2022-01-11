let qs = (par) => {
    return document.querySelector(par)
}

let email = qs('#emailLogIn')
let password = qs('#passwordLogIn')
let submit = qs('#submit')
let emailMsg = qs('.emailMsg')
let passMsg = qs('.passMsg')
let valBackendLogIn = qs('.valBackLogIn')

function validacionesLogIn(e) {
    if(email.value === ''){
        e.preventDefault()
        emailMsg.className = 'displayBlock'
        valBackendLogIn.className = 'displayNone'
    }
    if(password.value === ''){
        e.preventDefault()
        passMsg.className = 'displayBlock'
        valBackendLogIn.className = 'displayNone'
    }
    if(email.value != ''){
        emailMsg.className = 'displayNone'  
    }
    if(password.value != ''){
        passMsg.className = 'displayNone'
    }
}

submit.addEventListener('click', validacionesLogIn)