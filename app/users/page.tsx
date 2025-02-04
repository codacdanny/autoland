"use client";
import { useState } from "react";
import {
  Box,
  Button,
  Flex,
  Heading,
  Input,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  useDisclosure,
  Text,
  Badge,
  Select,
  useToast,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  FormControl,
  FormLabel,
  Stack,
  RadioGroup,
  Radio,
  HStack,
} from "@chakra-ui/react";
import { FaPlus, FaEdit, FaTrash } from "react-icons/fa";
import Sidebar from "@/app/components/major/Sidebar";
import MainContent from "@/app/components/minor/MainContent";
import Header from "@/app/components/minor/Header";
import styled from "@emotion/styled";

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

const StyledInput = styled(Input)`
  background: rgba(247, 250, 252, 0.8);
  border: 1px solid #e2e8f0;
  border-radius: 10px;
  padding: 0.8rem 1rem;
  font-size: 0.9rem;
  transition: all 0.3s ease;
  &::placeholder {
    color: #b9bdc2;
  }
  &:focus {
    background: white;
    border-color: #4299e1;
    box-shadow: 0 0 0 3px rgba(66, 153, 225, 0.15);
  }
`;

const StyledSelect = styled(Select)`
  background: rgba(247, 250, 252, 0.8);
  border: 1px solid #e2e8f0;
  border-radius: 10px;
  font-size: 0.9rem;
  height: 2.8rem;

  &:focus {
    background: white;
    border-color: #4299e1;
  }
`;

const usersData = [
  {
    name: "Danny Praise",
    phone: "0807 4999 5108",
    workshop: "Port-Harcourt",
    email: "info@dannycode.com",
    speciality: "expenses",
    role: "Account",
    status: "On Duty",
  },
  {
    name: "Danny Praise",
    phone: "0807 4999 5108",
    workshop: "Port-Harcourt",
    email: "info@dannycode.com",
    speciality: "Stockist",
    role: "Front Desk",
    status: "On Duty",
  },
  {
    name: "Danny Praise",
    phone: "0807 4999 5108",
    workshop: "Port-Harcourt",
    email: "info@dannycode.com",
    speciality: "Service Advisor",
    role: "Front Desk",
    status: "On Leave",
  },
  // Add more technician data as needed
];

interface UserFormData {
  name: string;
  phone: string;
  workshop: string;
  email: string;
  speciality: string;
  role: string;
  status: string;
}

export default function UsersPage() {
  const [searchTerm] = useState("");
  // const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();
  const {
    isOpen: isModalOpen,
    onOpen: onModalOpen,
    onClose: onModalClose,
  } = useDisclosure();
  const [formData, setFormData] = useState<UserFormData>({
    name: "",
    phone: "",
    workshop: "",
    email: "",
    speciality: "",
    role: "",
    status: "On Duty",
  });
  const [editingUser, setEditingUser] = useState<UserFormData | null>(null);
  const [isEditMode, setIsEditMode] = useState(false);

  // const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setSearchTerm(e.target.value);
  // };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleEdit = (user: UserFormData) => {
    setEditingUser(user);
    setFormData(user);
    setIsEditMode(true);
    onModalOpen();
  };

  const handleDelete = (userToDelete: UserFormData) => {
    const updatedUsers = usersData.filter(
      (tech) => tech.email !== userToDelete.email
    );
    // Update your data source
    usersData.length = 0;
    usersData.push(...updatedUsers);

    toast({
      title: "User deleted",
      description: "User has been removed successfully",
      status: "success",
      duration: 3000,
    });
  };

  const handleModalClose = () => {
    setIsEditMode(false);
    setEditingUser(null);
    setFormData({
      name: "",
      phone: "",
      workshop: "",
      email: "",
      speciality: "",
      role: "",
      status: "On Duty",
    });
    onModalClose();
  };

  const handleSubmit = () => {
    if (!formData.name || !formData.phone || !formData.email) {
      toast({
        title: "Error",
        description: "Please fill in all required fields",
        status: "error",
        duration: 3000,
      });
      return;
    }

    if (isEditMode && editingUser) {
      // Update existing User
      const userIndex = usersData.findIndex(
        (tech) => tech.email === editingUser.email
      );
      if (userIndex !== -1) {
        usersData[userIndex] = formData;
      }
      toast({
        title: "Success",
        description: "User updated successfully",
        status: "success",
        duration: 3000,
      });
    } else {
      // Add new User
      const newUser = { ...formData };
      usersData.push(newUser);

      toast({
        title: "Success",
        description: "User added successfully",
        status: "success",
        duration: 3000,
      });
    }

    handleModalClose();
  };

  const filteredUsers = usersData.filter((user) =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

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
          <Flex justify="space-between" align="center" mb={4}>
            <Heading size="sm">Users</Heading>
            <Flex>
              <Button
                colorScheme="blue"
                color="white"
                leftIcon={<FaPlus />}
                onClick={onModalOpen}
                size="sm"
              >
                Add User
              </Button>
            </Flex>
          </Flex>
          <Box
            overflowX="auto"
            shadow="sm"
            rounded="lg"
            bg="white"
            css={{
              "&::-webkit-scrollbar": {
                height: "8px",
              },
              "&::-webkit-scrollbar-track": {
                background: "#f1f1f1",
                borderRadius: "4px",
              },
              "&::-webkit-scrollbar-thumb": {
                background: "#cbd5e0",
                borderRadius: "4px",
                "&:hover": {
                  background: "#a0aec0",
                },
              },
            }}
          >
            <Box minWidth="1200px">
              <StyledTable>
                <Thead>
                  <Tr>
                    <Th>Name</Th>
                    <Th>Phone</Th>
                    <Th>Workshop</Th>
                    <Th>Email</Th>
                    <Th>Speciality</Th>
                    <Th>Role</Th>
                    <Th>Status</Th>
                    <Th>Actions</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {filteredUsers.map((users, index) => (
                    <Tr key={index}>
                      <Td>{users.name}</Td>
                      <Td>{users.phone}</Td>
                      <Td>{users.workshop}</Td>
                      <Td>{users.email}</Td>
                      <Td>{users.speciality}</Td>
                      <Td>{users.role}</Td>
                      <Td>
                        <Badge
                          colorScheme={
                            users.status === "On Duty" ? "green" : "red"
                          }
                        >
                          {users.status}
                        </Badge>
                      </Td>
                      <Td>
                        <HStack spacing={2}>
                          <Button
                            size="sm"
                            colorScheme="blue"
                            variant="ghost"
                            onClick={() => handleEdit(users)}
                            leftIcon={<FaEdit />}
                          >
                            Edit
                          </Button>
                          <Button
                            size="sm"
                            colorScheme="red"
                            variant="ghost"
                            onClick={() => handleDelete(users)}
                            leftIcon={<FaTrash />}
                          >
                            Delete
                          </Button>
                        </HStack>
                      </Td>
                    </Tr>
                  ))}
                </Tbody>
              </StyledTable>
            </Box>
          </Box>
        </Box>
      </MainContent>

      {/* Add Technician Modal */}
      <Modal isOpen={isModalOpen} onClose={handleModalClose} size="xl">
        <ModalOverlay backdropFilter="blur(10px)" bg="blackAlpha.300" />
        <StyledModal>
          <ModalHeader
            borderBottom="1px solid"
            borderColor="gray.100"
            py={4}
            fontSize="lg"
            color="gray.700"
          >
            {isEditMode ? "Edit User" : "Add New User"}
          </ModalHeader>
          <ModalCloseButton color="gray.800" />
          <ModalBody py={6}>
            <Stack spacing={6}>
              <FormControl isRequired>
                <FormLabel fontSize="sm" color="gray.600">
                  Full Name
                </FormLabel>
                <StyledInput
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Enter user's full name"
                  //   _placeholder={{ color: "gray.400" }}
                />
              </FormControl>

              <FormControl isRequired>
                <FormLabel fontSize="sm" color="gray.600">
                  Phone Number
                </FormLabel>
                <StyledInput
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="Enter phone number"
                />
              </FormControl>

              <FormControl isRequired>
                <FormLabel fontSize="sm" color="gray.600">
                  Email
                </FormLabel>
                <StyledInput
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Enter email address"
                />
              </FormControl>

              <HStack spacing={4}>
                <FormControl flex={1}>
                  <FormLabel fontSize="sm" color="gray.600">
                    Workshop
                  </FormLabel>
                  <StyledSelect
                    color="gray.800"
                    name="workshop"
                    value={formData.workshop}
                    onChange={handleInputChange}
                    placeholder="Select workshop"
                  >
                    <option
                      style={{ backgroundColor: "#fdfdfd" }}
                      value="Port-Harcourt"
                    >
                      Port-Harcourt
                    </option>
                    <option
                      style={{ backgroundColor: "#fdfdfd" }}
                      value="Owerri"
                    >
                      Owerri
                    </option>
                  </StyledSelect>
                </FormControl>

                <FormControl flex={1}>
                  <FormLabel fontSize="sm" color="gray.600">
                    Speciality
                  </FormLabel>
                  <StyledSelect
                    color="gray.800"
                    name="speciality"
                    value={formData.speciality}
                    onChange={handleInputChange}
                    placeholder="Select speciality"
                  >
                    <option
                      style={{ backgroundColor: "#fdfdfd" }}
                      value="German"
                    >
                      Service Advisor
                    </option>
                    <option
                      style={{ backgroundColor: "#fdfdfd" }}
                      value="Japanese"
                    >
                      Expenses
                    </option>
                    <option
                      style={{ backgroundColor: "#fdfdfd" }}
                      value="American"
                    >
                      Accounting{" "}
                    </option>
                  </StyledSelect>
                </FormControl>
              </HStack>

              <FormControl>
                <FormLabel fontSize="sm" color="gray.600">
                  Team
                </FormLabel>
                <StyledSelect
                  color="gray.800"
                  name="role"
                  value={formData.role}
                  onChange={handleInputChange}
                  placeholder="Select role"
                >
                  <option style={{ backgroundColor: "#fdfdfd" }} value="Alpha">
                    Front Desk
                  </option>
                  <option style={{ backgroundColor: "#fdfdfd" }} value="Beta">
                    Accounts
                  </option>
                  <option style={{ backgroundColor: "#fdfdfd" }} value="Delta">
                    Manager
                  </option>
                </StyledSelect>
              </FormControl>

              <FormControl>
                <FormLabel fontSize="sm" color="gray.600">
                  Status
                </FormLabel>
                <RadioGroup
                  value={formData.status}
                  onChange={(value) =>
                    setFormData((prev) => ({ ...prev, status: value }))
                  }
                >
                  <Stack direction="row" spacing={4}>
                    <Radio
                      value="On Duty"
                      colorScheme="blue"
                      color="gray.800"
                      sx={{
                        "span.chakra-radio__control": {
                          borderColor: "gray.300",
                          _checked: {
                            bg: "blue.500",
                            borderColor: "blue.500",
                          },
                        },
                      }}
                    >
                      <Text fontSize="sm" color="gray.800">
                        On Duty
                      </Text>
                    </Radio>
                    <Radio
                      value="On Leave"
                      colorScheme="red"
                      color="gray.800"
                      sx={{
                        "span.chakra-radio__control": {
                          borderColor: "gray.300",
                          _checked: {
                            bg: "red.500",
                            borderColor: "red.500",
                          },
                        },
                      }}
                    >
                      <Text fontSize="sm" color="gray.800">
                        On Leave
                      </Text>
                    </Radio>
                  </Stack>
                </RadioGroup>
              </FormControl>

              <Button
                colorScheme="blue"
                bg="blue.500"
                color="white"
                _hover={{ bg: "blue.600" }}
                _active={{ bg: "blue.700" }}
                size="sm"
                fontSize="sm"
                onClick={handleSubmit}
                width="full"
              >
                {isEditMode ? "Update User" : "Add User"}
              </Button>
            </Stack>
          </ModalBody>
        </StyledModal>
      </Modal>
    </Flex>
  );
}
