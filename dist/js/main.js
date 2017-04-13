
new Vue({
  el: '#app',
  data:{
  },
  mounted: function () {
    this.$nextTick(function () {
      this.initScada();
      this.getObjects();
      this.switchRender();
      this.initPixi();
      this.testDraw();
    })
  },
  methods:{
    initPixi:function(){
      this.container = new PIXI.Container();
      this.app = new PIXI.autoDetectRenderer(1500, 900, {backgroundColor : '0x103399'});
      document.getElementById('app').appendChild(this.app.view);
    },
    initScada: function() {
      // var scada =
      this.scada = new Scada();
    },
    getObjects: function() {
      var _this = this;
      axios.get('/getDeviceList').then(function(res){
        console.log(res);
        var objs = res.data;
        _this.scada.init(objs);
      })
    },
    test1: function() {
      this.app.render(this.container);
      console.log(this.scada);
    },
    /**
     * 根据不同type进行渲染不同类型图元总开关
     * @return {[type]} [description]
     */
    switchRender: function() {
      var _this = this;
      this.scada.on('path',function(obj) {
          _this.renderPath(obj);
      });
      this.scada.on('rect',function(obj) {
          _this.renderRect(obj);
      });
    },

    /**
     * 渲染矩形
     * @param  {Object} obj 矩形json数据
     * @return {[type]}     [description]
     */
    renderRect: function(obj) {
      var fillColor = color2color(obj.fill,'int');
      var strokeColor = '';
      if(obj.stroke) {
        strokeColor = color2color(obj.stroke,'int');
      }
      var graphics = new PIXI.Graphics();
      if(obj.stroke) {
        graphics.lineStyle(obj.strokeWidth, strokeColor, 1);
      }
      graphics.beginFill(fillColor, obj.opacity);
      // graphics.drawRoundedRect(obj.left, obj.top, obj.width, obj.height, 0);
      graphics.drawRect(0,0,100,100);
      graphics.endFill();
      // this.container.addChild(graphics);
      //属性设置
      graphics.x = obj.left;
      graphics.y = obj.top;
      graphics.width = obj.width;
      graphics.height = obj.height;
      graphics.scale.x = obj.scaleX;
      graphics.scale.y = obj.scaleY;
      this.container.addChild(graphics);
      this.app.render(this.container);
    },

    /**
     * 渲染路径的方法 type="path"
     * @param  {Object} obj [description]
     * @return {[type]}     [description]
     */
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
    },

    /**
     * 测试渲染多个图元
     * @return {[type]}            [description]
     */
    testDraw() {
      var _this = this;
      for (var i = 0; i < 100000; i++) {
          createBunny(
              Math.floor(Math.random() * 1400),
              Math.floor(Math.random() * 800)
          );
        }

          function createBunny(x, y) {
            var graphics = new PIXI.Graphics();

            // set a fill and line style
            graphics.beginFill(0xFF3300);
            graphics.lineStyle(4, 0xffd900, 1);

            // draw a shape
            graphics.moveTo(50,50);
            graphics.lineTo(250, 50);
            graphics.lineTo(100, 100);
            graphics.lineTo(50, 50);
            graphics.endFill();
              graphics.x = x;
              graphics.y = y;
              graphics.scale = {x:0.5,y:0.5};

              _this.container.addChild(graphics);
            }

        }
  }
})
