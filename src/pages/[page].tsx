import useTranslation from 'next-translate/useTranslation';
import { useRouter } from 'next/router';

import type { NextPage } from '@hoomies/noak.types.next';
import { ParseMDX } from '@hoomies/fuel.functions.parse-mdx';
import { MDXConverter, MDXConverterProps } from '@hoomies/noak.components.mdx.converter';

import { getSourceFileBySlug, getFiles } from '@/lib/mdx';

import { SkeletonCircle, SkeletonText, Box, Center } from '@chakra-ui/react';

const MDXPage: NextPage<MDXConverterProps> = ({ source, componentNames }) => {
  const { t } = useTranslation();
  const router = useRouter();

  if (router.isFallback) {
    return (
      <>
        <Center>
          <Box w="75vw" p={100}>
            <SkeletonCircle size="10" />
            <SkeletonText mt="4" noOfLines={10} spacing="4" />
          </Box>
        </Center>
      </>
    );
  }

  return <MDXConverter source={source} componentNames={componentNames} />;
};

export default MDXPage;

export async function getStaticProps(context) {
  try {
    const source = await getSourceFileBySlug('pages', context?.params?.page);
    const MDXProps = await ParseMDX({ source });

    return { props: { ...MDXProps }, revalidate: 5 };
  } catch (err) {
    console.error(err);
  }

  return {
    notFound: true,
  };
}

export async function getStaticPaths() {
  try {
    const pages = await getFiles('pages');

    return {
      paths: pages?.slice(0, 100).map((page) => ({
        params: {
          page: page.replace(/\.mdx/, ''),
        },
      })),
      fallback: true,
    };
  } catch (err) {
    console.error(err);
  }

  return { paths: [], fallback: false };
}
