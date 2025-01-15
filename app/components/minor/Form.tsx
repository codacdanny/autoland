import React from "react";
import {
  Input,
  Select,
  Textarea,
  VStack,
  Checkbox,
  Text,
} from "@chakra-ui/react";
import styled from "@emotion/styled";

export const StyledInput = styled(Input)`
  background: rgb(255, 255, 255);
  border: 1px solid #e2e8f0;
  border-radius: 10px;
  padding: 0.8rem 1rem;
  font-size: 0.9rem;
  transition: all 0.3s ease;

  &:focus {
    background: white;
    border-color: #4299e1;
    box-shadow: 0 0 0 3px rgba(66, 153, 225, 0.15);
  }

  &::placeholder {
    color: #a0aec0;
    font-size: 0.85rem;
  }
`;

export const InputField = ({
  name,
  placeholder,
  value,
  onChange,
}: {
  name: string;
  placeholder: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}) => (
  <StyledInput
    placeholder={placeholder}
    name={name}
    value={value}
    onChange={onChange}
  />
);

export const SelectField = ({ placeholder, value, onChange, options }) => (
  <Select
    name={name}
    fontSize="sm"
    placeholder={placeholder}
    value={value}
    onChange={onChange}
  >
    {options.map((option) => (
      <option
        style={{
          backgroundColor: "white",
          color: "gray",
        }}
        key={option.value}
        value={option.value}
      >
        {option.label}
      </option>
    ))}
  </Select>
);

export const TextAreaField = ({ name, placeholder, value, onChange }) => (
  <Textarea
    name={name}
    placeholder={placeholder}
    value={value}
    onChange={onChange}
    _placeholder={{ color: "#bdbdbd" }}
    bgColor="rgba(247, 250, 252, 0.8)"
    border="1px solid #e2e8f0"
    borderRadius="sm"
    p={4}
    fontSize="sm"
  />
);

export const CheckboxGroup = ({ options }) => (
  <VStack align="stretch">
    {options.map((option) => (
      <Checkbox key={option.label}>
        <Text fontSize="sm">{option.label}</Text>
      </Checkbox>
    ))}
  </VStack>
);
