'use strict'

const mBtn = document.getElementById('btn')
const aRray = ['pinco.pallino@gmail.com', 'ciccio.pasticcio@gmail.com', 'mario.carti@gmail.com'];
let mail1 = aRray[0]
let mail2 = aRray[1]
let mail3 = aRray[2]

mBtn.addEventListener('click', function () {
    const eMail = document.getElementById('mail').value;


    if (eMail.value === mail1) {
        console.log('Accesso Autorizzato')
        break;
    } else if (eMail.value === mail2 || mail3) {
        console.log('Accesso Negato')
    };




});