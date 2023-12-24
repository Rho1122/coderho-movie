import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { Text, Box, Button, HStack } from "@chakra-ui/react";
import { useState } from "react";

interface SearchBoxProps {
  buttonList: string[];
  onMovie: (item: string) => void;
  onNext: () => void;
  onPrev: () => void;
  pageCount: number;
}

const SearchBox = ({
  onMovie,
  onNext,
  onPrev,
  pageCount,
  buttonList,
}: SearchBoxProps) => {
  const [idx, setIdx] = useState(0);
  return (
    <HStack paddingX={2}>
      {buttonList.map((item, index) => {
        return (
          <Button
            size="sm"
            onClick={() => {
              onMovie(item);
              setIdx(index);
            }}
            padding={2}
            colorScheme={index === idx ? "yellow" : "blue"}
            key={index}
          >
            {item}
          </Button>
        );
      })}

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
