
;
//模块B
var moduleB = (function(){
  var name ="小红";
  var flag = false;
  //1.定义一个对象
  var obj = {};
  //2.对象内部添加属性或方法
  obj.flag=flag;
  //3.返回对象
  return obj;

})()