import type { NextPage } from '@hoomies/noak.types.next';
import useTranslation from 'next-translate/useTranslation';

import { Hero } from '@hoomies/unagui.components.hero';
import { Box, Heading, Text, Link } from '@chakra-ui/react';

const LegalPage: NextPage = (props) => {
  const { t } = useTranslation();
  return (
    <>
      <Hero title="Legal"></Hero>
    </>
  );
};
export default LegalPage;
