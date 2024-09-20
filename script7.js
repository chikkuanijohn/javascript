function lastdigit(){
    n=parseInt(document.getElementById("num").value)
    const d=n%10
    if (d%3==0){
        document.getElementById("h1").innerHTML=' divisible by 3'  
    }
    else{
        document.getElementById("h1").innerHTML='not divisible by 3 '
    }
}