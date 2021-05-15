# Overload CustomEvents

This is an example on how to overload `window.addEventListener` and `new CustomElement` to provide types for known events.
There is currently no elegant overload for `new CustomElement`, therefore a function is needed to provide the type support.

## Intention

By using `declare var CustomElement` the correct typings are shown in a file (as long as you import it, which also is not so great).
The issue is that TypeScript does not remove the import statement to the declaration file and I have yet to figure out how to get rid of it.
