import {
  Badge,
  Box,
  Flex,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";

export default function JobOrderTable() {
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
        <Flex
          align="center"
          color="blue.500"
          cursor="pointer"
          gap={2}
          _hover={{ color: "blue.600" }}>
          <Text>See More</Text>
          <FaArrowRight />
        </Flex>
      </Flex>

      <Box
        overflowX="auto"
        sx={{
          "::-webkit-scrollbar": {
            height: "8px",
          },
          "::-webkit-scrollbar-track": {
            background: "gray.100",
            borderRadius: "4px",
          },
          "::-webkit-scrollbar-thumb": {
            background: "gray.300",
            borderRadius: "4px",
            "&:hover": {
              background: "gray.400",
            },
          },
        }}>
        <Table variant="simple" minWidth="1000px">
          <Thead>
            <Tr>
              <Th borderBottom="2px" borderColor="gray.200">
                Booking ID
              </Th>
              <Th borderBottom="2px" borderColor="gray.200">
                Booking Date
              </Th>
              <Th borderBottom="2px" borderColor="gray.200">
                Client Name
              </Th>
              <Th borderBottom="2px" borderColor="gray.200">
                Client Email
              </Th>
              <Th borderBottom="2px" borderColor="gray.200">
                Car Issue
              </Th>
              <Th borderBottom="2px" borderColor="gray.200">
                Payment
              </Th>
              <Th borderBottom="2px" borderColor="gray.200">
                Technician
              </Th>
              <Th borderBottom="2px" borderColor="gray.200">
                Status
              </Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr
              _hover={{
                bg: "gray.50",
                transform: "scale(1.01)",
                transition: "all 0.2s",
              }}
              cursor="pointer">
              <Td fontWeight="medium" py={4}>
                BK-PA1001
              </Td>
              <Td>Jan 1, 2025</Td>
              <Td>Danny Code</Td>
              <Td>info@dannyco.com</Td>
              <Td>Wheel Alignment</Td>
              <Td color="green.500" fontWeight="medium">
                #800,000 Paid
              </Td>
              <Td>
                <Flex align="center">
                  <Text>Technician Name</Text>
                </Flex>
              </Td>
              <Td>
                <Badge
                  colorScheme="orange"
                  borderRadius="full"
                  px={3}
                  py={1}
                  fontSize="sm"
                  textTransform="none">
                  Ongoing
                </Badge>
              </Td>
            </Tr>
          </Tbody>
        </Table>
      </Box>
    </Box>
  );
}
