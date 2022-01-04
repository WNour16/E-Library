let img_slider = document.getElementsByClassName('image_slider');

let etape = 0;


let nb_img = img_slider.length;
let precedent = document.querySelector('.precedent');
let suivant = document.querySelector('.suivant');


function enleverActivImg(){
    for(let i = 0 ; i< nb_img ; i++){
        img_slider[i].classList.remove('active');
    }
}

suivant.addEventListener('click', function(){
    etape++;
    if (etape >= nb_img){
      etape = 0;  
    }
    enleverActivImg();
    img_slider[etape].classList.add('active');
})

precedent.addEventListener('click', function() {
    etape -- ;
    if(etape<0){
        etape = nb_img-1;
    }
    enleverActivImg();
    img_slider[etape].classList.add('active');
})

setInterval(function(){
    etape++;
    if (etape >= nb_img){
      etape = 0;  
    }
    enleverActivImg();
    img_slider[etape].classList.add('active');
}, 3000)


let toggle = document.querySelector('.toggle');
let body = document.querySelector('body');


toggle.addEventListener('click', function() {
    body.classList.toggle('open');
})
