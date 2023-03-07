import { Box, Image } from "@chakra-ui/react";

const UserImage = ({ image }) => {
  return (
    <Box>
      <Image
        boxSize="60px"
        src={`http://localhost:8080/assets/${image}`}
        fallbackSrc="https://www.google.com/url?sa=i&url=https%3A%2F%2F180dc.org%2Fbranch%2Fcmu%2Fprofile-placeholder%2F&psig=AOvVaw1G781cfqyAOo-7MVer4PL8&ust=1678279455345000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCJjc1Lbsyf0CFQAAAAAdAAAAABAZ"
        objectFit="cover"
        alt="user"
        borderRadius="full"
      />
    </Box>
  );
};

export default UserImage;
