import {
  Box,
  Container,
  useColorMode,
  IconButton,
  Flex,
  Center,
} from "@chakra-ui/react";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";

import Logo from "../../atom/logo/Logo";

const Header = ({}) => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Box
      as="header"
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
        <Flex justify={"space-between"} h="60px">
          <Center>
            <Logo />
          </Center>
          <Center>
            <IconButton
              size="sm"
              onClick={toggleColorMode}
              icon={colorMode === "light" ? <SunIcon /> : <MoonIcon />}
            />
          </Center>
        </Flex>
      </Container>
    </Box>
  );
};

export default Header;
