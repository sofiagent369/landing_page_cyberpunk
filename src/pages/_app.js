import React from 'react';
import '../styles/tailwind.config.js';
import '../styles/global.css';

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;