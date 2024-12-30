"use client";
import { Box, Heading, Text } from "@chakra-ui/react";

export default function InvoicePage({ params }: { params: { id: string } }) {
  return (
    <Box>
      <Heading size="lg" mb={6}>
        Invoice
      </Heading>
      <Text>Job Order ID: {params.id}</Text>
      {/* Add your invoice components here */}
    </Box>
  );
}
