var dongho ={
    hangsanxuat:"casio",
    mua:"den",
    gia:500000,
    sex:"nam",
    xemngay: function(){console.log("hom nay ngay 19 - 8 - 2017");}
}

var hocvien = {
    ten : "Viet",
    ho : "Nguyen",
    tuoi : 31,
    chieucao : 172,
    cannang: 65,
    tendaydu : function(){return this.ho + " " + this.ten;},
    danhgia : function(){
        if(this.chieucao / this.cannang < 3){
            return "dep trai";
        }
    }
};

console.log(hocvien.tendaydu());
console.log(hocvien.danhgia());
var x = 19;
console.log("Hom nay " + x + " troi dep \"qua\"");