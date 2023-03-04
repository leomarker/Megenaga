import React, { useState } from "react";

import {
  Box,
  IconButton,
  Text,
  Select,
  MenuItem,
  FormControl,
  useTheme,
  useMediaQuery,
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

import { useDispatch, useSelector } from "react-redux";
import { setMode, setLogout } from "state";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const [isMobileScreen, setIsMobileScreen] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);
  const isNotMobileScreen = useMediaQuery("(min-width: 1000px)");

  const theme = useTheme();
  const neutralLight = theme.neutral.light;
  const dark = theme.neutral.dark;
  d;
  const background = theme.background.default;
  const primaryLight = theme.primary.light;
  const alt = theme.background.alt;
  const fullName = `${user.firstName} ${user.lastName}`;

  return <div>NavBar</div>;
};

export default NavBar;
