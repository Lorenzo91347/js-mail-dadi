'use strict'
// id bottone e array di mails
const mBtn = document.getElementById('btn')
const aRray = ["pinco.pallino@gmail.com", "ciccio.pasticcio@gmail.com", "mario.carti@gmail.com"];

// event listener con recupero del valore dell'input e condizionali

mBtn.addEventListener('click', function () {
    const eMail = document.getElementById('mail').value;


    if (eMail === aRray[0]) {
        console.log('Accesso Autorizzato')
    } else if (eMail === aRray[1] || aRray[2]) {
        console.log('Accesso Negato')
    };




});