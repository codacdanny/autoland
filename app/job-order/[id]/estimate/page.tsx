"use client";
import { Box, Heading, Text } from "@chakra-ui/react";

export default function EstimatePage({ params }: { params: { id: string } }) {
  return (
    <Box>
      <Heading size="lg" mb={6}>
        Estimate Form
      </Heading>
      <Text>Job Order ID: {params.id}</Text>
      {/* Add your estimate form components here */}
    </Box>
  );
}
