import { Box, HStack, Heading, Image, Text } from "@chakra-ui/react";

interface SideBarItemProps {
  sideBarImage: string;
  sideBarHeading: string;
  sideBarOverview: string;
}

const SideBarItem = ({
  sideBarImage,
  sideBarHeading,
  sideBarOverview,
}: SideBarItemProps) => {
  return (
    <HStack margin={2}>
      <Box borderRadius={4} overflow="hidden" height={"90px"} width={"60px"}>
        <Image src={sideBarImage} />
      </Box>
      <Box padding={2}>
        <Heading as="h6" size="sm">
          {sideBarHeading}
        </Heading>
        <Text>{sideBarOverview}</Text>
      </Box>
    </HStack>
  );
};

export default SideBarItem;
