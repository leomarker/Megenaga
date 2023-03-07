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
import { Box, Text, Divider, Flex } from "@chakra-ui/react";
import UserImage from "../../components/userImage";

const UserWidgets = ({ userId, picturePath }) => {
  const navigate = useNavigate();
  const token = useSelector((state) => state.token);
  const [user, setUser] = useState(null);

  const getUser = async () => {
    const response = await fetch(`http://localhost:8080/users/${userId}`, {
      method: "GET",
      headers: { Authorization: `Bearer ${token}` },
    });
    const data = await response.json();
    setUser(data);
  };

  useEffect(() => {
    getUser();
  }, []);
  if (!user) {
    return null;
  }
  const {
    firstName,
    lastName,
    location,
    occupation,
    viewedProfile,
    impressions,
    friends,
  } = user;

  console.log(user);
  return (
    <Box
      padding={"1.5rem 1.5rem 0.75rem 1.5rem"}
      bg="background.alt"
      borderRadius="lg"
    >
      <Flex pb="1.1rem">
        <Flex>
          <UserImage image={picturePath}></UserImage>
          <Box>
            <Text fontSize="50px" color="tomato">
              {firstName} {lastName}
            </Text>
          </Box>
        </Flex>
        <ManageAccountsOutlined />
      </Flex>
    </Box>
  );
};

export default UserWidgets;
