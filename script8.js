function sample(){
    p=parseInt(document.getElementById("price").value)
    if (p>100000){
        document.getElementById("h1").innerHTML=p*0.15
    }
    else if(p>50000 && p<=100000){
        document.getElementById("h1").innerHTML=p*0.10
    }
    else if(p<=50000){
        document.getElementById("h1").innerHTML=p*0.05
    }
    else{
        document.getElementById("h1").innerHTML='no tax'
    }
}