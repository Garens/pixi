/**
 * @author Garens
 * @date 2017年4月7日10:12:15
 */
 var EventEmitter = require('eventemitter3');

export default class Scada extends EventEmitter
{
  /**
   * 初始化构造函数，把objects对象传入到类当中
   * @param  {Array} objects 元素对象数组
   */
  constructor(objects){
    this.objects = objects;
  }
}
