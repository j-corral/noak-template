import React from 'react';
import Head from 'next/head';

export declare interface RootLayoutProps {
  children?: React.ReactNode;
}

export default function RootLayout(props: RootLayoutProps) {
  return (
    <>
      <Head>
        <meta content="width=device-width, initial-scale=1.0" name="viewport" />
      </Head>
      {props.children}
    </>
  );
}
