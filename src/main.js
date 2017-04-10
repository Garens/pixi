
/**
 * @author Garens
 * @date 2017年4月7日10:12:15
 */
 // var EventEmitter = require('eventemitter3');

export default class Scada// extends EventEmitter
{
  constructor(objs){
    this.objects = objs;
  }

  init(objs)
  {
    console.log(objs);
  }
  test(o)
  {
    return o;
  }
}
// function Scada(){
//   console.log(123);
// }
// Scada.prototype.init = function(objs){
//   this.objs = objs;
//   console.log(1);
// }
//
// module.exports = Scada;
