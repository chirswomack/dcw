import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {

    return (
      <Html lang="en" className="theme-compiled">
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" cross-origin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Encode+Sans+Semi+Expanded:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
        <body
          className={`antialiased text-lg bg-white dark:bg-gray-900 dark:text-white leading-base overflow-hidden`}
        >
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
