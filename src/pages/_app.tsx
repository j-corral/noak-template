import React from 'react';

import '../styles/globals.css';
import { Wrapper } from '@hoomies/unagui.theme.wrapper';
import { AppProps } from '@hoomies/noak.types.next';
import { RootLayout } from '@hoomies/noak.layouts.root';

import theme from '~theme';
import DefaultPageLayout from '~layouts/page/Default';

import DefaultHeader from '~components/header/Default';
import DefaultFooter from '~components/footer/Default';

function MyApp({ Component, pageProps }: AppProps) {
  const PageLayout = React.useMemo(() => {
    return Component.pageLayout ?? DefaultPageLayout;
  }, [Component.pageLayout]);

  return (
    <Wrapper resetCSS={true} theme={theme}>
      <RootLayout header={<DefaultHeader />} footer={<DefaultFooter />} {...Component.rootProps}>
        <PageLayout>
          <Component {...pageProps} />
        </PageLayout>
      </RootLayout>
    </Wrapper>
  );
}

export default MyApp;
