"use client";
import { useState } from "react";
import {
  Box,
  Heading,
  Text,
  Input,
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
} from "@chakra-ui/react";
import styled from "@emotion/styled";
import Sidebar from "../components/major/Sidebar";
import MainContent from "../components/minor/MainContent";
import { motion } from "framer-motion";
import { FaCar, FaUser, FaTools, FaClipboard } from "react-icons/fa";

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

const StyledInput = styled(Input)`
  background: rgba(247, 250, 252, 0.8);
  border: 1px solid #e2e8f0;
  border-radius: 10px;
  padding: 0.8rem 1rem;
  font-size: 0.9rem;
  transition: all 0.3s ease;

  &:focus {
    background: white;
    border-color: #4299e1;
    box-shadow: 0 0 0 3px rgba(66, 153, 225, 0.15);
  }

  &::placeholder {
    color: #a0aec0;
    font-size: 0.85rem;
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
    customerRequest: "",
  });

  const [workDescriptions, setWorkDescriptions] = useState([
    { description: "", cost: "" },
  ]);
  const [parts, setParts] = useState([
    { partNo: "", description: "", qty: "", price: "", cost: "" },
  ]);

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
          p={6}>
          <FormContainer>
            <Flex align="center" mb={8}>
              <Icon as={FaClipboard} fontSize="sm" color="blue.500" mr={3} />
              <Heading size="sm" color="gray.700" fontWeight="600">
                New Job Order
              </Heading>
            </Flex>

            <Box mb={8}>
              <SectionTitle>
                <Icon as={FaUser} fontSize="sm" color="blue.500" />
                <Heading as="h3" size="xs">
                  Client Information
                </Heading>
              </SectionTitle>
              <VStack spacing={4} align="stretch">
                <StyledInput
                  placeholder="Enter client's full name"
                  name="clientName"
                  value={formData.clientName}
                  onChange={handleChange}
                />
                <StyledInput
                  name="phoneNumber"
                  placeholder="Phone Number"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                />
                <StyledInput
                  name="clientEmail"
                  placeholder="Client Email"
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
                <StyledInput
                  name="carNo"
                  placeholder="Car No"
                  value={formData.carNo}
                  onChange={handleChange}
                />
                <StyledInput
                  name="carMake"
                  placeholder="Car Make"
                  value={formData.carMake}
                  onChange={handleChange}
                />
                <Select
                  name="carYear"
                  fontSize="sm"
                  placeholder="Car Year"
                  value={formData.carYear}
                  onChange={handleChange}>
                  <option value="2023">2023</option>
                  <option value="2022">2022</option>
                  <option value="2021">2021</option>
                </Select>
                <StyledInput
                  name="date"
                  type="date"
                  value={formData.date}
                  onChange={handleChange}
                />
                <StyledInput
                  name="carIssue"
                  placeholder="Car Issue"
                  value={formData.carIssue}
                  onChange={handleChange}
                />
                <StyledInput
                  name="carColour"
                  placeholder="Car Colour"
                  value={formData.carColour}
                  onChange={handleChange}
                />
                <StyledInput
                  name="odometer"
                  placeholder="Odometer"
                  value={formData.odometer}
                  onChange={handleChange}
                />
                <Select
                  name="workshop"
                  fontSize="sm"
                  placeholder="Workshop"
                  value={formData.workshop}
                  onChange={handleChange}>
                  <option value="Workshop A">Workshop A</option>
                  <option value="Workshop B">Workshop B</option>
                  <option value="Workshop C">Workshop C</option>
                </Select>
                <Textarea
                  name="customerRequest"
                  _placeholder={{ color: "#bdbdbd" }}
                  bgColor="rgba(247, 250, 252, 0.8)"
                  border="1px solid #e2e8f0"
                  borderRadius="sm"
                  p={4}
                  fontSize="sm"
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
              {workDescriptions.map((work, index) => (
                <HStack key={index} mb={2} spacing={4}>
                  <StyledInput
                    name="description"
                    placeholder="Description of Work"
                    value={work.description}
                    onChange={() => {}}
                  />
                  <StyledInput
                    name="cost"
                    placeholder="Cost"
                    type="number"
                    value={work.cost}
                    onChange={() => {}}
                  />
                </HStack>
              ))}
              <ActionButton colorScheme="blue" onClick={() => {}}>
                Add Work Description
              </ActionButton>
            </Box>

            <Box mb={8}>
              <SectionTitle>
                <Icon as={FaTools} fontSize="sm" color="blue.500" />
                <Heading as="h3" size="xs">
                  Parts
                </Heading>
              </SectionTitle>
              {parts.map((part, index) => (
                <HStack key={index} mb={2} spacing={4}>
                  <StyledInput
                    name="partNo"
                    placeholder="Parts No"
                    value={part.partNo}
                    onChange={() => {}}
                  />
                  <StyledInput
                    name="description"
                    placeholder="Parts Description"
                    value={part.description}
                    onChange={() => {}}
                  />
                  <StyledInput
                    name="qty"
                    placeholder="QTY"
                    type="number"
                    value={part.qty}
                    onChange={() => {}}
                  />
                  <StyledInput
                    name="price"
                    placeholder="Price"
                    type="number"
                    value={part.price}
                    onChange={() => {}}
                  />
                  <StyledInput
                    name="cost"
                    placeholder="Cost"
                    type="number"
                    value={part.cost}
                    onChange={() => {}}
                  />
                </HStack>
              ))}
              <ActionButton colorScheme="blue" onClick={() => {}}>
                Add Part
              </ActionButton>
            </Box>

            <Box mb={8}>
              <SectionTitle>
                <Icon as={FaTools} fontSize="sm" color="blue.500" />
                <Heading as="h3" size="xs">
                  Suspension
                </Heading>
              </SectionTitle>
              <VStack align="stretch">
                <Checkbox colorScheme="blue">
                  <Text fontSize="sm">Vehicle rests levelly</Text>
                </Checkbox>
                <Checkbox>
                  <Text fontSize="sm">
                    When bouncing the vehicle's corners, no cracking noise is
                    made
                  </Text>
                </Checkbox>
                <Checkbox>
                  <Text fontSize="sm">
                    All corners respond the same when bouncing
                  </Text>
                </Checkbox>
              </VStack>
            </Box>

            <Box mb={8}>
              <SectionTitle>
                <Icon as={FaTools} fontSize="sm" color="blue.500" />
                <Heading as="h3" size="xs">
                  Interior
                </Heading>
              </SectionTitle>
              <VStack align="stretch">
                <Checkbox>
                  <Text fontSize="sm">Seat unworn and free of cracks</Text>
                </Checkbox>
                <Checkbox>
                  <Text fontSize="sm">All doors open and close freely</Text>
                </Checkbox>
                <Checkbox>
                  <Text fontSize="sm">Trunk opens and closes freely</Text>
                </Checkbox>
                <Checkbox>
                  <Text fontSize="sm">All gauges work</Text>
                </Checkbox>
                <Checkbox>
                  <Text fontSize="sm">
                    No dashboard warning lights remain illuminated
                  </Text>
                </Checkbox>
                <Checkbox>
                  <Text fontSize="sm">Stereo works</Text>
                </Checkbox>
                <Checkbox>
                  <Text fontSize="sm">Heaters work</Text>
                </Checkbox>
                <Checkbox>
                  <Text fontSize="sm">Air conditioning works</Text>
                </Checkbox>
                <Checkbox>
                  <Text fontSize="sm">Windshield wipers work</Text>
                </Checkbox>
                <Checkbox>
                  <Text fontSize="sm">
                    Windshield wiper fluid dispenses properly
                  </Text>
                </Checkbox>
                <Checkbox>
                  <Text fontSize="sm">
                    All seats equipped with functional seat belts
                  </Text>
                </Checkbox>
                <Checkbox>
                  <Text fontSize="sm">All seats adjust properly</Text>
                </Checkbox>
                <Checkbox>
                  <Text fontSize="sm">Sunroof opens and closes properly</Text>
                </Checkbox>
                <Checkbox>
                  <Text fontSize="sm">Car alarm works (if applicable)</Text>
                </Checkbox>
                <Checkbox>
                  <Text fontSize="sm">
                    Truck & driver-side door lock and unlock with key
                  </Text>
                </Checkbox>
                <Checkbox>
                  <Text fontSize="sm">Hazard light functions properly</Text>
                </Checkbox>
                <Checkbox>
                  <Text fontSize="sm">
                    Headlight including bright works properly
                  </Text>
                </Checkbox>
              </VStack>
            </Box>

            <Box mb={8}>
              <SectionTitle>
                <Icon as={FaTools} fontSize="sm" color="blue.500" />
                <Heading as="h3" size="xs">
                  Miscellaneous
                </Heading>
              </SectionTitle>
              <VStack align="stretch">
                <Checkbox>
                  <Text fontSize="sm">
                    Car manual located in the glove compartment
                  </Text>
                </Checkbox>
                <Checkbox>
                  <Text fontSize="sm">
                    Instructions included for any accessories
                  </Text>{" "}
                </Checkbox>
                <Checkbox>
                  <Text fontSize="sm">
                    Service and repair records available
                  </Text>
                </Checkbox>
                <Checkbox>
                  <Text fontSize="sm">Owner has title</Text>
                </Checkbox>
              </VStack>
            </Box>

            <Box mb={8}>
              <SectionTitle>
                <Icon as={FaTools} fontSize="sm" color="blue.500" />
                <Heading as="h3" size="xs">
                  Under Hood
                </Heading>
              </SectionTitle>
              <VStack align="stretch">
                <Checkbox>
                  <Text fontSize="sm">Oil levels/filter</Text>
                </Checkbox>
                <Checkbox>
                  <Text fontSize="sm">Brake fluid levels</Text>
                </Checkbox>
                <Checkbox>
                  <Text fontSize="sm">Radiator/coolant levels</Text>
                </Checkbox>
                <Checkbox>
                  <Text fontSize="sm">Air filter</Text>
                </Checkbox>
              </VStack>
            </Box>

            <Box mb={8}>
              <SectionTitle>
                <Icon as={FaTools} fontSize="sm" color="blue.500" />
                <Heading as="h3" size="xs">
                  Frame
                </Heading>
              </SectionTitle>
              <VStack align="stretch">
                <Checkbox>
                  <Text fontSize="sm">Chassis is neither bent nor cracked</Text>
                </Checkbox>
              </VStack>
            </Box>

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
                <ActionButton colorScheme="blue" mt={2}>
                  Add Signature
                </ActionButton>
              </VStack>
            </Box>

            <Divider my={8} borderColor="gray.200" />

            <Flex justify="flex-end" gap={4}>
              <ActionButton
                variant="outline"
                colorScheme="blue"
                onClick={() => {}}
                color="gray.600"
                border="1px solid"
                borderColor="gray.300">
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
