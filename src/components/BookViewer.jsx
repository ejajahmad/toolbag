import React, { useEffect, useRef, useState } from "react";
import { Box, Stack, Input, Button } from "@chakra-ui/react";
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton } from "@chakra-ui/react";
import axios from "axios";
import BookCard from "./Books/BookCard";

export default function BookViewer() {
  const [books, setBooks] = useState([]);
  const [filteredBooks, setFilteredBooks] = useState(books);
  const [currentBookHTML, setCurrentBookHTML] = useState("");
  const [bookModal, setBookModal] = useState(false);

  const [selectionToggle, setSelectionToggle] = useState(false);

  const iframeRef = useRef();

  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    const search = e.target.value;
    setSearch(search);

    setTimeout(() => {
      setFilteredBooks(books.filter((book) => book.title.toLowerCase().includes(search.toLowerCase())));
    }, 500);
  };

  useEffect(() => {
    axios.get("http://gutendex.com/books/").then((data) => {
      setBooks(data.data.results);
      setFilteredBooks(data.data.results);
      console.log(data.data.results);
    });
  }, []);

  useEffect(() => {
    window.addEventListener("keydown", (e) => {
      if (e.ctrlKey && e.keyCode == 106) {
        console.log("Working");
        console.log(iframeRef.current.contentDocument);
      }
    });
  }, []);

  return (
    <Stack>
      <Box>
        <Input placeholder="Search here" size="md" value={search} onChange={handleSearch} />
      </Box>

      <Box display="flex" flexDirection="column" gap={6} marginInline="auto">
        {filteredBooks &&
          filteredBooks.map((book) => {
            return <BookCard key={book.id} book={book} setBookModal={setBookModal} setCurrentBookHTML={setCurrentBookHTML} />;
          })}
      </Box>
      {currentBookHTML.length > 0 && (
        <Modal size="full" isOpen={bookModal} onClose={() => setBookModal(false)}>
          <ModalOverlay />
          <ModalContent>
            <ModalCloseButton />
            <ModalBody display="flex" flexDirection="column" alignItems="center" justifyContent="center">
              <iframe
                ref={iframeRef}
                src={currentBookHTML}
                onClick={() => setSelectionToggle((prev) => !prev)}
                allow="clipboard-read; clipboard-write"
                style={{
                  width: "100%",
                  height: "80vh",
                }}
              ></iframe>
            </ModalBody>

            <ModalFooter>
              <Button colorScheme="blue" mr={3} onClick={() => setBookModal(false)}>
                Close
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      )}
    </Stack>
  );
}
