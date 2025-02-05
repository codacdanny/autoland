import React from "react";
import { Box, Flex, Heading, Icon, useToast } from "@chakra-ui/react";
import { FaTools } from "react-icons/fa";
import { CheckboxGroup } from "./Form";
import { ActionButton, SectionTitle } from "./styling/sectionTitle";

const TabB = () => {
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
            as={FaTools}
            fontSize={{ base: "xs", md: "sm" }}
            color="blue.500"
          />
          <Heading as="h3" size={{ base: "xs", md: "sm" }}>
            Exterior
          </Heading>
        </SectionTitle>
        <CheckboxGroup
          options={[
            { label: "Wind-shield free of cracks" },
            { label: "Body panel colour match" },
            { label: "Magnet adheres to all steel body panels" },
            { label: "Fresh paint Job (if yes, it could be concern rust)" },
            {
              label: "Seams where doors and fenders meet are properly aligned",
            },
            { label: "Free of body scratches" },
            { label: "Free of body dents" },
            { label: "Free of body scratches" },
            {
              label:
                "Headlights and directional lights intact and fully functional",
            },
          ]}
          // size={{ base: "sm", md: "md" }}
          // spacing={{ base: 2, md: 3 }}
        />
      </Box>
      <Box mb={{ base: 4, md: 8 }}>
        <SectionTitle>
          <Icon
            as={FaTools}
            fontSize={{ base: "xs", md: "sm" }}
            color="blue.500"
          />
          <Heading as="h3" size={{ base: "xs", md: "sm" }}>
            Brake
          </Heading>
        </SectionTitle>
        <CheckboxGroup
          options={[
            {
              label:
                "Vehicle steers straight and does not pull to one side when applying brakes ",
            },
            { label: "Parking broke engages and disengages freely" },
            { label: "No grinding noise when applying " },
            {
              label:
                "Wheels do not lock when applying anti-lock brakes (if applicable) ",
            },
          ]}
          // size={{ base: "sm", md: "md" }}
          // spacing={{ base: 2, md: 3 }}
        />
      </Box>
      <Box mb={{ base: 4, md: 8 }}>
        <SectionTitle>
          <Icon
            as={FaTools}
            fontSize={{ base: "xs", md: "sm" }}
            color="blue.500"
          />
          <Heading as="h3" size={{ base: "xs", md: "sm" }}>
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
          // size={{ base: "sm", md: "md" }}
          // spacing={{ base: 2, md: 3 }}
        />
      </Box>
      <Box mb={{ base: 4, md: 8 }}>
        <SectionTitle>
          <Icon
            as={FaTools}
            fontSize={{ base: "xs", md: "sm" }}
            color="blue.500"
          />
          <Heading as="h3" size={{ base: "xs", md: "sm" }}>
            Engine
          </Heading>
        </SectionTitle>
        <CheckboxGroup
          options={[
            { label: "Free of fluid or oil leaks" },
            { label: "Oil filler neck not coated with thick, black deposits" },
            { label: "Battery terminals free of corrosion" },
            { label: "oil dip stick free of dark, black oil" },
            {
              label: "Free of odours while engine is running ",
            },
            {
              label:
                "Exhaust pipe emissions are neither blue (indicates engine burns oil)or black (indicate excessive oil consumption)",
            },
          ]}
          // size={{ base: "sm", md: "md" }}
          // spacing={{ base: 2, md: 3 }}
        />
      </Box>
      <Box mb={{ base: 4, md: 8 }}>
        <SectionTitle>
          <Icon
            as={FaTools}
            fontSize={{ base: "xs", md: "sm" }}
            color="blue.500"
          />
          <Heading as="h3" size={{ base: "xs", md: "sm" }}>
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
              label: "No dashboard warning lights remain illuminated",
            },
            { label: "Stereo works" },
            { label: "Heaters work" },
            { label: "Air conditioning works" },
            { label: "Windshield wipers work" },
            { label: "Windshield wiper fluid dispenses properly" },
            {
              label: "All seats equipped with functional seat belts",
            },
            { label: "All seats adjust properly" },
            { label: "Sunroof opens and closes properly" },
            { label: "Car alarm works (if applicable)" },
            {
              label: "Truck & driver-side door lock and unlock with key",
            },
            { label: "Hazard light functions properly" },
            { label: "Headlight including bright works properly" },
          ]}
          // size={{ base: "sm", md: "md" }}
          // spacing={{ base: 2, md: 3 }}
        />
      </Box>
      <Box mb={{ base: 4, md: 8 }}>
        <SectionTitle>
          <Icon
            as={FaTools}
            fontSize={{ base: "xs", md: "sm" }}
            color="blue.500"
          />
          <Heading as="h3" size={{ base: "xs", md: "sm" }}>
            Tyres
          </Heading>
        </SectionTitle>
        <CheckboxGroup
          options={[
            { label: "Tires are a reputable brand name (Michelin, etc)" },
            { label: "Tires are all of the same" },
            { label: "Tires are all of free of any cuts, bubbles or cracks" },
            {
              label:
                "Tread worn evenly (uneven wear indicates alignment and suspension problems)",
            },
            {
              label: "Spare tire, jack & lug wrench on car & full functional",
            },
            {
              label: "Spare tire inflated",
            },
          ]}
          // size={{ base: "sm", md: "md" }}
          // spacing={{ base: 2, md: 3 }}
        />
      </Box>
      <Box mb={{ base: 4, md: 8 }}>
        <SectionTitle>
          <Icon
            as={FaTools}
            fontSize={{ base: "xs", md: "sm" }}
            color="blue.500"
          />
          <Heading as="h3" size={{ base: "xs", md: "sm" }}>
            Automatic Transmission
          </Heading>
        </SectionTitle>
        <CheckboxGroup
          options={[
            {
              label:
                "Transmission fluid looks clean, not dirty or gritty (no indicates possible internal transmission problem)",
            },
          ]}
          // size={{ base: "sm", md: "md" }}
          // spacing={{ base: 2, md: 3 }}
        />
      </Box>
      <Box mb={{ base: 4, md: 8 }}>
        <SectionTitle>
          <Icon
            as={FaTools}
            fontSize={{ base: "xs", md: "sm" }}
            color="blue.500"
          />
          <Heading as="h3" size={{ base: "xs", md: "sm" }}>
            Steering
          </Heading>
        </SectionTitle>
        <CheckboxGroup
          options={[
            { label: "Vehicle does not drift to one side without prodding " },
            { label: "Vehicle is stable; no shaking or vibrating " },
            { label: "No resistance in the steering wheel when turning " },
            {
              label: "No clicking or clunking when turning ",
            },
          ]}
          // size={{ base: "sm", md: "md" }}
          // spacing={{ base: 2, md: 3 }}
        />
      </Box>
      <Box mb={{ base: 4, md: 8 }}>
        <SectionTitle>
          <Icon
            as={FaTools}
            fontSize={{ base: "xs", md: "sm" }}
            color="blue.500"
          />
          <Heading as="h3" size={{ base: "xs", md: "sm" }}>
            Battery
          </Heading>
        </SectionTitle>
        <CheckboxGroup
          options={[{ label: "Battery Present " }, { label: "Battery level" }]}
          // size={{ base: "sm", md: "md" }}
          // spacing={{ base: 2, md: 3 }}
        />
      </Box>
      <Box mb={{ base: 4, md: 8 }}>
        <SectionTitle>
          <Icon
            as={FaTools}
            fontSize={{ base: "xs", md: "sm" }}
            color="blue.500"
          />
          <Heading as="h3" size={{ base: "xs", md: "sm" }}>
            Miscellanous
          </Heading>
        </SectionTitle>
        <CheckboxGroup
          options={[
            { label: "Car manual located in the glove compartment " },
            { label: "Instructions included for any accessories " },
            { label: "Service and repair records available" },
            {
              label: "Owner has title",
            },
          ]}
          // size={{ base: "sm", md: "md" }}
          // spacing={{ base: 2, md: 3 }}
        />
      </Box>
      <Box mb={{ base: 4, md: 8 }}>
        <SectionTitle>
          <Icon
            as={FaTools}
            fontSize={{ base: "xs", md: "sm" }}
            color="blue.500"
          />
          <Heading as="h3" size={{ base: "xs", md: "sm" }}>
            Under Hood *{" "}
          </Heading>
        </SectionTitle>
        <CheckboxGroup
          options={[
            { label: "Oil levels/filter" },
            { label: "Brake fluid levels" },
            { label: "Radiator/coolant levels " },
            {
              label: "Air filter",
            },
          ]}
          // size={{ base: "sm", md: "md" }}
          // spacing={3}
        />
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

export default TabB;
