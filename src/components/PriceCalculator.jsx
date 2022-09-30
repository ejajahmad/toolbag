import React, { useState } from "react";
import { Box, Button, FormControl, FormErrorMessage, FormHelperText, FormLabel, Input, Stack, Text } from "@chakra-ui/react";
import { Alert, AlertIcon, AlertTitle, AlertDescription } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

export default function PriceCalculator() {
  const navigate = useNavigate();

  const [data, setData] = useState({
    name: "",
    price: "",
    priceErr: "",
    quantity: "1",
    date: new Date(),
    total: "",
  });

  const handleOnChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value, priceErr: "" });
  };

  const handleCalculate = (e) => {
    if (data.quantity !== "" && data.price !== "") {
      setData({ ...data, total: data.price * data.quantity });
    } else if (data.price === "") {
      setData({ ...data, priceErr: "Enter a valid price" });
    }
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
              {data.priceErr && <FormHelperText color="red">{data.priceErr}</FormHelperText>}
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

        <Stack>
          <Button onClick={() => navigate("/")}>Back to home</Button>
          <Text>Or</Text>
          <Button colorScheme="facebook" onClick={() => navigate("/tip-calculator")}>
            Tip Calculator
          </Button>
          <Button colorScheme="whatsapp" onClick={() => navigate("/emi-calculator")}>
            EMI Calculator
          </Button>
        </Stack>
      </Stack>
    </div>
  );
}
