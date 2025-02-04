"use client";
import { useState } from "react";
import {
  Box,
  Heading,
  Button,
  Flex,
  useToast,
  Divider,
  Icon,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
} from "@chakra-ui/react";
import styled from "@emotion/styled";
import { motion } from "framer-motion";
import { FaClipboard } from "react-icons/fa";
import { FormData } from "@/app/types/formData";
import Sidebar from "@/app/components/major/Sidebar";
import TabA from "@/app/components/minor/TabA";
import TabB from "@/app/components/minor/TabB";
import TabD from "@/app/components/minor/TabD";
import TabC from "@/app/components/minor/TabC";

// Updated styled components
const FormContainer = styled(Box)`
  background: linear-gradient(
    145deg,
    rgba(255, 255, 255, 0.95),
    rgba(249, 250, 251, 0.85)
  );
  border-radius: 20px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.08);
  padding: 2.5rem;
  max-width: 900px;
  margin: auto;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
`;

const ActionButton = styled(Button)`
  font-size: 0.85rem;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  transition: all 0.3s ease;
  background: linear-gradient(45deg, #4299e1, #805ad5);
  color: white;
  width: fit-content;
  border: none;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(66, 153, 225, 0.3);
  }
`;

export default function RegistrationPage() {
  const toast = useToast();
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

  const handleSubmit = () => {
    // Handle form submission logic here
    toast({
      title: "Job Order Created.",
      description: "Your job order has been created successfully.",
      status: "success",
      duration: 5000,
      isClosable: true,
    });
  };

  return (
    <Flex minH="100vh" bg="gray.50">
      <Box>
        <Sidebar />
      </Box>
      <Box width="100%">
        <Box
          as={motion.div}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          p={{
            base: 2,
            md: 4,
            xl: 8,
          }}
          mt={{ base: 10, xl: 4 }}
        >
          <FormContainer>
            <Flex align="center" mb={8}>
              <Icon as={FaClipboard} fontSize="sm" color="blue.500" mr={3} />
              <Heading size="sm" color="gray.700" fontWeight="600">
                New Job Order
              </Heading>
            </Flex>

            <Tabs variant="enclosed">
              <TabList>
                <Tab>Section A</Tab>
                <Tab>Section B</Tab>
                <Tab>Section C</Tab>
                <Tab>Section D</Tab>
              </TabList>

              <TabPanels>
                {/* TAB A */}
                <TabPanel>
                  {/* Information Section */}
                  <TabA formData={formData} handleChange={handleChange} />
                </TabPanel>

                {/*TAB B*/}
                <TabPanel>
                  <TabB />
                </TabPanel>
                {/* TAB C */}
                <TabPanel>
                  <TabD />
                </TabPanel>
                <TabPanel>
                  <TabC formData={formData} handleChange={handleChange} />
                </TabPanel>
              </TabPanels>
            </Tabs>

            <Divider my={8} borderColor="gray.200" />

            <Flex justify="flex-end" gap={4}>
              <ActionButton
                colorScheme="blue"
                onClick={() => {}}
                color="gray.600"
                border="1px solid"
                borderColor="gray.300"
              >
                Cancel
              </ActionButton>
              <ActionButton colorScheme="blue" onClick={handleSubmit}>
                Create Job Order
              </ActionButton>
            </Flex>
          </FormContainer>
        </Box>
      </Box>
    </Flex>
  );
}
