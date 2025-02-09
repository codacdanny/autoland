"use client";
import {
  Box,
  Flex,
  Button,
  Grid,
  useDisclosure,
  Icon,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  FormControl,
  FormLabel,
  Select,
  Textarea,
  VStack,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Badge,
  Text,
  HStack,
} from "@chakra-ui/react";
import {
  FaPlus,
  FaWallet,
  FaFileInvoice,
  FaChartLine,
  FaFilter,
} from "react-icons/fa";
import styled from "@emotion/styled";

import Sidebar from "../components/major/Sidebar";
import MainContent from "../components/minor/MainContent";
import Header from "../components/minor/Header";
import MetricCards from "../components/minor/MetricCards";
import { FaClipboardList, FaClock } from "react-icons/fa6";
import { FaCheckCircle } from "react-icons/fa";
import { useState } from "react";
import { MetricCardData } from "../utils/types/metrics";

const StyledModal = styled(ModalContent)`
  background: linear-gradient(
    145deg,
    rgba(255, 255, 255, 0.95),
    rgba(249, 250, 251, 0.95)
  );
  border-radius: 20px;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: #666;
`;

const StyledInput = styled(Textarea)`
  background: rgba(247, 250, 252, 0.8);
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
`;

const ExpenseCard = styled(Box)`
  background: white;
  border-radius: 16px;
  padding: 1.5rem;
  transition: all 0.3s ease;
  border: 1px solid #e2e8f0;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  }
`;

interface Expense {
  id: string;
  category: string;
  amount: number;
  description: string;
  date: string;
  status: "pending" | "approved" | "rejected";
  paymentMethod: string;
}

export default function PaymentsPage() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [expenses] = useState<Expense[]>([
    {
      id: "EXP001",
      category: "Fuel",
      amount: 500,
      description: "Monthly fuel allowance",
      date: "2024-02-20",
      status: "approved",
      paymentMethod: "Cash",
    },
    // Add more mock data...
  ]);

  const [newExpense, setNewExpense] = useState<Partial<Expense>>({
    category: "",
    amount: 0,
    description: "",
    paymentMethod: "",
  });

  const JobOrderMetrics: MetricCardData[] = [
    {
      title: "Total Income",
      value: "142",
      change: "+12.5%",
      isIncrease: true,
      icon: FaWallet,
      color: "purple.500",
      bgGradient: "linear(to-r, purple.400, purple.600)",
    },
    {
      title: "Total outflow",
      value: "12",
      change: "+8.2%",
      isIncrease: true,
      icon: FaClipboardList,
      color: "blue.500",
      bgGradient: "linear(to-r, blue.400, blue.600)",
    },
    {
      title: "Expenses",
      value: "30",
      change: "+5.1%",
      isIncrease: true,
      icon: FaCheckCircle,
      color: "green.500",
      bgGradient: "linear(to-r, green.400, green.600)",
    },
    {
      title: "Net Profit",
      value: "100",
      change: "-2.3%",
      isIncrease: false,
      icon: FaClock,
      color: "orange.500",
      bgGradient: "linear(to-r, orange.400, orange.600)",
    },
  ];

  return (
    <Flex>
      <Box display={{ base: "none", lg: "block" }}>
        <Sidebar />
      </Box>
      <MainContent>
        <Box flex="1" p={8}>
          <Header />
          <MetricCards metrics={JobOrderMetrics} />

          {/* Quick Actions */}
          <Grid
            templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }}
            gap={6}
            mb={8}
          >
            <ExpenseCard>
              <VStack align="stretch" spacing={4}>
                <Icon as={FaWallet} color="blue.500" boxSize={6} />
                <Text fontWeight="medium" fontSize="sm">
                  Quick Add Expense
                </Text>
                <Button
                  colorScheme="blue"
                  leftIcon={<FaPlus />}
                  size="sm"
                  onClick={onOpen}
                >
                  Add New Expense
                </Button>
              </VStack>
            </ExpenseCard>

            <ExpenseCard>
              <VStack align="stretch" spacing={4}>
                <Icon
                  as={FaFileInvoice}
                  fontSize="sm"
                  color="purple.500"
                  boxSize={6}
                />
                <Text fontWeight="medium" fontSize="sm">
                  Generate Report
                </Text>
                <Button colorScheme="purple" variant="outline" size="sm">
                  Download Report
                </Button>
              </VStack>
            </ExpenseCard>

            <ExpenseCard>
              <VStack align="stretch" spacing={4}>
                <Icon
                  as={FaChartLine}
                  fontSize="sm"
                  color="green.500"
                  boxSize={6}
                />
                <Text fontWeight="medium" fontSize="sm">
                  Analytics
                </Text>
                <Button colorScheme="green" variant="outline" size="sm">
                  View Analytics
                </Button>
              </VStack>
            </ExpenseCard>
          </Grid>

          {/* Expenses Table */}
          <Box bg="white" rounded="lg" shadow="sm" overflow="hidden">
            <Flex p={4} justify="space-between" align="center">
              <Text fontSize="lg" fontWeight="bold">
                Recent Expenses
              </Text>
              <HStack>
                <Button leftIcon={<FaFilter />} size="sm" variant="ghost">
                  Filter
                </Button>
                <Select placeholder="Category" size="sm" maxW="200px">
                  <option
                    style={{
                      backgroundColor: "#eee",
                      color: "gray.500",
                    }}
                  >
                    Fuel
                  </option>
                  <option
                    style={{
                      backgroundColor: "#eee",
                      color: "gray.500",
                    }}
                  >
                    Equipment
                  </option>
                  <option
                    style={{
                      backgroundColor: "#eee",
                      color: "gray.500",
                    }}
                  >
                    Maintenance
                  </option>
                  <option
                    style={{
                      backgroundColor: "#eee",
                      color: "gray.500",
                    }}
                  >
                    Others
                  </option>
                </Select>
              </HStack>
            </Flex>

            <Table variant="simple">
              <Thead bg="gray.50">
                <Tr>
                  <Th>ID</Th>
                  <Th>Category</Th>
                  <Th>Description</Th>
                  <Th isNumeric>Amount</Th>
                  <Th>Date</Th>
                  <Th>Payment Method</Th>
                  <Th>Status</Th>
                </Tr>
              </Thead>
              <Tbody>
                {expenses.map((expense) => (
                  <Tr key={expense.id}>
                    <Td fontWeight="medium">{expense.id}</Td>
                    <Td>{expense.category}</Td>
                    <Td>{expense.description}</Td>
                    <Td isNumeric fontWeight="bold">
                      ₦{expense.amount}
                    </Td>
                    <Td>{expense.date}</Td>
                    <Td>{expense.paymentMethod}</Td>
                    <Td>
                      <Badge
                        colorScheme={
                          expense.status === "approved"
                            ? "green"
                            : expense.status === "rejected"
                            ? "red"
                            : "yellow"
                        }
                      >
                        {expense.status}
                      </Badge>
                    </Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </Box>

          {/* Add Expense Modal */}
          <Modal isOpen={isOpen} onClose={onClose} size="xl">
            <ModalOverlay backdropFilter="blur(10px)" />
            <StyledModal>
              <ModalHeader borderBottom="1px solid" borderColor="gray.100">
                Add New Expense
              </ModalHeader>
              <ModalCloseButton />
              <ModalBody py={6}>
                <VStack spacing={4}>
                  <FormControl>
                    <FormLabel>Category</FormLabel>
                    <Select
                      placeholder="Select category"
                      value={newExpense.category}
                      onChange={(e) =>
                        setNewExpense({
                          ...newExpense,
                          category: e.target.value,
                        })
                      }
                    >
                      <option
                        style={{
                          backgroundColor: "#eee",
                          color: "gray.500",
                        }}
                        value="fuel"
                      >
                        Fuel
                      </option>
                      <option
                        style={{
                          backgroundColor: "#eee",
                          color: "gray.500",
                        }}
                        value="equipment"
                      >
                        Equipment
                      </option>
                      <option
                        style={{
                          backgroundColor: "#eee",
                          color: "gray.500",
                        }}
                        value="maintenance"
                      >
                        Maintenance
                      </option>
                      <option
                        style={{
                          backgroundColor: "#eee",
                          color: "gray.500",
                        }}
                        value="others"
                      >
                        Others
                      </option>
                    </Select>
                  </FormControl>

                  <FormControl>
                    <FormLabel>Amount</FormLabel>
                    <StyledInput
                      type="number"
                      placeholder="Enter amount"
                      value={newExpense.amount}
                      onChange={(e) =>
                        setNewExpense({
                          ...newExpense,
                          amount: Number(e.target.value),
                        })
                      }
                    />
                  </FormControl>

                  <FormControl>
                    <FormLabel>Description</FormLabel>
                    <Textarea
                      background=" rgba(247, 250, 252, 0.8)"
                      border=" 1px solid #e2e8f0"
                      borderRadius="10px"
                      font-size="sm"
                      placeholder="Enter description"
                      value={newExpense.description}
                      onChange={(e) =>
                        setNewExpense({
                          ...newExpense,
                          description: e.target.value,
                        })
                      }
                    />
                  </FormControl>

                  <FormControl>
                    <FormLabel>Payment Method</FormLabel>
                    <Select
                      placeholder="Select payment method"
                      value={newExpense.paymentMethod}
                      onChange={(e) =>
                        setNewExpense({
                          ...newExpense,
                          paymentMethod: e.target.value,
                        })
                      }
                    >
                      <option
                        style={{
                          backgroundColor: "#eee",
                          color: "gray.500",
                        }}
                        value="cash"
                      >
                        Cash
                      </option>
                      <option
                        style={{
                          backgroundColor: "#eee",
                          color: "gray.500",
                        }}
                        value="transfer"
                      >
                        Bank Transfer
                      </option>
                      <option
                        style={{
                          backgroundColor: "#eee",
                          color: "gray.500",
                        }}
                        value="card"
                      >
                        Card Payment
                      </option>
                    </Select>
                  </FormControl>

                  <Button colorScheme="blue" size="sm" width="full">
                    Add Expense
                  </Button>
                </VStack>
              </ModalBody>
            </StyledModal>
          </Modal>
        </Box>
      </MainContent>
    </Flex>
  );
}
