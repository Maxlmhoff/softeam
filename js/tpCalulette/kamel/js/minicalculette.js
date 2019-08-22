function faireCalcule(){
    x = document.getElementById('opérandeG').value
    o = document.getElementById('opéSelect').value
    y = document.getElementById('opérandeD').value

    console.log("x: " + x);
    console.log("Opération: " + o);
    console.log("y: " + y);


    if (isNaN(x) || isNaN(y) || x < 0 || y < 0){
        alert('Error :(');
        return false;
    } else {
        r = eval(x+o+y);
        console.log("Résultat:" + r);
        alert('The result is: ' + eval(x+o+y));
    }
}

/* Un timer qui va vite vous énerver, 
   décommentez le pour le tester */
   
/* setInterval(function(){
    alert('Please Use Me <3');
}, 30000); */