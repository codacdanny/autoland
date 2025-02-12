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
  TableContainer,
  useBreakpointValue,
  IconButton,
} from "@chakra-ui/react";
import styled from "@emotion/styled";
import { FaUser, FaFileInvoice, FaPlus, FaTrash } from "react-icons/fa";
import { withAuth } from "@/app/utils/services/hoc";

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

function EstimatePage() {
  const [formData, setFormData] = useState({
    name: "",
    plateNumber: "",
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
  const isMobile = useBreakpointValue({ base: true, md: false });

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
    const updatedParts = spareParts.map((part, idx) => {
      if (idx === index) {
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
    <Flex
      // padding={{ base: 2, md: 4, xl: 0 }}
      justifyContent="center"
      overflowX="scroll">
      <Box width="100%" flex={1}>
        <Box>
          <Flex align="center" mb={{ base: 4, md: 6 }} gap={2}>
            <Icon as={FaFileInvoice} fontSize="sm" color="blue.500" mr={3} />
            <Heading size="sm" color="gray.700">
              Estimate Form
            </Heading>
          </Flex>

          {/* Customer Information */}
          <Box mb={{ base: 6, md: 8 }}>
            <SectionTitle>
              <Icon as={FaUser} fontSize="sm" color="blue.500" />
              <Heading as="h3" size="xs">
                Customer Details
              </Heading>
            </SectionTitle>
            <Grid
              templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }}
              gap={{ base: 3, md: 4 }}>
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
                  Plate Number{" "}
                </FormLabel>
                <StyledInput
                  name="plateNumber"
                  placeholder="Enter registration number"
                  value={formData.plateNumber}
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

          {/* Parts Table */}
          <Box mb={{ base: 6, md: 8 }}>
            <SectionTitle>
              <Icon as={FaFileInvoice} fontSize="sm" color="blue.500" />
              <Heading as="h3" size="xs">
                Parts & Services
              </Heading>
            </SectionTitle>
            <Box bg="white" rounded="lg" shadow="sm" mx={{ base: -2, md: 0 }}>
              <TableContainer minW="900px" overflowX="auto">
                <Table variant="simple" size={{ base: "sm", md: "md" }}>
                  <Thead bg="gray.50">
                    <Tr>
                      <Th color="gray.600">Part No.</Th>
                      <Th color="gray.600">Part Name</Th>
                      {!isMobile && <Th color="gray.600">Description</Th>}
                      <Th color="gray.600">Qty</Th>
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
                            placeholder="Part no."
                            size={{ base: "sm", md: "md" }}
                            value={part.sparePartNo}
                            onChange={(e) => handlePartChange(index, e)}
                          />
                        </Td>
                        <Td>
                          <StyledInput
                            name="partName"
                            placeholder="Part name"
                            size={{ base: "sm", md: "md" }}
                            value={part.partName}
                            onChange={(e) => handlePartChange(index, e)}
                          />
                        </Td>
                        {!isMobile && (
                          <Td>
                            <StyledInput
                              name="description"
                              placeholder="Description"
                              size={{ base: "sm", md: "md" }}
                              value={part.description}
                              onChange={(e) => handlePartChange(index, e)}
                            />
                          </Td>
                        )}
                        <Td>
                          <StyledInput
                            name="qty"
                            placeholder="Qty"
                            size={{ base: "sm", md: "md" }}
                            value={part.qty}
                            onChange={(e) => handlePartChange(index, e)}
                          />
                        </Td>
                        <Td>
                          <StyledInput
                            name="unitPrice"
                            placeholder="Price"
                            size={{ base: "sm", md: "md" }}
                            value={part.unitPrice}
                            onChange={(e) => handlePartChange(index, e)}
                          />
                        </Td>
                        <Td>
                          <StyledInput
                            name="amount"
                            placeholder="Amount"
                            size={{ base: "sm", md: "md" }}
                            value={part.amount}
                            onChange={(e) => handlePartChange(index, e)}
                          />
                        </Td>
                        <Td>
                          <IconButton
                            aria-label="Remove part"
                            icon={<FaTrash />}
                            size={{ base: "xs", md: "sm" }}
                            colorScheme="red"
                            variant="ghost"
                            onClick={() =>
                              setSpareParts(
                                spareParts.filter((_, i) => i !== index)
                              )
                            }
                          />
                        </Td>
                      </Tr>
                    ))}
                  </Tbody>
                </Table>
              </TableContainer>
            </Box>
            <Button
              leftIcon={<FaPlus />}
              colorScheme="blue"
              size={{ base: "xs", md: "sm" }}
              variant="ghost"
              onClick={handleAddPart}
              mt={4}>
              Add Part
            </Button>
          </Box>

          {/* Summary Section */}
          <Box mb={{ base: 6, md: 8 }}>
            <SectionTitle size="xs">Cost Summary</SectionTitle>
            <VStack
              align="stretch"
              spacing={{ base: 3, md: 4 }}
              maxW={{ base: "100%", md: "400px" }}>
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
              <HStack justify="space-between">
                <Text color="gray.600">Estimator Name:</Text>
                <StyledInput w="200px" placeholder="Anozie Ikechi" />
              </HStack>
            </VStack>
          </Box>

          <Divider my={{ base: 4, md: 6 }} />

          <Flex
            justify="flex-start"
            gap={{ base: 2, md: 4 }}
            direction={{ base: "column", md: "row" }}
            wrap="wrap"
            mb={{ base: 6, md: 8 }}>
            <Button
              variant="outline"
              size={{ base: "xs", md: "sm" }}
              colorScheme="blue"
              w={{ base: "full", md: "auto" }}>
              Cancel
            </Button>
            <Button
              colorScheme="blue"
              size={{ base: "xs", md: "sm" }}
              onClick={handleSubmit}
              leftIcon={<FaFileInvoice />}
              w={{ base: "full", sm: "auto" }}>
              Generate Estimate
            </Button>
            <Button
              colorScheme="purple"
              size={{ base: "xs", md: "sm" }}
              onClick={handleSubmit}
              leftIcon={<FaFileInvoice />}
              w={{ base: "full", sm: "auto" }}>
              Send to client
            </Button>
            <Button
              colorScheme="teal"
              size={{ base: "xs", md: "sm" }}
              onClick={handleSubmit}
              leftIcon={<FaFileInvoice />}
              w={{ base: "full", sm: "auto" }}>
              Download as PDF
            </Button>
          </Flex>
        </Box>
      </Box>
    </Flex>
  );
}
export default withAuth(EstimatePage);
