var i = -1
var height = 0;

function nextColor(){
    i++;
    switch (i%3){
        case 0: return 'red';
        case 1: return 'green';
        case 2: return 'blue';
    }
}


function action(deltaSize, isMouseOut){

    var madiv = document.getElementById('madiv')
    height = madiv.offsetHeight + deltaSize;    
    
    if (isMouseOut){
        nextColor();
    }

    madiv.style.cssText = 'background-color:' +
                                nextColor() + ';' 
    
    if (200 <= height & height <= 420){
        madiv.style.height = height + 'px';
        madiv.style.width = height + 'px';

    }
}




    

