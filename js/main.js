// javascript
const app = new Vue({
  el:'#boolflix',
  data:{

    // riferimento input
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
        }
      })
      .then( response => {
        // console.log(response.data);

        if (this.search !== '') {
          let list = response.data.results;

          list.forEach( film => {

            if (film.title.toLowerCase().includes(this.search.toLowerCase()) || film.original_title.toLowerCase().includes(this.search.toLowerCase()) ) {
              this.obj.push({
                title: film.title,
                original_title: film.original_title,
                original_language: film.original_language,
                vote_average: film.vote_average,
              })
            }

          });

        }

        this.search = '';

      })
      .catch( error => {
       console.log(error);
      })
    },

    // voti stelline
    star(vote){
      return Math.ceil(element.vote_average / 2);
    },

  },
});
