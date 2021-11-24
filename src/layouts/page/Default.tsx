import React from 'react';

import { Box, Stack, Text } from '@chakra-ui/react';
import Head from 'next/head';
import { useRouter } from 'next/router';

export declare interface DefaultLayoutProps {
  children?: React.ReactNode;
}

export default function DefaultLayout(props: DefaultLayoutProps) {
  return (
    <>
      <Text>DefaultLayout</Text>
      {props.children}
    </>
  );
}
