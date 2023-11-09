'use strict'

const mBtn = document.getElementById('btn')

mBtn.addEventListener('click', function () {
    const eMail = document.getElementById('mail');
    const aRray = ['pinco.pallino@gmail.com', 'ciccio.pasticcio@gmail.com', 'mario.carti@gmail.com'];

    if (eMail === 'pinco.pallino@gmail.com') {
        console.log('Accesso autorizzato');
    } else if (eMail === 'ciccio.pasticcio@gmail.com' || 'mario.carti@gmail.com') {
        console.log('Accesso Negato');
    };


});