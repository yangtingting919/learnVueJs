;
(function(){
  //1.想使用flag(小明之前定义的flag)
  if(moduleA.flag){
    console.log("打印出小明");
  }

  //2.使用sum函数
  console.log(moduleA.sum(22,33)) ;
})()