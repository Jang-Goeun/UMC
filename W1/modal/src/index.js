const openBtn = document.getElementById("open");
const closeBtn = document.getElementById("close");
var modal = document.querySelector(".modal");

openBtn.onclick = function (event) {
    modal.style.display = "flex";
};

closeBtn.onclick = function (event) {
    modal.style.display = "none";
};