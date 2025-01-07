import { Box, Container } from "@chakra-ui/react";

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
      color="gray.900">
      <Container maxWidth="container.2xl">{children}</Container>
    </Box>
  );
}
