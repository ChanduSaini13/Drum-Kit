var n=document.querySelectorAll(".drum").length;
console.log(n);

for(var i=0;i<n;i++)
{
   document.querySelectorAll(".drum")[i].addEventListener("click", function(){
   
    var butt = this.innerHTML;
    work(butt);
    animation(butt);
   });
}

document.addEventListener("keypress", function(event){

      work(event.key);
      animation(event.key);
});

function work(key)
{
    // var butt = this.innerHTML;
     switch(key)
     {
        case "q":
            var qa = new Audio("sounds/aMusic.wav");
            qa.play();
            break;
        case "w":
            var wa=new Audio("sounds/crash.mp3");
            wa.play();
            break;
        case "e":
            var ea=new Audio("sounds/snare.mp3");
            ea.play();
            break;   
        case "r":
            var ra=new Audio("sounds/tom-2.mp3");
            ra.play();
            break;   
        case "t":
            var ta=new Audio("sounds/snare.mp3");
            ta.play();
            break;   
        case "y":
            var ya=new Audio("sounds/crash.mp3");
            ya.play();
            break;   
        case "u":
            var ua=new Audio("sounds/kick-bass.mp3");
            ua.play();
            break;   
        case "i":
            var ia=new Audio("sounds/crash.mp3");
            ia.play();
            break;   
        case "o":
            var oa=new Audio("sounds/tom-2.mp3");
            oa.play();
            break;   
        case "p":
            var pa=new Audio("sounds/crash.mp3");
            pa.play();
            break;   
        case "a":
            var aa=new Audio("sounds/snare.mp3");
            aa.play();
            break;   
        case "s":
            var sa=new Audio("sounds/tom-3.mp3");
            sa.play();
            break;   
        case "d":
            var da=new Audio("sounds/crash.mp3");
            da.play();
            break;   
        case "f":
            var fa=new Audio("sounds/snare.mp3");
            fa.play();
            break;   
        case "g":
            var ga=new Audio("sounds/snare.mp3");
            ga.play();
            break;   
        case "h":
            var ha=new Audio("sounds/kick-bass.mp3");
            ha.play();
            break;   
        case "j":
            var ja=new Audio("sounds/tom-2.mp3");
            ja.play();
            break;   
        case "k":
            var ka=new Audio("sounds/kick-bass.mp3");
            ka.play();
            break;   
        case "l":
            var la=new Audio("sounds/tom-3.mp3");
            la.play();
            break;   
        case "z":
            var za=new Audio("sounds/tom-3.mp3");
            za.play();
            break;
        case "x":
            var xa=new Audio("sounds/tom-4.mp3");
            xa.play();
            break;
        case "c":
            var xa = new Audio("sounds/kick-bass.mp3");
            xa.play();
            break; 
        case "v":
            var va = new Audio("sounds/snare.mp3");
            va.play();
            break;
        case "b":
            var ba = new Audio("sounds/crash.mp3");
            ba.play();
            break; 
        case "n":
            var na = new Audio("sounds/crash.mp3");
            na.play();
            break; 
        case "m":
            var ma = new Audio("sounds/crash.mp3");
            ma.play();
            break; 
        default:
            console.log(butt);
            break; 
     }
}
function animation(currentKey)
{
    var activebutton = document.querySelector("."+currentKey);
    activebutton.classList.add("pressed");
    setTimeout(function()
    {
        activebutton.classList.remove("pressed");
    }, 100);
}



