let count = 0.059;  

function countdown() {
    console.log(count.toFixed(3));  
    count -= 0.001;  

    if (count > 0) {
        setTimeout(countdown, 1);  
    } else {
        console.log('completed');
    }
}

setTimeout(countdown, 1); 
