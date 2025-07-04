function changeImage(src) {
  document.getElementById("mainImage").src = src;
}

function openTab(tabName) {
  const tabs = document.querySelectorAll(".tab");
  const contents = document.querySelectorAll(".tab-content");

  tabs.forEach(tab => tab.classList.remove("active"));
  contents.forEach(content => content.classList.remove("active"));

  document.querySelector(`.tab[onclick*="${tabName}"]`).classList.add("active");
  document.getElementById(tabName).classList.add("active");
}
