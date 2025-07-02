let nav= document.querySelector(".header")
nav.style.display="block";
function openModal(imageSrc) {
    let modal = document.getElementById("myModal");
    let modalImg = document.getElementById("modalImage");
    modal.style.display = "block";
    modalImg.src = imageSrc;
    nav.style.display="none";

}

function closeModal() {
    let modal = document.getElementById("myModal");
    modal.style.display = "none";
    nav.style.display="block";
}