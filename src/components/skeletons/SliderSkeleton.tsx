import { Card, Image, Skeleton } from "@chakra-ui/react";

const SliderSkeleton = () => {
  return (
    <Card>
      <Skeleton>
        <Image width="100%" height="600px" />
      </Skeleton>
    </Card>
  );
};

export default SliderSkeleton;
