const Offer = {
    data() {
        return {
            "student": [],
            "selectedStudent": null,
            "books": [],
            "offers": [],
            offerForm: {}
        }
    },
    computed: {
        prettyBirthday() {
            return dayjs(this.person.dob.date).format('D MMM YYYY')
        }
    },
    methods: {
        selectStudent(s) {
            if (this.selectedStudent == s) {
                return;
            }
            this.selectedStudent = s;
            this.offers = [];
            this.fetchOfferData(s);
        },
        fetchBooksData() {
            fetch('/api/books/')
                .then(response => response.json())
                .then((responseJson) => {
                    console.log(responseJson);
                    this.books = responseJson;
                })
                .catch((err) => {
                    console.error(err);
                })
        },
        postNewBook(evt) {
            
            console.log("Posting!", this.offerForm);
    
            fetch('api/books/create.php', {
                method:'POST',
                body: JSON.stringify(this.offerForm),
                headers: {
                  "Content-Type": "application/json; charset=utf-8"
                }
              })
              .then( response => response.json() )
              .then( json => {
                console.log("Returned from post:", json);
                // TODO: test a result was returned!
                this.books = json;
                
                // reset the form
                this.offerForm = {};

                this.fetchBooksData()
              });
          }
    },
    created() {
            this.fetchBooksData();
    }
}
Vue.createApp(Offer).mount('#offerApp');