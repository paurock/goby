import {
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  HStack,
  Input,
  InputGroup,
  InputRightElement,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  Text,
  VStack,
} from '@chakra-ui/react';
import { GreenBtn } from 'components/common/Buttons/GreenBtn';
import React from 'react';
import { Img } from 'shared';
import image4 from '/src/app/assets/mockImgs/Rectangle4.png';

interface ModalAssetProps {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}
export const ModalAsset = ({ isOpen, onOpen, onClose }: ModalAssetProps) => {
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent maxW="871px" maxH="408px">
          <ModalBody p="0">
            <HStack gap="24px" alignItems="flex-start">
              <Img maxH="408px" src={image4.src} w="full" maxW="361px" />
              <VStack w="full" maxW="80%">
                <HStack w="full" minH="60px" alignItems="center">
                  <Heading
                    mt="24px"
                    mb="12px"
                    sx={{
                      fontSize: '16px',
                      lineHeigth: '22.4px',
                      opacity: 0.7,
                    }}
                  >
                    Create borrow terms
                  </Heading>
                  <ModalCloseButton pt="24px" _hover={{ background: 'none' }} />
                </HStack>
                <Divider w="full" />
                <VStack w="full" pr="1.5rem" pt="24px" gap="10px">
                  {/* FIRST INPUT  */}
                  <HStack w="full" justifyContent="flex-start">
                    <Text w="40%" fontSize="14px">
                      Asset value:
                    </Text>
                    <Flex w="full" mr="4.5rem">
                      <InputGroup>
                        <Input type="text" placeholder="Loan value in ETH" />
                        <InputRightElement width="4.5rem">
                          <Button h="1.75rem" size="sm">
                            123
                          </Button>
                        </InputRightElement>
                      </InputGroup>
                    </Flex>
                  </HStack>
                  {/* SECOND INPUT  */}
                  <HStack w="full" justifyContent="flex-start" mr="24px">
                    <Text w="40%" fontSize="14px">
                      Loan duration:
                    </Text>
                    <Flex w="full">
                      <Input
                        type="text"
                        placeholder="Specify the number of days"
                      />
                    </Flex>
                  </HStack>
                  {/* 3d INPUT  */}
                  <HStack w="full" justifyContent="flex-start">
                    <Text w="40%" fontSize="14px">
                      Annual interest:
                    </Text>
                    <Flex w="full" mr="4.5rem">
                      <InputGroup>
                        <Input type="text" placeholder="APR" />
                        <InputRightElement width="4.5rem">
                          <Button h="1.75rem" size="sm">
                            %
                          </Button>
                        </InputRightElement>
                      </InputGroup>
                    </Flex>
                  </HStack>
                </VStack>

                {/* FORM BUTTON  */}
                <Flex w="full" pt="24px" pr="1.5rem">
                  <GreenBtn
                    text="Create borrow terms"
                    onClick={() => console.log('clicked')}
                  />
                </Flex>
              </VStack>
            </HStack>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
