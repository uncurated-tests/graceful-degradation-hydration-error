Example of a React error boundary that gracefully degrades to show the SSR payload if an error occurs during hydration or re-render.

This can happen if any type of `if (typeof "window" !== "undefined")` condition leads to a code path that errors only on the client.

[Demo](https://graceful-degradation-hydration-error.vercel.app/)

[Error boundary code](https://github.com/uncurated-tests/graceful-degradation-hydration-error/blob/main/app/gracefully-degrading-error-boundary.tsx)
