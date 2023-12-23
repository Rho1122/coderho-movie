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
      <Button size="sm" onClick={onMovie} padding={2} colorScheme="blue">
        Movies
      </Button>
      <Button size="sm" onClick={onTv}>
        TV Series
      </Button>
      <Box>
        <HStack>
          <Button size="sm" fontSize="sm" onClick={onPrev}>
            <ChevronLeftIcon />
            Prev
          </Button>
          <Text fontSize="sm" paddingTop={4}>
            {pageCount}
          </Text>
          <Button size="sm" fontSize="sm" onClick={onNext}>
            Next
            <ChevronRightIcon />
          </Button>
        </HStack>
      </Box>
    </HStack>
  );
};

export default SearchBox;
