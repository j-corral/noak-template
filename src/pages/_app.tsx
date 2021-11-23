import React from 'react';

import '../styles/globals.css';
import { Wrapper } from '@hoomies/unagui.theme.wrapper';
import { AppProps } from '@hoomies/noak.types.app';

import theme from '~theme';
import RootLayout from '~layouts/Root';
import DefaultLayout from '~layouts/Default';

function MyApp({ Component, pageProps }: AppProps) {
  const DynamicLayout = React.useMemo(() => {
    return Component.layout ?? DefaultLayout;
  }, [Component.layout]);

  return (
    <Wrapper resetCSS theme={theme}>
      <RootLayout>
        <DynamicLayout>
          <Component {...pageProps} />
        </DynamicLayout>
      </RootLayout>
    </Wrapper>
  );
}

export default MyApp;
