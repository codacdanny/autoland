import { Badge, Box, Flex, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FaCaretDown, FaCaretUp } from "react-icons/fa";
import { MetricCardData } from "@/app/types/metrics";

interface MetricCardProps extends MetricCardData {
  animationDelay?: number;
}

export default function MetricCard({
  title,
  value,
  change,
  isIncrease,
  icon: Icon,
  color,
  bgGradient,
  animationDelay = 0,
}: MetricCardProps) {
  return (
    <Box
      zIndex={0}
      as={motion.div}
      whileHover={{ scale: 1.02 }}
      p={6}
      borderRadius="2xl"
      bg="white"
      boxShadow="md"
      position="relative"
      overflow="hidden"
      animate={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 20 }}
    >
      <Box
        position="absolute"
        top={0}
        right={0}
        bottom={0}
        width="100%"
        bgGradient={bgGradient}
        opacity={0.1}
        borderRadius="2xl"
      />

      <Flex justify="space-between" align="center" mb={4}>
        <Box
          p={4}
          borderRadius="xl"
          bg={bgGradient}
          color="gray.600"
          boxShadow="lg"
        >
          <Icon size={18} />
        </Box>
        {change && (
          <Badge
            colorScheme={isIncrease ? "green" : "red"}
            borderRadius="full"
            px={3}
            py={1}
            display="flex"
            alignItems="center"
            fontSize="sm"
            fontWeight="bold"
          >
            {isIncrease ? <FaCaretUp /> : <FaCaretDown />}
            {change}
          </Badge>
        )}
      </Flex>

      <Text color="gray.500" fontSize="sm" mb={2}>
        {title}
      </Text>
      <Text color="gray.600" fontSize="lg" fontWeight="bold">
        {value}
      </Text>
    </Box>
  );
}
