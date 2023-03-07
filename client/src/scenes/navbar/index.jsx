import React, { useState } from "react";

import {
  Box,
  IconButton,
  Text,
  Input,
  useTheme,
  useMediaQuery,
  Flex,
  Button,
} from "@chakra-ui/react";

import {
  Search,
  Message,
  DarkMode,
  LightMode,
  Notifications,
  Help,
  Menu,
  Close,
} from "@mui/icons-material";
import { SearchIcon, SunIcon, MoonIcon, CloseIcon } from "@chakra-ui/icons";
import { useDispatch, useSelector } from "react-redux";
import { setMode, setLogout } from "../../state";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const [isMobileScreen, setIsMobileScreen] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);
  const isNotMobileScreen = useMediaQuery("(min-width: 1000px)");

  const theme = useTheme();
  // const neutralLight = theme.neutral.light;
  // const dark = theme.neutral.dark;
  // const background = theme.background.default;
  // const primaryLight = theme.primary.light;
  // const alt = theme.background.alt;
  const fullName = `${user.firstName} ${user.lastName}`;

  console.log(isNotMobileScreen);
  return (
    <Flex
      justifyContent="space-between"
      alignItems="center"
      bg="background.alt"
      px={[12, 18, 24, 36]}
    >
      <Box display="flex" p="5">
        <Text
          fontWeight="extrabold"
          fontSize={["2xl", "3xl"]}
          color="primary.main"
          onClick={() => navigate("/home")}
          _hover={{ cursor: "pointer" }}
        >
          Megenaga
        </Text>
        {isNotMobileScreen[0] && (
          <Flex borderRadius="lg" bg="neutral.light" ml="7">
            <Input
              placeholder="search..."
              outline="none"
              focusBorderColor="neutral.light"
            ></Input>
            <IconButton>
              <SearchIcon />
            </IconButton>
          </Flex>
        )}
      </Box>
      {isNotMobileScreen[0] ? (
        <Flex>
          <IconButton variant="ghost">
            {theme.mode === "dark" ? (
              <SunIcon></SunIcon>
            ) : (
              <MoonIcon></MoonIcon>
            )}
          </IconButton>

          <IconButton variant="ghost">
            <Notifications></Notifications>
          </IconButton>
          <Button
            onClick={() => {
              dispatch(setLogout());
            }}
          >
            Logout
          </Button>
        </Flex>
      ) : (
        <IconButton onClick={() => setIsMobileScreen(!isMobileScreen)}>
          <Menu />
        </IconButton>
      )}
      {!isNotMobileScreen[0] && isMobileScreen && (
        <Box
          position="fixed"
          right="0"
          bottom="0"
          h="full"
          zIndex="10"
          maxWidth={"500px"}
          minWidth={"300px"}
          bg="background.default"
        >
          <Box display="flex" justifyContent="end" p="9">
            <IconButton onClick={() => setIsMobileScreen(!isMobileScreen)}>
              <CloseIcon />
            </IconButton>
          </Box>
        </Box>
      )}
    </Flex>
  );
};

export default NavBar;
