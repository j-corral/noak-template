import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { Wrapper } from '@hoomies/unagui.theme.wrapper';
import theme from '~theme';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Wrapper resetCSS theme={theme}>
      <Component {...pageProps} />
    </Wrapper>
  );
}

export default MyApp;
