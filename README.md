# Overload CustomEvents

This is an example on how to overload `window.addEventListener` and `new CustomElement` to provide types for known events.
There is currently no elegant overload for `new CustomElement`, therefore a function is needed to provide the type support.

