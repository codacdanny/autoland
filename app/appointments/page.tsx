"use client";
import { useState } from "react";
import {
  Box,
  Flex,
  Heading,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  Badge,
  Button,
  useToast,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Stack,
  HStack,
  useDisclosure,
  Icon,
  Text,
  FormControl,
  FormLabel,
  Input,
  Textarea,
} from "@chakra-ui/react";
import { FaCalendarAlt, FaClock, FaEdit, FaTimes } from "react-icons/fa";
import styled from "@emotion/styled";
import Sidebar from "../components/major/Sidebar";
import MainContent from "../components/minor/MainContent";
import Header from "../components/minor/Header";

const StyledTable = styled(Table)`
  th {
    background: #f7fafc;
    text-transform: uppercase;
    font-size: 0.75rem;
    letter-spacing: 0.05em;
    color: gray.600;
  }

  tr {
    transition: all 0.2s;
    cursor: pointer;

    &:hover {
      background: #edf2f7;
      transform: translateY(-2px);
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
    }
  }

  td {
    font-size: 0.875rem;
  }
`;

const StyledModal = styled(ModalContent)`
  background: linear-gradient(
    145deg,
    rgba(255, 255, 255, 0.95),
    rgba(249, 250, 251, 0.95)
  );
  border-radius: 20px;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
`;

interface Appointment {
  id: string;
  customerName: string;
  service: string;
  date: string;
  time: string;
  vehicleInfo: string;
  status: "scheduled" | "completed" | "cancelled" | "approved";
  phone: string;
  email: string;
}

const mockAppointments: Appointment[] = [
  {
    id: "APT001",
    customerName: "John Doe",
    service: "Oil Change",
    date: "2024-02-20",
    time: "10:00 AM",
    vehicleInfo: "Toyota Camry 2020",
    status: "scheduled",
    phone: "123-456-7890",
    email: "john@example.com",
  },
  // Add more mock appointments...
];

export default function AppointmentsPage() {
  const toast = useToast();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedAppointment, setSelectedAppointment] =
    useState<Appointment | null>(null);
  const [appointments, setAppointments] = useState(mockAppointments);
  const [editDescription, setEditDescription] = useState("");
  const [editDate, setEditDate] = useState("");

  const handleEditClick = (appointment: Appointment) => {
    setSelectedAppointment(appointment);
    setEditDate(appointment.date);
    setEditDescription("");
    onOpen();
  };

  const handleStatusChange = (
    appointmentId: string,
    newStatus: "scheduled" | "completed" | "cancelled" | "approved"
  ) => {
    setAppointments(
      appointments.map((apt) =>
        apt.id === appointmentId ? { ...apt, status: newStatus } : apt
      )
    );

    toast({
      title: `Appointment ${newStatus}`,
      status: newStatus === "cancelled" ? "error" : "success",
      duration: 3000,
    });
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "scheduled":
        return "blue";
      case "completed":
        return "green";
      case "cancelled":
        return "red";
      default:
        return "gray";
    }
  };

  return (
    <Flex>
      <Box>
        <Sidebar />
      </Box>
      <MainContent>
        <Box
          flex="1"
          p={{
            base: 2,
            md: 4,
            xl: 8,
          }}
          mt={{ base: 10, xl: 4 }}
        >
          <Header />
          <Flex
            justify="space-between"
            gap={4}
            wrap="wrap"
            align="center"
            mb={6}
          >
            <Heading size="sm" color="gray.700">
              Appointments
            </Heading>
            <HStack>
              <Icon as={FaCalendarAlt} color="blue.500" />
              <Text color="gray.600" fontSize="sm">
                {`Today's Appointments`}:{" "}
                {
                  appointments.filter((apt) => apt.status === "scheduled")
                    .length
                }
              </Text>
            </HStack>
          </Flex>

          <Box overflowX="auto" shadow="sm" rounded="lg" bg="white">
            <StyledTable>
              <Thead>
                <Tr>
                  <Th>ID</Th>
                  <Th>Customer</Th>
                  <Th>Service</Th>
                  <Th>Date & Time</Th>
                  <Th>Vehicle</Th>
                  <Th>Status</Th>
                  <Th>Actions</Th>
                </Tr>
              </Thead>
              <Tbody>
                {appointments.map((appointment) => (
                  <Tr key={appointment.id}>
                    <Td>{appointment.id}</Td>
                    <Td>
                      <Box>
                        <Text fontWeight="medium">
                          {appointment.customerName}
                        </Text>
                        <Text fontSize="xs" color="gray.500">
                          {appointment.email}
                        </Text>
                      </Box>
                    </Td>
                    <Td>{appointment.service}</Td>
                    <Td>
                      <HStack>
                        <Icon as={FaClock} color="blue.500" fontSize="xs" />
                        <Text>{`${appointment.date} ${appointment.time}`}</Text>
                      </HStack>
                    </Td>
                    <Td>{appointment.vehicleInfo}</Td>
                    <Td>
                      <Badge
                        colorScheme={getStatusColor(appointment.status)}
                        borderRadius="full"
                        px={3}
                        py={1}
                      >
                        {appointment.status}
                      </Badge>
                    </Td>
                    <Td>
                      <HStack spacing={2}>
                        <Button
                          size="sm"
                          colorScheme="blue"
                          variant="ghost"
                          leftIcon={<FaEdit />}
                          onClick={() => handleEditClick(appointment)}
                        >
                          Edit
                        </Button>
                        <Button
                          size="sm"
                          colorScheme="green"
                          variant="ghost"
                          onClick={() =>
                            handleStatusChange(appointment.id, "approved")
                          }
                        >
                          Approve
                        </Button>
                        {appointment.status !== "cancelled" && (
                          <Button
                            size="sm"
                            colorScheme="red"
                            variant="ghost"
                            leftIcon={<FaTimes />}
                            onClick={() =>
                              handleStatusChange(appointment.id, "cancelled")
                            }
                          >
                            Cancel
                          </Button>
                        )}
                      </HStack>
                    </Td>
                  </Tr>
                ))}
              </Tbody>
            </StyledTable>
          </Box>

          {/* Edit Appointment Modal */}
          <Modal isOpen={isOpen} onClose={onClose} size="xl">
            <ModalOverlay backdropFilter="blur(10px)" bg="blackAlpha.600" />
            <StyledModal>
              <ModalHeader
                borderBottom="1px solid"
                borderColor="gray.300"
                py={4}
                fontSize="lg"
                color="white"
                fontWeight="bold"
                bgGradient="linear(to-r, blue.400, blue.600)"
                borderTopRadius="20px"
              >
                Edit Appointment
              </ModalHeader>
              <ModalCloseButton color="white" />
              <ModalBody
                py={6}
                color="gray.200"
                bg="gray.800"
                borderRadius="md"
              >
                <Stack spacing={4}>
                  <Text fontWeight="bold" fontSize="lg" color="white">
                    Appointment Details
                  </Text>
                  <Text color="gray.300">ID: {selectedAppointment?.id}</Text>
                  <Text color="gray.300">
                    Customer: {selectedAppointment?.customerName}
                  </Text>
                  <Text color="gray.300">
                    Service: {selectedAppointment?.service}
                  </Text>
                  <Text color="gray.300">
                    Current Date: {selectedAppointment?.date}
                  </Text>
                  <Text color="gray.300">
                    Current Time: {selectedAppointment?.time}
                  </Text>
                  <Text color="gray.300">
                    Vehicle Info: {selectedAppointment?.vehicleInfo}
                  </Text>
                  <Text color="gray.300">
                    Status: {selectedAppointment?.status}
                  </Text>

                  <FormControl>
                    <FormLabel
                      htmlFor="edit-date"
                      fontWeight="medium"
                      color="white"
                    >
                      New Date
                    </FormLabel>
                    <Input
                      border="1px solid #4A5568"
                      borderRadius="md"
                      focusBorderColor="blue.300"
                      id="edit-date"
                      type="date"
                      value={editDate}
                      onChange={(e) => setEditDate(e.target.value)}
                      p={3}
                      bg="gray.700"
                      color="white"
                    />
                  </FormControl>

                  <FormControl>
                    <FormLabel
                      htmlFor="edit-description"
                      fontWeight="medium"
                      color="white"
                    >
                      Description
                    </FormLabel>
                    <Textarea
                      id="edit-description"
                      placeholder="Explain why the appointment was moved"
                      value={editDescription}
                      onChange={(e) => setEditDescription(e.target.value)}
                      border="1px solid #4A5568"
                      borderRadius="md"
                      focusBorderColor="blue.300"
                      p={3}
                      bg="gray.700"
                      color="white"
                    />
                  </FormControl>

                  <Button
                    colorScheme="blue"
                    onClick={() => {
                      // Save logic here
                      onClose();
                    }}
                    mt={4}
                    bgGradient="linear(to-r, blue.400, blue.600)"
                    _hover={{ bgGradient: "linear(to-r, blue.500, blue.700)" }}
                    color="white"
                  >
                    Save
                  </Button>
                </Stack>
              </ModalBody>
            </StyledModal>
          </Modal>
        </Box>
      </MainContent>
    </Flex>
  );
}
