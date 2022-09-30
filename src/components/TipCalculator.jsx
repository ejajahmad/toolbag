import React, { useState } from "react";
import {
  Box,
  Button,
  CheckboxIcon,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Select,
  Stack,
  Text,
} from "@chakra-ui/react";
import { Alert, AlertIcon, AlertTitle, AlertDescription } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

export default function TipCalculator() {
  const navigate = useNavigate();

  const [data, setData] = useState({
    bill: "",
    percentage: "",
    tip: "",
    err: "",
  });

  const handleOnChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value, priceErr: "" });
  };

  const handleCalculate = (e) => {
    if (data.bill !== "" && data.percentage !== "") {
      setData({ ...data, tip: Math.round((data.percentage / 100) * data.bill) });
    } else if (data.bill === "") {
      setData({ ...data, err: "How much did you spend?" });
    }
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    console.log(data);
    handleCalculate();
  };

  return (
    <div>
      <Text fontSize="xl">Tip Calculator</Text>
      <Stack p={5}>
        <Box p={2}>
          <form onSubmit={handleOnSubmit}>
            <FormControl>
              <FormLabel>Net Bill Amount</FormLabel>
              <InputGroup>
                <InputLeftElement pointerEvents="none" color="gray.300" fontSize="1.2em" children="₹" />
                <Input placeholder="Enter amount" type="number" name="bill" value={data.bill} onChange={handleOnChange} />
                <InputRightElement children={<CheckboxIcon color="green.500" />} />
                {data.err && <FormHelperText color="red">{data.err}</FormHelperText>}
              </InputGroup>
            </FormControl>

            <FormControl mt={5}>
              <FormLabel>By Experience (How was your experience?) </FormLabel>
              <Select placeholder="Select option" name="percentage" value={data.percentage} onChange={handleOnChange}>
                <option value={5}>Poor</option>
                <option value={10}>Good</option>
                <option value={30}>Marvelous</option>
              </Select>
            </FormControl>
            <FormControl mt={3}>
              <FormLabel>By Percentage</FormLabel>
              <Input type="number" name="percentage" value={data.percentage} onChange={handleOnChange} />
            </FormControl>
            <FormControl>
              <FormLabel></FormLabel>
              <Button type="submit" colorScheme="blue" w="full">
                Calculate
              </Button>
            </FormControl>
          </form>
        </Box>

        {data.tip && <Box>You should tip ₹{data.tip}</Box>}

        <Stack>
          <Button onClick={() => navigate("/")}>Back to home</Button>
          <Text>Or</Text>
          <Button colorScheme="red" onClick={() => navigate("/price-calculator")}>
            Price Calculator
          </Button>
          <Button colorScheme="green" onClick={() => navigate("/emi-calculator")}>
            EMI Calculator
          </Button>
        </Stack>
      </Stack>
    </div>
  );
}
