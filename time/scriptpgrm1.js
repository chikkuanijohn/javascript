// function demo(){
    //     let a='welcome all'
    //     console.log(a);
    //     const main=document.querySelector('.main')
    //     const div=document.createElement('div')
    //     const h2=document.createElement('h2')
    //     h2.textContent=a
    //     div.appendChild(h2)
    //     main.appendChild(div)
    // }
    
    
    function demo(){
        let a='welcome all'
        console.log(a);
        const main=document.querySelector('.main')
        const div=document.createElement('div')
        div.innerHTML='<h1 style="color:red">${a}</h1>'
        div.innerHTML='<h1 style="color:red"><p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos, quidem quod voluptate, ut natus dolores ad libero alias fugit ex sunt provident excepturi! Dolorum tempore sequi, voluptate beatae incidunt dolore.</p></h1>'
        main.appendChild(div)
    }
    demo()