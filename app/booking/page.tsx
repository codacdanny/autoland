import { Box, Flex } from "@chakra-ui/react";
import Sidebar from "../components/major/Sidebar";
import MainContent from "../components/minor/MainContent";

export default function BookingPage() {
  return (
    <>
      <Flex>
        <Box display={{ base: "none", lg: "block" }}>
          <Sidebar />
        </Box>
        <MainContent>
          <Box>{/* Add content here */}</Box>
        </MainContent>
      </Flex>
    </>
  );
}
