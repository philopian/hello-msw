# Simple MSW example

- A toggle button to turn Mock Service Workers on/off
- A Banner at the top of the page to inform the user that all the http calls will be intercepted


## Setup
```
$ pnpm i
$ pnpm dev
```

## Notes
- When working with boolean values and local storage consider using `JSON.stringify()` & `JSON.parse()`