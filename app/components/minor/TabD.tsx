import React, { useState } from "react";
import {
  Box,
  Flex,
  Heading,
  Icon,
  Slider,
  SliderFilledTrack,
  SliderMark,
  SliderThumb,
  SliderTrack,
  Tooltip,
  useToast,
} from "@chakra-ui/react";
import { FaTools } from "react-icons/fa";
import { CheckboxGroup } from "./Form";
import { ActionButton, SectionTitle } from "./styling/sectionTitle";

export default function TabD() {
  const toast = useToast();
  const [sliderValue, setSliderValue] = useState(5);
  const [showTooltip, setShowTooltip] = useState(false);
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
            as={FaTools}
            fontSize={{ base: "xs", md: "sm" }}
            color="blue.500"
          />
          <Heading as="h3" size={{ base: "xs", md: "sm" }}>
            Body Check List
          </Heading>
        </SectionTitle>
        <CheckboxGroup
          options={[
            { label: "Windscreen, free of cracks" },
            { label: "Windscreen, Headlight & Wipers are working" },
            { label: "Windscreen, Headlight & Other light are working" },
            { label: "Spare tyre, Jack, Wheel Spanner, C/Caution, & F/EXT" },
            {
              label: "Steering button are working",
            },
            { label: "All glass winder are functional" },
            { label: "Central lock is working" },
            { label: "Side mirrors functional (Controlling)" },
            { label: "Boot opening is functional" },
            { label: "Boot & and side door can be lock & unlock with key" },
            {
              label: "Radio is functional",
            },
            { label: "W/Screen wiper displays water properly" },
            { label: "Driver's seat belt are working" },
            { label: "Sun roof & Sun visors are functional" },
            {
              label: "Battery is tagged",
            },
            { label: "Horn is working" },
            { label: "Seat are adjustable" },
            { label: "No steering noise when shaked" },
            { label: "A/C is cooling" },
            { label: "Fuel thank cover, Open freely " },
            {
              label: "Inner rear view mirror, intact",
            },
            { label: "Engine cover" },
            { label: "Engine cover clips(How many)" },
            { label: "Foot mat (How many)" },
            { label: "Wheel Cover" },
            { label: "Bonnet shocks" },
            { label: "Bonnet insulator" },
            { label: "Reverse camera " },
          ]}
          // size={{ base: "sm", md: "md" }}
          // spacing={{ base: 2, md: 3 }}
        />

        <SectionTitle mt={{ base: 6, md: 8 }}>
          <Icon
            as={FaTools}
            fontSize={{ base: "xs", md: "sm" }}
            color="blue.500"
          />
          <Heading as="h3" size={{ base: "xs", md: "sm" }}>
            Fuel Level
          </Heading>
        </SectionTitle>
        <Box mt={{ base: 4, md: 6 }}>
          <Slider
            id="slider"
            defaultValue={5}
            min={0}
            max={100}
            colorScheme="blue"
            onChange={(v) => setSliderValue(v)}
            onMouseEnter={() => setShowTooltip(true)}
            onMouseLeave={() => setShowTooltip(false)}
          >
            <SliderMark
              value={25}
              mt="1"
              ml="-2.5"
              fontSize={{ base: "xs", md: "sm" }}
            >
              25%
            </SliderMark>
            <SliderMark
              value={50}
              mt="1"
              ml="-2.5"
              fontSize={{ base: "xs", md: "sm" }}
            >
              50%
            </SliderMark>
            <SliderMark
              value={75}
              mt="1"
              ml="-2.5"
              fontSize={{ base: "xs", md: "sm" }}
            >
              75%
            </SliderMark>
            <SliderTrack bg="gray.200" height={{ base: 1, md: 2 }}>
              <SliderFilledTrack />
            </SliderTrack>
            <Tooltip
              hasArrow
              bg="blue.500"
              color="white"
              placement="top"
              isOpen={showTooltip}
              label={`${sliderValue}%`}
              fontSize={{ base: "xs", md: "sm" }}
            >
              <SliderThumb boxSize={{ base: 4, md: 6 }} />
            </Tooltip>
          </Slider>
        </Box>
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
          Create Job Order
        </ActionButton>
      </Flex>
    </>
  );
}
