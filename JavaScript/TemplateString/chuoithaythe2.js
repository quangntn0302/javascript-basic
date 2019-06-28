var mangdl = [
    {
        id:1,
        anh:"https://i.pinimg.com/474x/99/23/b2/9923b25903bb2fb017f6cfda31cbbb18.jpg",
        ten:"Ho Thi Thao",
        noidungcm:"Cậu bé 13 tuổi được tặng xe đạp mới sau câu chuyện vượt 100 km xuống Hà Nội thăm em trai"
    },
    {
        id:2,
        anh:"https://resizing.flixster.com/RTEPRtAo8V2i6rhWstiQiQdahDc=/300x300/v1.bjsxOTM1NDIyO2o7MTgwNjc7MTIwMDs2NjA7OTAw",
        ten:"Truong Qui Hai",
        noidungcm:"Ngắm nghía kỹ hơn những bộ cánh của Á hậu Tú Anh, bạn sẽ tìm thấy nguồn cảm hứng mặc đẹp từ street style cho đến công ..."
    }
];

for(var i = 0; i < mangdl.length; i++){
    var noidung1khoi = `<div class="kcm" id="kcm-${mangdl[i].id}">
                            <img src="${mangdl[i].anh}" alt="" class="float-xs-left pr-1">
                            <b>${mangdl[i].ten}</b>
                            <span>${mangdl[i].noidungcm}</span>
                        </div>`;
    var phantumoi = document.createElement("div");
    phantumoi.innerHTML = noidung1khoi;
    var bo = document.getElementById("caccm");
    bo.appendChild(phantumoi);
}
