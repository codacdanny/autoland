import React, { useState } from "react";
import {
  Box,
  Flex,
  Text,
  Badge,
  Icon,
  VStack,
  Collapse,
  Button,
  HStack,
} from "@chakra-ui/react";
import {
  FaArrowRight,
  FaClock,
  FaCheckCircle,
  FaFileAlt,
  FaFileInvoice,
  FaClipboardList,
} from "react-icons/fa";
import { motion } from "framer-motion";
import { Link } from "@chakra-ui/next-js";
import { useRouter } from "next/navigation";

const GridHeader = ({ children }: { children: React.ReactNode }) => (
  <Text
    fontSize="xs"
    fontWeight="semibold"
    color="gray.600"
    textTransform="uppercase"
    p={4}>
    {children}
  </Text>
);

export default function JobOrderTable() {
  const router = useRouter();
  const [expandedRow, setExpandedRow] = useState<string | null>(null);

  // Sample data - you can replace with your actual data
  const orders = [
    {
      id: "BK-PA1001",
      date: "Jan 1, 2025",
      clientName: "Danny Code",
      email: "info@dannyco.com",
      issue: "Wheel Alignment",
      payment: "Completed",
      technician: "John Smith",
      repairStatus: "Ongoing",
      deliveryStatus: "Yes",
    },
    {
      id: "BK-PA1001",
      date: "Jan 1, 2025",
      clientName: "Danny Code",
      email: "info@dannyco.com",
      issue: "Wheel Alignment",
      payment: "Completed",
      technician: "John Smith",
      repairStatus: "Ongoing",
      deliveryStatus: "Yes",
    },
    {
      id: "BK-PA1001",
      date: "Jan 1, 2025",
      clientName: "Danny Code",
      email: "info@dannyco.com",
      issue: "Wheel Alignment",
      payment: "Incomplete",
      technician: "John Smith",
      repairStatus: "Ongoing",
      deliveryStatus: "Yes",
    },
    {
      id: "BK-PA1001",
      date: "Jan 1, 2025",
      clientName: "Danny Code",
      email: "info@dannyco.com",
      issue: "Wheel Alignment",
      payment: "Incomplete",
      technician: "John Smith",
      repairStatus: "Ongoing",
      deliveryStatus: "Yes",
    },
  ];

  const handleRowClick = (orderId: string) => {
    setExpandedRow(expandedRow === orderId ? null : orderId);
  };

  const handleActionClick = (orderId: string, action: string) => {
    router.push(`/job-order/${orderId}/${action}`);
  };

  return (
    <Box
      as={motion.div}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      p={8}
      borderRadius="2xl"
      bg="cardBg"
      boxShadow="md"
      backdropFilter="blur(5px)"
      border="1px solid"
      borderColor="gray.100">
      <Flex justify="space-between" align="center" mb={6}>
        <Text fontSize="lg" fontWeight="semibold">
          Job Orders
        </Text>
        <Link href="/booking">
          <Flex
            align="center"
            color="blue.500"
            cursor="pointer"
            gap={2}
            _hover={{ color: "blue.600" }}>
            <Text>See More</Text>
            <FaArrowRight />
          </Flex>
        </Link>
      </Flex>

      <Box
        overflowX="auto"
        css={{
          "&::-webkit-scrollbar": {
            height: "8px",
          },
          "&::-webkit-scrollbar-track": {
            background: "#f1f1f1",
            borderRadius: "4px",
          },
          "&::-webkit-scrollbar-thumb": {
            background: "#cbd5e0",
            borderRadius: "4px",
            "&:hover": {
              background: "#a0aec0",
            },
          },
        }}>
        <Box minWidth="1200px">
          {/* Grid Header */}
          <Box
            display="grid"
            gridTemplateColumns="repeat(9, 1fr)"
            gap={4}
            bg="gray.50"
            borderRadius="lg"
            mb={2}>
            <GridHeader>Booking ID</GridHeader>
            <GridHeader>Booking Date</GridHeader>
            <GridHeader>Client Name</GridHeader>
            <GridHeader>Client Email</GridHeader>
            <GridHeader>Car Issue</GridHeader>
            <GridHeader>Payment</GridHeader>
            <GridHeader>Technician</GridHeader>
            <GridHeader>Status</GridHeader>
            <GridHeader>Delivery Status</GridHeader>
          </Box>

          {/* Grid Body */}
          <VStack spacing={2} align="stretch">
            {orders.map((order) => (
              <Box key={order.id}>
                <Box
                  display="grid"
                  gridTemplateColumns="repeat(9, 1fr)"
                  gap={4}
                  p={4}
                  bg="white"
                  borderRadius="lg"
                  onClick={() => handleRowClick(order.id)}
                  _hover={{
                    transform: "translateY(-2px)",
                    boxShadow: "sm",
                    bg: "gray.50",
                  }}
                  transition="all 0.2s"
                  cursor="pointer">
                  <Flex align="center">
                    <Text fontWeight="medium">{order.id}</Text>
                  </Flex>

                  <Flex align="center">
                    <Text>{order.date}</Text>
                  </Flex>

                  <Flex align="center">
                    <Text>{order.clientName}</Text>
                  </Flex>

                  <Flex align="center">
                    <Text
                      color="gray.600"
                      fontSize="sm"
                      overflow="hidden"
                      textOverflow="ellipsis"
                      whiteSpace="nowrap">
                      {order.email}
                    </Text>
                  </Flex>

                  <Flex align="center">
                    <Text>{order.issue}</Text>
                  </Flex>

                  <Flex align="center">
                    <Badge
                      colorScheme={
                        order.payment === "Completed" ? "green" : "red"
                      }
                      variant="subtle"
                      px={3}
                      py={1}
                      borderRadius="full">
                      {order.payment}
                    </Badge>
                  </Flex>

                  <Flex align="center">
                    <Text>{order.technician}</Text>
                  </Flex>

                  <Flex align="center">
                    <Badge
                      colorScheme={
                        order.repairStatus === "Completed" ? "green" : "orange"
                      }
                      display="flex"
                      alignItems="center"
                      gap={1}
                      px={3}
                      py={1}
                      borderRadius="full">
                      <Icon
                        as={
                          order.repairStatus === "Completed"
                            ? FaCheckCircle
                            : FaClock
                        }
                        boxSize={3}
                      />
                      {order.repairStatus}
                    </Badge>
                  </Flex>
                  <Flex align="center">
                    <Badge
                      colorScheme={
                        order.deliveryStatus === "Yes" ? "green" : "orange"
                      }
                      display="flex"
                      alignItems="center"
                      gap={1}
                      px={3}
                      py={1}
                      borderRadius="full">
                      <Icon
                        as={
                          order.deliveryStatus === "Yes"
                            ? FaCheckCircle
                            : FaClock
                        }
                        boxSize={3}
                      />
                      {order.deliveryStatus}
                    </Badge>
                  </Flex>
                </Box>

                <Collapse in={expandedRow === order.id}>
                  <Box
                    ml={4}
                    p={4}
                    bg="gray.50"
                    borderRadius="lg"
                    mt={2}
                    border="1px dashed"
                    borderColor="gray.200">
                    <HStack spacing={4} justify="flex-end">
                      <Button
                        leftIcon={<FaFileAlt />}
                        size="sm"
                        colorScheme="blue"
                        variant="outline"
                        onClick={() =>
                          handleActionClick(order.id, "registration")
                        }>
                        View Job Order
                      </Button>
                      <Button
                        leftIcon={<FaClipboardList />}
                        size="sm"
                        colorScheme="green"
                        variant="outline"
                        onClick={() => handleActionClick(order.id, "estimate")}>
                        Estimate Form
                      </Button>
                      <Button
                        leftIcon={<FaFileInvoice />}
                        size="sm"
                        colorScheme="purple"
                        variant="outline"
                        onClick={() => handleActionClick(order.id, "invoice")}>
                        Invoice
                      </Button>
                    </HStack>
                  </Box>
                </Collapse>
              </Box>
            ))}
          </VStack>
        </Box>
      </Box>
    </Box>
  );
}
