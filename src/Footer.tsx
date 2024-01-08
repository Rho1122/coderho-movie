import { Box, Image, Text } from "@chakra-ui/react";
import image from "./assets/logo.png";

const Footer = () => {
  return (
    <>
      <Box justifyContent="center">
        <Image src={image} width={150} margin="auto" />
        <Text marginTop={"30px"} fontSize={"sm"}>
          @ 2022 Rho Movies, All Rights Reserved. Designed by Roland Akanbi
        </Text>
      </Box>
    </>
  );
};

export default Footer;
