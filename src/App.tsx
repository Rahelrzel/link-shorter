import "./App.css";
import { Card, Flex, Text } from "@chakra-ui/react";
import LinkForm from "./Link_form";

function App() {
  return (
    <Flex width={"100%"} height={"100vh"} bg={"purple.900"} padding={"16"}>
      <Card
        padding={"20"}
        paddingX={"32"}
        alignItems={"center"}
        width={"100%"}
        height={"100%"}
        bg={"purple.800"}
        boxShadow={"2xl"}
        borderRadius={"xl"}
      >
        <Text fontSize={"40"} fontFamily={"sans-serif"} padding={2}>
          LINK SHORTER
        </Text>
        <LinkForm></LinkForm>
      </Card>
    </Flex>
  );
}

export default App;
