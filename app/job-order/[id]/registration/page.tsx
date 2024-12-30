"use client";
import { Box, Heading, Text } from "@chakra-ui/react";

export default function RegistrationPage({
  params,
}: {
  params: { id: string };
}) {
  return (
    <Box>
      <Heading size="lg" mb={6}>
        Registration Form
      </Heading>
      <Text>Job Order ID: {params.id}</Text>
      {/* Add your registration form components here */}
    </Box>
  );
}
