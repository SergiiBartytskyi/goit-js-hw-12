//  variant 1 -- with btn loadMore

// import SimpleLightbox from 'simplelightbox';
// import 'simplelightbox/dist/simple-lightbox.min.css';
// import { refs } from './components/refs';
// import { FetchAPI } from './components/fetchAPI';
// import { appendImagesMarkup } from './components/appendImagesMarkup';
// import { onEndOfResults, onError, onSuccess } from './components/notifications';
// import './css/styles.css';

// const fetchAPI = new FetchAPI();
// const gallery = new SimpleLightbox('.gallery a', {
//   captionsData: 'alt',
//   captionDelay: 250,
// });

// refs.loader.classList.add('disable');
// refs.btnLoad.classList.add('disable');
// refs.formSearch.addEventListener('submit', onSubmit);
// refs.btnLoad.addEventListener('click', onLoad);

// function onSubmit(e) {
//   e.preventDefault();
//   refs.gallery.innerHTML = '';

//   fetchAPI.query = e.currentTarget.elements.searchQuery.value;
//   if (!fetchAPI.query) {
//     return;
//   }
//   fetchAPI.resetPage();

//   refs.btnLoad.classList.add('disable');
//   refs.loader.classList.remove('disable');

//   fetchAPI
//     .fetchQuery()
//     .then(({ totalHits, hits }) => {
//       if (totalHits) {
//         appendImagesMarkup(hits);
//         onSuccess(totalHits);
//         fetchAPI.totalNumberOfPages(totalHits, hits.length);
//         checkEndPage();
//         gallery.refresh();
//       } else {
//         onError();
//       }
//     })
//     .catch(err => console.log(err))
//     .finally(() => {
//       refs.formSearch.reset();
//       refs.loader.classList.add('disable');
//     });
// }

// function onLoad() {
//   refs.btnLoad.classList.add('disable');
//   refs.loader.classList.remove('disable');

//   fetchAPI.incrementPage();

//   fetchAPI
//     .fetchQuery()
//     .then(({ hits }) => {
//       appendImagesMarkup(hits);

//       const { height: cardHeight } = document
//         .querySelector('.gallery')
//         .firstElementChild.getBoundingClientRect();

//       window.scrollBy({
//         top: cardHeight * 2 + 190,
//         behavior: 'smooth',
//       });

//       checkEndPage();
//       gallery.refresh();
//     })
//     .catch(err => console.log(err))
//     .finally(() => {
//       refs.loader.classList.add('disable');
//     });
// }

// function checkEndPage() {
//   if (fetchAPI.currentPage === fetchAPI.totalPages) {
//     refs.btnLoad.classList.add('disable');
//     onEndOfResults();
//   } else {
//     refs.btnLoad.classList.remove('disable');
//   }
// }

// variant 2 -- with IntersectionObserver

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { refs } from './components/refs';
import { FetchAPI } from './components/fetchAPI';
import { appendImagesMarkup } from './components/appendImagesMarkup';
import { onEndOfResults, onError, onSuccess } from './components/notifications';
import './css/styles.css';

const fetchAPI = new FetchAPI();
const gallery = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
const options = {
  root: null,
  rootMargin: '300px',
  threshold: 1.0,
};
const observer = new IntersectionObserver(onLoad, options);

refs.loader.classList.add('disable');
refs.formSearch.addEventListener('submit', onSubmit);

function onSubmit(e) {
  e.preventDefault();
  refs.gallery.innerHTML = '';

  fetchAPI.query = e.currentTarget.elements.searchQuery.value;
  if (!fetchAPI.query) {
    return;
  }
  fetchAPI.resetPage();
  observer.unobserve(refs.target);
  refs.loader.classList.remove('disable');

  fetchAPI
    .fetchQuery()
    .then(({ totalHits, hits }) => {
      if (totalHits) {
        appendImagesMarkup(hits);
        onSuccess(totalHits);
        observer.observe(refs.target);
        fetchAPI.totalNumberOfPages(totalHits, hits.length);
        checkEndPage(observer);
        gallery.refresh();
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

function onLoad(entries, observer) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      fetchAPI.incrementPage();
      fetchAPI
        .fetchQuery()
        .then(({ hits }) => {
          appendImagesMarkup(hits);
          checkEndPage(observer);
          gallery.refresh();
        })
        .catch(err => console.log(err));
    }
  });
}

function checkEndPage(observer) {
  if (fetchAPI.currentPage === fetchAPI.totalPages) {
    observer.unobserve(refs.target);
    onEndOfResults();
  }
}
