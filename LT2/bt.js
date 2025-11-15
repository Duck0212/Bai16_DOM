//Tạo style cho body
document.body.style.backgroundColor = "#f0f0f3";
document.body.style.display = "flex";
document.body.style.minHeight = "100vh";
document.body.style.margin = "0";
document.body.style.justifyContent = "center";
document.body.style.alignItems = "center";

//Tạo khung máy tính
const mayTinh = document.createElement("div");
mayTinh.style.backgroundColor = "#fff";
mayTinh.style.width = "300px";
mayTinh.style.padding = "20px";
mayTinh.style.borderRadius = "20px";
mayTinh.style.boxShadow = "0 10px 20px #e4e4e7";
document.body.appendChild(mayTinh);

//Tạo màn hình hiển thị
const manHinh = document.createElement("div");
manHinh.style.backgroundColor = "#222";
manHinh.style.borderRadius = "15px";
manHinh.style.marginBottom = "20px";
manHinh.style.padding = "15px 10px";
manHinh.style.height = "60px";
manHinh.style.display = "flex";
manHinh.style.justifyContent = "flex-end";
mayTinh.appendChild(manHinh);

//Tạo phần hiển thị giá trị
const hienThi = document.createElement("div");
hienThi.textContent = "0";
hienThi.style.color = "#ffffff";
hienThi.style.fontSize = "48px";
hienThi.style.overflow = "hidden";
manHinh.appendChild(hienThi);

//Tạo khung nút
const khungNut = document.createElement("div");
khungNut.style.display = "grid";
khungNut.style.gridTemplateColumns = "repeat(4, 1fr)";
khungNut.style.gap = "12px";
mayTinh.appendChild(khungNut);

//Tạo các nút như hình

//Tạo mảng chứa các nút
const nut = [
  "C",
  "DEL",
  ".",
  "/",
  "7",
  "8",
  "9",
  "*",
  "4",
  "5",
  "6",
  "-",
  "1",
  "2",
  "3",
  "+",
  "0",
  "=",
];

//Tạo nút và thêm vào khung nút
nut.forEach((text) => {
  const nut = document.createElement("button");
  nut.innerText = text;
  nut.style.padding = "15px";
  nut.style.border = "none";
  nut.style.borderRadius = "15px";
  nut.style.fontSize = "22px";
  nut.style.boxShadow = "0 5px 5px #bebebe";
  nut.style.cursor = "pointer";
  if (text === "=") {
    nut.style.gridColumn = "span 3";
    nut.style.backgroundColor = "#a27c5d";
    nut.style.color = "#fff";
  }

  //Tạo chức năng cho các nút
  nut.onclick = () => {
    switch (text) {
      case "C":
        hienThi.textContent = "0";
        break;
      case "DEL":
        hienThi.textContent = hienThi.textContent.slice(0, -1) || 0;
        break;
      case "=":
        try {
          let tinhToan = eval(hienThi.textContent);
          hienThi.textContent = +tinhToan.toFixed(10);
        } catch (tinhToan) {
          hienThi.textContent = "Lỗi";
        }
        break;
      default:
        if (hienThi.textContent === "0" && "0123456789".includes(text))
          hienThi.textContent = text;
        else hienThi.textContent += text;
        break;
    }
  };
  khungNut.appendChild(nut);
});
