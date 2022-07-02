import {
  Box,
  Button,
  Divider,
  Heading,
  HStack,
  Text,
  VStack,
  Flex,
} from '@chakra-ui/react';
import { LoanTable } from './SingleLoan';
import React, { useState } from 'react';

const myFontStyle = {
  fontWeight: '400',
  color: 'black',
  fontStyle: 'normal',
};

const Loans = (): JSX.Element => {
  const [active, setActive] = useState<boolean>(true);
  return (
    <Flex w="full" justifyContent="center">
      <Flex
        w="full"
        mx={['16px', '16px', '16px', '80px', '195px', '195px']}
        maxW="1050px"
      >
        <VStack w="full" mt={['26px']} pb={['10px']} flexWrap="wrap">
          <Heading as="h2" w="full" sx={{ ...myFontStyle, fontSize: '24px' }}>
            My Loans
          </Heading>
          <Text
            as="h5"
            w="full"
            sx={{ ...myFontStyle, fontSize: '24px', opacity: 0.4 }}
          >
            2 loans
          </Text>
          <HStack w="full">
            <Button
              maxW="67px"
              maxH="32px"
              variant="outline"
              sx={
                active
                  ? {
                      borderColor: 'purple',
                      borderRadius: '3px',
                      fontSize: '16px',
                    }
                  : {
                      borderColor: 'initial',
                      borderRadius: '3px',
                      fontSize: '16px',
                    }
              }
            >
              Open
            </Button>
            <Button
              maxW="67px"
              maxH="32px"
              variant="outline"
              sx={{ borderRadius: '2px', fontSize: '16px' }}
            >
              Closed
            </Button>
          </HStack>
          <LoanTable status={'Open'} />
          <Divider />
          <LoanTable status={'Overdue'} getAsset={true} />
          <Box h="104px"></Box>
        </VStack>
      </Flex>
    </Flex>
  );
};

export default Loans;
