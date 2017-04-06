$(function () {
  // Create renderer and view
  var container = new PIXI.Container();
  var renderer = PIXI.autoDetectRenderer(1810, 1500, {
    antialias: true,
    backgroundColor : 0x103300
  });
  document.body.appendChild(renderer.view);
  $.get('/json/data.json', function (content) {
	  console.log(content);
    var path = content.path;
    // console.log(path);
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
    dom.setAttribute('style','fill:'+content.fill+'; stroke: '+content.stroke+'; stroke-width: '+content.strokeWidth);
    // console.log(dom);
    var graphics = new PIXI.Graphics();
    // graphics.scale.x = 3;
    // graphics.scale.y = 3;

    // console.log(graphics);
    var svg = document.createElement('svg');
    svg.appendChild(dom);
    console.log(svg);
    container.addChild(graphics);
    SVGGraphics.drawSVG(graphics, svg);
    graphics.x = content.left;
    graphics.y = content.top;
    graphics.width = content.width;
    graphics.height = content.height;
    graphics.scale.x = content.scaleX;
    graphics.scale.y = content.scaleY;
    renderer.render(container);
    console.log(graphics);
  });
});
