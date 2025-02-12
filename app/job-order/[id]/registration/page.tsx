"use client";
import { useState } from "react";
import {
  Box,
  Heading,
  Flex,
  Divider,
  Icon,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
} from "@chakra-ui/react";

import { FaClipboard } from "react-icons/fa";
import { FormData } from "@/app/utils/types/formData";
import Sidebar from "@/app/components/major/Sidebar";
import TabA from "@/app/components/minor/TabA";
import TabB from "@/app/components/minor/TabB";
import TabD from "@/app/components/minor/TabD";
import TabC from "@/app/components/minor/TabC";

import { withAuth } from "@/app/utils/services/hoc";

// Updated styled components

function RegistrationPage() {
  const [formData, setFormData] = useState<FormData>({
    clientName: "",
    phoneNumber: "",
    clientEmail: "",
    carNo: "",
    carMake: "",
    carYear: "",
    date: "",
    carIssue: "",
    carColour: "",
    odometer: "",
    workshop: "",
    team: "",
    firstPayment: "",
    secondPayment: "",
    debt: "",
    customerRequest: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <Flex
      minH="100vh"
      width={{ base: "85vw", md: "auto" }}
      justifyContent="center"
      // bg="gray.50"
    >
      <Box>
        <Sidebar />
      </Box>
      <Box width="100%">
        <Box
          // as={motion.div}
          // initial={{ opacity: 0 }}
          // animate={{ opacity: 1 }}
          p={{
            base: 2,
            md: 4,
            xl: 8,
          }}
          mt={{ base: 10, xl: 4 }}>
          <Box>
            <Flex
              align="center"
              mb={{ base: 4, md: 8 }}
              direction={{ base: "column", sm: "row" }}
              gap={2}>
              <Icon as={FaClipboard} fontSize="sm" color="blue.500" mr={3} />
              <Heading
                size={{ base: "xs", md: "sm" }}
                color="gray.700"
                fontWeight="600">
                New Job Order
              </Heading>
            </Flex>

            <Tabs variant="enclosed" size={{ base: "sm", md: "md" }} isFitted>
              <TabList display="flex" flexWrap="wrap">
                <Tab
                  fontSize={{ base: "xs", md: "sm" }}
                  px={{ base: 2, md: 4 }}>
                  Section A
                </Tab>
                <Tab
                  fontSize={{ base: "xs", md: "sm" }}
                  px={{ base: 2, md: 4 }}>
                  Section B
                </Tab>
                <Tab
                  fontSize={{ base: "xs", md: "sm" }}
                  px={{ base: 2, md: 4 }}>
                  Section C
                </Tab>
                <Tab
                  fontSize={{ base: "xs", md: "sm" }}
                  px={{ base: 2, md: 4 }}>
                  Section D
                </Tab>
              </TabList>

              <TabPanels>
                <TabPanel px={{ base: 0, md: 4 }}>
                  <TabA formData={formData} handleChange={handleChange} />
                </TabPanel>
                <TabPanel px={{ base: 0, md: 4 }}>
                  <TabB />
                </TabPanel>
                <TabPanel px={{ base: 0, md: 4 }}>
                  <TabD />
                </TabPanel>
                <TabPanel px={{ base: 0, md: 4 }}>
                  <TabC formData={formData} handleChange={handleChange} />
                </TabPanel>
              </TabPanels>
            </Tabs>

            <Divider my={{ base: 4, md: 8 }} borderColor="gray.200" />
          </Box>
        </Box>
      </Box>
    </Flex>
  );
}
export default withAuth(RegistrationPage);
