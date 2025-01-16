import React, { useState } from "react";
import { Box, VStack, Heading, Icon, Checkbox, Text } from "@chakra-ui/react";
import { FaTools } from "react-icons/fa";
import { SelectField, StyledInput } from "./Form";
import { SectionTitle } from "./styling/sectionTitle";
import CustomRadioGroup from "./CustomRadioGroup";

const TabC = ({ formData, handleChange }) => {
  const [jobStatus, setJobStatus] = useState("pending"); // Default value

  return (
    <>
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
            Job Order Status
          </Heading>
        </SectionTitle>
        <CustomRadioGroup value={jobStatus} onChange={setJobStatus} />
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
    </>
  );
};

export default TabC;
