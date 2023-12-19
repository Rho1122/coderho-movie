import { Card, CardHeader, Image, Text } from "@chakra-ui/react";

interface MovieCardsProps {
  cardImage: string;
  cardHeading: string;
  cardOverview: string;
}

const MovieCards = ({
  cardImage,
  cardHeading,
  cardOverview,
}: MovieCardsProps) => {
  return (
    <Card borderRadius={4} overflow="hidden">
      <Image src={cardImage} />
      <CardHeader as="h3" fontSize="md" paddingX={3} paddingTop={2}>
        {cardHeading}
      </CardHeader>
      <Text paddingX={3}>{cardOverview}</Text>
    </Card>
  );
};

export default MovieCards;
