import React from "react";
import { Box } from "@chakra-ui/react";
import { useMediaQuery } from "@chakra-ui/react";
import NavBar from "../navbar/index";
import { useSelector } from "react-redux";
import UserWidgets from "../widgets/UserWidgets";

const HomePage = () => {
  const isNonMobileScreens = useMediaQuery("(min-width:1000px)");
  const { _id, picturePath } = useSelector((state) => state.user);
  return (
    <Box bg="background.default" height="full">
      <NavBar />
      <Box
        width="100%"
        padding="2rem"
        display={isNonMobileScreens[0] ? "flex" : "block"}
        gap="0.5rem"
        justifyContent="space-between"
      >
        <Box flexBasis={isNonMobileScreens ? "25%" : undefined}>
          <UserWidgets userId={_id} picturePath={picturePath}></UserWidgets>
        </Box>
        <Box></Box>
        <Box></Box>
      </Box>
    </Box>
  );
};

export default HomePage;
