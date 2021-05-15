import { CustomEvent } from './types/dom';

const event = new CustomEvent('test', { detail: [1, 2, 3] });
window.addEventListener('test', (event) => {
  console.log(event.detail);
});
window.dispatchEvent(event);
