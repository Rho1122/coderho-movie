import {
  Card,
  CardBody,
  CardHeader,
  Image,
  Skeleton,
  SkeletonText,
} from "@chakra-ui/react";

const MovieBoardSkeleton = () => {
  return (
    <Card borderRadius={4}>
      <Skeleton>
        <Image height={300} width={250} />
      </Skeleton>
      <CardHeader>
        <SkeletonText
          mt={2}
          noOfLines={2}
          spacing="2"
          skeletonHeight="2"
        ></SkeletonText>
      </CardHeader>
      <CardBody>
        <SkeletonText
          mt={2}
          noOfLines={2}
          spacing="2"
          skeletonHeight="2"
        ></SkeletonText>
      </CardBody>
    </Card>
  );
};

export default MovieBoardSkeleton;
