i=0;

function action(delta)
{
    var tailmax = 420;
    var tailmin = 200;
    //on récupère l'objet
    var elem = document.getElementById("rond-milieu");
    //largeur
    var larginit = parseInt(elem.offsetWidth);
    console.log(larginit)
     if (larginit < tailmax && larginit + delta >= tailmin)
        {larginit = larginit + delta;}
    else{larginit = 200;}
    elem.style.width = larginit + "px";
    //longueur
    var longinit = parseInt(elem.offsetHeight);
    console.log(longinit)
    if (longinit < tailmax &&  longinit + delta >= tailmin)
        {longinit = longinit + delta;}
    else{longinit = 200;}
    elem.style.height = longinit + "px";
    //couleur
    var arr = new Array("red", "green","blue");
 //   for (i=0; i <arr.length; i++)
 //       {
      if( delta > 0 ) {
          elem.style.backgroundColor = arr[i%3];
          console.log(arr);
          console.log(i);
          i++;
          }
         /*   else {
                elem.style.backgroundColor = arr(i--);
                }*/
//        }
}