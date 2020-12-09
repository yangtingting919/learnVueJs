
//模块A
var moduleA = (function(){

  var name="小明";
  var age = 19;
  function sum(num1, num2){
    return num1 + num2;
  }
  var flag = true;
  if(flag){
    console.log(sum(10,20));
  }

  //1.定义一个对象
  var obj={};
  //2.对象内部添加属性或方法
  obj.flag = flag;
  obj.sum = sum;
  //3.返回对象
  return obj;

})();
