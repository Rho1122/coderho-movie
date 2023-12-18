import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { Text, Box, Button, HStack } from "@chakra-ui/react";

interface SearchBoxProps {
  onMovie: () => void;
  onTv: () => void;
  onNext: () => void;
  onPrev: () => void;
  pageCount: number;
}

const SearchBox = ({
  onMovie,
  onTv,
  onNext,
  onPrev,
  pageCount,
}: SearchBoxProps) => {
  return (
    <HStack paddingX={3}>
      <Button size="sm" marginRight={2} onClick={onMovie} padding={2}>
        Movies
      </Button>
      <Button onClick={onTv}>TV Series</Button>
      <Box paddingLeft={3} height="px40">
        <HStack>
          <Button onClick={onPrev}>
            <ChevronLeftIcon />
            Prev
          </Button>
          <Text fontSize="sm" paddingTop={4}>
            Page {pageCount}
          </Text>
          <Button size="sm" fontSize="sm" onClick={onNext}>
            Next
            <ChevronRightIcon marginLeft={1} />
          </Button>
        </HStack>
      </Box>
    </HStack>
  );
};

export default SearchBox;
