import {
  VStack,
  FormControl,
  FormLabel,
  Input,
  NumberInput,
  NumberInputField,
  Button,
  Box,
  Heading,
  IconButton,
  HStack,
  Select,
  Text,
} from "@chakra-ui/react";
import { FaPlus, FaTrash } from "react-icons/fa";
import { useState } from "react";
import { ServiceFeature, SubscriptionTier } from "@/app/utils/types/autoclub";

interface Props {
  tier?: SubscriptionTier;
  onSubmit: (tier: SubscriptionTier) => void;
  onCancel: () => void;
}
export const SubscriptionTierForm = ({ tier, onSubmit, onCancel }: Props) => {
  const [formData, setFormData] = useState<Partial<SubscriptionTier>>({
    name: tier?.name || undefined,
    price: tier?.price || 0,
    maxCars: tier?.maxCars || 1,
    serviceFrequency: tier?.serviceFrequency || 1,
    color: tier?.color || "blue",
    features: tier?.features || [],
    isActive: tier?.isActive ?? true,
  });

  const [newFeature, setNewFeature] = useState<Partial<ServiceFeature>>({
    name: "",
    description: "",
    frequency: 1,
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]:
        name === "price" || name === "maxCars" || name === "serviceFrequency"
          ? Number(value)
          : value,
    }));
  };

  const handleAddFeature = () => {
    if (newFeature.name && newFeature.frequency) {
      const feature: ServiceFeature = {
        id: Date.now().toString(),
        name: newFeature.name,
        description: newFeature.description || "",
        frequency: newFeature.frequency || 1,
      };
      setFormData((prev) => ({
        ...prev,
        features: [...(prev.features || []), feature],
      }));
      setNewFeature({ name: "", description: "", frequency: 1 });
    }
  };

  const handleRemoveFeature = (id: string) => {
    setFormData((prev) => ({
      ...prev,
      features: prev.features?.filter((f) => f.id !== id) || [],
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.price) {
      return;
    }
    onSubmit(formData as SubscriptionTier);
  };

  return (
    <form onSubmit={handleSubmit}>
      <VStack spacing={6} align="stretch">
        <FormControl isRequired>
          <FormLabel>Tier Name</FormLabel>
          <Select
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            outline="1px solid #333">
            <option
              style={{
                backgroundColor: "#eee",
                color: "gray.500",
                fontSize: "14px",
              }}
              value="Platinum">
              Platinum
            </option>
            <option
              style={{
                backgroundColor: "#eee",
                color: "gray.500",
                fontSize: "14px",
              }}
              value="Diamond">
              Diamond
            </option>
            <option
              style={{
                backgroundColor: "#eee",
                color: "gray.500",
                fontSize: "14px",
              }}
              value="Gold">
              Gold
            </option>
            <option
              style={{
                backgroundColor: "#eee",
                color: "gray.500",
                fontSize: "14px",
              }}
              value="Silver">
              Silver
            </option>
          </Select>
        </FormControl>

        <FormControl isRequired>
          <FormLabel>Price (₦)</FormLabel>
          <NumberInput
            outline="1px solid #333"
            borderRadius="5px"
            min={0}
            value={formData.price}>
            <NumberInputField name="price" onChange={handleInputChange} />
          </NumberInput>
        </FormControl>

        <FormControl isRequired>
          <FormLabel>Maximum Cars</FormLabel>
          <NumberInput
            outline="1px solid #333"
            borderRadius="5px"
            min={1}
            value={formData.maxCars}>
            <NumberInputField name="maxCars" onChange={handleInputChange} />
          </NumberInput>
        </FormControl>

        <FormControl isRequired>
          <FormLabel>Service Frequency (per year)</FormLabel>
          <NumberInput
            outline="1px solid #333"
            borderRadius="5px"
            min={1}
            value={formData.serviceFrequency}>
            <NumberInputField
              name="serviceFrequency"
              onChange={handleInputChange}
            />
          </NumberInput>
        </FormControl>

        <FormControl>
          <FormLabel>Color Theme</FormLabel>
          <Select
            name="color"
            value={formData.color}
            onChange={handleInputChange}
            outline="1px solid #333"
            borderRadius="5px">
            <option
              style={{
                backgroundColor: "#eee",
                color: "gray.500",
                fontSize: "14px",
              }}
              value="purple">
              Purple
            </option>
            <option
              style={{
                backgroundColor: "#eee",
                color: "gray.500",
                fontSize: "14px",
              }}
              value="blue">
              Blue
            </option>
            <option
              style={{
                backgroundColor: "#eee",
                color: "gray.500",
                fontSize: "14px",
              }}
              value="green">
              Green
            </option>
            <option
              style={{
                backgroundColor: "#eee",
                color: "gray.500",
                fontSize: "14px",
              }}
              value="orange">
              Orange
            </option>
          </Select>
        </FormControl>

        <Box>
          <Heading size="sm" mb={4}>
            Services
          </Heading>
          <VStack spacing={4}>
            {formData.features?.map((feature) => (
              <HStack key={feature.id} width="full">
                <Text flex={1}>{feature.name}</Text>
                <Text>{feature.frequency}x</Text>
                <IconButton
                  icon={<FaTrash />}
                  aria-label="Remove service"
                  variant="ghost"
                  colorScheme="red"
                  onClick={() => handleRemoveFeature(feature.id)}
                />
              </HStack>
            ))}

            <HStack width="full">
              <Input
                outline="1px solid #333"
                placeholder="Service name"
                _placeholder={{ color: "gray.500" }}
                value={newFeature.name}
                onChange={(e) =>
                  setNewFeature((prev) => ({ ...prev, name: e.target.value }))
                }
              />
              <NumberInput min={1} value={newFeature.frequency} maxW="100px">
                <NumberInputField
                  placeholder="Times"
                  outline="1px solid #333"
                  onChange={(e) =>
                    setNewFeature((prev) => ({
                      ...prev,
                      frequency: Number(e.target.value),
                    }))
                  }
                />
              </NumberInput>
              <Button
                leftIcon={<FaPlus />}
                size="sm"
                onClick={handleAddFeature}
                colorScheme="blue">
                Add
              </Button>
            </HStack>
          </VStack>
        </Box>

        <HStack justify="flex-end" spacing={4}>
          <Button colorScheme="red" onClick={onCancel}>
            Cancel
          </Button>
          <Button colorScheme="blue" type="submit">
            {tier ? "Update Tier" : "Create Tier"}
          </Button>
        </HStack>
      </VStack>
    </form>
  );
};
