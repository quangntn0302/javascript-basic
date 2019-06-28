document.addEventListener('DOMContentLoaded',function(){
    var tg = document.getElementsByClassName('tamgiac');
    var ds = document.getElementsByClassName('danhsach');

    tg[0].onclick = function(){
       // this.style.color = 'white';
       tg[0].classList.toggle('doimau');
       ds[0].classList.toggle('danhsachhien');
    }

},false);