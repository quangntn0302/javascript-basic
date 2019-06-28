document.addEventListener('DOMContentLoaded',function(){
    var nut = document.getElementById('nuthieuung');
    var khoi = document.getElementById('khoichuyendong');
    var trangthai = 0;
    nut.onclick = function(){
        if(trangthai == 0){
            khoi.classList.remove('khongchuyendonggihet');
            khoi.classList.add('chieuso1');
            trangthai = 1;
        } else {
            khoi.classList.remove('chieuso1');
            trangthai = 0;
        }
        
    }
},false);