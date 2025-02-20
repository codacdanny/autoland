import {
  Box,
  VStack,
  Heading,
  Text,
  Badge,
  Button,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  List,
  ListItem,
  ListIcon,
  IconButton,
  Flex,
  HStack,
} from "@chakra-ui/react";
import { FaCheck, FaEdit, FaTrash } from "react-icons/fa";
import { SubscriptionTier } from "@/app/utils/types/autoclub";

interface Props {
  tier: SubscriptionTier;
  onEdit: (tier: SubscriptionTier) => void;
  onDelete: (id: string) => void;
}

export const SubscriptionTierCard = ({ tier, onEdit, onDelete }: Props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box
        borderWidth="1px"
        borderRadius="xl"
        p={6}
        bg={`${tier.color}.50`}
        borderColor={`${tier.color}.200`}
        position="relative"
        transition="all 0.2s"
        _hover={{ transform: "translateY(-2px)", shadow: "md" }}
      >
        <Flex justify="space-between" align="start" mb={4}>
          <Badge
            colorScheme={tier.color}
            fontSize="sm"
            px={3}
            py={1}
            borderRadius="full"
          >
            {tier.name}
          </Badge>
          <Flex gap={2}>
            <IconButton
              size="sm"
              icon={<FaEdit />}
              aria-label="Edit tier"
              variant="ghost"
              colorScheme={tier.color}
              onClick={() => onEdit(tier)}
            />
            <IconButton
              size="sm"
              icon={<FaTrash />}
              aria-label="Delete tier"
              variant="ghost"
              colorScheme="red"
              onClick={() => onDelete(tier.id)}
            />
          </Flex>
        </Flex>

        <VStack align="stretch" spacing={4}>
          <Heading size="lg" color={`${tier.color}.500`}>
            ₦{tier.price.toLocaleString()}
            <Text as="span" fontSize="sm" color="gray.500">
              /year
            </Text>
          </Heading>

          <VStack align="stretch" spacing={2}>
            <Text fontWeight="medium">Features:</Text>
            <List spacing={2}>
              <ListItem>
                <ListIcon as={FaCheck} color={`${tier.color}.500`} />
                Up to {tier.maxCars} cars
              </ListItem>
              <ListItem>
                <ListIcon as={FaCheck} color={`${tier.color}.500`} />
                {tier.serviceFrequency} services per year
              </ListItem>
              {tier.features.map((feature) => (
                <ListItem key={feature.id}>
                  <ListIcon as={FaCheck} color={`${tier.color}.500`} />
                  {feature.name} ({feature.frequency}x)
                </ListItem>
              ))}
            </List>
          </VStack>

          <Button colorScheme={tier.color} onClick={onOpen} size="sm">
            View Details
          </Button>
        </VStack>
      </Box>

      <Modal isOpen={isOpen} onClose={onClose} size="lg">
        <ModalOverlay />

        <ModalContent>
          <ModalHeader color="gray.800" bgColor="gray.100">
            {tier.name} Tier Details
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody bgColor="gray.100" color="gray.800" pb={6}>
            <VStack align="stretch" spacing={6}>
              <Box>
                <Text fontWeight="semibold" mb={2}>
                  Subscription Details
                </Text>
                <List spacing={3}>
                  <ListItem>
                    <HStack justify="space-between">
                      <Text color="gray.600">Price</Text>
                      <Text fontWeight="medium">
                        ₦{tier.price.toLocaleString()}/year
                      </Text>
                    </HStack>
                  </ListItem>
                  <ListItem>
                    <HStack justify="space-between">
                      <Text color="gray.600">Maximum Cars</Text>
                      <Text fontWeight="medium">{tier.maxCars} cars</Text>
                    </HStack>
                  </ListItem>
                  <ListItem>
                    <HStack justify="space-between">
                      <Text color="gray.600">Service Frequency</Text>
                      <Text fontWeight="medium">
                        {tier.serviceFrequency} times/year
                      </Text>
                    </HStack>
                  </ListItem>
                </List>
              </Box>

              <Box>
                <Text fontWeight="semibold" mb={2}>
                  Included Services
                </Text>
                <List spacing={3}>
                  {tier.features.map((feature) => (
                    <ListItem key={feature.id}>
                      <HStack justify="space-between">
                        <Text color="gray.600">{feature.name}</Text>
                        <Badge colorScheme={tier.color}>
                          {feature.frequency}x
                        </Badge>
                      </HStack>
                      {feature.description && (
                        <Text fontSize="sm" color="gray.500" mt={1}>
                          {feature.description}
                        </Text>
                      )}
                    </ListItem>
                  ))}
                </List>
              </Box>

              <Box>
                <Text fontWeight="semibold" mb={2}>
                  Terms and Conditions
                </Text>
                <List spacing={2} styleType="disc" pl={4}>
                  <ListItem>
                    <Text fontSize="sm" color="gray.600">
                      Subscription is valid for one year from the date of
                      purchase
                    </Text>
                  </ListItem>
                  <ListItem>
                    <Text fontSize="sm" color="gray.600">
                      Services must be scheduled in advance
                    </Text>
                  </ListItem>
                  <ListItem>
                    <Text fontSize="sm" color="gray.600">
                      Unused services cannot be carried forward
                    </Text>
                  </ListItem>
                </List>
              </Box>
            </VStack>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
