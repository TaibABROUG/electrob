var slideInterval2 = setInterval(changegalery ,4000);
var list = [3,2,1] ;

function changegalery() {
var im1= document.getElementById('img1') ;
var im2= document.getElementById('img2') ;
var im3= document.getElementById('img3') ;

var x = list[2] ;
list[2] = list[1] ;
list[1] = list[0] ;
list[0] = x;
im1.style.order =list[0];
im2.style.order =list[1];
im3.style.order =list[2];

if (list[0] ==3){ im1.className= im1.className.replace("img-in-the-back" ,"img-in-the-middle");
im2.className= im2.className.replace("img-in-the-middle","img-in-the-back");
im3.className= im3.className.replace("img-in-the-middle","img-in-the-back");
}
if (list[1] ==3){ im1.className= im1.className.replace("img-in-the-middle","img-in-the-back");
im2.className= im2.className.replace("img-in-the-back" ,"img-in-the-middle");
im3.className= im3.className.replace("img-in-the-middle","img-in-the-back");
}
if (list[2] ==3){ im1.className= im1.className.replace("img-in-the-middle","img-in-the-back");
im2.className= im2.className.replace("img-in-the-middle","img-in-the-back");
im3.className= im3.className.replace("img-in-the-back" ,"img-in-the-middle");
}

}