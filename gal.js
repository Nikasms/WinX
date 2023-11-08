var mas = ["Венеракопія.jpg","Землякопіячjpg","Марскопія.jpg","Меркурійкопія.jpg""] // массив картинок
var to = -1;  // Счетчик, указывающий на текущую картинки

function right_arrow() // Открытие следующей картинки(движение вправо)
{ 
 var obj = document.getElementById("img");
  if (to < mas.length-1)  to++ 
   else
     to = 0;
     obj.src = mas[to];	 
}

function left_arrow() // Открытие предыдущей картинки(движение влево)
{     
 var obj = document.getElementById("img");
if (to > 0) to--;
  else
    to = mas.length-1;
    obj.src = mas[to];	  			 
}