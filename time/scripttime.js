function display(){
    // console.log('display');
}
const a=setInterval(display,2000)

// let count=10
// let b=setInterval(function(){
//     console.log(count);
//     count--
//     if(count==0){
//         clearInterval(b)
//         console.log('finish');
        
//     }
// },2000)

function demo(){
    const main=document.querySelector('.main')
    const div=document.createElement('div')
    let count=59
    let min=4
    let b=setInterval(function(){
    div.innerHTML=`<h1 style="color:red"> ${min}:${count}</h1>`
    count--
    if(count==0){
        clearInterval(b)
        console.log('finish');
         div.innerHTML='<h1 style="color:red">completed</h1>'
        
    }
},1000)
min--
    main.appendChild(div)
}
demo()