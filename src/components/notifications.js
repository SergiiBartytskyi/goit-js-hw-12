import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { iconError, iconSuccess } from './icons';

iziToast.settings({
  timeout: 3000,
  transitionIn: 'fadeInDown',
  position: 'topRight',
});

export function onSuccess(totalHits) {
  iziToast.success({
    title: 'OK',
    message: `Hooray! We found ${totalHits} images.`,
    iconUrl: iconSuccess,
    theme: 'dark',
    color: 'rgb(89, 161, 13)',
  });
}

export function onError() {
  iziToast.error({
    title: 'Error',
    message:
      'Sorry, there are no images matching your search query. Please try again!',
    iconUrl: iconError,
    theme: 'dark',
    color: 'rgb(239, 64, 64)',
  });
}

export function onEndOfResults() {
  iziToast.info({
    title: 'Oh! No!',
    message: "We're sorry, but you've reached the end of search results.",
  });
}
