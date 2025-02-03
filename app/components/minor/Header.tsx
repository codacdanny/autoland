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
  useBreakpointValue,
  useDisclosure,
} from "@chakra-ui/react";
import {
  FaBell,
  FaEnvelope,
  FaSearch,
  FaSignOutAlt,
  FaBars,
} from "react-icons/fa";
import { motion } from "framer-motion";

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const avatarSize = useBreakpointValue({ base: "xs", md: "sm" });
  const iconSpacing = useBreakpointValue({ base: "1", md: "4" });

  return (
    <Flex
      as={motion.div}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      justify="space-between"
      bg="white"
      py={2}
      px={{ base: 2, md: 6 }}
      align="center"
      mb={6}
      borderRadius="2xl"
      boxShadow="md"
      backdropFilter="blur(5px)"
      border="1px solid"
      borderColor="gray.100"
    >
      <VStack align="stretch" spacing={1}>
        <Text fontSize={{ base: "md", md: "lg" }} fontWeight="bold">
          Hi, Manager! 👋
        </Text>
        <Text color="gray.500" fontSize={{ base: "xs", md: "sm" }}>
          {`Let's check your garage today`}
        </Text>
      </VStack>

      <Flex
        align="center"
        gap={iconSpacing}
        display={{ base: "none", md: "flex" }}
      >
        {/* Enhanced Search Bar */}
        <InputGroup maxW={{ base: "200px", md: "300px" }}>
          <InputLeftElement pointerEvents="none">
            <FaSearch color="#dbdbd9" />
          </InputLeftElement>
          <Input
            placeholder="Search..."
            _placeholder={{ color: "gray.300", fontSize: "sm" }}
            bg="gray.50"
            color="gray.500"
            border="1px solid"
            borderColor="gray.200"
            _hover={{ borderColor: "gray.300" }}
            _focus={{ borderColor: "gray.500", boxShadow: "none" }}
            rounded="full"
          />
        </InputGroup>

        {/* Notifications */}
        <Tooltip label="Messages">
          <IconButton
            icon={<FaEnvelope />}
            aria-label="Messages"
            variant="ghost"
            position="relative"
            color="gray.400"
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

        <Tooltip label="Notifications" display={{ base: "none", md: "block" }}>
          <IconButton
            icon={<FaBell />}
            aria-label="Notifications"
            variant="ghost"
            position="relative"
            color="gray.400"
            _hover={{ bg: "gray.100" }}
            size={{ base: "sm", md: "md" }}
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
                size={avatarSize}
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

      {/* Mobile Menu Button */}
      <IconButton
        icon={<FaBars />}
        aria-label="Open Menu"
        variant="ghost"
        display={{ base: "flex", md: "none" }}
        onClick={onOpen}
      />

      {/* Mobile Menu */}
      <Menu isOpen={isOpen} onClose={onClose}>
        <MenuButton as={IconButton} icon={<FaBars />} aria-label="Open Menu" />
        <MenuList>
          <MenuItem icon={<FaSignOutAlt />} onClick={onClose}>
            Logout
          </MenuItem>
          {/* Add more menu items as needed */}
        </MenuList>
      </Menu>
    </Flex>
  );
};

export default Header;
