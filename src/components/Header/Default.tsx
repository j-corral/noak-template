// !!! YOU MAY NOT EDIT THIS FILE IN CHILD NOAK-THEME !!!
import React from 'react';
import Image from 'next/image';
import useTranslation from 'next-translate/useTranslation';

import { Header as NoakHeader, HeaderProps } from '@hoomies/unagui.components.header';
import { LocaleSwitcher } from '@hoomies/noak.components.switcher.locale';
import { ThemeSwitcher } from '@hoomies/noak.components.switcher.theme';
import { Menu } from '@hoomies/noak.components.navigation.menu';

import DefaultRoutes from '~config/routes/default.lock';
import Logo from '~public/vercel.svg';

export function Header(props: HeaderProps) {
  const { t } = useTranslation();

  return (
    <>
      <NoakHeader
        logo={<Image src={Logo} width="100%" height="50px" alt="logo" />}
        menu={<Menu routes={DefaultRoutes} />}
        p="0 2rem"
        {...props}
      >
        <LocaleSwitcher label={t('menu:lang.text')} variant="outline" />
        <ThemeSwitcher />
      </NoakHeader>
    </>
  );
}
