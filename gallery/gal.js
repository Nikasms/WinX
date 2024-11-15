

var mas = ["1.jpeg","3.webp","5.jpeg","6.jpeg","7.jpeg","8.webp","9.jpeg"]
var to = -1;

function right_arrow()
{ 
 var obj = document.getElementById("img");
  if (to < mas.length-1)  to++ 
   else
     to = 0;
     obj.src ="gallery/" + mas[to];	 
}

function left_arrow()
{     
 var obj = document.getElementById("img");
if (to > 0) to--;
  else
    to = mas.length-1;
    obj.src = "gallery/" + mas[to];	  			 
}