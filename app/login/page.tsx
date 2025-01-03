"use client";
import {
  Box,
  VStack,
  Select,
  Input,
  Button,
  Heading,
  Flex,
} from "@chakra-ui/react";
import GlassCard from "../components/minor/GlassCard";
import bgLogin from "../assets/login_bg.jpg";
import theme from "../theme";
export default function Login() {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minH="100vh"
      bgImage={bgLogin.src}
      bgSize="cover"
      bgRepeat="no-repeat">
      <GlassCard>
        <Flex flexDir="column" gap={6} align="stretch">
          <Heading color="white" size="md" textAlign="center" mb={2}>
            Login
          </Heading>

          <Select
            placeholder="Select Role"
            bg={theme.glassBg}
            borderColor="rgba(255, 255, 255, 0.05)"
            size="md">
            <option
              style={{ backgroundColor: "rgba(4, 50, 119, 0.8)" }}
              color="white"
              value="workshop">
              Workshop Manager
            </option>
            <option
              color="white"
              style={{ backgroundColor: "rgba(4, 50, 119, 0.8)" }}
              value="accountant">
              Accountant
            </option>
            <option
              style={{ backgroundColor: "rgba(4, 50, 119, 0.8)" }}
              color="white"
              value="frontdesk">
              Front Desk
            </option>
          </Select>

          <Input
            placeholder="Email Address"
            type="email"
            bg="transparent"
            color="white"
            border="1px solid"
            borderColor="gray.200"
          />

          <Input
            placeholder="Password"
            type="password"
            bg="transparent"
            color="white"
            border="1px solid"
            borderColor="gray.200"
          />

          <Button
            colorScheme="blue"
            bgColor="primaryBlue"
            color="gray.600"
            size="md"
            borderRadius="lg"
            w="100%"
            mt={4}>
            Sign In
          </Button>
        </Flex>
      </GlassCard>
    </Box>
  );
}
