

var mas = ["1.webp","2.jpg","3.","4.jpg","5.jpg","6.jpg","7.jpg","8.jpg","9.jpg"]
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