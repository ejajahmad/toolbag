import { Box, Button, FormControl, FormErrorMessage, FormHelperText, FormLabel, Input, Stack, Text } from "@chakra-ui/react";
import React, { useState } from "react";

export default function PriceCalculator() {
  const [data, setData] = useState({
    name: "",
    price: "",
    quantity: "",
    date: new Date(),
    total: "",
  });

  const handleOnChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleCalculate = (e) => {
    setData({ ...data, total: data.price * data.quantity });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    console.log(data);
    handleCalculate();
  };

  return (
    <div>
      <Text fontSize="xl">Price Calculator</Text>
      <Stack p={5}>
        <Box p={2}>
          <form onSubmit={handleOnSubmit}>
            <FormControl>
              <FormLabel>Name</FormLabel>
              <Input type="text" name="name" value={data.name} onChange={handleOnChange} />
            </FormControl>
            <FormControl>
              <FormLabel>Quantity*</FormLabel>
              <Input type="number" name="quantity" value={data.quantity} onChange={handleOnChange} />
            </FormControl>
            <FormControl>
              <FormLabel>Price*</FormLabel>
              <Input type="number" name="price" value={data.price} onChange={handleOnChange} />
              {/* {!isError ? (
            <FormHelperText>Enter the email you'd like to receive the newsletter on.</FormHelperText>
          ) : (
            <FormErrorMessage>Email is required.</FormErrorMessage>
          )} */}
            </FormControl>
            <FormControl>
              <FormLabel></FormLabel>
              <Button type="submit" colorScheme="blue" w="full">
                Calculate
              </Button>
            </FormControl>
          </form>
        </Box>
        {data.total && (
          <Box>
            Total Price of {data.name} is ₹{data.total}
          </Box>
        )}
      </Stack>
    </div>
  );
}
