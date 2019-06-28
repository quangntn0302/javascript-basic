document.addEventListener('DOMContentLoaded',function(){
    var nut  = document.getElementsByClassName('declick');
    var ndhienra = document.getElementsByClassName('dehienthi');
    for(var i = 0; i < nut.length; i++){
        nut[i].onclick = function(){
            var noidung = this.getAttribute('data-hienlen');
            var phantuhienra = document.getElementById(noidung);
            if(this.classList[1] == 'mautrang'){
                this.classList.remove('mautrang');
                phantuhienra.classList.remove('phantu');
            } else {
                for(var k = 0; k < nut.length; k++){
                    nut[k].classList.remove('mautrang');
                }
                this.classList.toggle('mautrang');
                for(var k = 0; k < nut.length; k++){
                    ndhienra[k].classList.remove('phantu');
                }
                phantuhienra.classList.toggle('phantu');
            }
        }
    }
},false);