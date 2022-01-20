new Vue({
    el: "#app",
    data: {
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

        // filteredContacts: [],
        currentIndex: 0,
        autoPlayMessage: null,
        searchName: '',
        innerText: '',
        autoText: 'Ciao come stai?'

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
            return classesSent;
        },

        setCurrentContact: function (i) {
            this.currentIndex = i;
        },

        addItemText: function (currentIndex) {
            if (this.innerText.text !== '') {
                this.contacts[currentIndex].messages.push({
                    date: this.getDate(),
                    text: this.innerText,
                    status: 'sent'
                })
                this.innerText = '';
                setTimeout(() => {
                    this.autoMessage(currentIndex)
                }, 1000)
                }
            },

        autoMessage: function (currentIndex) {
            this.contacts[currentIndex].messages.push({ 
                date: this.getDate(),
                text: this.autoText,
                status: 'received'
            })
        },
        
        getDate: function() {
            return dayjs().format('DD/MM/YYYY HH:mm:ss')
        },
    
    },


})
            


        // tengo anche questa soluzione per futuro ripasso

        // searchContact: function () {
        //     this.filteredContacts = this.contacts.filter((contact) =>
        //         contact.name.toLowerCase().includes (this.searchName.toLowerCase())
        //     )
        // },
        // },  





