"use client";
import {
  Box,
  Flex,
  Button,
  Text,
  HStack,
  useDisclosure,
  Icon,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FaPlus, FaUserFriends } from "react-icons/fa";
import Sidebar from "../components/major/Sidebar";
import MainContent from "../components/minor/MainContent";
import Header from "../components/minor/Header";
import MetricCards from "../components/minor/MetricCards";
import JobOrderTable from "../components/major/JobOrderTable";
import { FaClipboardList, FaClock, FaWallet } from "react-icons/fa6";
import { FaCheckCircle } from "react-icons/fa";
import { MetricCardData } from "../types/metrics";

export default function BookingPage() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const JobOrderMetrics: MetricCardData[] = [
    {
      title: "Total Job Orders",
      value: "142",
      change: "+12.5%",
      isIncrease: true,
      icon: FaWallet,
      color: "purple.500",
      bgGradient: "linear(to-r, purple.400, purple.600)",
    },
    {
      title: "Ongoing",
      value: "12",
      change: "+8.2%",
      isIncrease: true,
      icon: FaClipboardList,
      color: "blue.500",
      bgGradient: "linear(to-r, blue.400, blue.600)",
    },
    {
      title: "Completed",
      value: "30",
      change: "+5.1%",
      isIncrease: true,
      icon: FaCheckCircle,
      color: "green.500",
      bgGradient: "linear(to-r, green.400, green.600)",
    },
    {
      title: "Pending",
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

          {/* New Section: Walk-in Header */}
          <Box
            as={motion.div}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            // transition={{ delay: 0.2 }}
            mb={8}
            p={6}
            borderRadius="2xl"
            bg="white"
            boxShadow="sm"
            border="1px solid"
            borderColor="gray.100"
            position="relative"
            overflow="hidden">
            <Box
              position="absolute"
              top={0}
              right={0}
              bottom={0}
              width="40%"
              bgGradient="linear(to-r, blue.50, purple.50)"
              opacity={0.1}
            />

            <Flex
              justify="space-between"
              align="center"
              flexWrap={{ base: "wrap", md: "nowrap" }}
              gap={4}>
              <HStack spacing={4}>
                <Icon as={FaUserFriends} fontSize="md" color="blue.500" />
                <Box>
                  <Text fontSize="sm" fontWeight="bold" color="gray.700">
                    Walk-in Customers
                  </Text>
                  <Text color="gray.500">
                    Manage walk-in job orders and customer repairs
                  </Text>
                </Box>
              </HStack>

              <Button
                as={motion.button}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                size="sm"
                fontWeight="medium"
                colorScheme="blue"
                leftIcon={<FaPlus />}
                onClick={onOpen}
                boxShadow="sm"
                _hover={{
                  transform: "translateY(-2px)",
                  boxShadow: "lg",
                }}>
                Add Job Order
              </Button>
            </Flex>
          </Box>

          <JobOrderTable />
        </Box>
      </MainContent>
    </Flex>
  );
}
