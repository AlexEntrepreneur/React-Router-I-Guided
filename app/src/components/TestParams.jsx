import React from 'react';
import { useParams } from 'react-router-dom';

function TestRouteParams() {
  const { id } = useParams();
  return(
    // Uncomment the h1 when to test that you success
    <h1>You entered a param of "{id}" in the URL</h1>
  );
}

export default TestRouteParams;