"use client";
import { useState } from "react";
import {
  Box,
  Heading,
  Text,
  Button,
  Select,
  Flex,
  Textarea,
  useToast,
  Checkbox,
  VStack,
  HStack,
  Divider,
  Icon,
  FormControl,
  FormLabel,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
} from "@chakra-ui/react";
import styled from "@emotion/styled";
import Sidebar from "../components/major/Sidebar";
import MainContent from "../components/minor/MainContent";
import { motion } from "framer-motion";
import { FaCar, FaUser, FaTools, FaClipboard } from "react-icons/fa";
import {
  CheckboxGroup,
  InputField,
  SelectField,
  StyledInput,
  TextAreaField,
} from "../components/minor/Form";

// Updated styled components
const FormContainer = styled(Box)`
  background: linear-gradient(
    145deg,
    rgba(255, 255, 255, 0.95),
    rgba(249, 250, 251, 0.95)
  );
  border-radius: 20px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.08);
  padding: 2.5rem;
  max-width: 900px;
  margin: auto;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
`;

const SectionTitle = styled(Heading)`
  font-size: 0.8rem;
  color: #2d3748;
  position: relative;
  margin: 2rem 0 1.5rem;
  padding-left: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &::before {
    content: "";
    position: absolute;
    left: 0;
    height: 100%;
    width: 3px;
    background: linear-gradient(180deg, #3182ce, #805ad5);
    border-radius: 4px;
  }
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

export default function CreateJobOrderPage() {
  const toast = useToast();
  const [formData, setFormData] = useState({
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
      <Box display={{ base: "none", lg: "block" }}>
        <Sidebar />
      </Box>
      <MainContent>
        <Box
          as={motion.div}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          p={6}
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
              </TabList>

              <TabPanels>
                <TabPanel>
                  {/* Information Section */}
                  <Box mb={8}>
                    <SectionTitle>
                      <Icon as={FaUser} fontSize="sm" color="blue.500" />
                      <Heading as="h3" size="xs">
                        Client Information
                      </Heading>
                    </SectionTitle>
                    <VStack spacing={4} align="stretch">
                      <InputField
                        name="clientName"
                        placeholder="Client Name"
                        value={formData.clientName}
                        onChange={handleChange}
                      />
                      <InputField
                        name="phoneNumber"
                        placeholder="Client Phone Number"
                        value={formData.phoneNumber}
                        onChange={handleChange}
                      />
                      <InputField
                        name="clientEmail"
                        placeholder="Client Email"
                        value={formData.clientEmail}
                        onChange={handleChange}
                      />
                      <InputField
                        name="clientBirthday"
                        placeholder="Client Birthday"
                        value={formData.clientEmail}
                        onChange={handleChange}
                      />
                    </VStack>
                  </Box>

                  <Box mb={8}>
                    <SectionTitle>
                      <Icon as={FaCar} fontSize="sm" color="blue.500" />
                      <Heading as="h3" size="xs">
                        Vehicle Information
                      </Heading>
                    </SectionTitle>
                    <VStack spacing={4} align="stretch">
                      <InputField
                        name="carNo"
                        placeholder="Car VIN"
                        value={formData.carNo}
                        onChange={handleChange}
                      />
                      <InputField
                        name="carNo"
                        placeholder="Car Chasis Number"
                        value={formData.carNo}
                        onChange={handleChange}
                      />
                      <InputField
                        name="carNo"
                        placeholder="Car Plate Number"
                        value={formData.carNo}
                        onChange={handleChange}
                      />
                      <InputField
                        name="carMake"
                        placeholder="Car Make"
                        value={formData.carMake}
                        onChange={handleChange}
                      />
                      <InputField
                        name="carYear"
                        placeholder="Car Year"
                        value={formData.carYear}
                        onChange={handleChange}
                      />
                      <FormControl>
                        <FormLabel fontSize="medium">Select Date</FormLabel>
                        <input
                          type="date"
                          style={{
                            backgroundColor: "#3280cd",
                            color: "white",
                            padding: "10px",
                            border: "1px solid #bdbdb",
                            borderRadius: "10px",
                          }}
                        />
                      </FormControl>
                      <InputField
                        name="carIssue"
                        placeholder="Car Issue"
                        value={formData.carIssue}
                        onChange={handleChange}
                      />
                      <InputField
                        name="carColour"
                        placeholder="Car Colour"
                        value={formData.carColour}
                        onChange={handleChange}
                      />
                      <InputField
                        name="odometer"
                        placeholder="Odometer"
                        value={formData.odometer}
                        onChange={handleChange}
                      />
                      <SelectField
                        name="workshop"
                        placeholder="Select Workshop"
                        value={formData.workshop}
                        onChange={handleChange}
                        options={[
                          { value: "Owerri", label: "Owerri" },
                          { value: "Portharcourt", label: "Portharcourt" },
                        ]}
                      />
                      <TextAreaField
                        name="customerRequest"
                        placeholder="Customer's Request"
                        value={formData.customerRequest}
                        onChange={handleChange}
                      />
                    </VStack>
                  </Box>

                  <Box mb={8}>
                    <SectionTitle>
                      <Icon as={FaTools} fontSize="sm" color="blue.500" />
                      <Heading as="h3" size="xs">
                        Descriptions of Work
                      </Heading>
                    </SectionTitle>
                    <HStack>
                      <Textarea
                        name="descriptionOfWork"
                        _placeholder={{ color: "#bdbdbd" }}
                        bgColor="rgba(247, 250, 252, 0.8)"
                        border="1px solid #e2e8f0"
                        borderRadius="sm"
                        p={4}
                        fontSize="sm"
                        placeholder="Describe the Work that should be done on this vehicle"
                        value={formData.customerRequest}
                        onChange={handleChange}
                      />
                    </HStack>
                  </Box>
                </TabPanel>

                {/* Checkbox Section */}
                <TabPanel>
                  <Box mb={8}>
                    <SectionTitle>
                      <Icon as={FaTools} fontSize="sm" color="blue.500" />
                      <Heading as="h3" size="xs">
                        Suspension
                      </Heading>
                    </SectionTitle>
                    <CheckboxGroup
                      options={[
                        { label: "Vehicle rests levelly" },
                        {
                          label:
                            "When bouncing the vehicle's corners, no cracking noise is made",
                        },
                        { label: "All corners respond the same when bouncing" },
                      ]}
                    />
                  </Box>

                  <Box mb={8}>
                    <SectionTitle>
                      <Icon as={FaTools} fontSize="sm" color="blue.500" />
                      <Heading as="h3" size="xs">
                        Interior
                      </Heading>
                    </SectionTitle>
                    <CheckboxGroup
                      options={[
                        { label: "Seat unworn and free of cracks" },
                        { label: "All doors open and close freely" },
                        { label: "Trunk opens and closes freely" },
                        { label: "All gauges work" },
                        {
                          label:
                            "No dashboard warning lights remain illuminated",
                        },
                        { label: "Stereo works" },
                        { label: "Heaters work" },
                        { label: "Air conditioning works" },
                        { label: "Windshield wipers work" },
                        { label: "Windshield wiper fluid dispenses properly" },
                        {
                          label:
                            "All seats equipped with functional seat belts",
                        },
                        { label: "All seats adjust properly" },
                        { label: "Sunroof opens and closes properly" },
                        { label: "Car alarm works (if applicable)" },
                        {
                          label:
                            "Truck & driver-side door lock and unlock with key",
                        },
                        { label: "Hazard light functions properly" },
                        { label: "Headlight including bright works properly" },
                      ]}
                    />
                  </Box>
                </TabPanel>
                {/* others */}
                <TabPanel>
                  <Box mb={8}>
                    <SectionTitle>
                      <Icon as={FaTools} fontSize="sm" color="blue.500" />
                      <Heading as="h3" size="xs">
                        Other Insights
                      </Heading>
                    </SectionTitle>
                    <VStack align="stretch">
                      <Checkbox>
                        <Text fontSize="sm">
                          Walk away if the seller objects to your inspection
                        </Text>
                      </Checkbox>
                      <Checkbox>
                        <Text fontSize="sm">
                          {`Don’t feel rushed while inspecting`}
                        </Text>
                      </Checkbox>
                      <Checkbox>
                        <Text fontSize="sm">
                          Try to get a mechanic to assess checklist results
                        </Text>
                      </Checkbox>
                    </VStack>
                  </Box>
                  <Box>
                    <SectionTitle>
                      <Icon as={FaTools} fontSize="sm" color="blue.500" />
                      <Heading as="h3" size="xs">
                        Assign Technicians
                      </Heading>
                    </SectionTitle>
                    <VStack align="stretch">
                      <SelectField
                        name="team"
                        placeholder="Select Team"
                        value={formData.carYear}
                        onChange={handleChange}
                        options={[
                          { value: "team A", label: "Team A" },
                          { value: "team B", label: "Team B" },
                          { value: "team C", label: "Team C" },
                        ]}
                      />
                    </VStack>
                  </Box>

                  <Box mb={8}>
                    <SectionTitle>
                      <Icon as={FaTools} fontSize="sm" color="blue.500" />
                      <Heading as="h3" size="xs">
                        Car Received By
                      </Heading>
                    </SectionTitle>
                    <VStack align="stretch">
                      <StyledInput
                        placeholder="Car received by"
                        value={""}
                        onChange={() => {}}
                      />
                    </VStack>
                  </Box>
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
      </MainContent>
    </Flex>
  );
}
