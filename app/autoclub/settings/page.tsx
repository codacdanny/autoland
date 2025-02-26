"use client";
import Sidebar from "@/app/components/major/Sidebar";
import Header from "@/app/components/minor/Header";
import MainContent from "@/app/components/minor/MainContent";
import MetricCards from "@/app/components/minor/MetricCards";
import { MetricCardData } from "@/app/utils/types/metrics";
import { SubscriptionTier } from "@/app/utils/types/autoclub";
import {
  Box,
  Flex,
  Grid,
  Button,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useToast,
} from "@chakra-ui/react";
import {
  FaCheckCircle,
  FaClipboardList,
  FaClock,
  FaPlus,
} from "react-icons/fa";
import { FaWallet } from "react-icons/fa6";
import { useState } from "react";
import { SubscriptionTierCard } from "@/app/components/major/autoclub/SubscriptionTierCard";
import { SubscriptionTierForm } from "@/app/components/major/autoclub/SubscriptionTierForm";
import { withAuth } from "@/app/utils/services/hoc";

// Sample subscription tiers data
const initialTiers: SubscriptionTier[] = [
  {
    id: "1",
    name: "Platinum",
    price: 1000000,
    maxCars: 5,
    serviceFrequency: 24,
    features: [
      {
        id: "1",
        name: "Full Service",
        description: "Complete car maintenance",
        frequency: 4,
      },
      {
        id: "2",
        name: "Car Wash",
        description: "Premium car wash service",
        frequency: 12,
      },
    ],
    color: "purple",
    isActive: true,
  },
  {
    id: "2",
    name: "Diamond",
    price: 750000,
    maxCars: 3,
    serviceFrequency: 18,
    features: [
      {
        id: "1",
        name: "Full Service",
        description: "Complete car maintenance",
        frequency: 3,
      },
      {
        id: "2",
        name: "Car Wash",
        description: "Premium car wash service",
        frequency: 9,
      },
    ],
    color: "blue",
    isActive: true,
  },
  // Add Gold and Silver tiers similarly
];

const JobOrderMetrics: MetricCardData[] = [
  {
    title: "Platinum Users",
    value: "142",
    icon: FaWallet,
    color: "purple.500",
    bgGradient: "linear(to-r, purple.400, purple.600)",
  },
  {
    title: "Diamond Users",
    value: "12",
    icon: FaClipboardList,
    color: "blue.500",
    bgGradient: "linear(to-r, blue.400, blue.600)",
  },
  {
    title: "Gold Users",
    value: "30",
    icon: FaCheckCircle,
    color: "green.500",
    bgGradient: "linear(to-r, green.400, green.600)",
  },
  {
    title: "Silver Users",
    value: "100",
    icon: FaClock,
    color: "orange.500",
    bgGradient: "linear(to-r, orange.400, orange.600)",
  },
];

function AutoclubSettings() {
  const [subscriptionTiers, setSubscriptionTiers] =
    useState<SubscriptionTier[]>(initialTiers);
  const [editingTier, setEditingTier] = useState<
    SubscriptionTier | undefined
  >();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();

  const handleAddTier = () => {
    setEditingTier(undefined);
    onOpen();
  };

  const handleEditTier = (tier: SubscriptionTier) => {
    setEditingTier(tier);
    onOpen();
  };

  const handleDeleteTier = (id: string) => {
    setSubscriptionTiers((prev) => prev.filter((tier) => tier.id !== id));
    toast({
      title: "Tier Deleted",
      description: "The subscription tier has been deleted successfully",
      status: "success",
      duration: 3000,
    });
  };

  const handleSubmit = (tier: SubscriptionTier) => {
    if (editingTier) {
      setSubscriptionTiers((prev) =>
        prev.map((t) => (t.id === editingTier.id ? tier : t))
      );
      toast({
        title: "Tier Updated",
        description: "The subscription tier has been updated successfully",
        status: "success",
        duration: 3000,
      });
    } else {
      setSubscriptionTiers((prev) => [
        ...prev,
        { ...tier, id: Date.now().toString() },
      ]);
      toast({
        title: "Tier Created",
        description: "New subscription tier has been created successfully",
        status: "success",
        duration: 3000,
      });
    }
    onClose();
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
          mt={{ base: 10, xl: 4 }}>
          <Header />
          <MetricCards metrics={JobOrderMetrics} />

          {/* Subscription Tiers Section */}
          <Flex justify="space-between" align="center" my={6}>
            <Box fontSize="lg" fontWeight="bold">
              Subscription Tiers
            </Box>
            <Button
              leftIcon={<FaPlus />}
              colorScheme="blue"
              onClick={handleAddTier}
              size="sm">
              Add New Tier
            </Button>
          </Flex>

          <Grid
            templateColumns={{
              base: "1fr",
              md: "repeat(2, 1fr)",
              lg: "repeat(4, 1fr)",
            }}
            gap={6}>
            {subscriptionTiers.map((tier) => (
              <SubscriptionTierCard
                key={tier.id}
                tier={tier}
                onEdit={handleEditTier}
                onDelete={handleDeleteTier}
              />
            ))}
          </Grid>

          {/* Add/Edit Tier Modal */}
          <Modal isOpen={isOpen} onClose={onClose} size="xl">
            <ModalOverlay backdropFilter="blur(10px)" />

            <ModalContent bgColor="gray.100" color="gray.800">
              <ModalHeader>
                {editingTier ? "Edit Subscription Tier" : "Create New Tier"}
              </ModalHeader>
              <ModalCloseButton />
              <ModalBody pb={6}>
                <SubscriptionTierForm
                  tier={editingTier}
                  onSubmit={handleSubmit}
                  onCancel={onClose}
                />
              </ModalBody>
            </ModalContent>
          </Modal>
        </Box>
      </MainContent>
    </Flex>
  );
}
export default withAuth(AutoclubSettings, ["workshopManager", "autoclub"]);
