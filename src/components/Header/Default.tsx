// !!! YOU MAY NOT EDIT THIS FILE IN CHILD NOAK-THEME !!!
import React from 'react';
import Image from 'next/image';

import { Header as NoakHeader, HeaderProps } from '@hoomies/unagui.components.header';
import { LocaleSwitcher } from '@hoomies/noak.components.switcher.locale';
import { Menu } from '@hoomies/noak.components.navigation.menu';

import DefaultRoutes from '~config/routes/default.lock';
import Logo from '~public/vercel.svg';

export function Header(props: HeaderProps) {
  return (
    <>
      <NoakHeader
        logo={<Image src={Logo} width="100%" height="50px" />}
        localeswitcher={<LocaleSwitcher variant="flushed" label="Change language" variant="outline" />}
        menu={<Menu routes={DefaultRoutes} />}
        p="0 2rem"
        {...props}
      />
    </>
  );
}
