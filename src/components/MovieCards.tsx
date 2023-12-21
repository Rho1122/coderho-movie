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
          <Text padding={1} margin={1} fontWeight={700} fontSize="10px">
            {cardDate}
          </Text>
        </Box>
        <Box>
          <Text
            padding={1}
            margin={1}
            fontWeight={700}
            fontSize="10px"
            color="orange"
          >
            <i className={"fa-solid fa-star"}></i> {CardVote}
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
