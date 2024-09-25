d=[{name:'anu',age:20,place:'ekm'},{name:'sanu',age:30,place:'tvm'},{name:'manu',age:40,place:'ekm'},{name:'ammu',age:50,place:'tsr'},{name:'arya',age:56,place:'ktm'},{name:'achu',age:60,place:'ksr'}]
d1=[]
d2=[]
for(let i of d){
    if(i.age==20){
        d1.push(i)
    }
    else{
        d2.push(i)
    }
}
   console.log(d1);
   console.log(d2);
   
        