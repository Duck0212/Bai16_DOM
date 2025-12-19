document.addEventListener("DOMContentLoaded", function () {
  const nameInput = document.getElementById("product-name-input");
  const priceInput = document.getElementById("product-price-input");
  const btnAdd = document.getElementById("add-product-btn");
  const btnUpdate = document.getElementById("update-product-btn");
  const tableBody = document.querySelector("#product-table tbody");
  const title = document.getElementById("title");

  const formatPrice = (number) => Number(number).toLocaleString("vi-VN");

  let newId = tableBody.children.length + 1;

  btnAdd.addEventListener("click", () => {
    const name = nameInput.value.trim();
    const price = priceInput.value.trim();

    if (!name || !price) return alert("Vui lòng nhập đầy đủ thông tin.");

    const newTr = document.createElement("tr");
    newTr.setAttribute("data-id", newId);
    newTr.className = "border-b-2 font-semibold border-gray-500";

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

    newId++;

    nameInput.value = "";
    priceInput.value = "";
  });

  tableBody.addEventListener("click", (btn) => {
    const target = btn.target;

    if (target.classList.contains("edit-btn")) {
      const tr = target.closest("tr");
      editingId = tr.dataset.id;

      nameInput.value = tr.querySelector(".product-name").textContent;
      priceInput.value = tr
        .querySelector(".product-price")
        .textContent.replace(/\./g, "");

      btnAdd.style.display = "none";
      btnUpdate.style.display = "inline-block";
      title.textContent = "Sửa sản phẩm";
    }

    if (target.classList.contains("delete-btn")) {
      if (confirm(`Xác nhận muốn xóa?`)) {
        target.closest("tr").remove();
      }
    }
  });

  btnUpdate.addEventListener("click", () => {
    const name = nameInput.value.trim();
    const price = priceInput.value.trim();

    if (!name || !price) return alert("Vui lòng nhập đầy đủ thông tin.");
    const tr = tableBody.querySelector(`tr[data-id="${editingId}"]`);

    tr.querySelector(".product-name").textContent = name;
    tr.querySelector(".product-price").textContent = formatPrice(price);

    nameInput.value = "";
    priceInput.value = "";
  });
});
