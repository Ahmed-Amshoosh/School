const menu =document.querySelector('.menu');
const nav =document.querySelector('nav');
const ul =document.querySelector('ul');

menu.onclick=function(){
    nav.style.top='50px';
}
ul.onmouseleave=function(){
    nav.style.top='-500px';
}





