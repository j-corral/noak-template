// !!! YOU MAY NOT EDIT THIS FILE IN CHILD NOAK-THEME !!!
import React from 'react';
import NextImage from 'next/image';
import useTranslation from 'next-translate/useTranslation';
import { Box, Heading } from '@chakra-ui/react';

import { Header as NoakHeader, HeaderProps } from '@hoomies/unagui.components.header';
import { LocaleSwitcher } from '@hoomies/noak.components.switcher.locale';
import { ThemeSwitcher } from '@hoomies/noak.components.switcher.theme';
import { Menu } from '@hoomies/noak.components.navigation.menu';

import Routes from '~config/routes/header';
import Logo from '~public/logo.svg';

export function Header(props: HeaderProps) {
  const { t } = useTranslation();

  return (
    <>
      <NoakHeader
        logo={
          <Box>
            <NextImage src={Logo} width="50px" height="80px" alt="logo" />
          </Box>
        }
        menu={<Menu routes={Routes} />}
        p="0 2rem"
        {...props}
      >
        <LocaleSwitcher label={t('menu:lang.text')} variant="outline" />
        <ThemeSwitcher />
      </NoakHeader>
    </>
  );
}
