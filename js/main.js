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

        if (this.search.trim() !== '') {
          const list = response.data.results;

          this.list.forEach( film => {

            if (this.list.toLowerCase().includes(this.search.trim().toLowerCase()) === true) {
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

       // console.log(response.data);
      })
      .catch( error => {
       console.log(error);
      })
    }

  },
});
