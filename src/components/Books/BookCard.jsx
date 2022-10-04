import { Box, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { flushSync } from "react-dom";

export default function BookCard({ book, setBookModal, setCurrentBookHTML }) {
  return (
    <Stack
      flex
      flexDirection="row"
      alignItems="flex-start"
      cursor="pointer"
      gap={10}
      onClick={() => {
        flushSync(() => {
          setCurrentBookHTML(book?.formats?.["text/html"]);
        });
        setBookModal(true);
      }}
    >
      <Box minW={40} maxW={40}>
        <img src={book?.formats?.["image/jpeg"]} />
      </Box>
      <Box>
        <Text fontSize="2xl">{book.title}</Text>
      </Box>
    </Stack>
  );
}
