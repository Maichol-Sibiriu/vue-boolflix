// javascript
const app = new Vue({
  el:'#boolflix',
  data:{

    // riferimento input per ricerca
    search: '',

    // array vuoto per ricerca film
    obj: [],

    // immagine film
    imgMovie: 'https://image.tmdb.org/t/p/w154',

    // array vuoto per selezione generi
    selection: [],

    // riferimento per selezione generi
    type: "all",

  },
  created(){
    this.selectGen();
  },
  methods:{

    searchMovie(){

      this.obj = [];

      // films
      axios.get('https://api.themoviedb.org/3/search/movie',{
        params:{
         api_key: '4b07c066077a749793da32ab86c8cf25',
         query: this.search,
         language: 'it-IT'
        }
      })
      .then( response => {

        this.obj = this.obj.concat(response.data.results);

        this.search = '';

      })
      .catch( error => {
       console.log(error);
      })

      // serie tv
      axios.get('https://api.themoviedb.org/3/search/tv',{
        params:{
         api_key: '4b07c066077a749793da32ab86c8cf25',
         query: this.search,
         language: 'it-IT'
        }
      })
      .then( response => {

        this.obj = this.obj.concat(response.data.results);

        this.search = '';

      })
      .catch( error => {
       console.log(error);
      })
    },

    // stars
    star(vote){
      return Math.ceil(vote / 2);
    },

    // selezione generi
    selectGen(){
      axios.get('https://api.themoviedb.org/3/genre/movie/list',{
        params:{
         api_key: '4b07c066077a749793da32ab86c8cf25',
         language: 'it-IT',
        }
      })
      .then( response => {

        this.selection = response.data.genres;
        console.log(this.selection);

        // if (this.type !== "all" ) {
        //
        //   this.selection = this.selection.filter( type => type.id === this.type);
        //
        // }
        //
        // this.selection = response.data.genres;
        // return this.selection.filter( type => type.name.toLowerCase() === type.name.toLowerCase()

      })
      .catch( error => {
       console.log(error);
      });
    },
  },
});
