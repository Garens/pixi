// import Scada from 'main.boudle.js'
console.log(Scada);
new Vue({
  el: '#app',
  data:{
  },
  mounted: function () {
    this.$nextTick(function () {
    this.initScada();
    })
  },
  methods:{
    initScada: function() {
      console.log(Scada.test = 2);
      // var test = new Scada();
      // console.log(new Scada([]));
    }

  }
})
