import { Card, Image, Skeleton } from "@chakra-ui/react";

const SliderSkeleton = () => {
  return (
    <Card width="100%" height="600px">
      <Skeleton>
        <Image width="100%" height="600px" />
      </Skeleton>
    </Card>
  );
};

export default SliderSkeleton;
