
/**
 * @author Garens
 * @date 2017年4月7日10:12:15
 */
 var EventEmitter = require('eventemitter3');

class Scada extends EventEmitter
{
  constructor(objs) {
    super();
    this.objects = objs;
  }

  init(objs) {
    this.objects = objs;
  }

  get objects()
  {
    return this._objects;
  }

  set objects(arr)
  {
    this._objects = arr;
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
module.exports = Scada;
