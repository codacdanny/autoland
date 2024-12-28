import { Box, Flex } from "@chakra-ui/react";
import Sidebar from "../components/major/Sidebar";
import MainContent from "../components/minor/MainContent";
import Header from "../components/minor/Header";
import MetricCards from "../components/minor/MetricCards";
import JobOrderTable from "../components/major/JobOrderTable";
import { FaClipboardList, FaClock, FaWallet } from "react-icons/fa6";
import { FaCheckCircle } from "react-icons/fa";
import { MetricCardData } from "../types/metrics";

export default function BookingPage() {
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
      title: "Pending ",
      value: "12",
      change: "+8.2%",
      isIncrease: true,
      icon: FaClipboardList,
      color: "blue.500",
      bgGradient: "linear(to-r, blue.400, blue.600)",
    },
    {
      title: "Ongoing",
      value: "30",
      change: "+5.1%",
      isIncrease: true,
      icon: FaCheckCircle,
      color: "green.500",
      bgGradient: "linear(to-r, green.400, green.600)",
    },
    {
      title: "Completed",
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

            {/* Enhanced Recent Job Orders Table */}
            <JobOrderTable />
          </Box>
        </MainContent>
      </Flex>
    </>
  );
}
