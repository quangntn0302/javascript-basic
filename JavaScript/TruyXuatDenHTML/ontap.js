var cactieude = document.getElementsByTagName('h5');
console.log(cactieude);
for(var i = 0; i < cactieude.length; i++){
    if( i == 2){
        cactieude[i].innerHTML = "<div class='btn btn-info btn-block'> quang dep trai </div>";
    }
}