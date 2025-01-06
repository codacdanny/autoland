"use client";
import { useState } from "react";
import {
  Box,
  Button,
  Flex,
  Heading,
  Input,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  Text,
  VStack,
  HStack,
  Divider,
  useToast,
  Icon,
  FormLabel,
  Grid,
} from "@chakra-ui/react";
import styled from "@emotion/styled";
import { FaCar, FaUser, FaFileInvoice, FaPlus, FaTrash } from "react-icons/fa";
import { motion } from "framer-motion";

const StyledContainer = styled(Box)`
  background: linear-gradient(
    145deg,
    rgba(255, 255, 255, 0.95),
    rgba(249, 250, 251, 0.95)
  );
  border-radius: 20px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.08);
  padding: 2.5rem;
  margin: 2rem;
`;

const StyledInput = styled(Input)`
  background: rgba(247, 250, 252, 0.8);
  border: 1px solid #e2e8f0;
  border-radius: 10px;
  padding: 0.8rem 1rem;
  font-size: 0.9rem;
  color: #2d3748;
  transition: all 0.3s ease;

  &:focus {
    background: white;
    border-color: #4299e1;
    box-shadow: 0 0 0 3px rgba(66, 153, 225, 0.15);
  }

  &::placeholder {
    color: #a0aec0;
  }
`;

const SectionTitle = styled(Heading)`
  font-size: 1rem;
  color: #2d3748;
  position: relative;
  margin: 1.5rem 0;
  padding-left: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &::before {
    content: "";
    position: absolute;
    left: 0;
    height: 100%;
    width: 3px;
    background: linear-gradient(180deg, #3182ce, #805ad5);
    border-radius: 4px;
  }
`;

export default function StockistPage() {
  const [formData, setFormData] = useState({
    name: "",
    regNo: "",
    workshop: "",
    vehMake: "",
    email: "",
    chassisNo: "",
    phoneNo: "",
    modelNo: "",
    jobOrderNo: "",
    date: "",
  });

  const [spareParts, setSpareParts] = useState([
    {
      sparePartNo: "",
      partName: "",
      description: "",
      qty: "",
      unitPrice: "",
      amount: "",
    },
  ]);
  const toast = useToast();

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleAddPart = () => {
    setSpareParts([
      ...spareParts,
      {
        sparePartNo: "",
        partName: "",
        description: "",
        qty: "",
        unitPrice: "",
        amount: "",
      },
    ]);
  };

  const handlePartChange = (
    index: number,
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = e.target;
    const updatedParts = spareParts.map((part, i) => {
      if (i === index) {
        return { ...part, [name]: value };
      }
      return part;
    });
    setSpareParts(updatedParts);
  };

  const handleSubmit = () => {
    toast({
      title: "Estimate Submitted",
      description: "Your estimate has been submitted successfully.",
      status: "success",
      duration: 5000,
      isClosable: true,
    });
  };

  return (
    <Box
      as={motion.div}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      bg="gray.50"
      minH="100vh"
    >
      <StyledContainer>
        <Flex align="center" mb={6}>
          <Icon as={FaFileInvoice} fontSize="sm" color="blue.500" mr={3} />
          <Heading size="sm" color="gray.700">
            Estimate Form
          </Heading>
        </Flex>

        {/* Customer Information */}
        <Box mb={8}>
          <SectionTitle>
            <Icon as={FaUser} fontSize="sm" color="blue.500" />
            <Heading as="h3" size="xs">
              Customer Details
            </Heading>
          </SectionTitle>
          <Grid templateColumns="repeat(2, 1fr)" gap={4}>
            <VStack align="stretch">
              <FormLabel color="gray.600" fontSize="sm">
                Customer Name
              </FormLabel>
              <StyledInput
                name="name"
                placeholder="Enter customer name"
                value={formData.name}
                onChange={handleInputChange}
              />
            </VStack>
            <VStack align="stretch">
              <FormLabel color="gray.600" fontSize="sm">
                Reg No
              </FormLabel>
              <StyledInput
                name="regNo"
                placeholder="Enter registration number"
                value={formData.regNo}
                onChange={handleInputChange}
              />
            </VStack>
            <VStack align="stretch">
              <FormLabel color="gray.600" fontSize="sm">
                Workshop
              </FormLabel>
              <StyledInput
                name="workshop"
                placeholder="Enter workshop"
                value={formData.workshop}
                onChange={handleInputChange}
              />
            </VStack>
            <VStack align="stretch">
              <FormLabel color="gray.600" fontSize="sm">
                Veh Make
              </FormLabel>
              <StyledInput
                name="vehMake"
                placeholder="Enter vehicle make"
                value={formData.vehMake}
                onChange={handleInputChange}
              />
            </VStack>
            <VStack align="stretch">
              <FormLabel color="gray.600" fontSize="sm">
                Email
              </FormLabel>
              <StyledInput
                name="email"
                placeholder="Enter email"
                value={formData.email}
                onChange={handleInputChange}
              />
            </VStack>
            <VStack align="stretch">
              <FormLabel color="gray.600" fontSize="sm">
                Chassis No
              </FormLabel>
              <StyledInput
                name="chassisNo"
                placeholder="Enter chassis number"
                value={formData.chassisNo}
                onChange={handleInputChange}
              />
            </VStack>
            <VStack align="stretch">
              <FormLabel color="gray.600" fontSize="sm">
                Phone No
              </FormLabel>
              <StyledInput
                name="phoneNo"
                placeholder="Enter phone number"
                value={formData.phoneNo}
                onChange={handleInputChange}
              />
            </VStack>
            <VStack align="stretch">
              <FormLabel color="gray.600" fontSize="sm">
                Model No
              </FormLabel>
              <StyledInput
                name="modelNo"
                placeholder="Enter model number"
                value={formData.modelNo}
                onChange={handleInputChange}
              />
            </VStack>
            <VStack align="stretch">
              <FormLabel color="gray.600" fontSize="sm">
                Job Order No
              </FormLabel>
              <StyledInput
                name="jobOrderNo"
                placeholder="Enter job order number"
                value={formData.jobOrderNo}
                onChange={handleInputChange}
              />
            </VStack>
            <VStack align="stretch">
              <FormLabel color="gray.600" fontSize="sm">
                Date
              </FormLabel>
              <StyledInput
                name="date"
                placeholder="Enter date"
                value={formData.date}
                onChange={handleInputChange}
              />
            </VStack>
          </Grid>
        </Box>

        {/* Vehicle Information */}
        <Box mb={8}>
          <SectionTitle>
            <Icon as={FaCar} fontSize="sm" color="blue.500" />
            <Heading as="h3" size="xs">
              Vehicle Information
            </Heading>
          </SectionTitle>
          <Grid templateColumns="repeat(2, 1fr)" gap={4}>
            <VStack align="stretch">
              <FormLabel color="gray.600" fontSize="sm">
                Vehicle Make
              </FormLabel>
              <StyledInput
                name="vehMake"
                placeholder="Enter vehicle make"
                value={formData.vehMake}
                onChange={handleInputChange}
              />
            </VStack>
            <VStack align="stretch">
              <FormLabel color="gray.600" fontSize="sm">
                Model No
              </FormLabel>
              <StyledInput
                name="modelNo"
                placeholder="Enter model number"
                value={formData.modelNo}
                onChange={handleInputChange}
              />
            </VStack>
            <VStack align="stretch">
              <FormLabel color="gray.600" fontSize="sm">
                Chassis No
              </FormLabel>
              <StyledInput
                name="chassisNo"
                placeholder="Enter chassis number"
                value={formData.chassisNo}
                onChange={handleInputChange}
              />
            </VStack>
            <VStack align="stretch">
              <FormLabel color="gray.600" fontSize="sm">
                Reg No
              </FormLabel>
              <StyledInput
                name="regNo"
                placeholder="Enter registration number"
                value={formData.regNo}
                onChange={handleInputChange}
              />
            </VStack>
          </Grid>
        </Box>

        {/* Parts Table */}
        <Box mb={8}>
          <SectionTitle>
            <Icon as={FaFileInvoice} fontSize="sm" color="blue.500" />
            <Heading as="h3" size="xs">
              Parts & Services
            </Heading>
          </SectionTitle>
          <Box overflowX="auto" bg="white" rounded="lg" shadow="sm">
            <Table variant="simple">
              <Thead bg="gray.50">
                <Tr>
                  <Th color="gray.600">Part No.</Th>
                  <Th color="gray.600">Part Name.</Th>
                  <Th color="gray.600">Description</Th>
                  <Th color="gray.600">Quantity</Th>
                  <Th color="gray.600">Unit Price</Th>
                  <Th color="gray.600">Amount</Th>
                  <Th width="100px"></Th>
                </Tr>
              </Thead>
              <Tbody>
                {spareParts.map((part, index) => (
                  <Tr key={index}>
                    <Td>
                      <StyledInput
                        name="sparePartNo"
                        placeholder="Enter part number"
                        value={part.sparePartNo}
                        onChange={(e) => handlePartChange(index, e)}
                      />
                    </Td>
                    <Td>
                      <StyledInput
                        name="partName"
                        placeholder="Enter part Name"
                        value={part.partName}
                        onChange={(e) => handlePartChange(index, e)}
                      />
                    </Td>
                    <Td>
                      <StyledInput
                        name="description"
                        placeholder="Enter description"
                        value={part.description}
                        onChange={(e) => handlePartChange(index, e)}
                      />
                    </Td>
                    <Td>
                      <StyledInput
                        name="qty"
                        placeholder="Enter quantity"
                        value={part.qty}
                        onChange={(e) => handlePartChange(index, e)}
                      />
                    </Td>
                    <Td>
                      <StyledInput
                        name="unitPrice"
                        placeholder="Enter unit price"
                        value={part.unitPrice}
                        onChange={(e) => handlePartChange(index, e)}
                      />
                    </Td>
                    <Td>
                      <StyledInput
                        name="amount"
                        placeholder="Enter amount"
                        value={part.amount}
                        onChange={(e) => handlePartChange(index, e)}
                      />
                    </Td>
                    <Td>
                      <Button
                        size="sm"
                        colorScheme="red"
                        variant="ghost"
                        leftIcon={<FaTrash />}
                        onClick={() =>
                          setSpareParts(
                            spareParts.filter((_, i) => i !== index)
                          )
                        }
                      >
                        Remove
                      </Button>
                    </Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </Box>
          <Button
            leftIcon={<FaPlus />}
            colorScheme="blue"
            size="sm"
            variant="ghost"
            onClick={handleAddPart}
            mt={4}
          >
            Add Part
          </Button>
        </Box>

        {/* Summary Section */}
        <Box mb={8}>
          <SectionTitle size="xs">Cost Summary</SectionTitle>
          <VStack align="stretch" spacing={4} maxW="400px">
            <HStack justify="space-between">
              <Text color="gray.600">Labour:</Text>
              <StyledInput w="200px" placeholder="0.00" />
            </HStack>
            <HStack justify="space-between">
              <Text color="gray.600">Sundries:</Text>
              <StyledInput w="200px" placeholder="0.00" />
            </HStack>
            <HStack justify="space-between">
              <Text color="gray.600">VAT:</Text>
              <StyledInput w="200px" placeholder="0.00" />
            </HStack>
          </VStack>
        </Box>

        <Divider my={6} />

        <Flex justify="flex-start" gap={4}>
          <Button variant="outline" size="sm" colorScheme="blue">
            Cancel
          </Button>
          <Button
            colorScheme="blue"
            size="sm"
            onClick={handleSubmit}
            leftIcon={<FaFileInvoice />}
          >
            Generate Invoice
          </Button>
        </Flex>
      </StyledContainer>
    </Box>
  );
}
