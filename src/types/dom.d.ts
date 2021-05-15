import { KnownEvents } from './index';
import { ExcludeValues, RequiredProp } from './utils';

declare global {
  interface Window {
    addEventListener<EventKey extends keyof KnownEvents>(
      type: EventKey,
      listener: (event: CustomEvent<KnownEvents[EventKey]>) => void,
      options?: boolean | AddEventListenerOptions
    ): void;
  }
}

export declare var CustomEvent: {
  prototype: CustomEvent;
  new <EventKey extends keyof KnownEvents>(
    typeArg: EventKey,
    eventInitDict: RequiredProp<CustomEventInit<KnownEvents[EventKey]>, 'detail'>
  ): CustomEvent<KnownEvents[EventKey]>;
  new <Key extends string, Type>(typeArg: ExcludeValues<Key, keyof KnownEvents>, eventInitDict?: CustomEventInit<Type>): CustomEvent<Type>;
};
