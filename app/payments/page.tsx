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
  Text,
  HStack,
  TableContainer,
  useBreakpointValue,
  IconButton,
  useToast,
} from "@chakra-ui/react";
import {
  FaPlus,
  FaWallet,
  FaFileInvoice,
  FaFilter,
  FaEdit,
  FaTrash,
} from "react-icons/fa";
import styled from "@emotion/styled";

import Sidebar from "../components/major/Sidebar";
import MainContent from "../components/minor/MainContent";
import Header from "../components/minor/Header";
import MetricCards from "../components/minor/MetricCards";
import { FaClipboardList, FaClock } from "react-icons/fa6";
import { FaCheckCircle } from "react-icons/fa";
import { MetricCardData } from "../utils/types/metrics";
import { useState } from "react";

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

interface EditExpense extends Expense {
  isEditing?: boolean;
}

export default function PaymentsPage() {
  const toast = useToast();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const isMobile = useBreakpointValue({ base: true, md: false });
  const [expenses, setExpenses] = useState<EditExpense[]>([
    {
      id: "EXP001",
      category: "Fuel",
      amount: 500,
      description: "Monthly fuel allowance",
      date: "2024-02-20",
      status: "approved",
      paymentMethod: "Cash",
      isEditing: false,
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

  const handleDelete = (id: string) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this expense?"
    );
    if (confirmDelete) {
      setExpenses(expenses.filter((expense) => expense.id !== id));
      toast({
        title: "Expense deleted",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  const handleEdit = (id: string) => {
    const expenseToEdit = expenses.find((exp) => exp.id === id);
    if (expenseToEdit) {
      setNewExpense({
        category: expenseToEdit.category,
        amount: expenseToEdit.amount,
        description: expenseToEdit.description,
        paymentMethod: expenseToEdit.paymentMethod,
      });
      onOpen();
    }
  };

  return (
    <Flex>
      <Sidebar />
      <MainContent>
        <Box
          flex="1"
          p={{
            base: 2,
            md: 4,
            xl: 8,
          }}
          mt={{ base: 10, xl: 4 }}
          w="full"
          overflowX={{ base: "scroll", xl: "hidden" }}
        >
          <Header />
          <MetricCards metrics={JobOrderMetrics} />

          {/* Quick Actions */}
          <Grid
            templateColumns={{
              base: "1fr",
              lg: "repeat(2, 1fr)",
              xl: "repeat(3, 1fr)",
            }}
            gap={{ base: 3, md: 6 }}
            mb={{ base: 4, md: 8 }}
          >
            <ExpenseCard>
              <VStack align="stretch" spacing={{ base: 2, md: 4 }}>
                <Icon
                  as={FaWallet}
                  color="blue.500"
                  boxSize={{ base: 5, md: 6 }}
                />
                <Text fontWeight="medium" fontSize={{ base: "xs", md: "sm" }}>
                  Quick Add Expense
                </Text>
                <Button
                  colorScheme="blue"
                  leftIcon={<FaPlus />}
                  size={{ base: "xs", md: "sm" }}
                  onClick={onOpen}
                >
                  Add New Expense
                </Button>
              </VStack>
            </ExpenseCard>

            <ExpenseCard>
              <VStack align="stretch" spacing={{ base: 2, md: 4 }}>
                <Icon
                  as={FaFileInvoice}
                  fontSize="sm"
                  color="purple.500"
                  boxSize={{ base: 5, md: 6 }}
                />
                <Text fontWeight="medium" fontSize={{ base: "xs", md: "sm" }}>
                  Generate Report
                </Text>
                <Button
                  colorScheme="purple"
                  variant="outline"
                  size={{ base: "xs", md: "sm" }}
                >
                  Download Report
                </Button>
              </VStack>
            </ExpenseCard>

            {/* <ExpenseCard>
              <VStack align="stretch" spacing={{ base: 2, md: 4 }}>
                <Icon
                  as={FaChartLine}
                  fontSize="sm"
                  color="green.500"
                  boxSize={{ base: 5, md: 6 }}
                />
                <Text fontWeight="medium" fontSize={{ base: "xs", md: "sm" }}>
                  Analytics
                </Text>
                <Button
                  colorScheme="green"
                  variant="outline"
                  size={{ base: "xs", md: "sm" }}
                >
                  View Analytics
                </Button>
              </VStack>
            </ExpenseCard> */}
          </Grid>

          {/* Expenses Table */}
          <Box
            bg="white"
            rounded="lg"
            shadow="sm"
            overflow="hidden"
            mx={{ base: -2, md: 0 }} // Negative margin on mobile to allow full-width scroll
          >
            <Flex
              p={{ base: 3, md: 4 }}
              justify="space-between"
              align="center"
              direction={{ base: "column", sm: "row" }}
              gap={3}
            >
              <Text fontSize={{ base: "sm", md: "lg" }} fontWeight="bold">
                Recent Expenses
              </Text>
              <HStack spacing={2}>
                <Button
                  leftIcon={<FaFilter />}
                  size={{ base: "xs", md: "sm" }}
                  variant="ghost"
                >
                  Filter
                </Button>
                <Select
                  placeholder="Category"
                  size={{ base: "xs", md: "sm" }}
                  maxW={{ base: "150px", md: "200px" }}
                >
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

            <TableContainer minW="900px" overflowX="auto">
              <Table variant="simple" size={{ base: "sm", md: "md" }}>
                <Thead bg="gray.50">
                  <Tr>
                    <Th color="gray.600">Date</Th>
                    <Th color="gray.600">Category</Th>
                    {!isMobile && <Th color="gray.600">Description</Th>}
                    <Th color="gray.600" isNumeric>
                      Amount
                    </Th>
                    {!isMobile && <Th color="gray.600">Payment Method</Th>}
                    {/* <Th color="gray.600">Status</Th> */}
                    <Th color="gray.600" width="100px">
                      Actions
                    </Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {expenses.map((expense) => (
                    <Tr key={expense.id}>
                      <Td fontSize={{ base: "xs", md: "sm" }}>
                        {expense.date}
                      </Td>
                      <Td fontSize={{ base: "xs", md: "sm" }}>
                        {expense.category}
                      </Td>
                      {!isMobile && (
                        <Td fontSize={{ base: "xs", md: "sm" }}>
                          {expense.description}
                        </Td>
                      )}
                      <Td fontSize={{ base: "xs", md: "sm" }} isNumeric>
                        ₦{expense.amount.toLocaleString()}
                      </Td>
                      {!isMobile && (
                        <Td fontSize={{ base: "xs", md: "sm" }}>
                          {expense.paymentMethod}
                        </Td>
                      )}
                      {/* <Td>
                        <Badge
                          colorScheme={
                            expense.status === "approved"
                              ? "green"
                              : expense.status === "pending"
                              ? "yellow"
                              : "red"
                          }
                          fontSize={{ base: "2xs", md: "xs" }}
                          px={{ base: 1, md: 2 }}
                        >
                          {expense.status}
                        </Badge>
                      </Td> */}
                      <Td>
                        <HStack spacing={2}>
                          <IconButton
                            aria-label="Edit expense"
                            icon={<FaEdit />}
                            size={{ base: "xs", md: "sm" }}
                            colorScheme="blue"
                            variant="ghost"
                            onClick={() => handleEdit(expense.id)}
                          />
                          <IconButton
                            aria-label="Delete expense"
                            icon={<FaTrash />}
                            size={{ base: "xs", md: "sm" }}
                            colorScheme="red"
                            variant="ghost"
                            onClick={() => handleDelete(expense.id)}
                          />
                        </HStack>
                      </Td>
                    </Tr>
                  ))}
                </Tbody>
              </Table>
            </TableContainer>
          </Box>

          {/* Add Expense Modal */}
          <Modal
            isOpen={isOpen}
            onClose={onClose}
            size={{ base: "full", md: "xl" }}
          >
            <ModalOverlay backdropFilter="blur(10px)" />
            <StyledModal>
              <ModalHeader
                borderBottom="1px solid"
                borderColor="gray.100"
                fontSize={{ base: "lg", md: "xl" }}
                py={{ base: 3, md: 4 }}
              >
                Add New Expense
              </ModalHeader>
              <ModalCloseButton />
              <ModalBody py={{ base: 4, md: 6 }}>
                <VStack spacing={{ base: 3, md: 4 }}>
                  <FormControl>
                    <FormLabel fontSize={{ base: "sm", md: "md" }}>
                      Category
                    </FormLabel>
                    <Select
                      size={{ base: "sm", md: "md" }}
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
                    <FormLabel fontSize={{ base: "sm", md: "md" }}>
                      Amount
                    </FormLabel>
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
                    <FormLabel fontSize={{ base: "sm", md: "md" }}>
                      Description
                    </FormLabel>
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
                    <FormLabel fontSize={{ base: "sm", md: "md" }}>
                      Payment Method
                    </FormLabel>
                    <Select
                      size={{ base: "sm", md: "md" }}
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

                  <Button
                    colorScheme="blue"
                    size={{ base: "sm", md: "md" }}
                    width="full"
                  >
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
