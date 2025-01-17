import React, { useState } from "react";
import {
  Box,
  Heading,
  Icon,
  Slider,
  SliderFilledTrack,
  SliderMark,
  SliderThumb,
  SliderTrack,
  Tooltip,
} from "@chakra-ui/react";
import { FaTools } from "react-icons/fa";
import { CheckboxGroup } from "./Form";
import { SectionTitle } from "./styling/sectionTitle";

export default function TabD() {
  const [sliderValue, setSliderValue] = useState(5);
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <>
      <Box mb={8}>
        <SectionTitle>
          <Icon as={FaTools} fontSize="sm" color="blue.500" />
          <Heading as="h3" size="xs">
            Body Check List{" "}
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
            { label: "Driver’s seat belt are working" },
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
        />
        <SectionTitle>
          <Icon as={FaTools} fontSize="sm" color="blue.500" />
          <Heading as="h3" size="xs">
            Fuel Level
          </Heading>
        </SectionTitle>
        <Box mt={8}>
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
            <SliderMark value={25} mt="1" ml="-2.5" fontSize="md">
              25%
            </SliderMark>
            <SliderMark value={50} mt="1" ml="-2.5" fontSize="md">
              50%
            </SliderMark>
            <SliderMark value={75} mt="1" ml="-2.5" fontSize="md">
              75%
            </SliderMark>
            <SliderTrack bg="gray.200" height={2}>
              <SliderFilledTrack />
            </SliderTrack>
            <Tooltip
              hasArrow
              bg="blue.500"
              color="white"
              placement="top"
              isOpen={showTooltip}
              label={`${sliderValue}%`}
            >
              <SliderThumb />
            </Tooltip>
          </Slider>
        </Box>
      </Box>
    </>
  );
}
