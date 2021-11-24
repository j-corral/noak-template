import React from 'react';

import { Flex, Box, Center, Stack, Text } from '@chakra-ui/react';

export default function Header() {
  return (
    <Box bgColor="pink.100">
      <Text fontSize="sm" alignSelf={{ base: 'start', sm: 'end' }}>
        &copy; {new Date().getFullYear()} Noak, Inc. All rights reserved.
      </Text>
    </Box>
  );
}
