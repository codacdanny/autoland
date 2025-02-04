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
  TableContainer,
  useBreakpointValue,
} from "@chakra-ui/react";
import { FaCheckCircle, FaClipboardList } from "react-icons/fa";
import { FaWallet } from "react-icons/fa6";
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
  const isMobile = useBreakpointValue({ base: true, md: false });
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
  ];

  return (
    <Flex>
      <Box>
        <Sidebar />
      </Box>

      <Box
        flex="1"
        p={{
          base: 2,
          md: 4,
          xl: 0,
        }}
        mt={{ base: 10, xl: 4 }}
        width="100%"
      >
        <Header />
        <MetricCards metrics={dashboardMetrics} />

        <VStack
          spacing={{ base: 4, md: 6 }}
          align="stretch"
          mt={{ base: 6, md: 8 }}
        >
          <Flex
            justify="space-between"
            align="center"
            direction={{ base: "column", sm: "row" }}
            gap={{ base: 2 }}
            wrap="wrap"
          >
            <Text fontSize={{ base: "sm", md: "md" }} fontWeight="bold">
              Payment History
            </Text>
            <Button
              size={{ base: "xs", md: "sm" }}
              colorScheme="blue"
              onClick={onOpen}
              w={{ base: "full", sm: "auto" }}
            >
              Record New Payment
            </Button>
          </Flex>

          <Box
            bg="white"
            rounded="lg"
            shadow="sm"
            overflow="hidden"
            mx={{ base: -2, md: 0 }}
          >
            <TableContainer overflowX="auto">
              <Table variant="simple" size={{ base: "sm", md: "md" }}>
                <Thead>
                  <Tr>
                    {!isMobile && <Th>Payment Phase</Th>}
                    <Th>Date</Th>
                    <Th isNumeric>Amount</Th>
                    {!isMobile && <Th>Payment Method</Th>}
                  </Tr>
                </Thead>
                <Tbody>
                  {payments.map((payment) => (
                    <Tr key={payment.id}>
                      {!isMobile && <Td>{payment.phase}</Td>}
                      <Td>{payment.date}</Td>
                      <Td isNumeric>₦{payment.amount.toLocaleString()}</Td>
                      {!isMobile && <Td>{payment.paymentMethod}</Td>}
                    </Tr>
                  ))}
                </Tbody>
              </Table>
            </TableContainer>
          </Box>
        </VStack>
      </Box>

      {/* Payment Modal */}
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        size={{ base: "full", md: "xl" }}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader
            borderBottom="1px solid"
            borderColor="gray.200"
            fontSize={{ base: "md", md: "lg" }}
            py={{ base: 3, md: 4 }}
          >
            <Stack
              direction={{ base: "column", sm: "row" }}
              justify="space-between"
              align={{ base: "start", sm: "center" }}
              spacing={{ base: 2, sm: 0 }}
            >
              <Text fontSize={{ base: "sm", md: "md" }}>
                {" "}
                Record New Payment
              </Text>
              <Badge
                colorScheme={balance === 0 ? "green" : "orange"}
                fontSize={{ base: "2xs", md: "sm" }}
                px={2}
                py={1}
                borderRadius="full"
              >
                Balance: ₦{balance.toLocaleString()}
              </Badge>
            </Stack>
          </ModalHeader>
          <ModalCloseButton />

          <ModalBody pb={{ base: 4, md: 6 }}>
            <Grid templateColumns="repeat(2, 1fr)" gap={{ base: 3, md: 4 }}>
              <GridItem colSpan={2}>
                <FormControl isRequired>
                  <FormLabel fontSize={{ base: "xs", md: "sm" }}>
                    Payment Phase
                  </FormLabel>
                  <Select
                    name="phase"
                    value={paymentForm.phase}
                    onChange={handleInputChange}
                    placeholder="Select phase"
                    size={{ base: "sm", md: "md" }}
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
                  <FormLabel fontSize={{ base: "xs", md: "sm" }}>
                    Total Amount Due
                  </FormLabel>
                  <InputGroup size={{ base: "sm", md: "md" }}>
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
                  <Text
                    fontSize={{ base: "2xs", md: "sm" }}
                    color="gray.300"
                    mt={1}
                  >
                    Maximum allowed: ₦{balance.toLocaleString()}
                  </Text>
                </FormControl>
              </GridItem>

              <GridItem colSpan={2}>
                <FormControl isRequired>
                  <FormLabel fontSize={{ base: "xs", md: "sm" }}>
                    Amount Paid
                  </FormLabel>
                  <InputGroup size={{ base: "sm", md: "md" }}>
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
                  <Text
                    fontSize={{ base: "2xs", md: "sm" }}
                    color="gray.300"
                    mt={1}
                  >
                    Maximum allowed: ₦{balance.toLocaleString()}
                  </Text>
                </FormControl>
              </GridItem>

              <GridItem colSpan={2}>
                <FormControl isRequired>
                  <FormLabel fontSize={{ base: "xs", md: "sm" }}>
                    Payment Method
                  </FormLabel>
                  <Select
                    name="paymentMethod"
                    value={paymentForm.paymentMethod}
                    onChange={handleInputChange}
                    placeholder="Select method"
                    size={{ base: "sm", md: "md" }}
                  >
                    <option value="Cash">💵 Cash</option>
                    <option value="Bank Transfer">🏦 Bank Transfer</option>
                    <option value="POS">💳 POS</option>
                    <option value="Check">📑 Check</option>
                  </Select>
                </FormControl>
              </GridItem>

              <GridItem colSpan={2}>
                <Divider my={{ base: 3, md: 4 }} />
                <Stack spacing={{ base: 2, md: 3 }}>
                  <Text fontSize={{ base: "xs", md: "sm" }} fontWeight="medium">
                    Payment Summary:
                  </Text>
                  <Grid
                    templateColumns="repeat(2, 1fr)"
                    gap={{ base: 1, md: 2 }}
                    fontSize={{ base: "xs", md: "sm" }}
                  >
                    <Text color="gray.300">Total Job Amount:</Text>
                    <Text fontWeight="bold">
                      ₦{totalJobAmount.toLocaleString()}
                    </Text>
                    <Text color="gray.300">Previously Paid:</Text>
                    <Text fontWeight="bold">₦{totalPaid.toLocaleString()}</Text>
                    <Text color="gray.300">Current Payment:</Text>
                    <Text fontWeight="bold">
                      ₦{(Number(paymentForm.amount) || 0).toLocaleString()}
                    </Text>
                    <Text color="gray.300">Remaining Balance:</Text>
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
            flexDir={{ base: "column", sm: "row" }}
            gap={{ base: 2, sm: 4 }}
          >
            <Button
              colorScheme="blue"
              onClick={handleSubmitPayment}
              isDisabled={
                !paymentForm.phase ||
                !paymentForm.amount ||
                !paymentForm.paymentMethod ||
                Number(paymentForm.amount) > balance
              }
              size={{ base: "sm", md: "md" }}
              w={{ base: "full", sm: "auto" }}
            >
              Save Payment
            </Button>
            <Button
              onClick={onClose}
              size={{ base: "sm", md: "md" }}
              variant="outline"
              w={{ base: "full", sm: "auto" }}
            >
              Cancel
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Flex>
  );
}
