"use client";
import { useState } from "react";
import {
  Box,
  Heading,
  Text,
  Input,
  Button,
  useToast,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Flex,
} from "@chakra-ui/react";
import styled from "@emotion/styled";

// Styled Components
const FormContainer = styled(Box)`
  background: rgba(255, 255, 255, 0.9);
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  padding: 2rem;
  max-width: 700px;
  margin: auto;
`;

interface EstimateItem {
  id: number;
  service: string;
  price: number;
}

export default function InvoicePage({ params }: { params: { id: string } }) {
  const toast = useToast();
  const [estimateData, setEstimateData] = useState<EstimateItem[]>([
    { id: 1, service: "Oil Change", price: 50 },
    { id: 2, service: "Tire Rotation", price: 30 },
    { id: 3, service: "Brake Inspection", price: 70 },
    { id: 4, service: "Battery Replacement", price: 120 },
    { id: 5, service: "Transmission Fluid Change", price: 90 },
    { id: 6, service: "Air Filter Replacement", price: 25 },
    { id: 7, service: "Coolant Flush", price: 60 },
    { id: 8, service: "Spark Plug Replacement", price: 40 },
  ]);
  const [isEditable, setIsEditable] = useState(false);
  const [newService, setNewService] = useState("");
  const [newPrice, setNewPrice] = useState("");
  const [editIndex, setEditIndex] = useState<number | null>(null);

  const totalPrice = estimateData.reduce(
    (total, item) => total + item.price,
    0
  );

  const handleEditToggle = () => {
    setIsEditable(!isEditable);
  };

  const handleAddItem = () => {
    if (newService && newPrice) {
      const newItem: EstimateItem = {
        id: estimateData.length + 1,
        service: newService,
        price: parseFloat(newPrice),
      };
      setEstimateData([...estimateData, newItem]);
      setNewService("");
      setNewPrice("");
      toast({
        title: "Item added.",
        description: "New service has been added successfully.",
        position: "top-right",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
    } else {
      toast({
        title: "Error adding item.",
        description: "Please fill in both fields.",
        position: "top-right",

        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
  };

  const handleEditItem = (index: number) => {
    const item = estimateData[index];
    setNewService(item.service);
    setNewPrice(item.price.toString());
    setEditIndex(index);
  };

  const handleUpdateItem = () => {
    if (editIndex !== null && newService && newPrice) {
      const updatedData = estimateData.map((item, index) =>
        index === editIndex
          ? { ...item, service: newService, price: parseFloat(newPrice) }
          : item
      );
      setEstimateData(updatedData);
      setNewService("");
      setNewPrice("");
      setEditIndex(null);
      toast({
        title: "Item updated.",
        description: "Service has been updated successfully.",
        position: "top-right",

        status: "success",
        duration: 5000,
        isClosable: true,
      });
    }
  };

  const handleDeleteItem = (index: number) => {
    const updatedData = estimateData.filter((_, i) => i !== index);
    setEstimateData(updatedData);
    toast({
      title: "Item deleted.",
      description: "Service has been removed successfully.",
      position: "top-right",

      status: "success",
      duration: 5000,
      isClosable: true,
    });
  };

  return (
    <FormContainer>
      <Heading size="lg">Invoice</Heading>
      <Text fontSize="md" color="gray.600" mb={4}>
        Job Order ID: {params.id}
      </Text>
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>Service</Th>
            <Th isNumeric>Price ($)</Th>
            {isEditable && <Th>Edit</Th>}
            {isEditable && <Th>Delete</Th>}
          </Tr>
        </Thead>
        <Tbody>
          {estimateData.map((item, index) => (
            <Tr key={item.id}>
              <Td>{item.service}</Td>
              <Td isNumeric>{item.price.toFixed(2)}</Td>
              {isEditable && (
                <>
                  <Td>
                    <Button
                      colorScheme="blue"
                      color="white"
                      bgColor="#002050"
                      size="sm"
                      onClick={() => handleEditItem(index)}>
                      Edit
                    </Button>
                  </Td>
                  <Td>
                    <Button
                      size="sm"
                      colorScheme="red"
                      onClick={() => handleDeleteItem(index)}>
                      Delete
                    </Button>
                  </Td>
                </>
              )}
            </Tr>
          ))}
        </Tbody>
      </Table>
      <Text fontSize="lg" fontWeight="bold" mt={4}>
        Total: ${totalPrice.toFixed(2)}
      </Text>
      <Button size="sm" colorScheme="blue" mt={4} onClick={handleEditToggle}>
        Send to Client
      </Button>
    </FormContainer>
  );
}
