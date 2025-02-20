/* eslint-disable @typescript-eslint/no-explicit-any */
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
import Sidebar from "../components/major/Sidebar";
import MainContent from "../components/minor/MainContent";
import { motion } from "framer-motion";
import { FaClipboard } from "react-icons/fa";

import TabA from "../components/minor/TabA";
import TabB from "../components/minor/TabB";
import TabC from "../components/minor/TabC";
import TabD from "../components/minor/TabD";
import { JobOrderFormData } from "../utils/types/formData";
import { withAuth } from "../utils/services/hoc";

// Styled components
const FormContainer = styled(Box)`
  background: #f7fafc;
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

function CreateJobOrderPage() {
  const toast = useToast();
  const [formData, setFormData] = useState<JobOrderFormData>({
    sectionA: {
      clientInformation: {
        clientName: "",
        clientPhone: "",
        clientEmail: "",
        clientBirthday: "",
      },
      vehicleInformation: {
        carVIN: "",
        carIssue: "",
        carChassis: "",
        carPlate: "",
        carMake: "",
        carYear: 0,
        carColour: "",
        odometer: 0,
        dateSelected: "",
        customerRequest: "",
        descriptionOfWork: "",
      },
    },
    sectionB: {
      exterior: {
        windShieldCracks: false,
        bodyPanelMatch: false,
        magnetAdheres: false,
        freshPaintJob: false,
        seamsAligned: false,
        freeBodyScratches: false,
        freeBodyDents: false,
        headlightsFunctional: false,
        bodyScratches: false,
        bodyDents: false,
        lightsFunctional: false,
      },
      brake: {
        straightSteering: false,
        parkingBrakeWorks: false,
        noGrindingNoise: false,
        antiLockBrakesWork: false,
      },
      suspension: {
        vehicleRestsLevelly: false,
        bounceWithoutNoise: false,
        cornersRespondEqually: false,
      },
      engine: {
        freeLeaks: false,
        oilFillerClean: false,
        batteryTerminalsClean: false,
        dipStickOilQuality: false,
        noOdoursRunning: false,
        exhaustEmissionsNormal: false,
      },
      interior: {
        seatsCondition: false,
        allDoorsWork: false,
        trunkOpens: false,
        gaugesWork: false,
        dashboardLightsOff: false,
        stereoWorks: false,
        heatersWork: false,
        acWorks: false,
        windshieldWipersWork: false,
        seatBeltsFunctional: false,
        seatAdjustsWell: false,
        sunRoofOpensWell: false,
        carALarmWorks: false,
        driverSideLocksAndUnlocksWithKey: false,
        hazardLightWorks: false,
        headlightWorksProperly: false,
      },
      tyres: {
        reputableBrand: false,
        sameType: false,
        freeFromDamage: false,
        treadEvenWear: false,
        spareTireAvailable: false,
        spareTireInflated: false,
      },
      automaticTransmission: {
        fluidIsClean: false,
      },
      steering: {
        doesNotOneSide: false,
        vehicleIsStable: false,
        noResistance: false,
        noClicking: false,
      },
      battery: {
        batteryPresent: false,
        batteryLevel: false,
      },
      miscellaneous: {
        manualAvailable: false,
        accessoriesInstructions: false,
        serviceRecordsAvailable: false,
        ownerHasTitle: false,
      },
      underHood: {
        oilLevels: false,
        brakeFluid: false,
        coolantLevels: false,
        airFilter: false,
      },
    },
    sectionC: {
      bodyCheckList: {
        windscreenCracks: false,
        lightsFunctional: false,
        spareTireEquipment: false,
        steeringButtons: false,
        centralLockWorks: false,
        radioFunctional: false,
        windshieldWipersDispense: false,
        hornWorks: false,
        seatAdjustable: false,
        acCooling: false,
        engineCover: false,
        reverseCamera: false,
      },
      fuelLevel: 0, // stored as number
      assignTechnicians: "",
    },
    sectionD: {
      customerJobOrderStatus: "Disapprove",
      jobOrderStatus: "In Progress",
      repairStatus: "Pending",
      carReceivedBy: "",
    },
  });

  // Generic helper for updating an entire section
  const updateSection = (section: keyof JobOrderFormData, value: any) => {
    setFormData((prev) => ({
      ...prev,
      [section]: value,
    }));
  };

  // Helper for updating nested fields in a subsection (e.g. in sectionA)
  const updateSubsection = (
    section: keyof JobOrderFormData,
    subsection: string,
    field: string,
    value: string | number | boolean | object
  ) => {
    setFormData((prev) => ({
      ...prev,
      [section]: {
        ...prev[section],
        [subsection]: {
          ...(prev[section] as any)[subsection],
          [field]: value,
        },
      },
    }));
  };

  const handleSubmit = async () => {
    try {
      // API call to save job order
      console.log("Submitting form data:", formData);
      toast({
        title: "Success",
        description: "Job order created successfully",
        status: "success",
        duration: 5000,
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to create job order",
        status: "error",
        duration: 5000,
      });
    }
  };

  return (
    <Flex minH="100vh" bg="gray.50">
      <Box>
        <Sidebar />
      </Box>
      <MainContent>
        <Box
          as={motion.div}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          p={{ base: 2, md: 4, xl: 8 }}
          mt={{ base: 10, xl: 4 }}>
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
                {/* Section A: Client & Vehicle Info */}
                <TabPanel>
                  <TabA
                    formData={formData.sectionA}
                    onChange={(subKey, data) =>
                      updateSection("sectionA", {
                        ...formData.sectionA,
                        [subKey]: {
                          ...formData.sectionA[subKey],
                          ...data,
                        },
                      })
                    }
                  />
                </TabPanel>
                {/* Section B: Checklists */}
                <TabPanel>
                  <TabB
                    formData={formData.sectionB}
                    onChange={(category, field, value) =>
                      updateSubsection("sectionB", category, field, value)
                    }
                  />
                </TabPanel>
                {/* Section C: Body Checklist, Fuel Level & Assign Technicians */}
                <TabPanel>
                  <TabD
                    formData={formData.sectionC}
                    onChange={(field, value) =>
                      updateSubsection(
                        "sectionC",
                        "bodyCheckList",
                        field,
                        value
                      )
                    }
                    onFuelChange={(value: number) =>
                      updateSection("sectionC", {
                        ...formData.sectionC,
                        fuelLevel: value,
                      })
                    }
                    onTechniciansChange={(value: string) =>
                      updateSection("sectionC", {
                        ...formData.sectionC,
                        assignTechnicians: value,
                      })
                    }
                  />
                </TabPanel>
                {/* Section D: Job Order & Repair Status, Car Received By */}
                <TabPanel>
                  <TabC
                    formData={formData.sectionD}
                    onChange={(field, value) =>
                      updateSection("sectionD", {
                        ...formData.sectionD,
                        [field]: value,
                      })
                    }
                  />
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

export default withAuth(CreateJobOrderPage);
