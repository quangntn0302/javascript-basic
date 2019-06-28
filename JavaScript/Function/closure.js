function chao(){
    var ten = "quang";
    var thongbao =  function(){
        console.log("cafe khong " + ten);
    }
    ten = ten + " dep trai";
    return thongbao;
}
var h = chao();
h();