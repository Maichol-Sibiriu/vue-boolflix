// javascript
const app = new Vue({
  el:'#boolflix',
  data:{

  },
  created(){
     axios.get('https://api.themoviedb.org/3/search/movie',{
       params:{
         api_key: '4b07c066077a749793da32ab86c8cf25',
         query: ''
       }
     })
     .then( response => {
       console.log(response.data);
     })
     .catch( error => {
       console.log(error);
     })
  },
  methods:{

  },
});
