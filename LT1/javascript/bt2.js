//Tạo style cho body
document.body.style.backgroundColor = "#d2c1b7";
document.body.style.height = "100vh";
document.body.style.margin = "0";
document.body.style.display = "flex";
document.body.style.justifyContent = "center";
document.body.style.alignItems = "center";

//Tạo div chứa input và button
const box = document.createElement("div");
box.style.display = "flex";
box.style.height = "60px";
document.body.appendChild(box);

//Tạo input
const input = document.createElement("input");
input.placeholder = "Nhập màu";
input.style.padding = "15px";
input.style.fontSize = "16px";
input.style.backgroundColor = "#fff";
box.appendChild(input);

//Tạo button
const btn = document.createElement("button");
btn.innerText = "Áp dụng";
btn.style.width = "100px";
btn.style.fontSize = "16px";
btn.style.color = "#fff";
btn.style.backgroundColor = "#1b3c53";
btn.style.border = "none";
btn.style.cursor = "pointer";
box.appendChild(btn);

//Tạo event onclick của button
btn.onclick = () => {
  document.body.style.backgroundColor = input.value;
};
