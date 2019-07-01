
   /*  == -> Vergleich auf Gleichheit     ( 1 == 1 -> true  / 1 == 2 -> false )
     != -> Vergleich auf Ungleichheit   ( 1 != 1 -> false / 1 != 2 -> true  )

     > -> Vergleich, ob ein Wert größer ist     ( 1 > 1 -> false / 1 > 2 -> false )
     < -> Vergleich, ob ein Wert kleiner ist    ( 1 < 1 -> false / 1 < 2 -> true  )

     >= -> Vergleich, ob ein Wert größer ist    ( 1 >= 1 -> true / 1 >= 2 -> false )
     <= -> Vergleich, ob ein Wert kleiner ist   ( 1 <= 1 -> true / 1 <= 2 -> true  )

      */

/* picturelists (Array) - linieares bzw indiziertes Array */

var picturelist = new Array(
    "gallery/photo_01.jpg",
    "gallery/photo_02.jpg",
    "gallery/photo_03.jpg",
    "gallery/photo_04.jpg",
    "gallery/photo_05.jpg",
    "gallery/photo_06.jpg",
    "gallery/photo_07.jpg",
    "gallery/photo_08.jpg",
    "gallery/photo_09.jpg",
    "gallery/photo_10.jpg"
);

var picindex = 0;

function diashow()
{
    if (picindex == picturelist.length) picindex=0;
    document.display.src = picturelist[picindex];
    picindex++;
           
}

function play()
{
    if (diainterval == undefined){
        picindex++;
        diainterval = setInterval('diashow()',2000);
    }
}

function pause() {
    
if (diainterval != undefined)
{
    picindex--;
    }
        clearInterval(diainterval);
        diainterval = undefined;
}

function shownext()
{   
    /* 
     * 1. Teil - Abfragen, ob die Variable des diashow-Intervals
     * ungleich definiert ist, wenn dies der Fall ist, wird der aktuelle
     * picindex-Wert um eins reduziert.  */

    if (diainterval != undefined) picindex--;   

    clearInterval(diainterval);
    diainterval = undefined;
    
    picindex++;
    if (picindex == picturelist.length) picindex=0;    
    document.display.src = picturelist[picindex];
}

function showlast()
{
    if (diainterval != undefined) picindex--;
    
    clearInterval(diainterval);
    diainterval = undefined;

    picindex--;
    if (picindex == -1) picindex=picturelist.length-1;
    
    document.display.src = picturelist[picindex];
}   