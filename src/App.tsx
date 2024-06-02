import "./App.css";
import { Box, Card, Flex, Text } from "@chakra-ui/react";
import LinkForm from "./Link_form";

function App() {
  return (
    <Flex
      width={"100%"}
      height={"100vh"}
      bg={"purple.900"}
      padding={{ base: "4", md: "8", lg: "12" }}
      justifyContent={"center"}
      alignItems={"centers"}
    >
      {/* <Box
        position="absolute"
        width="300px"
        height="200px"
        bg="purple.500"
        borderRadius="50%"
        top="20%"
        left="10%"
        zIndex="-1"
        sx={{
          transform: "translate(-50%, -50%)",
        }}
      /> */}
      <Box
        padding={{ base: "4", md: "8", lg: "12" }}
        paddingX={{ base: "8", md: "16", lg: "32" }}
        alignItems="center"
        width={{ base: "100%", md: "80%", lg: "70%" }}
        height="100%"
        bg="purple.800"
        boxShadow="2xl"
        borderRadius="xl"
      >
        <Flex
          alignItems={"center"}
          justifyContent={"center"}
          width={"100%"}
          direction={"column"}
        >
          <Text
            fontSize={{ base: "24px", md: "32px", lg: "40px" }}
            fontFamily={"sans-serif"}
            padding={2}
            textAlign="center"
          >
            LINK SHORTER
          </Text>
          <LinkForm></LinkForm>
        </Flex>
      </Box>
    </Flex>
  );
}

export default App;
