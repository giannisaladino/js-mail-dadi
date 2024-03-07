// 1 RICHIAMO GLI ELEMENTI DI INPUT DALL'HTML

const inputEmailDOMElement = document.getElementById('email');
const buttonDOMElement = document.querySelector('.submit');

// 2 CONTROLLO CHE LA MAIL INVIATA DALL'UTENTE SIA PRESENTE NELLA LISTA DI CHI PUO ACCEDERE

//  - dichiaro un array con i soli utenti che hanno l'accesso
const autorizedUsers = ['pippo@gmail.com', 'ciao@libero.it'];

//  - nel momento in cui l'utente invierà la sua mail tramite il 'submit', verifico se è presente nella lista con un ciclo

buttonDOMElement.addEventListener('click', function () {

    const userEmail = inputEmailDOMElement.value;

    for(let i = 0; i < autorizedUsers.length; i++) {
        // console.log(autorizedUsers[i]);
        
        // - SE è presente stampo il messaggio 'accesso consentito'
        if (userEmail === autorizedUsers[i]) {
            console.log('accesso consentito');
        }
        // - ALTRIMENTI stampo il messaggio 'accesso negato'
        // else {
        //     console.log('accesso negato');
        // } 
    }
    
    
    
})


