//Khai báo các biến với các Element được gán vào
const nameInput = document.getElementById("product-name-input");
const priceInput = document.getElementById("product-price-input");
const btnAdd = document.getElementById("add-product-btn");
const btnUpdate = document.getElementById("update-product-btn");
const tableBody = document.querySelector("#product-table tbody");
const title = document.getElementById("title");
const productFormArea = document.getElementById("product-form-area");

//Tạo định dạng cho Price
const formatPrice = (number) => Number(number).toLocaleString("vi-VN");

//Khai báo các biến
let newId = tableBody.children.length + 1,
  editingId = null,
  btnCancel;

//Thêm event cho nút Thêm mới sản phẩm
btnAdd.addEventListener("click", () => {
  const name = nameInput.value.trim(); //Lấy giá trị của nameInput
  const price = priceInput.value.trim(); //Lấy giá trị của priceInput

  //Kiểm tra input rỗng
  if (!name || !price) return alert("Vui lòng nhập đầy đủ thông tin.");

  //Tạo dòng sản phẩm mới
  const newTr = document.createElement("tr");
  newTr.setAttribute("data-id", newId); //Thêm data-id cho từng sản phẩm
  newTr.className = "border-b-2 font-semibold border-gray-500"; //Gán class CSS

  //Tạo các cột của dòng sản phẩm mới
  newTr.innerHTML = `
              <td class="p-3">${newId}</td>
              <td class="p-3 product-name">${name}</td>
              <td class="p-3 product-price">${formatPrice(price)}</td>
              <td class="p-3 text-white flex gap-3 font-normal">
                <button
                  class="edit-btn bg-yellow-400 px-4 py-2 rounded-md hover:bg-yellow-600 transition cursor-pointer active:bg-yellow-700"
                >
                  Sửa
                </button>
                <button
                  class="delete-btn bg-red-500 px-4 py-2 rounded-md hover:bg-red-700 transition cursor-pointer active:bg-red-900"
                >
                  Xóa
                </button>
              </td>
            `;
  tableBody.appendChild(newTr);

  newId++; //Tăng ID lên theo mỗi sản phẩm được thêm vào, tránh trùng ID

  //Trả input về rỗng trên giao diện
  nameInput.value = "";
  priceInput.value = "";
});

//Tạo event của các Button trong bảng sản phẩm
tableBody.addEventListener("click", (btn) => {
  const target = btn.target; //Tạo nơi bị click trên bảng

  //Kiểm nơi bị click có phải nút Sửa không
  if (target.classList.contains("edit-btn")) {
    const tr = target.closest("tr"); //Tìm dòng sản phẩm của nút Sủa bị click
    editingId = tr.dataset.id; //Lưu data-id

    //Đưa Tên/Giá sản phẩm trong bảng lên Input
    nameInput.value = tr.querySelector(".product-name").textContent;
    priceInput.value = tr
      .querySelector(".product-price")
      .textContent.replace(/\./g, ""); //Thay dấu '.' để có thể đưa giá sản phẩm lên input

    btnCancel.style.display = "inline-block";
    btnAdd.style.display = "none"; //Ẩn nút Thêm sản phẩm khỏi giao diện
    btnUpdate.style.display = "inline-block"; //Hiển thị nút Lưu thay đổi trên cùng 1 dòng
    title.textContent = "Sửa sản phẩm"; //Thay đổi text để phù hợp với chức năng
  }

  //Kiểm tra nơi bị click có phải nút Xóa không
  if (target.classList.contains("delete-btn")) {
    //Hiển thị hộp thoại xác nhận
    if (confirm(`Xác nhận muốn xóa?`)) {
      target.closest("tr").remove();
    }
  }
});

//Tạo event cho nút Lưu thay đổi
btnUpdate.addEventListener("click", () => {
  const name = nameInput.value.trim(); //Lấy giá trị của nameInput
  const price = priceInput.value.trim(); //Lấy giá trị của priceInput

  //Kiểm tra input có bị rỗng không
  if (!name || !price) return alert("Vui lòng nhập đầy đủ thông tin.");

  //Tìm đúng data-id của dòng sản phẩm đang sửa
  const tr = tableBody.querySelector(`tr[data-id="${editingId}"]`);

  //Đưa các giá trị trong input vào dòng sản phẩm trong bảng
  tr.querySelector(".product-name").textContent = name;
  tr.querySelector(".product-price").textContent = formatPrice(price);

  btnCancel.style.display = "none"; //Ẩn nút Cancel khỏi giao diện
  btnUpdate.style.display = "none"; //Ẩn nút Lưu thay đổi khỏi giao diện
  btnAdd.style.display = "inline-block"; //Hiển thị nút Thêm sản phẩm trên cùng 1 dòng
  title.textContent = "Thêm sản phẩm mới"; //Thay đổi text để phù hợp với chức năng
  editingId = null; //Trả về null

  //Trả input về rỗng trên giao diện
  nameInput.value = "";
  priceInput.value = "";
});

//Tạo nút Cancel với các chức năng
btnCancel = document.createElement("button");
btnCancel.innerText = "Cancel";
btnCancel.className =
  "bg-[#86b0be] rounded-md text-white py-3 px-6 text-sm hover:bg-[#7296A2] transition cursor-pointer active:bg-[#5F8793] border border-[#cfcfd1]";
btnCancel.setAttribute("id", "cancel-btn");
btnCancel.style.display = "none";

//Tạo evevnt cho nút Cancel
btnCancel.addEventListener("click", () => {
  btnCancel.style.display = "none"; //Ẩn nút Cancel khỏi giao diện
  btnUpdate.style.display = "none"; //Ẩn nút Lưu thay đổi khỏi giao diện
  btnAdd.style.display = "inline-block"; //Hiển thị nút Thêm sản phẩm trên cùng 1 dòng
  title.textContent = "Thêm sản phẩm mới"; //Thay đổi text để phù hợp với chức năng
  editingId = null; //Trả về null

  //Trả input về rỗng trên giao diện
  nameInput.value = "";
  priceInput.value = "";
});
productFormArea.appendChild(btnCancel); //Đưa nút Cancel vào đúng vị trí của nó
