var x = "Dien thoai Iphone, adroid, nokia";
console.log(x.length);
var vitri = x.indexOf('Iphone');
console.log(vitri);
var searchkey = x.search('Iphone');
console.log(searchkey);
var keyreplace = x.replace('Iphone','bphone');
console.log(keyreplace);
var mang  = x.split(',');
for(var i = 0 ; i < mang.length; i++){
    console.log(mang[i]);
}