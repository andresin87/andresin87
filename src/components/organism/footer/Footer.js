import { Box, Container, useColorMode, Center } from "@chakra-ui/react";

const Footer = ({}) => {
  const { colorMode } = useColorMode();
  return (
    <Box
      as="footer"
      h="60px"
      bg={colorMode === "light" ? "blackAlpha.50" : "whiteAlpha.50"}
    >
      <Container
        maxW={{
          sm: "container.sm",
          md: "container.md",
          lg: "container.lg",
          xl: "container.xl",
        }}
      >
        <Center h="60px">Contact</Center>
      </Container>
    </Box>
  );
};

export default Footer;
