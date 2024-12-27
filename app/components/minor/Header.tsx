import {
  Avatar,
  Badge,
  Box,
  Flex,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
  Tooltip,
  VStack,
} from "@chakra-ui/react";
import { FaBell, FaEnvelope, FaSearch, FaSignOutAlt } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Header() {
  return (
    <Flex
      as={motion.div}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      justify="space-between"
      bg="whiteBg"
      p={6}
      align="center"
      mb={8}
      borderRadius="2xl"
      boxShadow="md"
      backdropFilter="blur(5px)"
      border="1px solid"
      borderColor="gray.100"
    >
      <VStack align="stretch" spacing={1}>
        <Text fontSize="2xl" fontWeight="bold">
          Hi, Manager! 👋
        </Text>
        <Text color="gray.500" fontSize="md">
          {`Let's check your garage today`}
        </Text>
      </VStack>

      <Flex align="center" gap={4}>
        {/* Enhanced Search Bar */}
        <InputGroup maxW="300px">
          <InputLeftElement pointerEvents="none">
            <FaSearch color="gray.300" />
          </InputLeftElement>
          <Input
            placeholder="Search..."
            _placeholder={{ color: "gray.500" }}
            bg="gray.50"
            border="1px solid"
            borderColor="gray.200"
            _hover={{ borderColor: "gray.300" }}
            _focus={{ borderColor: "blue.500", boxShadow: "none" }}
            rounded="lg"
          />
        </InputGroup>

        {/* Notifications */}
        <Tooltip label="Messages">
          <IconButton
            icon={<FaEnvelope />}
            aria-label="Messages"
            variant="ghost"
            position="relative"
            color="gray.600"
            _hover={{ bg: "gray.100" }}
          >
            <Badge
              position="absolute"
              top="-1"
              right="-1"
              colorScheme="red"
              borderRadius="full"
              size="sm"
            >
              3
            </Badge>
          </IconButton>
        </Tooltip>

        <Tooltip label="Notifications">
          <IconButton
            icon={<FaBell />}
            aria-label="Notifications"
            variant="ghost"
            position="relative"
            color="gray.600"
            _hover={{ bg: "gray.100" }}
          >
            <Badge
              position="absolute"
              top="-1"
              right="-1"
              colorScheme="red"
              borderRadius="full"
              size="sm"
            >
              5
            </Badge>
          </IconButton>
        </Tooltip>

        {/* User Menu */}
        <Menu>
          <MenuButton>
            <Flex align="center" cursor="pointer">
              <Avatar
                size="sm"
                name="Manager"
                src="path/to/avatar.jpg"
                mr={2}
              />
              <Box display={{ base: "none", md: "block" }}>
                <Text fontWeight="medium" fontSize="sm">
                  Manager
                </Text>
                <Text fontSize="xs" color="gray.500">
                  Admin
                </Text>
              </Box>
            </Flex>
          </MenuButton>
          <MenuList bg="white">
            <MenuItem
              bgColor="gray.100"
              color="gray.600"
              icon={<FaSignOutAlt />}
            >
              Logout
            </MenuItem>
          </MenuList>
        </Menu>
      </Flex>
    </Flex>
  );
}
