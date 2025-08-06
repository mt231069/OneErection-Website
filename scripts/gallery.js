
let albumHTML = '';

gallery.forEach((album) => {

  albumHTML +=
  `<div class="grid-item">
    <a class="js-gallery-link" gallery-id="${album.id}" href="album.html">
      <div class="description">${album.description}</div>
      <div class="title-picture"><img src="${album.titlePicture}" alt="Fotoalbum-Cover">
      </div>
    </a>
  </div>`;

});

document.querySelector(".js-grid-container").innerHTML = albumHTML;

const link = document.querySelectorAll(".js-gallery-link")

link.forEach((link) => {
  link.addEventListener('click', () => {
    let galleryId = link.getAttribute('gallery-id');
    localStorage.setItem('gallery', galleryId);
    console.log(galleryId);
    console.log(localStorage);
  });

});


