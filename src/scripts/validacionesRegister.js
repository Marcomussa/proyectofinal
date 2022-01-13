
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
  let usernameMsg = qs('.usernameRegisterlMsg')
  let surnameMsg = qs('.surnameRegisterMsg')
  let emailMsg = qs('.emailRegisterMsg')
  let passwordMsg = qs('.passwordRegisterMsg')
  
  function validacionesRegister(e) {
    if(username.value === ''){
        e.preventDefault()
        usernameMsg.className = 'displayBlock'
    }
    if(surname.value === ''){
        e.preventDefault()
        surnameMsg.className = 'displayBlock'
    }
    if(password.value === ''){
        e.preventDefault()
        passwordMsg.className = 'displayBlock'
    }
    if(email.value === ''){
        e.preventDefault()
        emailMsg.className = 'displayBlock'
    }
  
    if(username.value != ''){
        usernameMsg.className = 'displayNone'  
    }
    if(surname.value != ''){
        surnameMsg.className = 'displayNone'
    }
    if(email.value != ''){
        emailMsg.className = 'displayNone'  
    }
    if(password.value != ''){
        passwordMsg.className = 'displayNone'
    }
  }   
  
  submit.addEventListener('click', validacionesRegister)
  
  