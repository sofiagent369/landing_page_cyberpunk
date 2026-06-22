import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <style jsx global>{`
            @tailwind base;
            @tailwind components;
            @tailwind utilities;

            body, html {
              margin: 0;
              padding: 0;
              height: 100%;
              font-family: 'Roboto', sans-serif;
            }

            a {
              text-decoration: none;
              color: white;
            }

            .preflight * {
              @apply box-sizing border-box margin-0 padding-0;
            }
          `}</style>
        </Head>
        <body className="preflight">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;