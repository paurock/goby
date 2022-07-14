import {
  Box,
  Divider,
  Heading,
  Text,
  VStack,
  Flex,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
} from '@chakra-ui/react';
import { LoanTable } from './SingleLoan';
import React from 'react';
import { useAssets } from 'shared';

const myFontStyle = {
  fontWeight: '400',
  color: 'black',
  fontStyle: 'normal',
};

const Loans = (): JSX.Element => {
  const { text, background } = useAssets();
  return (
    <Flex w="full" justifyContent="center">
      <Flex
        w="full"
        mx={['16px', '16px', '16px', '80px', '195px', '195px']}
        maxW="1050px"
      >
        <VStack w="full" mt={['26px']} pb={['10px']} flexWrap="wrap">
          <Heading
            as="h2"
            w="full"
            sx={{ ...myFontStyle, fontSize: '24px', color: text }}
          >
            My Loans
          </Heading>
          <Text
            as="h5"
            w="full"
            sx={{ ...myFontStyle, fontSize: '24px', opacity: 0.4, color: text }}
          >
            2 loans
          </Text>
          <Tabs w="full" variant="soft-rounded" colorScheme="white">
            <TabList px="0" fontSize="16px">
              <Tab
                maxW="67px"
                maxH="32px"
                mr="12px"
                mt="24px"
                px="12px"
                border="1px solid lightblue"
                borderRadius="3px"
                _selected={{
                  border: '1px solid',
                  borderColor: 'purple',
                  color: text,
                }}
              >
                Open
              </Tab>
              <Tab
                maxW="67px"
                maxH="32px"
                mr="12px"
                mt="24px"
                px="12px"
                borderRadius="3px"
                _selected={{
                  border: '1px solid',
                  borderColor: 'purple',
                  color: text,
                }}
              >
                Closed
              </Tab>
            </TabList>
            <TabPanels>
              <TabPanel px="0">
                <LoanTable status={'Open'} />
                <Divider />
                <LoanTable status={'Overdue'} getAsset={true} />
              </TabPanel>
              <TabPanel px="0">
                <LoanTable status={'Colosed'} />
                <Divider />
                <LoanTable status={'Closed'} />
              </TabPanel>
            </TabPanels>
          </Tabs>
          <Box h="104px"></Box>
        </VStack>
      </Flex>
    </Flex>
  );
};

export default Loans;
