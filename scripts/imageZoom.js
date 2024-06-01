let images = document.querySelectorAll('.zoomable-img');
let modal = document.getElementById('zoom-modal');
let modalImg = document.getElementById('zoom-modal-img');
let modalCaption = document.getElementById('zoom-modal-caption');
let closeButton = document.getElementsByClassName('zoom-modal-close')[0];

images.forEach(img => {
    img.onclick = function () {
        modal.style.display = "block";
        modalImg.src = this.src;
        modalCaption.innerHTML = this.alt;
    }
});

closeButton.onclick = function () {
    modal.style.display = "none";
}

modal.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

modalImg.onclick = function (event) {
    event.stopPropagation();
}