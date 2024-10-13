Example of a React error boundary that gracefully degrades to show the SSR payload if an error occurs during hydration.

This can happen if any type of `if (typeof "window" !== "undefined")` condition leads to a code path that errors only on the client.

https://github.com/uncurated-tests/graceful-degradation-hydration-error/blob/main/app/gracefully-degrading-error-boundary.tsx
