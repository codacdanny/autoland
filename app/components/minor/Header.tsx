import {
  Flex,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  Text,
  VStack,
  useBreakpointValue,
  useDisclosure,
} from "@chakra-ui/react";
import { FaSearch } from "react-icons/fa";
import { motion } from "framer-motion";

const Header = () => {
  const { onOpen } = useDisclosure();
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
        <Text fontSize={{ base: "sm", md: "lg" }} fontWeight="bold">
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
      </Flex>

      {/* Mobile Menu Button */}
      <IconButton
        icon={<FaSearch color="#dbdbd9" />}
        aria-label="Open Menu"
        variant="ghost"
        display={{ base: "flex", md: "none" }}
        onClick={onOpen}
      />

      {/* Mobile Menu */}
      {/* <Menu isOpen={isOpen} onClose={onClose}>
        <MenuButton
          as={IconButton}
          icon={<FaBars color="red" />}
          aria-label="Open Menu"
        />
        <MenuList zIndex="overlay">
          <MenuItem icon={<FaSignOutAlt />} onClick={onClose}>
            Logout
          </MenuItem> 
         
        </MenuList>
      </Menu> */}
    </Flex>
  );
};

export default Header;
