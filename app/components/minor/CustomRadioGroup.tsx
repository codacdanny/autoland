import React from "react";
import { Radio, RadioGroup, Stack, Text } from "@chakra-ui/react";

const CustomRadioGroup = ({ value, onChange }) => {
  return (
    <RadioGroup onChange={onChange} value={value}>
      <Stack spacing={4}>
        <Radio
          value="pending"
          borderColor="yellow.200"
          colorScheme="yellow"
          size="md"
          _hover={{ bg: "yellow.100" }}
          _checked={{ bg: "yellow.500", color: "white" }}
        >
          <Text fontSize="sm">Pending</Text>
        </Radio>

        <Radio
          value="ongoing"
          borderColor="orange.500"
          colorScheme="orange"
          size="md"
          _hover={{ bg: "orange.100" }}
          _checked={{ bg: "orange.500", color: "white" }}
        >
          <Text fontSize="sm">Ongoing</Text>
        </Radio>
        <Radio
          value="approved"
          borderColor="blue.500"
          colorScheme="blue"
          size="md"
          _hover={{ bg: "blue.100" }}
          _checked={{ bg: "blue.500", color: "white" }}
        >
          <Text fontSize="sm">Approved</Text>
        </Radio>
        <Radio
          value="completed"
          borderColor="green.500"
          colorScheme="green"
          size="md"
          _hover={{ bg: "green.100" }}
          _checked={{ bg: "green.500", color: "white" }}
        >
          <Text fontSize="sm">Completed</Text>
        </Radio>
      </Stack>
    </RadioGroup>
  );
};

export default CustomRadioGroup;
