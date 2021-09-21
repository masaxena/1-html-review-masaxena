const Offer= {
    data() {
    return{
    "person":{},
    "info":[
     {
    "name": "Manvi",
    "country":"USA",
    "birthday":"25 March",
    "age":"36",
    "email":"manvi@yahoo.com",
    "phone":"5647383947",
    "image": 'img/k3g.jpg'
     
     },
     {
    "name": "Nikhil",
    "country":"India",
    "birthday":"3 December",
    "age":"22",
    "email":"niks@gmail.com",
    "phone":"74839274748",
    "image": 'img/kitten.jpg'
     
     }
     ]
     }
     },
     
     computed: {
        prettyBirthday() {
            return dayjs(this.person.dob.date).format('D MMM YYYY')
        }
    },

    created(){
    fetch('https://randomuser.me/api/')
     .then(response => response.json())
     .then((responseJson) => {
    console.log(responseJson); //for debugging
    this.person =responseJson.results[0];
     })
     .catch((err) => {
    console.error(err);
     })
     }
    }
    Vue.createApp(Offer).mount('#offerApp')