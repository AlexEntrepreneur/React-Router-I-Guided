import React from 'react';

function TestRouteParams() {
  // Create a new `Route` with a path to `/test/:<yourparam>`
  // Use the `useParams` hook to get the value of your new URL param
  // Interpolate the value of your new URL param to test it
  return(
    <h1>You entered a param of "{}" in the URL</h1>
  );
}

export default TestRouteParams;