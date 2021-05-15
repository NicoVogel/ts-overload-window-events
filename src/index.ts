import { KnownEvents } from './types';
import { RequiredProp } from './types/utils';

function createKnownEvent<EventKey extends keyof KnownEvents>(
  typeArg: EventKey,
  eventInitDict: RequiredProp<CustomEventInit<KnownEvents[EventKey]>, 'detail'>
): CustomEvent<KnownEvents[EventKey]> {
  return new CustomEvent(typeArg, eventInitDict);
}

// import { CustomEvent } from './types/dom';
// const event2 = new CustomEvent('test', { detail: [1, 2, 3] });

const event = createKnownEvent('test', { detail: [1, 2, 3] });

window.addEventListener('test', (event) => {
  console.log(event.detail);
});
window.dispatchEvent(event);
