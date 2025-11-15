//Tạo style cho body
document.body.style.backgroundColor = "#d2c1b7";
document.body.style.height = "100vh";
document.body.style.margin = "0";
document.body.style.display = "flex";
document.body.style.flexDirection = "column";
document.body.style.justifyContent = "center";
document.body.style.alignItems = "center";

//Tạo nội dung 1
const p1 = document.createElement("p");
p1.innerText = "Đoạn 1";
p1.style.fontSize = "16px";
document.body.appendChild(p1);

//Tạo nội dung 2
const p2 = document.createElement("p");
p2.innerText = "Đoạn 2";
p2.style.fontSize = "16px";
document.body.appendChild(p2);

//Tạo button
const btn = document.createElement("button");
btn.innerText = "Sửa văn bản";
btn.style.color = "#fff";
btn.style.backgroundColor = "#1b3c53";
btn.style.fontSize = "16px";
btn.style.width = "120px";
btn.style.height = "60px";
btn.style.cursor = "pointer";
document.body.appendChild(btn);

//Tạo event onclick của button
btn.onclick = () => {
  document.querySelectorAll("p").forEach((p) => {
    p.innerText += " (đã sửa)";
  });
};
