function vd1(){
    var ten = "viet";
    console.log("Di choi khong" + ten);
}

vd1();

var ten = "zing";
function vd2(ten){
    console.log("Di hoc khong" + ten);
}

vd2("huong");

function tinhtbc(a,b,c,d,e,f,g,h){
    console.log("Trung binh cong cua 6 so la: " + ((a+b+c+d+e+f+g+h)/6));
}
tinhtbc(1,2,3,4,5,6,7,8);

function tinh(x,y){
    var z = (x +y)/2;
    return z;
}

console.log(tinh(5,6));