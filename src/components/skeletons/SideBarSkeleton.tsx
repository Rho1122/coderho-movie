import {
  Box,
  HStack,
  Heading,
  Image,
  Skeleton,
  SkeletonText,
} from "@chakra-ui/react";

const SideBarSkeleton = () => {
  return (
    <HStack margin={2} bgColor="#eefaeb">
      <Box borderRadius={4} overflow="hidden">
        <Skeleton>
          <Image height={90} width={70} borderRadius={4} />
        </Skeleton>
      </Box>
      <Box padding={2} width={200}>
        <Heading>
          <SkeletonText
            mt={2}
            noOfLines={1}
            height="2"
            spacing={2}
          ></SkeletonText>
        </Heading>
        <SkeletonText
          mt={2}
          noOfLines={2}
          height="2"
          spacing={2}
        ></SkeletonText>
      </Box>
    </HStack>
  );
};

export default SideBarSkeleton;
