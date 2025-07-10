
document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("products-container");
  if (container) {
    for (let i = 1; i <= 25; i++) {
      const box = document.createElement("div");
      box.innerHTML = `<h3>المنتج D${i} - AX-D${i}</h3><p>منتج من شركة StarAxunic</p>`;
      box.style.border = "1px solid #ccc";
      box.style.margin = "10px";
      box.style.padding = "10px";
      container.appendChild(box);
    }
  }
});
