import Document, { DocumentContext, Html, Head, Main, NextScript } from 'next/document';
import { ColorModeScript } from '@chakra-ui/react';

//import createEmotionServer from '@emotion/server/create-instance';
//import emotionCache from '~lib/emotion-cache';
//const { extractCritical } = createEmotionServer(emotionCache);

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    //const styles = extractCritical(initialProps.html);
    return {
      ...initialProps,
      /*styles: [
        initialProps.styles,
        <style
          key="emotion-css"
          dangerouslySetInnerHTML={{ __html: styles.css }}
          data-emotion-css={styles.ids.join(' ')}
        />,
      ],*/
    };
  }

  render() {
    return (
      <Html>
        <Head />
        <body>
          {/* Make Color mode to persists when you refresh the page. */}
          <ColorModeScript />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
