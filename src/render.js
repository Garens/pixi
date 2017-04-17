

let EventEmitter = require('eventemitter3');

class RenderPath extends EventEmitter
{
  constructor(obj) {
    super();
    console.log(1234);
    this.emit('path',obj.data);

  }
}

module.exports = RenderPath;
