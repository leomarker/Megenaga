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
import * as yup from "yup";
import Dropzone from "react-dropzone";
import { MdCreate } from "react-icons/md";
import axios from "axios";

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

  const signUp = async (values, onSubmitProps) => {
    const formData = new FormData();
    console.log(values);
    for (let value in values) {
      console.log(values[value]);
      formData.append(value, values[value]);
    }
    formData.append("picturePath", values.picture.name);

    console.log(formData);
    await axios
      .post("http://localhost:8080/auth/register", {
        body: formData,
      })
      .then((response) => {
        console.log(response);
      });
  };

  const handleFormSubmit = async (values, onSubmitProps) => {
    console.log("asdfs");
    if (isLogin) await login(values, onSubmitProps);
    if (isSignUp) await signUp(values, onSubmitProps);
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
        onSubmit={handleFormSubmit}
        initialValues={isLogin ? initialValuesLogin : initialValuesRegister}
        validationSchema={isLogin ? loginSchema : registerSchema}
      >
        {({
          values,
          errors,
          touched,
          handleSubmit,
          setFieldValue,
          resetForm,
        }) => (
          <form onSubmit={handleSubmit}>
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
                <FormControl
                  mb="6"
                  isInvalid={errors.occupation && touched.occupation}
                >
                  <Field
                    as={Input}
                    name="occupation"
                    variant="filled"
                    placeholder="Occupation"
                  />
                  <FormErrorMessage>{errors.occupation}</FormErrorMessage>
                </FormControl>
                <Box mb="6">
                  <Dropzone
                    acceptedFiles=".jpg,.jpeg,.png"
                    multiple={false}
                    onDrop={(acceptedFiles) =>
                      setFieldValue("picture", acceptedFiles[0])
                    }
                  >
                    {({ getRootProps, getInputProps }) => (
                      <Box
                        {...getRootProps()}
                        border="2px"
                        borderStyle="dashed"
                        borderColor="primary.main"
                        p="1rem"
                        sx={{ "&:hover": { cursor: "pointer" } }}
                      >
                        <input {...getInputProps()} />
                        {!values.picture ? (
                          <Text>Add Picture Here</Text>
                        ) : (
                          <Flex>
                            <Text>
                              {values.picture.name}
                              <MdCreate />
                            </Text>
                          </Flex>
                        )}
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
                type="password"
              />
              <FormErrorMessage>{errors.password}</FormErrorMessage>
            </FormControl>
            <Button
              bg="primary.main"
              color="background.alt"
              w="100%"
              _hover={{ color: "primary.main", bg: "background.default" }}
              type="submit"
            >
              {isLogin ? "Log In" : "Sign Up"}
            </Button>

            <Text
              fontWeight="medium"
              color="neutral.medium"
              mt="4"
              _hover={{ color: "primary.main", cursor: "pointer" }}
              onClick={() => {
                setPageType(isLogin ? "signup" : "login");
                resetForm();
              }}
            >
              {isLogin
                ? "Don't have an account? Sign Up here."
                : "Already have an account ? Login here"}
            </Text>
          </form>
        )}
      </Formik>
    </>
  );
};

export default Form;
