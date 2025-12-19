document.addEventListener("DOMContentLoaded", function () {
  const addBtn = document.getElementById("add-product-btn");
  const updateBtn = document.getElementById("update-product-btn");
  const nameInput = document.getElementById("product-name-input");
  const priceInput = document.getElementById("product-price-input");
  const editIdInput = document.getElementById("product-id-to-edit");
  const tableBody = document.querySelector("#product-table tbody");

  // Gán sự kiện cho nút Thêm
  addBtn.addEventListener("click", addProduct);

  // Gắn event cho các nút Sửa / Xóa ban đầu
  document.querySelectorAll(".edit-btn").forEach((btn) => {
    btn.addEventListener("click", function () {
      editProduct(this.closest("tr"));
    });
  });

  document.querySelectorAll(".delete-btn").forEach((btn) => {
    btn.addEventListener("click", function () {
      deleteProduct(this.closest("tr"));
    });
  });

  // ---------------------------
  // Hàm Thêm sản phẩm
  // ---------------------------
  function addProduct() {
    const name = nameInput.value.trim();
    const price = priceInput.value.trim();

    if (!name || !price) return alert("Vui lòng nhập đầy đủ!");

    const newId = tableBody.children.length + 1;

    const row = document.createElement("tr");
    row.classList.add("border-b");
    row.setAttribute("data-id", newId);

    row.innerHTML = `
            <td class="p-3 border">${newId}</td>
            <td class="product-name p-3 border">${name}</td>
            <td class="product-price p-3 border">${price}</td>
            <td class="p-3 border">
              <button class="edit-btn bg-yellow-500 text-white px-4 py-1 rounded hover:bg-yellow-600">Sửa</button>
              <button class="delete-btn bg-red-500 text-white px-4 py-1 rounded hover:bg-red-600">Xóa</button>
            </td>
          `;

    tableBody.appendChild(row);

    // Thêm event
    row
      .querySelector(".edit-btn")
      .addEventListener("click", () => editProduct(row));
    row
      .querySelector(".delete-btn")
      .addEventListener("click", () => deleteProduct(row));

    nameInput.value = "";
    priceInput.value = "";
  }

  // ---------------------------
  // Hàm mở chế độ sửa
  // ---------------------------
  function editProduct(row) {
    nameInput.value = row.querySelector(".product-name").textContent;
    priceInput.value = row.querySelector(".product-price").textContent;
    editIdInput.value = row.dataset.id;

    addBtn.style.display = "none";
    updateBtn.style.display = "inline-block";

    updateBtn.onclick = function () {
      updateProduct(row);
    };
  }

  // ---------------------------
  // Hàm Lưu cập nhật
  // ---------------------------
  function updateProduct(row) {
    const name = nameInput.value.trim();
    const price = priceInput.value.trim();

    if (!name || !price) return alert("Vui lòng nhập đầy đủ!");

    row.querySelector(".product-name").textContent = name;
    row.querySelector(".product-price").textContent = price;

    // Reset form
    nameInput.value = "";
    priceInput.value = "";
    editIdInput.value = "";

    updateBtn.style.display = "none";
    addBtn.style.display = "inline-block";
  }

  // ---------------------------
  // Hàm Xóa
  // ---------------------------
  function deleteProduct(row) {
    if (confirm("Bạn có chắc muốn xóa?")) {
      row.remove();
    }
  }
});
