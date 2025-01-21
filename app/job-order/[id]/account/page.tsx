"use client";
import Sidebar from "@/app/components/major/Sidebar";
import Header from "@/app/components/minor/Header";
import MetricCards from "@/app/components/minor/MetricCards";
import { MetricCardData } from "@/app/types/metrics";
import {
  Box,
  Flex,
  VStack,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Button,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  FormControl,
  FormLabel,
  Input,
  Select,
  Text,
  useToast,
  ModalFooter,
  Divider,
  Grid,
  GridItem,
  InputGroup,
  InputLeftAddon,
  Badge,
  Stack,
} from "@chakra-ui/react";
import { FaCheckCircle, FaClipboardList } from "react-icons/fa";
import { FaClock, FaWallet } from "react-icons/fa6";
import { useState } from "react";

interface Payment {
  id: string;
  phase: string;
  amount: number;
  date: string;
  paymentMethod: string;
}

export default function CustomerJobOrderAccount() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();
  const [payments, setPayments] = useState<Payment[]>([]);
  const [totalJobAmount] = useState(2251375); // This should come from the job order

  // Form state
  const [paymentForm, setPaymentForm] = useState({
    phase: "",
    amount: "",
    paymentMethod: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setPaymentForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmitPayment = () => {
    const newPayment: Payment = {
      id: Date.now().toString(),
      phase: paymentForm.phase,
      amount: Number(paymentForm.amount),
      date: new Date().toISOString().split("T")[0],
      paymentMethod: paymentForm.paymentMethod,
    };

    setPayments([...payments, newPayment]);
    onClose();
    toast({
      title: "Payment recorded successfully",
      status: "success",
      duration: 3000,
      isClosable: true,
    });

    // Reset form
    setPaymentForm({
      phase: "",
      amount: "",
      paymentMethod: "",
    });
  };

  const totalPaid = payments.reduce((sum, payment) => sum + payment.amount, 0);
  const balance = totalJobAmount - totalPaid;

  const dashboardMetrics: MetricCardData[] = [
    {
      title: "Total Job Amount",
      value: `₦${totalJobAmount.toLocaleString()}`,
      change: "100%",
      isIncrease: true,
      icon: FaWallet,
      color: "purple.500",
      bgGradient: "linear(to-r, purple.400, purple.600)",
    },
    {
      title: "Total Paid",
      value: `₦${totalPaid.toLocaleString()}`,
      change: `${((totalPaid / totalJobAmount) * 100).toFixed(1)}%`,
      isIncrease: true,
      icon: FaClipboardList,
      color: "blue.500",
      bgGradient: "linear(to-r, blue.400, blue.600)",
    },
    {
      title: "Balance",
      value: `₦${balance.toLocaleString()}`,
      change: `${((balance / totalJobAmount) * 100).toFixed(1)}%`,
      isIncrease: false,
      icon: FaCheckCircle,
      color: "green.500",
      bgGradient: "linear(to-r, green.400, green.600)",
    },
    {
      title: "Payment Status",
      value: balance === 0 ? "Completed" : "Pending",
      change: balance === 0 ? "100%" : "In Progress",
      isIncrease: balance === 0,
      icon: FaClock,
      color: "orange.500",
      bgGradient: "linear(to-r, orange.400, orange.600)",
    },
  ];

  return (
    <>
      <Flex>
        <Box display={{ base: "none", lg: "block" }}>
          <Sidebar />
        </Box>

        <Box flex="2" p={8}>
          <Header />
          <MetricCards metrics={dashboardMetrics} />

          <VStack spacing={6} align="stretch" mt={8}>
            <Flex justify="space-between" align="center">
              <Text fontSize="md" fontWeight="bold">
                Payment History
              </Text>
              <Button size="sm" colorScheme="blue" onClick={onOpen}>
                Record New Payment
              </Button>
            </Flex>

            <Table variant="simple">
              <Thead>
                <Tr>
                  <Th>Payment Phase</Th>
                  <Th>Date</Th>
                  <Th>Amount</Th>
                  <Th>Payment Method</Th>
                </Tr>
              </Thead>
              <Tbody>
                {payments.map((payment) => (
                  <Tr key={payment.id}>
                    <Td>{payment.phase}</Td>
                    <Td>{payment.date}</Td>
                    <Td>₦{payment.amount.toLocaleString()}</Td>
                    <Td>{payment.paymentMethod}</Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </VStack>
        </Box>
      </Flex>
      {/* Payment Modal */}
      <Modal isOpen={isOpen} onClose={onClose} size="xl">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader borderBottom="1px solid" borderColor="gray.200">
            <Stack
              mt={6}
              direction="row"
              justify="space-between"
              align="center"
            >
              <Text fontSize="md"> Record New Payment</Text>
              <Badge
                colorScheme={balance === 0 ? "green" : "orange"}
                fontSize="sm"
                px={2}
                py={1}
                borderRadius="full"
              >
                Balance: ₦{balance.toLocaleString()}
              </Badge>
            </Stack>
          </ModalHeader>
          <ModalCloseButton />

          <ModalBody pb={6}>
            <Grid templateColumns="repeat(2, 1fr)" gap={4}>
              <GridItem colSpan={2}>
                <FormControl isRequired>
                  <FormLabel fontSize="sm">Payment Phase</FormLabel>
                  <Select
                    name="phase"
                    value={paymentForm.phase}
                    onChange={handleInputChange}
                    placeholder="Select phase"
                    size="sm"
                  >
                    <option value="First Payment">
                      First Payment (Initial)
                    </option>
                    <option value="Second Payment">
                      Second Payment (Interim)
                    </option>
                    <option value="Third Payment">
                      Third Payment (Progress)
                    </option>
                    <option value="Final Payment">
                      Final Payment (Completion)
                    </option>
                  </Select>
                </FormControl>
              </GridItem>

              <GridItem colSpan={2}>
                <FormControl isRequired>
                  <FormLabel fontSize="sm">Amount</FormLabel>
                  <InputGroup size="sm">
                    <InputLeftAddon>₦</InputLeftAddon>
                    <Input
                      name="amount"
                      type="number"
                      value={paymentForm.amount}
                      onChange={handleInputChange}
                      placeholder="Enter payment amount"
                      max={balance}
                    />
                  </InputGroup>
                  <Text fontSize="sm" color="gray.300" mt={1}>
                    Maximum allowed: ₦{balance.toLocaleString()}
                  </Text>
                </FormControl>
              </GridItem>

              <GridItem colSpan={2}>
                <FormControl isRequired>
                  <FormLabel fontSize="sm">Payment Method</FormLabel>
                  <Select
                    name="paymentMethod"
                    value={paymentForm.paymentMethod}
                    onChange={handleInputChange}
                    placeholder="Select method"
                    size="sm"
                  >
                    <option value="Cash">💵 Cash</option>
                    <option value="Bank Transfer">🏦 Bank Transfer</option>
                    <option value="POS">💳 POS</option>
                    <option value="Check">📑 Check</option>
                  </Select>
                </FormControl>
              </GridItem>

              <GridItem colSpan={2}>
                <Divider my={4} />
                <Stack spacing={2}>
                  <Text fontSize="sm" fontWeight="medium">
                    Payment Summary:
                  </Text>
                  <Grid templateColumns="repeat(2, 1fr)" gap={2} fontSize="sm">
                    <Text color="gray.600">Total Job Amount:</Text>
                    <Text fontWeight="bold">
                      ₦{totalJobAmount.toLocaleString()}
                    </Text>
                    <Text color="gray.600">Previously Paid:</Text>
                    <Text fontWeight="bold">₦{totalPaid.toLocaleString()}</Text>
                    <Text color="gray.600">Current Payment:</Text>
                    <Text fontWeight="bold">
                      ₦{(Number(paymentForm.amount) || 0).toLocaleString()}
                    </Text>
                    <Text color="gray.600">Remaining Balance:</Text>
                    <Text
                      fontWeight="bold"
                      color={balance === 0 ? "green.500" : "orange.500"}
                    >
                      ₦
                      {(
                        balance - (Number(paymentForm.amount) || 0)
                      ).toLocaleString()}
                    </Text>
                  </Grid>
                </Stack>
              </GridItem>
            </Grid>
          </ModalBody>

          <ModalFooter
            justifyContent="left"
            borderTop="1px solid"
            borderColor="gray.200"
          >
            <Flex gap={4}>
              <Button
                colorScheme="blue"
                onClick={handleSubmitPayment}
                isDisabled={
                  !paymentForm.phase ||
                  !paymentForm.amount ||
                  !paymentForm.paymentMethod ||
                  Number(paymentForm.amount) > balance
                }
                size="sm"
              >
                Save Payment
              </Button>
              <Button onClick={onClose} size="sm" variant="outline">
                Cancel
              </Button>
            </Flex>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
