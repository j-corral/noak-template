import React from 'react';

import { Wrapper } from '@hoomies/unagui.theme.wrapper';
import { AppProps as CustomAppProps } from '@hoomies/noak.types.next';
import { RootLayout } from '@hoomies/noak.layouts.root';
import { PageLayout as DefaultPageLayout } from '@hoomies/noak.layouts.page.default';
import { Header } from '@hoomies/unagui.components.header';
import { Footer } from '@hoomies/unagui.components.footer';
import { LocaleSwitcher } from '@hoomies/noak.components.switcher.locale';

import '../styles/globals.css';
import theme from '~theme';

function MyApp({ Component, pageProps }: CustomAppProps) {
  const PageLayout = React.useMemo(() => {
    return Component.pageLayout ?? DefaultPageLayout;
  }, [Component.pageLayout]);

  return (
    <Wrapper resetCSS={true} theme={theme}>
      <RootLayout
        header={<Header localeSwitcher={<LocaleSwitcher variant="flushed" label="Change language" />} />}
        footer={<Footer />}
        {...Component.rootProps}
      >
        <PageLayout>
          <Component {...pageProps} />
        </PageLayout>
      </RootLayout>
    </Wrapper>
  );
}

export default MyApp;
