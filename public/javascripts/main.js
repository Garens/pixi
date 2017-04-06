
new Vue({
  el: '#app',
  data:{
    title:'test'
  },
  mounted: function () {
    this.$nextTick(function () {
      // 代码保证 this.$el 在 document 中
      this.initPixi();
      this.getJsonData();
    })
  },
  methods:{
    initPixi:function(){
      this.container = new PIXI.Container();
      this.app = new PIXI.autoDetectRenderer(1000, 800, {backgroundColor : '0x103300'});
      document.getElementById('app').appendChild(this.app.view);
    },
    getJsonData:function(){
      this.$http.get('/json/data.json').then(function(res){
        var obj = res.body;
        // console.log(obj);
        this.renderPath(obj);
      });
    },
    renderPath:function(obj){
      var path = obj.path;
      var str = '';
      for(var i = 0;i<path.length;i++){
        for(var j = 0;j<path[i].length;j++){
          str += path[i][j];
          if((j != 0) && (j != path[i].length-1)){
            str +=',';
          }
        }
        str +=' ';
      }

      var dom = document.createElement('path');
      dom.setAttribute('d',str);
      dom.setAttribute('style','fill:'+obj.fill+'; stroke: '+obj.stroke+'; stroke-width: '+obj.strokeWidth);
      var graphics = new PIXI.Graphics();
      var svg = document.createElement('svg');
      svg.appendChild(dom);

      this.container.addChild(graphics);
      SVGGraphics.drawSVG(graphics, svg);
      //属性设置
      graphics.x = obj.left;
      graphics.y = obj.top;
      graphics.width = obj.width;
      graphics.height = obj.height;
      graphics.scale.x = obj.scaleX;
      graphics.scale.y = obj.scaleY;
      this.app.render(this.container);
    }

  }
})
