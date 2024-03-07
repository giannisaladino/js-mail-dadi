// 1 RICHIAMO GLI ELEMENTI DI INPUT DALL'HTML

let containerElement = document.querySelector('.container');

const inputEmailDOMElement = document.getElementById('email');
const buttonDOMElement = document.querySelector('.submit');

// 2 CONTROLLO CHE LA MAIL INVIATA DALL'UTENTE SIA PRESENTE NELLA LISTA DI CHI PUO ACCEDERE

//  - dichiaro un array con i soli utenti che hanno l'accesso
const autorizedUsers = ['pippo@gmail.com', 'ciao@libero.it', 'pippo@pluto.com'];


let trovato = false;

//  - nel momento in cui l'utente invierà la sua mail tramite il 'submit', verifico se è presente nella lista con un ciclo

buttonDOMElement.addEventListener('click', function () {

    const userEmail = inputEmailDOMElement.value;

    for(let i = 0; i < autorizedUsers.length; i++) {
        // console.log(autorizedUsers[i]);
        
        // - SE è presente stampo il messaggio 'accesso consentito'
        if (userEmail === autorizedUsers[i]) {
            trovato = true;
        }
    }

    if(trovato === true) {
        containerElement.innerHTML += `<h2 class="green">Benvenuto, sei in lista!</h2>`;
        // console.log('accesso consentito');
        // console.log('accesso consentito');
    
    } else {
        containerElement.innerHTML += `<h2 class="red">Oh no, non sei presente in lista :(</h2>`;
        // console.log('accesso negato');
    }
})





