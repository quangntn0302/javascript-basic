document.addEventListener('DOMContentLoaded',function(){
    var nut = document.querySelector('.nut');
    var menutrai = document.querySelector('.menutrai');
    var den = document.querySelector('.den');
    var noidungto = document.querySelector('.noidungto');
    nut.onclick = function(){
        den.classList.add('len');
        noidungto.classList.add('dichphai');
    }
    den.onclick = function(){
        den.classList.remove('len');
        noidungto.classList.remove('dichphai');
    }
},false);