import React, { useState } from "react";

import {
  Box,
  IconButton,
  Text,
  Select,
  MenuItem,
  FormControl,
  Input,
  useTheme,
  useMediaQuery,
  Flex,
  Spacer,
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
import { SearchIcon, SunIcon, MoonIcon } from "@chakra-ui/icons";
import { useDispatch, useSelector } from "react-redux";
import { setMode, setLogout } from "../../state";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const [isMobileScreen, setIsMobileScreen] = useState("");
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

  return (
    <Flex
      justifyContent="space-between"
      alignItems="center"
      bg="background.alt"
      px="36"
    >
      <Box display="flex" p="5">
        <Text
          fontWeight="extrabold"
          fontSize="3xl"
          color="primary.main"
          onClick={() => navigate("/home")}
          _hover={{ cursor: "pointer" }}
        >
          Megenaga
        </Text>
        {isNotMobileScreen && (
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
      {isNotMobileScreen ? (
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
        <IconButton
          onClick={() => setIsMobileMenuToggled(!isMobileMenuToggled)}
        >
          <Menu />
        </IconButton>
      )}
    </Flex>
  );
};

export default NavBar;
