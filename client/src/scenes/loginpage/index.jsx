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
import { Password } from "@mui/icons-material";

const LoginPage = () => {
  const theme = useTheme();
  return (
    <>
      <Flex height="100vh" direction="column" bg="background.default">
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
          mt="20"
          bg="background.alt"
          p="12"
          w="30%"
          rounded="8"
        >
          <Box mb="8">
            <Heading color="primary.main" fontWeight="extrabold">
              Log In
            </Heading>
            <Text fontWeight="hairline" color="neutral.medium">
              Welcome to Megenaga
            </Text>
          </Box>

          <Input
            placeholder="Megenaga@gmail.com"
            type={email}
            variant="filled"
            mb="6"
          ></Input>
          <Input
            placeholder="***********"
            type={Password}
            variant="filled"
            mb="6"
          ></Input>
          <Button
            bg="primary.main"
            color="background.alt"
            _hover={{ color: "primary.main", bg: "background.default" }}
          >
            Log In
          </Button>
        </Flex>
      </Flex>
    </>
  );
};

export default LoginPage;
