// !!! YOU MAY NOT EDIT THIS FILE IN CHILD NOAK-THEME !!!
import React from 'react';
import useTranslation from 'next-translate/useTranslation';

import { Footer as NoakFooter, FooterProps } from '@hoomies/unagui.components.footer';

export function Footer(props: FooterProps) {
  const { t } = useTranslation();
  const copyright = {
    author: t('common:copyright.author'),
    beginYear: Number(t('common:copyright.year')),
    extra: t('common:copyright.extra'),
  };
  const credits = [
    { text: t('common:powered.text'), name: t('common:powered.by'), url: t('common:powered.url') },
    { text: t('common:developer.text'), name: t('common:developer.name'), url: t('common:developer.url') },
    { text: t('common:designer.text'), name: t('common:designer.name'), url: t('common:designer.url') },
  ];

  return (
    <>
      <NoakFooter copyright={copyright} credits={credits} {...props} />
    </>
  );
}
