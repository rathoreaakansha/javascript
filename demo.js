// let obj={0:"abc",
//          undefined:"def"
// }
// console.log(obj[0])
// function A()
// {    let a=10
//     console.log(a)
//     A()
// }
// A()
function sum(a,b,callback)
{   
    
    let result=a+b
   callback()
}
sum(10,20,()=>{
    console.log(result)
})