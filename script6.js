function city(){
    a=document.getElementById("city").value
    if (a=="delhi")
    {
        document.getElementById("h1").innerHTML="redfort"
    }
    else if(a=="agra")
    {
        document.getElementById("h1").innerHTML="Tajmahal"
    }
    else if(a=="jaipur")
    {
        document.getElementById("h1").innerHTML="Jai Mahal"
    }
    else{
        document.getElementById("h1").innerHTML="invalid"
    }
}