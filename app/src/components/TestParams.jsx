import React from 'react';
import { useParams } from 'react-router-dom';

function TestRouteParams() {
  const { banana } = useParams();
  return(
    // Create a new `Route` with a path to `/test/:<yourparam>`
    // Use the `useParams` hook to get the value of your new URL param
    // Interpolate the value of your new URL param to test it
    <h1>You entered a param of "{banana}" in the URL</h1>
  );
}

export default TestRouteParams;