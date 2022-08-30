import { Html, Head, Main, NextScript } from 'next/document';

const _document = () => {
  return (
    <Html>
      <Head>
        <title>Trackmania</title>
        <meta name="description" content="Technical test" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default _document;
