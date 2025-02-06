import React from "react";
import {
  Box,
  VStack,
  Heading,
  Icon,
  FormControl,
  FormLabel,
  HStack,
  Textarea,
  Flex,
  useToast,
} from "@chakra-ui/react";
import { FaUser, FaCar, FaTools } from "react-icons/fa";
import { InputField, SelectField, TextAreaField } from "./Form";
import { ActionButton, SectionTitle } from "./styling/sectionTitle";
import { FormData } from "@/app/utils/types/formData";

interface TabAProps {
  formData: FormData;
  handleChange: (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => void;
}
const TabA = ({ formData, handleChange }: TabAProps) => {
  const toast = useToast();
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
    <>
      <Box mb={{ base: 4, md: 8 }}>
        <SectionTitle>
          <Icon
            as={FaUser}
            fontSize={{ base: "xs", md: "sm" }}
            color="blue.500"
          />
          <Heading as="h3" size={{ base: "xs", md: "sm" }}>
            Client Information
          </Heading>
        </SectionTitle>
        <VStack spacing={{ base: 3, md: 4 }} align="stretch">
          <InputField
            name="clientName"
            placeholder="Client Name"
            value={formData.clientName}
            onChange={handleChange}
            // size={{ base: "sm", md: "md" }}
          />
          <InputField
            name="phoneNumber"
            placeholder="Client Phone Number"
            value={formData.phoneNumber}
            onChange={handleChange}
            // size={{ base: "sm", md: "md" }}
          />
          <InputField
            name="clientEmail"
            placeholder="Client Email"
            value={formData.clientEmail}
            onChange={handleChange}
            // size={{ base: "sm", md: "md" }}
          />
          <InputField
            name="clientBirthday"
            placeholder="Client Birthday"
            value={formData.clientEmail}
            onChange={handleChange}
            // size={{ base: "sm", md: "md" }}
          />
        </VStack>
      </Box>

      <Box mb={{ base: 4, md: 8 }}>
        <SectionTitle>
          <Icon
            as={FaCar}
            fontSize={{ base: "xs", md: "sm" }}
            color="blue.500"
          />
          <Heading as="h3" size={{ base: "xs", md: "sm" }}>
            Vehicle Information
          </Heading>
        </SectionTitle>
        <VStack spacing={{ base: 3, md: 4 }} align="stretch">
          <InputField
            name="carNo"
            placeholder="Car VIN"
            value={formData.carNo}
            onChange={handleChange}
            // size={{ base: "sm", md: "md" }}
          />
          <InputField
            name="carNo"
            placeholder="Car Chasis Number"
            value={formData.carNo}
            onChange={handleChange}
            // size={{ base: "sm", md: "md" }}
          />
          <InputField
            name="carNo"
            placeholder="Car Plate Number"
            value={formData.carNo}
            onChange={handleChange}
            // size={{ base: "sm", md: "md" }}
          />
          <InputField
            name="carMake"
            placeholder="Car Make"
            value={formData.carMake}
            onChange={handleChange}
            // size={{ base: "sm", md: "md" }}
          />
          <InputField
            name="carYear"
            placeholder="Car Year"
            value={formData.carYear}
            onChange={handleChange}
            // size={{ base: "sm", md: "md" }}
          />
          <FormControl>
            <FormLabel fontSize={{ base: "xs", md: "sm" }}>
              Select Date
            </FormLabel>
            <input
              type="date"
              style={{
                backgroundColor: "#3280cd",
                color: "white",
                padding: "8px",
                border: "1px solid #bdbdb",
                borderRadius: "8px",
                width: "100%",
                fontSize: "14px",
              }}
            />
          </FormControl>
          <InputField
            name="carIssue"
            placeholder="Car Issue"
            value={formData.carIssue}
            onChange={handleChange}
            // size={{ base: "sm", md: "md" }}
          />
          <InputField
            name="carColour"
            placeholder="Car Colour"
            value={formData.carColour}
            onChange={handleChange}
            // size={{ base: "sm", md: "md" }}
          />
          <InputField
            name="odometer"
            placeholder="Odometer"
            value={formData.odometer}
            onChange={handleChange}
            // size={{ base: "sm", md: "md" }}
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
            // size={{ base: "sm", md: "md" }}
          />
          <TextAreaField
            name="customerRequest"
            placeholder="Customer's Request"
            value={formData.customerRequest}
            onChange={handleChange}
            // size={{ base: "sm", md: "md" }}
          />
        </VStack>
      </Box>

      <Box mb={{ base: 4, md: 8 }}>
        <SectionTitle>
          <Icon
            as={FaTools}
            fontSize={{ base: "xs", md: "sm" }}
            color="blue.500"
          />
          <Heading as="h3" size={{ base: "xs", md: "sm" }}>
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
            p={{ base: 2, md: 4 }}
            fontSize={{ base: "xs", md: "sm" }}
            placeholder="Describe the Work that should be done on this vehicle"
            value={formData.customerRequest}
            onChange={handleChange}
          />
        </HStack>
      </Box>
      <Flex
        justify="flex-end"
        gap={{ base: 2, md: 4 }}
        direction={{ base: "column", sm: "row" }}
        mb={{ base: 6, md: 0 }}
      >
        <ActionButton
          onClick={() => {}}
          color="gray.600"
          border="1px solid"
          borderColor="gray.300"
          w={{ base: "full", sm: "auto" }}
        >
          Cancel
        </ActionButton>
        <ActionButton onClick={handleSubmit} w={{ base: "full", sm: "auto" }}>
          Save
        </ActionButton>
      </Flex>
    </>
  );
};

export default TabA;
