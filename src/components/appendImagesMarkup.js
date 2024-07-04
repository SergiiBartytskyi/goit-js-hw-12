import { refs } from './refs';
import { render } from './render';

export function appendImagesMarkup(hits) {
  refs.gallery.insertAdjacentHTML('beforeend', render(hits));
}
