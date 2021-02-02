const app = new Vue({
  // inizio app
  el: '#root',
  // sezione dati
  data: {
    // contatti
    contacts: [
    {
        name: 'Michele',
        avatar: '_1',
        visible: true,
        ultimoAccesso: '16:15',
        messages: [
            {
                date: '10/01/2020 15:30:55',
                text: 'Hai portato a spasso il cane? Fagli fare un giro lungo che non esce da un po.',
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
        avatar: '_2',
        visible: false,
        ultimoAccesso: '16:35',
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
        avatar: '_3',
        visible: false,
        ultimoAccesso: '17:45',
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
        name: 'Luisa',
        avatar: '_6',
        visible: false,
        ultimoAccesso: '15:50',
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
// / contatti
mio_utente: {
  name: 'Matteo',
  surname: 'Meago',
  avatar: {
    url: '_5',
    alt: 'mio_utente',
  }
},
icone: {
  mex: 'fas fa-comment-alt',
  circle: 'fas fa-circle-notch',
  setting: 'fas fa-ellipsis-v',
  alarm_off: 'fas fa-bell-slash',
  search: 'fas fa-search',
  allegati: 'fas fa-paperclip',
  smile: 'far fa-smile-wink',
  microfono: 'fas fa-microphone',
},
nuovoMessaggio: '',
dataOdierna: new Date(),
  },
  methods: {
    attivaUtente: function(index){
      this.contacts.forEach((item) => {
        item.visible = false;
      });
      this.contacts[index].visible = true;
    },
    aggiungiMessaggio: function(){
      let mex = this.nuovoMessaggio;
      let data = this.dataOdierna;
      let giorno = data.getDate();
      let mese = data.getMonth() +1;
      let ora = data.getHours();
      let minuti = data.getMinutes();
      let array = [];
      array.push(giorno, mese, ora, minuti);
      for(let x = 0; x < array.length; x++){
        if(array[x] < 10){
          array[x] = '0' + array[x];
        }
      }
      let today = array[0] + '/' + array[1] + '/' + data.getFullYear() + ' ' + array[2] + ':' + array[3];
      this.contacts.forEach((item) => {
        if(item.visible === true){
          item.messages.push({
            date: today,
            text: mex,
            status: 'sent',
          })
        }
        this.nuovoMessaggio = '';
        setTimeout(function(){
          if(item.visible === true){
            item.messages.push({
              date: today,
              text: 'ok',
              status: 'received',
            })
          }
        }, 1000);
      });
    },
    excerpt: function(text, n1){
      if(text.length > n1){
        return text.slice(0, n1) + '...'
      }else{
        return text
      }
    }
  },
})
Vue.config.devtools = true;
