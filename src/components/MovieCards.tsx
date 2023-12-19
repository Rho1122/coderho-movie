import { Box, Card, CardHeader, HStack, Image, Text } from "@chakra-ui/react";

interface MovieCardsProps {
  cardImage: string;
  cardHeading: string;
  cardDate: string;
  CardVote: number;
}

const MovieCards = ({
  cardImage,
  cardHeading,
  cardDate,
  CardVote,
}: MovieCardsProps) => {
  return (
    <Card borderRadius={4} overflow="hidden">
      <Image src={cardImage} />
      <HStack paddingX={2} justifyContent="space-between">
        <Box>
          <Text
            bgColor="orange"
            padding={1}
            margin={1}
            borderRadius={4}
            fontSize="10px"
            color="white"
          >
            {cardDate}
          </Text>
        </Box>
        <Box>
          <Text
            bgColor={CardVote > 7 ? "#49ad57" : "#f25524"}
            padding={1}
            margin={1}
            borderRadius={4}
            fontSize="10px"
            color="white"
          >
            {CardVote}
          </Text>
        </Box>
      </HStack>
      <CardHeader as="h3" fontSize="md" paddingX={3} paddingTop={2}>
        {cardHeading}
      </CardHeader>
    </Card>
  );
};

export default MovieCards;
