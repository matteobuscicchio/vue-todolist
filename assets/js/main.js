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
        newUserText: '',
        item: ['a','s','d','f','g','h'],
        doneItem: [1,2,3,4,5,6],
    },

    methods: {
        addTask() {
            if (this.newUserText.length > 5) {
                this.item.unshift(this.newUserText);
                this.newUserText = '';
            }
        },
        deleteTask(toDelete){
            this.item.splice(toDelete,1);
        },
        // BONUS
        taskDone(taskAccomplished){},
        deleteDoneTask(toDelete){
            this.doneItem.splice(toDelete,1);
        }
    }
});