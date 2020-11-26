// javascript
const app = new Vue({
  el:'#boolflix',
  data:{

    // riferimento input per ricerca
    search: '',

    // array vuoto per ricerca
    obj: [],

  },
  created(){

  },
  methods:{

    searchMovie(){

      axios.get('https://api.themoviedb.org/3/search/movie',{
        params:{
         api_key: '4b07c066077a749793da32ab86c8cf25',
         query: this.search,
         language: 'it-IT'
        }
      })
      .then( response => {

        this.obj = response.data.results;

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

    // language
    language(lan){
      if (element.original_language === en) {
        return en;
      }
      else {
        return it;
      }
    }

  },
});
