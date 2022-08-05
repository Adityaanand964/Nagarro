const lastname = "Anand";
let lastnameln = lastname.length-1;
let index = 0;
let incre=1;
surname=document.getElementById("surname");
setInterval(() => {
    if(incre){
        index+=1;
    }
    else{
        index-=1;
    }
    
    if (index> lastnameln){
        incre=0;
    }
    if (index==0){
        incre=1;
    }
    surname.innerHTML = lastname.substring(0,index);},1000);