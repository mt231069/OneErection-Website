
const galleryId = localStorage.getItem('gallery');
console.log(galleryId);

let pictureHTML = '';

gallery.forEach((album) => {

  if (album.id === galleryId) {

    album.pictures.forEach((picture) => {
      pictureHTML +=
      `<div class="grid-item grow">
        <a href="#" data-featherlight="${picture}">
          <img src="${picture}" alt="${album.description}" class="album-picture">
        </a>
      </div>`;
    });

    if(album.videos === true) {
    album.videos.forEach((video) => {
      pictureHTML +=
      `<div class="grid-item grow">
        <video class="album-movie" controls>
          <source src="${video}" type="video/mp4">
          Your browser does not support the video tag.
        </video>
      </div>`;
    });
  }

    const albumDescriptionHTML = `${album.albumDescription}`;

    document.querySelector(".js-album-description").innerHTML = albumDescriptionHTML;



  }
});

document.querySelector(".js-grid-container").innerHTML = pictureHTML;