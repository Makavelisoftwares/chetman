var hours=document.querySelector('.hour');
var minutes=document.querySelector('.minute');
var seconds=document.querySelector('.ms');
var pm=document.querySelector('.pm');
var years=document.querySelector('.copyright span')





function showTime(){
    var time=new Date();

    var hour=time.getHours();
    var minute=time.getMinutes();
    var second=time.getSeconds();
    var amPm=(hour>=12)?"pm":"am";

    hours.textContent=hour;
    minutes.textContent=minute;
    seconds.textContent=second;
    pm.textContent=amPm;
    years.textContent=time.getFullYear();

}

setInterval(()=>{
    showTime()
},1000);


window.onload=()=>{
    var header1=document.querySelector('.header1');
    var header1position=header1.getBoundingClientRect().top;
    var header1height=window.innerHeight;

    var container1=document.querySelector('.container1');
    var container1position=container1.getBoundingClientRect().top;
    var container1height=window.innerHeight;

    var container2=document.querySelector('.container2');
    var container2position=container2.getBoundingClientRect().top;
    var container2height=window.innerHeight;

    if(container2position<container2height){
        container2.classList.add('right')
    }else{
        container2.classList.remove('right')
    }

    if(container1position<container1height){
        container1.classList.add('left')
    }else{
        container1.classList.remove('left')
    }

    if(header1position<header1height){
        header1.classList.add('top')
    }else{
        header1.classList.remove('.top')
    }
}



window.onscroll=()=>{

    var service=document.querySelector('.serviceDetails');
    var position=service.getBoundingClientRect().top;
    var height=window.innerHeight;

    var about=document.querySelector('.aboutMore');
    var point=about.getBoundingClientRect().top;
    var verticalHeight=window.innerHeight;

    var gallery=document.querySelector('.gallerycontainer');
    var gallerypoint=gallery.getBoundingClientRect().top;
    var galleryHeight=window.innerHeight;

    var form=document.querySelector('.form');
    var formpoint=form.getBoundingClientRect().top;
    var formHeight=window.innerHeight;

    if(formpoint<formHeight){
        form.classList.add('up')

    }else{
        form.classList.remove('up');
    }
    

    if(gallerypoint<galleryHeight){
        gallery.classList.add('down')

    }else{
        gallery.classList.remove('down');
    }
    

    if(point<verticalHeight){
        about.classList.add('move')

    }else{
        about.classList.remove('move');
    }
    

    if(position<height-10){
        service.classList.add('scroll')

    }else{
        service.classList.remove('scroll');

    }
}


var submitBtn=document.querySelector('.submitBtn');
var email=document.querySelector('.email');
var phone=document.querySelector('.phone');
var subject=document.querySelector('.subject');
var message=document.querySelector('.message');

if(email.value.length<1||phone.value.length<1||subject.value.length<1||message.value.length<1){
    submitBtn.disabled=true;
}else{
    submitBtn.disabled=false;

}

