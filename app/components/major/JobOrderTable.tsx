import React from "react";
import { Box, Flex, Text, Badge, Icon, VStack } from "@chakra-ui/react";
import { FaArrowRight, FaClock, FaCheckCircle } from "react-icons/fa";
import { motion } from "framer-motion";
import { Link } from "@chakra-ui/next-js";

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
  // Sample data - you can replace with your actual data
  const orders = [
    {
      id: "BK-PA1001",
      date: "Jan 1, 2025",
      clientName: "Danny Code",
      email: "info@dannyco.com",
      issue: "Wheel Alignment",
      payment: "#800,000",
      technician: "John Smith",
      status: "Ongoing",
    },
    {
      id: "BK-PA1001",
      date: "Jan 1, 2025",
      clientName: "Danny Code",
      email: "info@dannyco.com",
      issue: "Wheel Alignment",
      payment: "#800,000",
      technician: "John Smith",
      status: "Ongoing",
    },
    {
      id: "BK-PA1001",
      date: "Jan 1, 2025",
      clientName: "Danny Code",
      email: "info@dannyco.com",
      issue: "Wheel Alignment",
      payment: "#800,000",
      technician: "John Smith",
      status: "Ongoing",
    },
    {
      id: "BK-PA1001",
      date: "Jan 1, 2025",
      clientName: "Danny Code",
      email: "info@dannyco.com",
      issue: "Wheel Alignment",
      payment: "#800,000",
      technician: "John Smith",
      status: "Ongoing",
    },
  ];

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
        <Link href="/dashboard/booking">
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
            gridTemplateColumns="repeat(8, 1fr)"
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
          </Box>

          {/* Grid Body */}
          <VStack spacing={2} align="stretch">
            {orders.map((order) => (
              <Box
                key={order.id}
                display="grid"
                gridTemplateColumns="repeat(8, 1fr)"
                gap={4}
                p={4}
                bg="white"
                borderRadius="lg"
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
                    colorScheme="green"
                    variant="subtle"
                    px={3}
                    py={1}
                    borderRadius="full">
                    {order.payment} Paid
                  </Badge>
                </Flex>

                <Flex align="center">
                  <Text>{order.technician}</Text>
                </Flex>

                <Flex align="center">
                  <Badge
                    colorScheme={
                      order.status === "Completed" ? "green" : "orange"
                    }
                    display="flex"
                    alignItems="center"
                    gap={1}
                    px={3}
                    py={1}
                    borderRadius="full">
                    <Icon
                      as={
                        order.status === "Completed" ? FaCheckCircle : FaClock
                      }
                      boxSize={3}
                    />
                    {order.status}
                  </Badge>
                </Flex>
              </Box>
            ))}
          </VStack>
        </Box>
      </Box>
    </Box>
  );
}
