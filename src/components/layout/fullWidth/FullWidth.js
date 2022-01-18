import {
  Box,
  Container,
  VStack,
  Flex,
  Center,
  useTheme,
  useColorMode,
} from "@chakra-ui/react";
import objectPath from "object-path";

import Header from "../../organism/header/Header";
import Footer from "../../organism/footer/Footer";
import Blob from "../../atom/blob/Bolb";
import TextTitle from "../../atom/textTitle/TextTitle";
import SVG from "../../atom/svg/SVG";

const FullWidth = () => {
  const theme = useTheme();
  const {
    colors: { brand1 = {}, brand2 = {}, brand3 = {}, whiteAlpha = {} },
  } = theme;
  const { colorMode } = useColorMode();

  console.log(theme.styles.global({ colorMode }));
  return (
    <Container minW="100vw" height="100vh" padding={0}>
      <VStack spacing={0} align="stretch" alignContent="stretch" minH="100vh">
        <Header />
        <Box as="main" p={0} flexGrow="1" height={30}>
          <Container
            maxW={{
              sm: "container.sm",
              md: "container.md",
              lg: "container.lg",
              xl: "container.xl",
            }}
          >
            <Flex>
              <Center flexGrow="1" maxH={150}>
                <SVG height={200} size={300}>
                  <Blob
                    boxSize={300}
                    fill={brand1["500"]}
                    growth={3}
                    edges={5}
                    size={300}
                  />
                  <Blob
                    fill="transparent"
                    stroke={brand2["500"]}
                    growth={3}
                    edges={5}
                    size={250}
                    boxSize={300}
                    strokeWidth={"1ch"}
                  />
                  <Blob
                    fill="transparent"
                    stroke={brand3["500"]}
                    growth={3}
                    edges={5}
                    size={250}
                    boxSize={300}
                    strokeWidth={"1ch"}
                  />
                  <TextTitle
                    size={300}
                    style={{
                      fontSize: "5em",
                    }}
                    fill={objectPath.get(
                      theme.colors,
                      theme.styles.global({ colorMode }).body.bg
                    )}
                    stroke={objectPath.get(
                      theme.colors,
                      theme.styles.global({ colorMode }).body.bg
                    )}
                    strokeWidth={"20px"}
                  >
                    Title 1
                  </TextTitle>
                  <TextTitle
                    size={300}
                    style={{
                      fontSize: "5em",
                    }}
                    fill={brand1["500"]}
                  >
                    Title 1
                  </TextTitle>
                </SVG>
              </Center>
            </Flex>
          </Container>
        </Box>

        <Footer />
      </VStack>
    </Container>
  );
};

export default FullWidth;
