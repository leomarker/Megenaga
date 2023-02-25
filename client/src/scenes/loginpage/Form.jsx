import React from "react";
import {
  Button,
  Flex,
  Heading,
  Input,
  Text,
  Box,
  color,
  FormControl,
  FormErrorMessage,
} from "@chakra-ui/react";
import { useState } from "react";
import { Formik, Field } from "formik";
import { InputControl } from "formik-chakra-ui";
import * as yup from "yup";
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

const initialValuesRegister = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  location: "",
  occupation: "",
  picture: "",
};

const initialValuesLogin = {
  email: "",
  password: "",
};
const Form = () => {
  const [pageType, setPageType] = useState("signup");
  const isLogin = pageType === "login";
  const isSignUp = pageType === "signup";

  const handleFormSubmit = async (values, onSubmitProps) => {
    if (isLogin) await login(values, onSubmitProps);
    if (isSignUp) await register(values, onSubmitProps);
  };
  return (
    <>
      {" "}
      <Box mb="8">
        <Heading color="primary.main" fontWeight="extrabold">
          {isLogin ? "Log In" : "Sign Up"}
        </Heading>
        <Text fontWeight="hairline" color="neutral.medium">
          Welcome to Megenaga
        </Text>
      </Box>
      <Formik
        // onSubmit={handleFormSubmit}
        initialValues={isLogin ? initialValuesLogin : initialValuesRegister}
        validationSchema={isLogin ? loginSchema : registerSchema}
      >
        {({
          values,
          errors,
          touched,
          handleBlur,
          handleChange,
          handleSubmit,
          setFieldValue,
          resetForm,
        }) => (
          <form>
            {isSignUp && (
              <>
                <Flex mb="6">
                  <FormControl
                    mr="4"
                    isInvalid={errors.firstName && touched.firstName}
                  >
                    <Field
                      as={Input}
                      name="firstName"
                      variant="filled"
                      placeholder="Firstname"
                    />
                    <FormErrorMessage>{errors.firstName}</FormErrorMessage>
                  </FormControl>

                  <FormControl isInvalid={errors.lastName && touched.lastName}>
                    <Field
                      as={Input}
                      name="lastName"
                      variant="filled"
                      placeholder="Lastname"
                    />
                    <FormErrorMessage>{errors.lastName}</FormErrorMessage>
                  </FormControl>
                </Flex>

                <FormControl
                  mb="6"
                  isInvalid={errors.location && touched.location}
                >
                  <Field
                    as={Input}
                    name="location"
                    variant="filled"
                    placeholder="Location"
                  />
                  <FormErrorMessage>{errors.location}</FormErrorMessage>
                </FormControl>
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

            <FormControl mb="6" isInvalid={errors.email && touched.email}>
              <Field
                as={Input}
                name="email"
                variant="filled"
                placeholder="Email"
              />
              <FormErrorMessage>{errors.email}</FormErrorMessage>
            </FormControl>

            <FormControl mb="6" isInvalid={errors.password && touched.password}>
              <Field
                as={Input}
                name="password"
                variant="filled"
                placeholder="Password"
              />
              <FormErrorMessage>{errors.password}</FormErrorMessage>
            </FormControl>
            <Button
              bg="primary.main"
              color="background.alt"
              w="100%"
              _hover={{ color: "primary.main", bg: "background.default" }}
            >
              {isLogin ? "Log In" : "Sign Up"}
            </Button>

            <Text
              fontWeight="medium"
              color="neutral.medium"
              mt="4"
              _hover={{ color: "primary.main", cursor: "pointer" }}
            >
              {isLogin
                ? "Don't have an account? Sign Up here."
                : "Already have an account ?"}
            </Text>
          </form>
        )}
      </Formik>
    </>
  );
};

export default Form;
