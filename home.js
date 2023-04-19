// Scripting for movement of video on scroll
const slideSection= document.getElementById("slideSection");

// videoSection
const videoSection= document.getElementById("bg-video");
const box= document.getElementById("box");
const D1= document.getElementById("d1");
const D2= document.getElementById("d2");
const vid= document.getElementById("vid");

D1.style.opacity="1";
D2.style.opacity="0";

var arr1=[	
            0.0,
            0.1,0.11,0.12,0.13,0.14,0.15,0.16,0.17,0.18,0.19,
            0.2,
            0.3,0.31,0.32,0.33,0.34,0.35,0.36,0.37,0.38,0.39,
            0.4,
            0.5,0.51,0.52,0.53,0.54,0.55,0.56,0.57,0.58,0.59,
            0.6,0.61,0.62,0.63,0.64,0.65,0.66,0.67,0.68,0.69,
            0.7,0.71,0.72,0.73,0.74,0.75,0.76,0.77,0.78,0.79,
            0.8,0.81,0.82,0.83,0.84,0.85,0.86,0.87,0.88,0.89,
            0.9,0.91,0.92,0.93,0.94,0.95,0.96,0.97,0.98,0.99,
            1.0
        ];
var i=0,j=arr1.length-1;
var boxTop = [];
box.onmouseover=function(){
    window.onscroll= function(){
    if(box.offsetTop!=0){
        boxTop.push(box.offsetTop);
        // console.log(boxTop);
    }
    if(boxTop[boxTop.length-1]>boxTop[boxTop.length-2]){	
        // console.log("IF l-1 : "+boxTop[boxTop.length-1]+" l-2 : "+boxTop[boxTop.length-2]);
        
        //Step-forward
        vid.currentTime+=0.21445;
        
        //Text Fade-in:
        D1.style.opacity= j.toString();
        D2.style.opacity= i.toString();
    }
    else if(boxTop[boxTop.length-1]<boxTop[boxTop.length-2]){
        // console.log("ELSE l-1 : "+boxTop[boxTop.length-1]+" l-2 : "+boxTop[boxTop.length-2]);
        
        //Step-forward
        vid.currentTime-=0.21445;

        D1.style.opacity=i.toString();
        D2.style.opacity=j.toString();
    }
    console.log("i : "+i+" j : "+j);
    if(i<arr1.length && j<arr1.length){i+=1;j-=1;}
}
}
// newly lauched cars scripting
$(function(){
    $("#newlyNext").click(function () { 
        
        document.getElementById("newlyLaunched").scrollLeft+=1000;	
    });
    $("#newlyPrev").click(function () { 
        document.getElementById("newlyLaunched").scrollLeft-=1000;	
    });
    

});
$(function(){
    $("#newly1").click(function () { 
        
        document.getElementById("newlypopu").scrollLeft+=1000;	
    });
    $("#newlylp1").click(function () { 
        document.getElementById("newlypopu").scrollLeft-=1000;	
    });
})
// var modal = document.getElementById('id01');
// window.onclick = function(event) {
//     if (event.target == modal) {
//         modal.style.display = "none";
        
//     }
// }
