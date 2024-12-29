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
} from "@chakra-ui/react";
import { Image, Link } from "@chakra-ui/next-js";
import {
  FaHome,
  FaCalendarAlt,
  FaCreditCard,
  FaBell,
  FaUserCog,
  FaQuestionCircle,
  FaSignOutAlt,
  FaTimes,
  FaChevronDown,
  FaChevronRight,
} from "react-icons/fa";
import { FaCarSide, FaNetworkWired } from "react-icons/fa6";
import styled from "@emotion/styled";
import logo from "../../assets/logo.webp";
import { ComponentType, useState } from "react";
import { usePathname, useRouter } from "next/navigation";

const SidebarContainer = styled(Box)`
  background: #002050;
  color: #fff;
  height: 100svh;
  overflow-y: scroll;
  scrollbar-width: none;
  width: 250px;
  position: fixed;
  left: 0;
  top: 0;
  padding: 2rem 1rem;
  transition: all 0.3s ease-in-out;

  @media (max-width: 768px) {
    width: 100%;
    position: relative;
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

const SubMenuItem = ({ label, path, active = false, onClick }: any) => (
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
      transition="all 0.3s ease">
      <Text fontSize="sm" fontWeight="medium">
        {label}
      </Text>
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

  const handleClick = () => {
    if (subItems) {
      setIsOpen(!isOpen);
    } else if (onClick) {
      onClick();
    }
  };

  return (
    <>
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
        justify="space-between">
        <HStack>
          <Icon as={icon} />
          <Text fontWeight="medium">{label}</Text>
        </HStack>
        {subItems && (
          <ChakraIcon
            as={isOpen ? FaChevronDown : FaChevronRight}
            fontSize="xs"
          />
        )}
      </HStack>
      {subItems && (
        <Collapse in={isOpen}>
          <VStack align="stretch" spacing={0}>
            {subItems.map((item) => (
              <SubMenuItem
                key={item.path}
                {...item}
                active={pathname === item.path}
              />
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
        { label: "Walk-in", path: "/booking/" },
        { label: "Online Booking", path: "/booking/online-booking" },
      ],
    },
    {
      icon: FaCalendarAlt,
      label: "Appointments",
      path: "/appointments",
    },
    { icon: FaCreditCard, label: "Accounts", path: "/payments" },
    { icon: FaNetworkWired, label: "Plans", path: "/plans" },
  ];

  const bottomMenuItems = [
    {
      icon: FaBell,
      label: "Notifications",
      path: "/notification",
    },
    { icon: FaUserCog, label: "Settings", path: "/profile" },
    {
      icon: FaQuestionCircle,
      label: "Help & Support",
      path: "/support",
    },
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
            display={{ base: "flex", md: "none" }}
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
          }}>
          <Icon as={FaSignOutAlt} />
          <Text fontWeight="medium">Logout</Text>
        </HStack>
      </VStack>
    </VStack>
  );
};

export default function Sidebar({ onClose }: SidebarContentProps) {
  return (
    <SidebarContainer>
      <SidebarContent onClose={onClose} />
    </SidebarContainer>
  );
}
