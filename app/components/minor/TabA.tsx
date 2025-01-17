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
} from "@chakra-ui/react";
import { FaUser, FaCar, FaTools } from "react-icons/fa";
import { InputField, SelectField, TextAreaField } from "./Form";
import { SectionTitle } from "./styling/sectionTitle";
import { FormData } from "@/app/types/formData";

interface TabAProps {
  formData: FormData;
  handleChange: (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => void;
}
const TabA = ({ formData, handleChange }: TabAProps) => {
  return (
    <>
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
    </>
  );
};

export default TabA;
