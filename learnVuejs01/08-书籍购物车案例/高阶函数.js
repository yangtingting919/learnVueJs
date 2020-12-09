//编程范式：命令式编程/声明式编程
//编程范式：面向对象编程（第一公民：对象）/函数式编程（第一公民：函数）
//以前做法
const nums=[10,20,111,222,444,40,50];

//1.需求：取出所有小于100的数字
let newNums=[];
for(let n of nums){
    if(n < 100){
        newNums.push(n);
    }
}
console.log(newNums);


//2.需求：将所有小于100的数字进行转化：全部*2
let new2Nums=[];
for(let n of newNums){
    new2Nums.push(n * 2);
}
console.log(new2Nums);

//3.需求：将所有new2Nums数字相加，得到最终结果
let total=0;
for(let n of new2Nums){
    total+=n;
}
console.log(total);



//可用高阶函数 filter/map/reduce
//高阶函数--> 高阶函数可接收函数作为参数，也可将函数作为结果值返回

//filter 将符合条件的过滤出来并返回一个新的数组
const numsArr=[10,20,111,222,444,40,50];
let newNumsArr=numsArr.filter(function(n){
    return n < 100 ;//true或者false
});
console.log(newNumsArr);

//map
let new2NumsArr=newNumsArr.map(function(n){
    return n * 2
});
console.log(new2NumsArr);

//reduce
let totalResult=new2NumsArr.reduce(function(x,y){
    return x + y;
});
// let totalResult=new2NumsArr.reduce(function(x,y){
//     return x + y;
// },0);//这两中方式都可,这种方式可设置初始值。
console.log(totalResult);

//还可简写为-->
let totalSum=numsArr.filter(function(n){
    return n < 100
}).map(function(n){
    return n * 2
}).reduce(function(x,y){
    return x + y;
})
console.log(totalSum);
//用箭头函数简写
let tSum=numsArr.filter(n=>n<100).map(n=>n*2).reduce((x,y)=>x+y);//箭头函数中，一条语句可省略{}与return,若包含多条则不能省略
console.log(tSum);