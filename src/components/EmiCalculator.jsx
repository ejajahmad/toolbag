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

export default function EmiCalculator() {
  const navigate = useNavigate();

  const [data, setData] = useState({
    emi: "",
    amount: "",
    interest: "",
    months: "",
    year: "",
    err: "",
  });

  const handleOnChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value, err: "" });
  };

  const handleCalculate = (e) => {
    if (data.amount !== "" && (parseInt(data.interest / 12 / 100) !== "") & (parseInt(data.months) !== "")) {
      setData({
        ...data,
        emi:
          parseInt(data.amount) *
          parseInt(data.interest / 12 / 100) *
          (Math.pow(1 + parseInt(data.interest / 12 / 100), 1 / parseInt(data.months)) /
            Math.pow(1 + parseInt(data.interest / 12 / 100), 1 / parseInt(data.months)) -
            1),
      });
    } else if (data.err === "") {
      setData({ ...data, err: "Enter valid amount" });
    }
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    console.log(data);
    handleCalculate();
  };

  return (
    <div>
      <Text fontSize="xl">EMI Calculator</Text>
      <Stack p={5}>
        <Box p={2}>
          <form onSubmit={handleOnSubmit}>
            <FormControl>
              <FormLabel>Total Amount</FormLabel>
              <InputGroup>
                <InputLeftElement pointerEvents="none" color="gray.300" fontSize="1.2em" children="₹" />
                <Input placeholder="Enter amount" type="number" name="amount" value={data.amount} onChange={handleOnChange} />
                <InputRightElement children={<CheckboxIcon color="green.500" />} />
                {data.err && <FormHelperText color="red">{data.err}</FormHelperText>}
              </InputGroup>
            </FormControl>

            <FormControl mt={3}>
              <FormLabel>Interest Rate</FormLabel>
              <Input type="number" name="interest" value={data.interest} onChange={handleOnChange} />
            </FormControl>

            <Stack mt={3} alignItems="center" justifyContent="center">
              <FormControl mb={2}>
                <FormLabel>Months</FormLabel>
                <Input
                  type="number"
                  name="months"
                  value={data.months}
                  onChange={(e) => setData({ ...data, year: Math.round(e.target.value / 12), months: e.target.value })}
                />
              </FormControl>
              <p>Or</p>
              <FormControl>
                <FormLabel>Years</FormLabel>
                <Input
                  type="number"
                  name="year"
                  value={data.year}
                  onChange={(e) => setData({ ...data, months: e.target.value * 12, year: e.target.value })}
                />
              </FormControl>
            </Stack>

            <FormControl>
              <FormLabel></FormLabel>
              <Button type="submit" colorScheme="blue" w="full">
                Calculate
              </Button>
            </FormControl>
          </form>
        </Box>

        {data.emi && <Box>You should tip ₹{data.emi}</Box>}

        <Stack>
          <Button onClick={() => navigate("/")}>Back to home</Button>
          <Text>Or</Text>
          <Button colorScheme="red" onClick={() => navigate("/price-calculator")}>
            Price Calculator
          </Button>
          <Button colorScheme="teal" onClick={() => navigate("/tip-calculator")}>
            Tip Calculator
          </Button>
        </Stack>
      </Stack>
    </div>
  );
}
