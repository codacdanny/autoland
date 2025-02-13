"use client";
import { Box, Flex, Spinner } from "@chakra-ui/react";
import {
  FaWallet,
  FaClipboardList,
  FaCheckCircle,
  FaClock,
} from "react-icons/fa";
import Sidebar from "../components/major/Sidebar";
import MainContent from "../components/minor/MainContent";
import Header from "../components/minor/Header";
import { MetricCardData } from "../utils/types/metrics";
import MetricCards from "../components/minor/MetricCards";
import JobOrderTable from "../components/major/JobOrderTable";
import { withAuth } from "../utils/services/hoc";
import { useAuth } from "../utils/services/context";
import { useEffect } from "react";

function Dashboard() {
  const { user, loading, fetchUserData } = useAuth();

  useEffect(() => {
    fetchUserData();
  }, []);

  const bgGradient = "linear(to-br, blue.50, purple.50, pink.50)";
  const dashboardMetrics: MetricCardData[] = [
    {
      title: "Total Income",
      value: "₦90,000,000",
      change: "+12.5%",
      isIncrease: true,
      icon: FaWallet,
      color: "purple.500",
      bgGradient: "linear(to-r, purple.400, purple.600)",
    },
    {
      title: "Total Outflow",
      value: "₦2,000,000",
      change: "+8.2%",
      isIncrease: true,
      icon: FaClipboardList,
      color: "blue.500",
      bgGradient: "linear(to-r, blue.400, blue.600)",
    },
    {
      title: "Expenses",
      value: "₦12,000,000",
      change: "+5.1%",
      isIncrease: true,
      icon: FaCheckCircle,
      color: "green.500",
      bgGradient: "linear(to-r, green.400, green.600)",
    },
    {
      title: "Net Profit",
      value: "₦30,000,000",
      change: "-2.3%",
      isIncrease: false,
      icon: FaClock,
      color: "orange.500",
      bgGradient: "linear(to-r, orange.400, orange.600)",
    },
  ];

  if (loading) {
    return (
      <Flex justify="center" align="center" h="100vh">
        <Spinner size="xl" />
      </Flex>
    );
  }

  return (
    <>
      {user ? (
        <Flex bgGradient={bgGradient} minH="100vh">
          <Box>
            <Sidebar />
          </Box>
          <MainContent>
            <Box
              flex="1"
              p={{
                base: 2,
                md: 4,
                xl: 8,
              }}
              mt={{ base: 10, xl: 4 }}>
              {/* Header */}
              <Header />

              {/* Metrics Grid */}
              <MetricCards metrics={dashboardMetrics} />

              {/* Recent Job Orders Table */}
              <JobOrderTable />
            </Box>
          </MainContent>
        </Flex>
      ) : (
        <Flex justify="center" align="center" h="100vh">
          <Spinner size="xl" />
        </Flex>
      )}
    </>
  );
}
export default withAuth(Dashboard);
