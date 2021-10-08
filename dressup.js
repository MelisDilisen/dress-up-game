window.onload=init;

function init(){
    currentstatus.i=1;
    currentstatus.j=1;
    currentstatus.k=1;
    currentstatus.l=1;
    currentstatus.m=1;
    currentstatus.n=1;
}

var currentstatus = {i:0, j:0, k:0, l:0, m:0, n:0};

function look(){
  var com1 = new Array("You look fantastic", "Hey Babe!", "You look smokin", "You look good", "You look meh...", "You better ask someone who has sense of fashion", "Keep your daily job", "Just change your shoes", "Make some adjustments on your outfit","You SUCK!");
  var ranNum = Math.floor(Math.random() * com1.length);
  var com2 = com1[ranNum];
  document.getElementById("comment").innerHTML = com2;
}

function nextdress(){
    var dress=document.getElementById("clothes");
    if(currentstatus.i===0){
    dress.setAttribute("class","dress1");
        currentstatus.i++;
    }
    else
     if(currentstatus.i===1){
    dress.setAttribute("class","dress2");
         currentstatus.i++;
   }
    else
     if(currentstatus.i===2){
    dress.setAttribute("class","dress3");
         currentstatus.i++;
       }
    else
     if(currentstatus.i===3){
    dress.setAttribute("class","dress4");
         currentstatus.i++;
      }
    else
     if(currentstatus.i===4){
    dress.setAttribute("class","dress5");
         currentstatus.i=0;
    }
}

function nextbottom(){
    var bottom =document.getElementById("pants");
    if(currentstatus.j===0){
    bottom.setAttribute("class","bottom1");
        currentstatus.j++;
    }
    else if(currentstatus.j===1){
    bottom.setAttribute("class","bottom2");
         currentstatus.j++;
    }
  else if(currentstatus.j===2){
    bottom.setAttribute("class","bottom3");
         currentstatus.j++;
        }
  else if(currentstatus.j===3){
    bottom.setAttribute("class","bottom4");
         currentstatus.j++;
    }
  else if(currentstatus.j===4){
    bottom.setAttribute("class","bottom5");
         currentstatus.j=0;
    }
}

function nexthair(){
    var hairf=document.getElementById("hair");
    if(currentstatus.k===0){
    hairf.setAttribute("class","hair1");
        currentstatus.k++;
    }
    else if(currentstatus.k===1){
    hairf.setAttribute("class","hair2");
         currentstatus.k++;
    }
    else if(currentstatus.k===2){
    hairf.setAttribute("class","hair3");
         currentstatus.k++;
    }
    else if(currentstatus.k===3){
    hairf.setAttribute("class","hair4");
         currentstatus.k++;
    }
    else if(currentstatus.k===4){
    hairf.setAttribute("class","hair5");
         currentstatus.k=0;
    }
}


function nextchar(){
    console.log("inside function nextchar");
    console.log(currentstatus.i);
    var char=document.getElementById("character");
    if(currentstatus.l===0){
    char.setAttribute("class","char1");
        currentstatus.l++;
    }
    else if(currentstatus.l===1){
    char.setAttribute("class","char2");
         currentstatus.l++;
   }
  else if(currentstatus.l===2){
    char.setAttribute("class","char3");
         currentstatus.l=0;
    }
}

function nextshoes(){
    var shoe=document.getElementById("shoe");
    if(currentstatus.m===0){
    shoe.setAttribute("class","shoes1");
        currentstatus.m++;
    }
    else if(currentstatus.m===1){
    shoe.setAttribute("class","shoes2");
         currentstatus.m++;
   }
    else if(currentstatus.m===2){
    shoe.setAttribute("class","shoes3");
         currentstatus.m++;
      }
    else if(currentstatus.m===3){
    shoe.setAttribute("class","shoes4");
         currentstatus.m++;
     }
    else if(currentstatus.m===4){
    shoe.setAttribute("class","shoes5");
         currentstatus.m=0;
    }
}

function nextbg(){
  var bg=document.getElementById("bg");
  if(currentstatus.n===0){
    bg.setAttribute("class","back1");
        currentstatus.n++;
    }
  else if(currentstatus.n===1){
    bg.setAttribute("class","back2");
         currentstatus.n++;
   }
  else if(currentstatus.n===2){
    bg.setAttribute("class","back3");
         currentstatus.n=0;
    }
}
