import { Box, Button, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <Box>
      <Text fontSize="4xl" mb={3}>
        Toolbag Tools
      </Text>
      <Stack border="2px" borderColor="gray.200" p={10}>
        <Button colorScheme="red" onClick={() => navigate("/price-calculator")}>
          Price Calculator
        </Button>
        <Button colorScheme="facebook" onClick={() => navigate("/tip-calculator")}>
          Tip Calculator
        </Button>
        <Button colorScheme="green" onClick={() => navigate("/emi-calculator")}>
          EMI Calculator
        </Button>
      </Stack>
    </Box>
  );
}
