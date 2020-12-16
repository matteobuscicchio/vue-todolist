// Istruzioni:
// Create una todo list usando VueJS.
// Potete dare sfogo alla creativitá e per quanto riguarda l'HTML e il CSS.
// Se non sapere che fare, di seguito trovate uno screenshot.
// Funzionalitá:
// La nostra todo list avrá alcune tasks di default predefinite
// L'utente puó inserire nuove tasks
// Cliccando sulla "X" l'utente puó cancellare una task
// Se non ci sono piu task nella lista, mostrate un messaggio tipo "Nulla da fare"
// Quando l'utente inserisce una task ha due modi per salvarla: 
// o preme il pulsante add 
// o preme il taso Enter della tastiera.
// Attenzione: l'utente non deve inserire tasks vuote ma almeno un tot di caratteri.
// Da tenere a mente:
// Ricordate di scrivere le istruzioni prima di iniziare a lavorare 
// cercate di descrivere in modo sintetico gli step che pensate siano necessari


let app = new Vue({

    el: '#app',

    data: {
        index: 0,
        item: ["oggetto uno", "oggetto due ", "oggetto tre"], //
    },

    methods: {
        sbmtBtn: function () {
            //questa funzione deve prendere l'item dell'utente per inserirlo nell'array
        },

        deleteItem: function () {
            //questa funzione deve eliminare l'item selezionato dell'utente dall'array
        }
    }
});