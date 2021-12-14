// !!! YOU MAY NOT EDIT THIS FILE IN CHILD NOAK-THEME !!!
import React from 'react';
import NextImage from 'next/image';
import useTranslation from 'next-translate/useTranslation';
import { Box } from '@chakra-ui/react';

import { Header as NoakHeader, HeaderProps } from '@hoomies/unagui.components.header';
import { LocaleSwitcher } from '@hoomies/noak.components.switcher.locale';
import { ThemeSwitcher } from '@hoomies/noak.components.switcher.theme';
import { Menu } from '@hoomies/noak.components.navigation.menu';

import Routes from '~config/routes';
import HeaderRoutes from '~config/routes/header';
import Logo from '~public/logo.svg';

import { useRouter } from 'next/router';

export function Header(props: HeaderProps) {
  const { t } = useTranslation();
  const { asPath } = useRouter();

  const CurrentRoute = Routes.find((route) => route.path === asPath) ?? false;

  return (
    <>
      <NoakHeader
        logo={
          <Box>
            <NextImage src={Logo} width="50px" height="80px" alt="logo" />
          </Box>
        }
        menu={<Menu routes={HeaderRoutes} />}
        p="0 2rem"
        {...props}
      >
        <LocaleSwitcher route={CurrentRoute} label={t('menu:lang.text')} variant="outline" />
        <ThemeSwitcher />
      </NoakHeader>
    </>
  );
}
