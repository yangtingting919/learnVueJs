  import {flag, sum} from './xiaoming.js'
  
  //想使用flag(小明之前定义的flag)
  if(flag){
    console.log("打印出小明");
  }

  console.log(sum(11, 22));

  import {number, height} from "./xiaoming.js";
  console.log(number);
  console.log(height);

  import {mul, Person} from "./xiaoming.js";
  console.log(mul(22,22));

  var p = new Person();
  p.run();

  //导入 export default中的内容
  import addr from "./xiaoming.js";//不需{} 且可自定义名
  // console.log(addr);
  addr("hahahahah");

  //当导入的内容较多时
  import * as request from "./xiaoming.js";
  //注意，export *命令会忽略模块里面的default方法。
  // request.addr("dddd");//报错
  console.log(request.sum(11,11));