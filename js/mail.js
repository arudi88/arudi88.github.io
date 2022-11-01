const form = document.getElementById("formulario");
 
 form.addEventListener("submit",validar);


 function validar(e){
    e.preventDefault();
    if (validarNombre()){
        alert("El campo nombre no puede estar vacio! Por favor ingresa uno, o no sabremos como llamarte!")
        form.to_name.focus()
        return 0
    }

    if (!validarEmail()){
        alert("Escriba correctamente el mail.")
        form.client_mail.focus()
        return 0
    }

    if (!validarTel()){
        alert("Ingrese solo numeros en el campo Telefono.")
        form.client_phone.focus()
        return 0
    }

    if (validarMensaje()){
        alert("El campo mensaje no puede estar vacio! Por favor escribe tu solicitud!")
        form.message.focus()
        return 0
    }

    enviarMail(e)
    console.log("Mail enviado")
    limpiarFormulario()
 }

 function validarNombre() {
    return form.to_name.value.length  == 0
}
 


function validarEmail() { 
    const regexMail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    console.log(regexMail.test(form.client_mail.value))
    return regexMail.test(form.client_mail.value)
}

function validarTel(){
    const regexPhone = /^[0-9]+$/
    console.log(regexPhone.test(form.client_phone.value))
    return regexPhone.test(form.client_phone.value)

}

function validarMensaje() {
    return form.message.value.length  == 0
}

 
 
function enviarMail(e){

    e.preventDefault();
    
    var formData = new FormData(form);

    formData.append('service_id', 'service_q3k4wz7');
    formData.append('template_id', 'template_pv8dqq9');
    formData.append('user_id', 'OJgVSR5H8RTrcE5I-');
    formData.append('from_name', 'GAMBEER');
    formData.append('mail_gambeer', 'arieldabbene@gmail.com');
     
    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://api.emailjs.com/api/v1.0/email/send-form', true);
    xhr.onload = function () {
        console.log("Mail enviado por el cliente: "+this.responseText)
        if (this.responseText == "OK"){
            alert("Gracias! Hemos recibido tu mensaje")
        }
    };
    
    xhr.send(formData);

    formData.set('template_id', 'template_g51my49');

    var xhr1 = new XMLHttpRequest();
    xhr1.open('POST', 'https://api.emailjs.com/api/v1.0/email/send-form', true);
    xhr1.onload = function () {
        console.log("Mensaje enviado a Gambeer: "+this.responseText)
    };
    
    xhr1.send(formData);

}

function limpiarFormulario(){
    
    form.to_name.value = ""
    form.client_mail.value = ""
    form.client_phone.value = ""
    form.message.value = ""
}