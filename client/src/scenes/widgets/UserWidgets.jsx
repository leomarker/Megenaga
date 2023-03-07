import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  ManageAccountsOutlined,
  EditOutlined,
  LocationOnOutlined,
  WorkOutlineOutlined,
} from "@mui/icons-material";
import { Box, Text, Divider } from "@chakra-ui/react";

const UserWidgets = ({ _id, picturePath }) => {
  const navigate = useNavigate();
  const token = useSelector((state) => state.token);
  const [user, setUser] = useState(null);
  return <></>;
};

export default UserWidgets;
