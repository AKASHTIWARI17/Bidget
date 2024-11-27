// pages/_document.js
import Document, { Html, Head, Main, NextScript } from 'next/document';
import fetch from 'isomorphic-unfetch';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    const response = await fetch(
      'https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,400;0,600;0,700;0,800;0,900;1,400;1,600;1,700&family=Quicksand:wght@400;500;600;700&family=Roboto:wght@400;500;700;900&display=swap'
    );
    const googleFontsCss = await response.text();

    return {
      ...initialProps,
      googleFontsCss,
    };
  }

  render() {
    return (
      <Html>
        <Head>
          <style>{this.props.googleFontsCss}</style>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
