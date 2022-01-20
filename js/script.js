new Vue({
    el: "#app",
    data: {
        filteredContacts: [],
        contacts: [
            {
                name: 'Michele',
                avatar: './img/avatar_1.jpg',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        text: 'Hai portato a spasso il cane?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        text: 'Ricordati di dargli da mangiare',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 16:15:22',
                        text: 'Tutto fatto!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Fabio',
                avatar: './img/avatar_2.jpg',
                visible: true,
                messages: [
                    {
                        date: '20/03/2020 16:30:00',
                        text: 'Ciao come stai?',
                        status: 'sent'
                    },
                    {
                        date: '20/03/2020 16:30:55',
                        text: 'Bene grazie! Stasera ci vediamo?',
                        status: 'received'
                    },
                    {
                        date: '20/03/2020 16:35:00',
                        text: 'Mi piacerebbe ma devo andare a fare la spesa.',
                        status: 'sent'
                    }
                ],
            },

            {
                name: 'Samuele',
                avatar: './img/avatar_3.jpg',
                visible: true,
                messages: [
                    {
                        date: '28/03/2020 10:10:40',
                        text: 'La Marianna va in campagna',
                        status: 'received'
                    },
                    {
                        date: '28/03/2020 10:20:10',
                        text: 'Sicuro di non aver sbagliato chat?',
                        status: 'sent'
                    },
                    {
                        date: '28/03/2020 16:15:22',
                        text: 'Ah scusa!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Andrea',
                avatar: './img/avatar_4.jpg',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        text: 'Lo sai che ha aperto una nuova pizzeria?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        text: 'Si, ma preferirei andare al cinema',
                        status: 'received'
                    }
                ],
            },
        ],
        currentIndex: 0,
        autoPlayMessage: null,
        searchName: '',
        newCurrentIndex: 0,



        innerText:
        {
            date: '',
            text: '',
            status: 'sent'
        },

        autoText:
        {
            // prova la risposta con il nome a chi è indirizzato
            date: '',
            text: 'Ciao',
            status: 'received'
        }


    },

    methods: {
        sentMessage: function (message) {
            let classesSent = [];
            if (message.status === 'sent') {
                classesSent.push('sent')
            }
            if (message.status === 'received') {
                classesSent.push('received')
            }
            // if(message.status = 'received') {
            //     classesSent.push('received')
            // }
            return classesSent;
        },

        setCurrentContact: function (i) {
            this.currentIndex = i;
            this.newCurrentIndex = i;
        },

        autoMessage: function (currentIndex) {
            this.autoPlayMessage = setTimeout(() => {
                this.contacts[currentIndex].messages.push(this.autoText);
            }, 1000)
        },

        addItemText: function (currentIndex) {
            if (this.innerText.text !== '') {
                this.contacts[currentIndex].messages.push(this.innerText);
                this.innerText = {
                    date: '',
                    text: '',
                    status: 'sent'
                }
                this.autoMessage(currentIndex)
            }
        },

        searchContact: function () {
            this.filteredContacts = this.contacts.filter((contact) =>
                contact.name.toLowerCase().match(this.searchName.toLowerCase())
            )
        },
    },  



})

