var name="小明";
var age = 19;
function sum(num1, num2){
  return num1 + num2;
}
var flag = true;
if(flag){
  console.log(sum(10,20));
}

//1.导出方式一：
export {
  flag, sum
}

//2.导出方式二：
export let number = 66;
export let height =1.88;

//3.导出函数/类
export function mul(num1, num2){
  return num1 * num2;
}
export class Person{
  run(){
    console.log("在running");
  }
}
//4. export default 在导入时可自定义命名，在同一模块中只能为一个！
// const address = "重庆市";
// export default address;

//还可默认导出函数
export default function(argument){
  console.log(argument);
}