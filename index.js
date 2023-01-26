const popup = document.querySelector(".popup");
const openPopup = document.querySelector(".footer__language");
const closePopup = document.querySelector(".popup__close")

openPopup.onclick = function() {
    popup.style.display = "block";
};

closePopup.onclick = function() {
    popup.style.display = "none";
}
