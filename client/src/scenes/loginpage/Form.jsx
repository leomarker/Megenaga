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
import { useState } from "react";
import { Formik } from "formik";
import Dropzone from "react-dropzone";

const registerSchema = yup.object().shape({
  firstName: yup.string().required("required"),
  lastName: yup.string().required("required"),
  email: yup.string().email("invalid email").required("required"),
  password: yup.string().required("required"),
  location: yup.string().required("required"),
  occupation: yup.string().required("required"),
  picture: yup.string().required("required"),
});

const loginSchema = yup.object().shape({
  email: yup.string().email("invalid email").required("required"),
  password: yup.string().required("required"),
});

const Form = () => {
  const [pageType, setPageType] = useState("login");
  const isLogin = pageType === "login";
  const isSignUp = pageType === "signup";
  return (
    <div>
      {" "}
      <Box mb="8">
        <Heading color="primary.main" fontWeight="extrabold">
          {isLogin ? "Log In" : "Sign Up"}
        </Heading>
        <Text fontWeight="hairline" color="neutral.medium">
          Welcome to Megenaga
        </Text>
      </Box>
      <form action="">
        {isSignUp && (
          <>
            <Flex mb="6">
              <Input placeholder="First name" variant="filled" mr="4"></Input>
              <Input placeholder="Last name" variant="filled"></Input>
            </Flex>
            <Input placeholder="Location" variant="filled" mb="6"></Input>
            <Box mb="6">
              <Dropzone acceptedFiles=".jpg,.jpeg,.png" multiple={false}>
                {({ getRootProps, getInputProps }) => (
                  <Box
                    {...getRootProps()}
                    border="2px"
                    borderStyle="dashed"
                    borderColor="primary.main"
                    p="2rem"
                    sx={{ "&:hover": { cursor: "pointer" } }}
                  >
                    <input {...getInputProps()} />
                    {/* {!values.picture ? (
                    <p>Add Picture Here</p>
                  ) : (
                    <Flex>
                      <Text>{values.picture.name}</Text>
                      <EditOutlinedIcon />
                    </Flex>
                  )} */}
                  </Box>
                )}
              </Dropzone>
            </Box>
          </>
        )}
        <Input placeholder="Email" variant="filled" mb="6"></Input>
        <Input
          placeholder="Password"
          type="password"
          variant="filled"
          mb="6"
        ></Input>
        <Button
          bg="primary.main"
          color="background.alt"
          w="100%"
          _hover={{ color: "primary.main", bg: "background.default" }}
        >
          Log In
        </Button>
      </form>
      <Text
        fontWeight="medium"
        color="neutral.medium"
        mt="4"
        _hover={{ color: "primary.main", cursor: "pointer" }}
      >
        Already have an account ?
      </Text>
    </div>
  );
};

export default Form;
