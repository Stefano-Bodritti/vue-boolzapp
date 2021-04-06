var app = new Vue (
  {
    el: "#root",
    data: {
      contacts: [
      {
        name: 'Michele',
        avatar: '_1',
        visible: true,
        selected: true,
        messages: [{
          date: '10/01/2020 15:30:55',
          message: 'Hai portato a spasso il cane?',
          status: 'sent'
        },
        {
          date: '10/01/2020 15:50:00',
          message: 'Ricordati di dargli da mangiare',
          status: 'sent'
        },
        {
          date: '10/01/2020 16:15:22',
          message: 'Tutto fatto!',
          status: 'received'
        }
        ],
      },
      {
        name: 'Fabio',
        avatar: '_2',
        visible: true,
        selected: false,
        messages: [{
          date: '20/03/2020 16:30:00',
          message: 'Ciao come stai?',
          status: 'sent'
        },
        {
          date: '20/03/2020 16:30:55',
          message: 'Bene grazie! Stasera ci vediamo?',
          status: 'received'
        },
        {
          date: '20/03/2020 16:35:00',
          message: 'Mi piacerebbe ma devo andare a fare la spesa.',
          status: 'sent'
        }
        ],
      },
      {
        name: 'Samuele',
        avatar: '_3',
        visible: true,
        selected: false,
        messages: [{
          date: '28/03/2020 10:10:40',
          message: 'La Marianna va in campagna',
          status: 'received'
        },
        {
          date: '28/03/2020 10:20:10',
          message: 'Sicuro di non aver sbagliato chat?',
          status: 'sent'
        },
        {
          date: '28/03/2020 16:15:22',
          message: 'Ah scusa!',
          status: 'received'
        }
        ],
      },
      {
        name: 'Luisa',
        avatar: '_4',
        visible: true,
        selected: false,
        messages: [{
          date: '10/01/2020 15:30:55',
          message: 'Lo sai che ha aperto una nuova pizzeria?',
          status: 'sent'
        },
        {
          date: '10/01/2020 15:50:00',
          message: 'Si, ma preferirei andare al cinema',
          status: 'received'
        }
        ],
      },
    ],
    contactsIndex: 0,
    newMessage: "",
    search: "",
    },
    methods: {
      changeContact: function(index) {
        for (var i = 0; i < this.contacts.length; i++) {
          this.contacts[i].selected = false;
        }
        this.contacts[index].selected = true;
        this.contactsIndex = index;
      },
      sendMessage: function() {
        if ( this.newMessage != "" ) {
          const newMessageObj = {
            date: dayjs().format('DD/MM/YYYY HH:mm:ss'),
            message: this.newMessage,
            status: "sent"
          };
          this.contacts[this.contactsIndex].messages.push(newMessageObj);
          this.newMessage = "";
          //devo salvare queste due variabili perchè il this altrimenti non funziona. in alternativa, scrivere funzione a parte e richiamarla
          const contattoAttivo = this.contacts;
          const indice = this.contactsIndex;
          setTimeout(function() {
            const answer = {
              date: dayjs().format('DD/MM/YYYY HH:mm:ss'),
              message: "ok",
              status: "received"
            };
            contattoAttivo[indice].messages.push(answer);
          }, 1000);
        }
      },
      filterContacts: function() {
        this.contacts.forEach((item) => {
          if ( item.name.includes(this.search) ) {
            item.visible = true;
          } else {
            item.visible = false;
          }
        });
        // versione con ciclo for
        // for (let i = 0; i < this.contacts.length; i++) {
        //   if ( this.contacts[i].name.includes(this.search) ) {
        //     this.contacts[i].visible = true;
        //   } else {
        //     this.contacts[i].visible = false;
        //   }
        // }
      }

    }
  }
);
