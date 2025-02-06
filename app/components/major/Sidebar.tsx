"use client";

import {
  Box,
  VStack,
  HStack,
  Icon,
  Text,
  Flex,
  IconButton,
  useBreakpointValue,
  Collapse,
  Icon as ChakraIcon,
  Drawer,
  DrawerContent,
  DrawerOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import { Image } from "@chakra-ui/next-js";
import {
  FaHome,
  FaCalendarAlt,
  FaCreditCard,
  FaBell,
  FaSignOutAlt,
  FaTimes,
  FaChevronDown,
  FaChevronRight,
  FaBars,
} from "react-icons/fa";
import {
  FaCarSide,
  FaPeopleGroup,
  FaPersonCirclePlus,
  FaScrewdriverWrench,
} from "react-icons/fa6";
import styled from "@emotion/styled";
import logo from "../../assets/logo.webp";
import { ComponentType, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";

const SidebarContainer = styled(Box)`
  background: #002050;
  color: #fff;
  height: 100svh;
  overflow-y: auto;
  scrollbar-width: none;
  width: 250px;
  padding: 2rem 1rem;
  transition: all 0.3s ease-in-out;

  &::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: 450px) {
    width: 100%;
  }
`;

interface SidebarItemProps {
  icon: ComponentType;
  label: string;
  path?: string;
  active?: boolean;
  onClick?: () => void;
  subItems?: Array<{
    label: string;
    path: string;
  }>;
}

interface SubMenuItemProps {
  label: string;
  path: string;
  active?: boolean;
  onClick?: () => void;
}

const SubMenuItem = ({
  label,
  path,
  active = false,
  onClick,
}: SubMenuItemProps) => (
  <Link href={path} style={{ textDecoration: "none" }} onClick={onClick}>
    <HStack
      cursor="pointer"
      p={3}
      pl={10}
      borderRadius="md"
      bg={active ? "rgba(255, 255, 255, 0.1)" : "transparent"}
      _hover={{
        bg: "rgba(255, 255, 255, 0.1)",
      }}
      color="white"
      transition="all 0.3s ease"
    >
      <Text fontWeight="medium">{label}</Text>
    </HStack>
  </Link>
);

const SidebarItem = ({
  icon,
  label,
  path,
  active = false,
  onClick,
  subItems,
}: SidebarItemProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const handleClick = () => {
    if (subItems) {
      setIsOpen(!isOpen);
    } else if (path) {
      router.push(path);
      if (onClick) onClick();
    }
  };

  return (
    <>
      {path && !subItems ? (
        <Link passHref href={path} style={{ textDecoration: "none" }}>
          <HStack
            cursor="pointer"
            p={3}
            borderRadius="md"
            bg={active ? "rgba(255, 255, 255, 0.1)" : "transparent"}
            _hover={{
              bg: "rgba(255, 255, 255, 0.1)",
            }}
            color="white"
            transition="all 0.3s ease"
            onClick={onClick}
          >
            <Icon as={icon} />
            <Text fontWeight="medium" fontSize="sm">
              {label}
            </Text>
            {subItems && (
              <ChakraIcon
                as={isOpen ? FaChevronDown : FaChevronRight}
                fontSize="xs"
                ml="auto"
              />
            )}
          </HStack>
        </Link>
      ) : (
        <HStack
          cursor="pointer"
          p={3}
          borderRadius="md"
          bg={active ? "rgba(255, 255, 255, 0.1)" : "transparent"}
          _hover={{
            bg: "rgba(255, 255, 255, 0.1)",
          }}
          color="white"
          transition="all 0.3s ease"
          onClick={handleClick}
          justify="space-between"
        >
          <HStack>
            <Icon as={icon} />
            <Text fontWeight="medium" fontSize="sm">
              {label}
            </Text>
          </HStack>
          {subItems && (
            <ChakraIcon
              as={isOpen ? FaChevronDown : FaChevronRight}
              fontSize="xs"
            />
          )}
        </HStack>
      )}

      {subItems && (
        <Collapse in={isOpen}>
          <VStack align="stretch" spacing={0}>
            {subItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                style={{ textDecoration: "none" }}
              >
                <SubMenuItem
                  {...item}
                  active={pathname === item.path}
                  onClick={onClick}
                />
              </Link>
            ))}
          </VStack>
        </Collapse>
      )}
    </>
  );
};

interface SidebarContentProps {
  onClose?: () => void;
}

const SidebarContent = ({ onClose }: SidebarContentProps) => {
  const logoSize = useBreakpointValue({ base: 25, sm: 35 });
  const pathname = usePathname();
  const router = useRouter();

  const mainMenuItems = [
    { icon: FaHome, label: "Dashboard", path: "/dashboard" },
    {
      icon: FaCarSide,
      label: "Booking",
      subItems: [
        { label: "Walk-in", path: "/booking" }, // Updated path
        { label: "Online Booking", path: "/booking/online-booking" },
      ],
    },
    {
      icon: FaCalendarAlt,
      label: "Appointments",
      path: "/appointments",
    },
    { icon: FaPeopleGroup, label: "Customers", path: "/customers" },
    { icon: FaCreditCard, label: "Accounts", path: "/payments" },
    // {
    //   icon: FaCreditCard,
    //   label: "Accounts",
    //   subItems: [
    //     { label: "Payments", path: "/payments" },
    //     { label: "Front esk", path: "/frontdesk" },
    //     { label: "Stockist", path: "/stockist" },
    //   ],
    // },
    { icon: FaPersonCirclePlus, label: "Users", path: "/users" },
    { icon: FaScrewdriverWrench, label: "Technicians", path: "/technicians" },
  ];

  const bottomMenuItems = [
    {
      icon: FaBell,
      label: "Notifications",
      path: "#",
    },
    // { icon: FaUserCog, label: "Settings", path: "/profile" },
    // {
    //   icon: FaQuestionCircle,
    //   label: "Help & Support",
    //   path: "/support",
    // },
  ];

  const handleLogout = () => {
    // Clear any stored tokens/session data
    localStorage.removeItem("autoland_token");
    // Redirect to login page
    router.push("/login");
  };

  return (
    <VStack spacing={8} align="stretch" color="gray.50">
      <Flex justify="space-between" align="center">
        <Box>
          <Link href="/dashboard">
            <Image src={logo} alt="Autoland Logo" height={logoSize} />
          </Link>
        </Box>
        {onClose && (
          <IconButton
            display={{ base: "flex", xl: "none" }}
            onClick={onClose}
            variant="ghost"
            color="white"
            icon={<FaTimes />}
            aria-label="Close menu"
          />
        )}
      </Flex>

      <VStack align="stretch" spacing={2}>
        {mainMenuItems.map((item) => (
          <SidebarItem
            key={item.path || item.label}
            icon={item.icon}
            label={item.label}
            path={item.path}
            active={pathname === item.path}
            onClick={onClose}
            subItems={item.subItems}
          />
        ))}
      </VStack>

      <Box width="100%" height="1px" bg="gray.500" />

      <VStack align="stretch" spacing={2} mt="auto">
        {bottomMenuItems.map((item) => (
          <SidebarItem
            key={item.path}
            icon={item.icon}
            label={item.label}
            path={item.path}
            active={pathname === item.path}
            onClick={onClose}
          />
        ))}
        <HStack
          cursor="pointer"
          p={3}
          borderRadius="md"
          _hover={{
            bg: "rgba(255, 255, 255, 0.1)",
          }}
          color="white"
          transition="all 0.3s ease"
          onClick={() => {
            handleLogout();
            onClose?.();
          }}
        >
          <Icon as={FaSignOutAlt} />
          <Text fontWeight="medium">Logout</Text>
        </HStack>
      </VStack>
    </VStack>
  );
};

export default function Sidebar({ onClose }: SidebarContentProps) {
  const { isOpen, onOpen, onClose: onDrawerClose } = useDisclosure();
  const isMobile = useBreakpointValue({ base: true, xl: false });

  const handleDrawerClose = () => {
    onDrawerClose();
    onClose?.();
  };

  if (isMobile) {
    return (
      <>
        <IconButton
          size="sm"
          aria-label="Open Menu"
          icon={<FaBars color="white" />}
          onClick={onOpen}
          position="fixed"
          top="2"
          left="4"
          zIndex="overlay"
          colorScheme="blue"
          bgColor="primaryBlue"
          display={{ base: "flex", xl: "none" }}
        />

        <Drawer
          isOpen={isOpen}
          placement="left"
          onClose={handleDrawerClose}
          size="xs"
        >
          <DrawerOverlay />
          <DrawerContent width="inherit" height="100svh">
            <SidebarContainer>
              <SidebarContent onClose={handleDrawerClose} />
            </SidebarContainer>
          </DrawerContent>
        </Drawer>
      </>
    );
  }

  return (
    <Box
      display={{ base: "none", xl: "block" }}
      position="fixed"
      left={0}
      top={0}
      h="100vh"
    >
      <SidebarContainer>
        <SidebarContent onClose={onClose} />
      </SidebarContainer>
    </Box>
  );
}
