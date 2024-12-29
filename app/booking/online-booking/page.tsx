"use client";
import JobOrderTable from "@/app/components/major/JobOrderTable";
import Sidebar from "@/app/components/major/Sidebar";
import Header from "@/app/components/minor/Header";
import MainContent from "@/app/components/minor/MainContent";
import MetricCards from "@/app/components/minor/MetricCards";
import { MetricCardData } from "@/app/types/metrics";
import {
  Box,
  Button,
  Flex,
  HStack,
  Icon,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FaCheckCircle, FaPlus, FaUserFriends } from "react-icons/fa";
import { FaClipboardList, FaClock, FaWallet } from "react-icons/fa6";

export default function OnlineBooking() {
  const { onOpen } = useDisclosure();

  const JobOrderMetrics: MetricCardData[] = [
    {
      title: "Total Online Orders",
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
      title: "Compeleted",
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
    <>
      <Flex>
        <Box display={{ base: "none", lg: "block" }}>
          <Sidebar />
        </Box>
        <MainContent>
          <Box flex="1" p={8}>
            {/* Header */}
            <Header />

            {/* Enhanced Metrics Grid */}
            <MetricCards metrics={JobOrderMetrics} />
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
                      Online Job orders
                    </Text>
                    <Text color="gray.500">
                      Manage Online orders and customer repairs
                    </Text>
                  </Box>
                </HStack>

                <Button
                  as={motion.button}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  size="sm"
                  colorScheme="blue"
                  leftIcon={<FaPlus />}
                  onClick={onOpen}
                  boxShadow="md"
                  _hover={{
                    transform: "translateY(-2px)",
                    boxShadow: "lg",
                  }}>
                  Complete Job Order
                </Button>
              </Flex>
            </Box>
            {/* Enhanced Recent Job Orders Table */}
            <JobOrderTable />
          </Box>
        </MainContent>
      </Flex>
    </>
  );
}
