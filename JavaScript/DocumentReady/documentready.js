document.addEventListener("DOMContentLoaded", function(){
    var x = document.querySelectorAll('.n1');
    for(var  i = 0; i < x.length; i++){
        if(i == 0){
            x[i].onclick = function(){
                this.classList.add('dixuong');
            }
        } else {
           x[i].onclick = function(){
               this.classList.add('dilen');
           }
        }
    }
},false)