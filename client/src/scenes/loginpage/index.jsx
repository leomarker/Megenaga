import React from "react";
import { Button, Flex, Heading, Input, Text, Box } from "@chakra-ui/react";
import { useTheme } from "@chakra-ui/react";

const LoginPage = () => {
  const theme = useTheme();
  return (
    <>
      <Flex
        height="100vh"
        alignItems="center"
        bg="background.default"
        justifyContent="center"
      >
        <Flex direction="column" bg="background.alt" p="12" w="30%" rounded="8">
          <Box mb="8">
            <Heading color="">Log In</Heading>
            <Text fontWeight="fontWeights.hairline" color="neutral.medium">
              Welcome to Megenaga
            </Text>
          </Box>

          <Input
            placeholder="Megenaga@gmail.com"
            variant="filled"
            mb="6"
          ></Input>
          <Input placeholder="*****" variant="filled" mb="6"></Input>
          <Button bg="primary.main" color="background.alt">
            Log In
          </Button>
        </Flex>
      </Flex>
    </>
  );
};

export default LoginPage;
