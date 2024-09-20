function day(){
    d=parseInt(document.getElementById("num").value)
    if(d==1){
        document.getElementById("h1").innerHTML='Sunday'
    }
    else if(d==2){
        document.getElementById("h1").innerHTML='Monday'
    }
    else if(d==3){
        document.getElementById("h1").innerHTML='Tuesday'
    }
    else if(d==4){
        document.getElementById("h1").innerHTML='Wednesday'
    }
    else if(d==5){
        document.getElementById("h1").innerHTML='Thursday'
    }
    else if(d==6){
        document.getElementById("h1").innerHTML='Friday'
    }
    else{
        document.getElementById("h1").innerHTML='Saturday'
    }
}
