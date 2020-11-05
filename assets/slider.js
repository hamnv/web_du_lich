function slideShow() {
  var getdiv = document.getElementById("big-img");

  var getForm = document.getElementById("find-form");

  var rdn = Math.floor(Math.random() * 3);
  var h2 = [
    "Hồ Bản Viết thơ mộng",
    "Thác Bản Giốc hùng vĩ",
    "Suối Lê-nin lịch sử",
  ];

  var p = [
    "Khám phá Hồ Bản Viết, phong cảnh thơ mộng như trời tây. Đặc biệt vào mùa thu đông, phong cảnh tràn ngập sắp đỏ vàng đậm chất mùa thu Paris",
    "Cùng khám phá con thác hùng vĩ nhất Đông Nam Á, hoà mình vào tiếng thác nước chảy cùng với những cánh đồng chín mát nơi đây.",
    "Tham quan di tích lịch sử, nơi Bác Hồ đã ở đây và viết lên trang sử Đảng",
  ];

  var img = ["hobanviet.jpg", "thacbangioc.jpg", "suoilenin.jpg"];

  getdiv.setAttribute(
    "style",
    "background-image:url('../../img/" + img[rdn] + "')"
  );
  getdiv.innerHTML =
    "<h2>" +
    h2[rdn] +
    "</h2>" +
    "<hr>" +
    "<p>" +
    p[rdn] +
    "</p>" +
    "<button>TÌM HIỂU</button>" + getForm.innerHTML;

    
}
slideShow();
