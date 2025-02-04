"use client";
import { useState } from "react";
import {
  Box,
  Button,
  Flex,
  Heading,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  useDisclosure,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  VStack,
  Text,
  Badge,
  Select,
  Divider,
  useToast,
  Avatar,
  Icon,
  HStack,
  IconButton,
} from "@chakra-ui/react";
import {
  FaCar,
  FaUser,
  FaPhone,
  FaEnvelope,
  FaDollarSign,
  FaAngleRight,
  FaAngleLeft,
} from "react-icons/fa";
import styled from "@emotion/styled";
import Sidebar from "@/app/components/major/Sidebar";
import MainContent from "@/app/components/minor/MainContent";
import Header from "@/app/components/minor/Header";
import { useRouter } from "next/navigation";
import { FaCakeCandles } from "react-icons/fa6";

const StyledTable = styled(Table)`
  th {
    background: #f7fafc;
    text-transform: uppercase;
    font-size: 0.75rem;
    letter-spacing: 0.05em;
  }

  tr {
    transition: all 0.2s;
    cursor: pointer;

    &:hover {
      background: #eee;
      transform: translateY(-2px);
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
    }
  }

  td {
    font-size: 0.875rem;
  }
`;

interface Customer {
  name: string;
  email: string;
  plateNumber: string;
  phoneNo: string;
  cars: number;
  debt: string;
  birthDate: string;
  vehicles?: Array<{
    model: string;
    year: string;
    lastService: string;
    serviceHistory: Array<{
      date: string;
      service: string;
      cost: string;
    }>;
  }>;
}

// Enhance the customer data with additional details
const enhancedCustomersData: Customer[] = [
  {
    name: "Esther Howard",
    email: "test@gmail.com",
    plateNumber: "ABV 13 AL",
    phoneNo: "08156438520",
    cars: 2,
    debt: "$250.00",
    birthDate: "01/13/1995",
    vehicles: [
      {
        model: "Toyota Camry",
        year: "2020",
        lastService: "2023-10-15",
        serviceHistory: [
          {
            date: "2023-10-15",
            service: "Oil Change",
            cost: "$50.00",
          },
          {
            date: "2023-08-20",
            service: "Brake Inspection",
            cost: "$75.00",
          },
        ],
      },
      {
        model: "Honda CR-V",
        year: "2019",
        lastService: "2023-09-01",
        serviceHistory: [
          {
            date: "2023-09-01",
            service: "Tire Rotation",
            cost: "$40.00",
          },
        ],
      },
    ],
  },
  // ...Add similar vehicle data for other customers...
];

export default function CustomersPage() {
  // const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedCustomer, setSelectedCustomer] = useState<Customer | null>(
    null
  );
  const [selectedVehicle, setSelectedVehicle] = useState("");
  const router = useRouter();
  const toast = useToast();
  const dummyServiceHistory = Array.from({ length: 15 }, (_, index) => ({
    id: index + 1,
    service: `Service ${index + 1}`,
    date: `2023-10-${index + 1}`,
  }));

  const itemsPerPage = 5; // Number of job orders to display per page
  const totalPages = Math.ceil(dummyServiceHistory.length / itemsPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  // Calculate the current items to display
  const currentItems = dummyServiceHistory.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );
  const handleRowClick = (customer: Customer) => {
    setSelectedCustomer(customer);
    onOpen();
  };

  const handleCustomerOrder = () => {
    if (!selectedVehicle) {
      toast({
        title: "Please select a vehicle",
        status: "error",
        duration: 3000,
      });
      return;
    }
    // Navigate to create job order page with customer and vehicle data
    router.push(
      `/create-job-order?customer=${selectedCustomer?.name}&vehicle=${selectedVehicle}`
    );
  };

  const handleNewCustomerOrder = () => {
    // Navigate to create job order page with customer and vehicle data
    router.push(
      `/create-job-order?customer=${selectedCustomer?.name}&vehicle=${selectedVehicle}`
    );
  };

  return (
    <Flex>
      <Box>
        <Sidebar />
      </Box>
      <MainContent>
        <Box
          flex="1"
          p={{
            base: 2,
            md: 4,
            xl: 8,
          }}
          mt={{ base: 10, xl: 4 }}
        >
          <Header />

          {/* Search and Title Section */}
          <Flex justify="space-between" align="center" mb={6}>
            <Heading size="sm" color="gray.700">
              Customers
            </Heading>
          </Flex>

          {/* Enhanced Table */}
          <Box bg="white" rounded="lg" shadow="sm" overflow="hidden">
            <StyledTable>
              <Thead>
                <Tr>
                  <Th color="gray.600">Customer</Th>
                  <Th color="gray.600">Contact</Th>
                  <Th color="gray.600">Plate Number</Th>
                  <Th color="gray.600">Vehicles</Th>
                  <Th color="gray.600">Outstanding</Th>
                  <Th color="gray.600">Status</Th>
                </Tr>
              </Thead>
              <Tbody>
                {enhancedCustomersData.map((customer, index) => (
                  <Tr key={index} onClick={() => handleRowClick(customer)}>
                    <Td>
                      <HStack>
                        <Avatar size="sm" name={customer.name} />
                        <Box>
                          <Text fontWeight="medium">{customer.name}</Text>
                          <Text
                            fontSize="xs"
                            fontWeight="semibold"
                            color="gray.600"
                          >
                            {customer.email}
                          </Text>
                        </Box>
                      </HStack>
                    </Td>
                    <Td>{customer.phoneNo}</Td>
                    <Td>{customer.plateNumber}</Td>
                    <Td>
                      <Badge colorScheme="blue" borderRadius="full">
                        {customer.cars} vehicles
                      </Badge>
                    </Td>
                    <Td>
                      <Text
                        color={
                          parseFloat(customer.debt.slice(1)) > 0
                            ? "red.500"
                            : "green.500"
                        }
                      >
                        {customer.debt}
                      </Text>
                    </Td>
                    <Td>
                      <Badge
                        colorScheme={
                          parseFloat(customer.debt.slice(1)) > 0
                            ? "red"
                            : "green"
                        }
                        borderRadius="full"
                      >
                        {parseFloat(customer.debt.slice(1)) > 0
                          ? "Pending"
                          : "Clear"}
                      </Badge>
                    </Td>
                  </Tr>
                ))}
              </Tbody>
            </StyledTable>
          </Box>

          {/* Customer Details Drawer */}
          <Drawer isOpen={isOpen} onClose={onClose} size="md">
            <DrawerOverlay />
            <DrawerContent bgColor="gray.100" color="gray.600">
              <DrawerCloseButton />
              <DrawerHeader
                fontSize="medium"
                fontWeight="extrabold"
                borderBottomWidth="1px"
              >
                Customer Details
              </DrawerHeader>
              <DrawerBody>
                {selectedCustomer && (
                  <VStack spacing={6} align="stretch">
                    {/* Customer Info Section */}
                    <Box>
                      <Heading size="xz" mb={4}>
                        Personal Information
                      </Heading>
                      <VStack align="stretch" spacing={3} color="gray.700">
                        <HStack>
                          <Icon as={FaUser} color="blue.500" />
                          <Text>{selectedCustomer.name}</Text>
                        </HStack>
                        <HStack>
                          <Icon as={FaEnvelope} color="blue.500" />
                          <Text>{selectedCustomer.email}</Text>
                        </HStack>
                        <HStack>
                          <Icon as={FaPhone} color="blue.500" />
                          <Text>{selectedCustomer.phoneNo}</Text>
                        </HStack>
                        <HStack>
                          <Icon as={FaDollarSign} color="blue.500" />
                          <Text>Outstanding: {selectedCustomer.debt}</Text>
                        </HStack>
                        <HStack>
                          <Icon as={FaCakeCandles} color="blue.500" />
                          <Text>Birthdate: {selectedCustomer.birthDate}</Text>
                        </HStack>
                      </VStack>
                    </Box>

                    <Divider />

                    {/* Vehicles Section */}
                    <Box>
                      <Heading size="xs" mb={4}>
                        Vehicles
                      </Heading>
                      <Select
                        size="sm"
                        placeholder="Select vehicle for job order"
                        onChange={(e) => setSelectedVehicle(e.target.value)}
                        mb={4}
                      >
                        {selectedCustomer.vehicles?.map((vehicle, idx) => (
                          <option
                            style={{
                              backgroundColor: "#eee",
                              color: "gray.500",
                              fontSize: "14px",
                            }}
                            key={idx}
                            value={vehicle.model}
                          >
                            {vehicle.model} ({vehicle.year})
                          </option>
                        ))}
                      </Select>

                      {/* Vehicle History */}
                      {/* {selectedCustomer.vehicles?.map((vehicle, idx) => (
                        <Box
                          key={idx}
                          mb={4}
                          p={4}
                          bg="gray.50"
                          borderRadius="md"
                        >
                          <HStack mb={2}>
                            <Icon as={FaCar} color="blue.500" />
                            <Text fontWeight="medium">
                              {vehicle.model} ({vehicle.year})
                            </Text>
                          </HStack>
                          <Text fontSize="sm" color="gray.600" mb={2}>
                            Last Service: {vehicle.lastService}
                          </Text>
                          <VStack align="stretch" spacing={2}>
                            {vehicle.serviceHistory.map((history, hidx) => (
                              <Box
                                key={hidx}
                                p={2}
                                bg="white"
                                borderRadius="md"
                                fontSize="sm"
                              >
                                <HStack justify="space-between">
                                  <Text>{history.service}</Text>
                                  <Text color="gray.600">{history.date}</Text>
                                </HStack>
                                <Text color="blue.500" fontWeight="medium">
                                  {history.cost}
                                </Text>
                              </Box>
                            ))}
                          </VStack>
                        </Box>
                      ))} */}
                      <Text fontSize="sm" color="gray.600" mb={2}>
                        Service History
                      </Text>
                      <VStack align="stretch" spacing={2}>
                        {currentItems.map((history) => (
                          <Box
                            key={history.id}
                            p={2}
                            bg="white"
                            borderRadius="md"
                            fontSize="sm"
                          >
                            <HStack justify="space-between">
                              <Text>Job Order ID: {history.id}</Text>
                              <Text color="gray.600">{history.date}</Text>
                            </HStack>
                            <Text color="blue.500" fontWeight="medium">
                              {history.service}
                            </Text>
                          </Box>
                        ))}
                      </VStack>

                      {/* Pagination Controls */}
                      <HStack spacing={4} mt={4}>
                        <IconButton
                          colorScheme="blue"
                          aria-label="previous"
                          icon={<FaAngleLeft color="#002050" />}
                          onClick={() => handlePageChange(currentPage - 1)}
                          isDisabled={currentPage === 1}
                        />

                        <Text>
                          Page {currentPage} of {totalPages}
                        </Text>
                        <IconButton
                          colorScheme="blue"
                          aria-label="next"
                          icon={<FaAngleRight color="#002050" />}
                          onClick={() => handlePageChange(currentPage + 1)}
                          isDisabled={currentPage === totalPages}
                        />
                      </HStack>
                    </Box>
                    <Flex gap={6} mb={4}>
                      <Button
                        width="fit-content"
                        colorScheme="blue"
                        size="sm"
                        leftIcon={<FaCar fontSize="sm" />}
                        onClick={handleCustomerOrder}
                        mt={4}
                      >
                        Customer Order
                      </Button>
                      <Button
                        width="fit-content"
                        colorScheme="purple"
                        // bgColor="secondaryBlue"
                        size="sm"
                        leftIcon={<FaCar fontSize="sm" />}
                        onClick={handleNewCustomerOrder}
                        mt={4}
                      >
                        New Car Order
                      </Button>
                    </Flex>
                  </VStack>
                )}
              </DrawerBody>
            </DrawerContent>
          </Drawer>
        </Box>
      </MainContent>
    </Flex>
  );
}
