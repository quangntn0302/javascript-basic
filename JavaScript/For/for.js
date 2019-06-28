for(var i = 0; i < 10; i++){
    console.log(i);
}

var sv = ['viet','nam','huong','ho'];
for(var i = 0; i < sv.length; i++){
    console.log(sv[i]);
}

var hocvien = {
    ten : "viet",
    tuoi: 31,
    diemtoan: 9,
    diemhoa: 8,
    diemly: 7,
    chieucao : 172
};

for(var i in hocvien){
    console.log(hocvien[i]);
}