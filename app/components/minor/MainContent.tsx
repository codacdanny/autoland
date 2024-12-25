import { Box } from "@chakra-ui/react";

export default function MainContent({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Box
      minH="100vh"
      ml="250px"
      width="calc(100% - 250px)"
      bgColor="mainBg"
      color="gray.900"
      maxW="container.xl"
    >
      {children}
    </Box>
  );
}
