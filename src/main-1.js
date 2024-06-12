import axios from 'axios';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import fetchQuery from './js/pixabay-api';
import render from './js/render-functions';
import { iconSuccess, iconError } from './js/components';
import './css/styles.css';

const refs = {
  formSearch: document.getElementById('search-form'),
  gallery: document.querySelector('.gallery'),
  btnLoad: document.querySelector('button[type="button"]'),
  loader: document.querySelector('.loader'),
};

let query = '';
let currentPage = 0;
let totalPages = 0;

const gallery = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

iziToast.settings({
  timeout: 3000,
  transitionIn: 'fadeInDown',
  position: 'topRight',
});

refs.loader.classList.add('disable');
refs.btnLoad.classList.add('disable');
refs.formSearch.addEventListener('submit', onSubmit);
refs.btnLoad.addEventListener('click', onLoad);

function onSubmit(e) {
  e.preventDefault();
  query = e.currentTarget.elements.searchQuery.value;
  if (!query) {
    return;
  }
  currentPage = 1;
  refs.btnLoad.classList.add('disable');
  refs.loader.classList.remove('disable');
  refs.gallery.innerHTML = '';
  fetchQuery(query, currentPage)
    .then(response => {
      if (response.data.totalHits) {
        onSuccess(response.data.totalHits);
        refs.gallery.insertAdjacentHTML(
          'beforeend',
          render(response.data.hits)
        );
        gallery.refresh();

        totalPages = Math.ceil(
          response.data.totalHits / response.data.hits.length
        );
        refs.btnLoad.classList.remove('disable');
        if (currentPage === totalPages) {
          refs.btnLoad.classList.add('disable');
          onEndOfResults();
        }
      } else {
        onError();
      }
    })
    .catch(err => console.log(err))
    .finally(() => {
      refs.formSearch.reset();
      refs.loader.classList.add('disable');
    });
}

function onLoad() {
  refs.btnLoad.classList.add('disable');
  refs.loader.classList.remove('disable');
  currentPage += 1;
  fetchQuery(query, currentPage)
    .then(response => {
      refs.gallery.insertAdjacentHTML('beforeend', render(response.data.hits));
      refs.btnLoad.classList.remove('disable');
      if (currentPage === totalPages) {
        refs.btnLoad.classList.add('disable');
        onEndOfResults();
      }
      gallery.refresh();
    })
    .catch(err => console.log(err))
    .finally(() => {
      refs.loader.classList.add('disable');
    });
}

function onSuccess(totalHits) {
  iziToast.success({
    title: 'OK',
    message: `Hooray! We found ${totalHits} images.`,
    iconUrl: iconSuccess,
    theme: 'dark',
    color: 'rgb(89, 161, 13)',
  });
}

function onError() {
  iziToast.error({
    title: 'Error',
    message:
      'Sorry, there are no images matching your search query. Please try again!',
    iconUrl: iconError,
    theme: 'dark',
    color: 'rgb(239, 64, 64)',
  });
}

function onEndOfResults() {
  iziToast.info({
    title: 'Oh! No!',
    message: "We're sorry, but you've reached the end of search results.",
  });
}
