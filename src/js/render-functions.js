import SimpleLightbox from 'simplelightbox';

import 'simplelightbox/dist/simple-lightbox.min.css';

var galleryy = new SimpleLightbox('#gallery a', { captionDelay: 250 });

export function renderPhotos(
  url,
  previewURL,
  tag = 'dupa',
  likes = '0',
  views = '0',
  comments = '0',
  downloads = '0'
) {

  const gallery = document.querySelector('#gallery');
  if (gallery.childElementCount > 19) {
    while (gallery.firstChild) {
      gallery.removeChild(gallery.lastChild);
    }
  }



  const li = document.createElement('li');
  li.className = 'gallery-item';
  gallery.append(li);


  const a = document.createElement('a');
  a.className = 'gallery-link';
  a.href = url;
  li.append(a);


  const image = document.createElement('img');
  image.className = 'gallery-image';
  image.src = previewURL;
  image.title = tag;
  a.append(image);

  const div = document.createElement('div');
  div.className = 'info';
  li.append(div);

  const divLikes = document.createElement('div');
  const divViews = document.createElement('div');
  const divComments = document.createElement('div');
  const divDownloads = document.createElement('div');

  const h3Likes = document.createElement('h3');
  const h3Views = document.createElement('h3');
  const h3Comments = document.createElement('h3');
  const h3Downloads = document.createElement('h3');

  h3Likes.textContent = 'Likes';
  h3Views.textContent = 'Views';
  h3Comments.textContent = 'Comments';
  h3Downloads.textContent = 'Downloads';

  const pLikes = document.createElement('p');
  const pViews = document.createElement('p');
  const pComments = document.createElement('p');
  const pDownloads = document.createElement('p');

  pLikes.textContent = likes;
  pViews.textContent = views;
  pComments.textContent = comments;
  pDownloads.textContent = downloads;

  div.append(divLikes, divViews, divComments, divDownloads);

  divLikes.append(h3Likes, pLikes);
  divViews.append(h3Views, pViews);
  divComments.append(h3Comments, pComments);
  divDownloads.append(h3Downloads, pDownloads);

  galleryy.refresh();
}