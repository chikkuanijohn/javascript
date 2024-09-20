function salary(){
    e=parseInt(document.getElementById("expr").value)
    y=parseInt(document.getElementById("salry").value)
    if(y>5){
        document.getElementById("h1").innerHTML=(y*0.05)+y
    }
    else{
        document.getElementById("h1").innerHTML=y
    }
}
