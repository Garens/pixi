
new Vue({
  el: '#app',
  data:{
  },
  mounted: function () {
    this.$nextTick(function () {
    this.initScada();
    // this.getObjects();
    // this.showObjects();
    })
  },
  methods:{
    initScada: function() {
      // var scada =
      this.scada = new Scada();
      // setInterval(function(){
      //   scada.emit('test',{name:'name1'});
      // },1000);
      //
      // scada.on('test',function(obj){
      //   console.log(obj);
      // })
    },
    getObjects: function() {
      var _this = this;
      axios.get('/getDeviceList').then(function(res){
        var objs = res.data;
        console.log(objs);
        _this.scada.objects = objs;
      })
    },
    test1: function() {
      this.scada.init([{name:111}]);
      console.log(this.scada);
    }

  }
})
