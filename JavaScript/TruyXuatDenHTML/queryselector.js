var x = document.querySelector('.list-group-item');
console.log(x);
var a = document.querySelectorAll('.blockquote');
for(var i = 0; i < a.length; i++){
    if(i == 1){
       a[i].innerHTML = "Phan tu dang chon";
    }
}
var c = document.getElementsByClassName('blockquote');
for(var i = 0; i < c.length; i++){
    console.log(c[i]);
}
var d = document.querySelectorAll('#nd');
console.log(d[0]);
var e = document.querySelectorAll('[data-thongbao]');
console.log(e[0]);