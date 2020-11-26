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
  },
  created(){

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

  },
});
