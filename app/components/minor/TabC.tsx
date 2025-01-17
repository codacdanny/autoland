import React, { useState } from "react";
import {
  Box,
  VStack,
  Heading,
  Icon,
  RadioGroup,
  Stack,
  Radio,
  Text,
} from "@chakra-ui/react";
import { FaTools } from "react-icons/fa";
import { SelectField, StyledInput } from "./Form";
import { SectionTitle } from "./styling/sectionTitle";
import CustomRadioGroup from "./CustomRadioGroup";
import { FormData } from "@/app/types/formData";

interface TabCProps {
  formData: FormData;
  handleChange: (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => void;
}

export default function TabC({ formData, handleChange }: TabCProps) {
  const [jobStatus, setJobStatus] = useState<string>("pending"); // Default value

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
            Customer Job Order Status
          </Heading>
        </SectionTitle>
        <RadioGroup defaultValue="disapprove">
          <Stack spacing={4}>
            <Radio
              value="approve"
              borderColor="green.200"
              colorScheme="green"
              size="md"
              _hover={{ bg: "green.100" }}
              _checked={{ bg: "green.500", color: "white" }}
            >
              <Text fontSize="sm">Approve</Text>
            </Radio>

            <Radio
              value="disapprove"
              borderColor="orange.500"
              colorScheme="orange"
              size="md"
              _hover={{ bg: "orange.100" }}
              _checked={{ bg: "orange.500", color: "white" }}
            >
              <Text fontSize="sm" defaultChecked>
                Disapprove
              </Text>
            </Radio>
          </Stack>
        </RadioGroup>
      </Box>
      <Box mb={8}>
        <SectionTitle>
          <Icon as={FaTools} fontSize="sm" color="blue.500" />
          <Heading as="h3" size="xs">
            Car Repair Status
          </Heading>
        </SectionTitle>
        <CustomRadioGroup value={jobStatus} onChange={setJobStatus} />
      </Box>
      <Box mb={8}>
        <SectionTitle>
          <Icon as={FaTools} fontSize="sm" color="blue.500" />
          <Heading as="h3" size="xs">
            Customer Job Order Status
          </Heading>
        </SectionTitle>
        <RadioGroup defaultValue="disapprove">
          <Stack spacing={4}>
            <Radio
              value="delivered"
              borderColor="green.200"
              colorScheme="green"
              size="md"
              _hover={{ bg: "green.100" }}
              _checked={{ bg: "green.500", color: "white" }}
            >
              <Text fontSize="sm">Delivered</Text>
            </Radio>

            <Radio
              value="demurrage"
              borderColor="red.500"
              colorScheme="red"
              size="md"
              _hover={{ bg: "red.100" }}
              _checked={{ bg: "red.500", color: "white" }}
            >
              <Text fontSize="sm" defaultChecked>
                Demurrage
              </Text>
            </Radio>
          </Stack>
        </RadioGroup>
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
}
