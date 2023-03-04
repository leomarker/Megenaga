import React from "react";
import {
  Button,
  Flex,
  Heading,
  Input,
  Text,
  Box,
  color,
} from "@chakra-ui/react";
import { useTheme } from "@chakra-ui/react";
import Form from "./Form";

const LoginPage = () => {
  const theme = useTheme();
  return (
    <>
      <Flex direction="column" bg="background.default" h="full">
        <Box textAlign="center" bg="background.alt">
          <Text
            fontWeight="extrabold"
            fontSize="3xl"
            p="3"
            color="primary.main"
          >
            Megenaga
          </Text>
        </Box>

        <Flex
          direction="column"
          mx="auto"
          mt="10"
          mb="10"
          bg="background.alt"
          p="12"
          w="50%"
          rounded="8"
        >
          <Form />
        </Flex>
      </Flex>
    </>
  );
};

export default LoginPage;
