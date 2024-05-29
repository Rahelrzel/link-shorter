import { useState } from "react";
import "./App.css";
import {
  Button,
  Card,
  Center,
  Flex,
  IconButton,
  Input,
  Text,
} from "@chakra-ui/react";
import { ArrowForwardIcon, CopyIcon } from "@chakra-ui/icons";

function App() {
  const [count, setCount] = useState(0);

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
        <Text fontSize={"30"} fontFamily={"sans-serif"} padding={12}>
          LINK SHORTER
        </Text>
        <Card padding={"7"} bg={"purple.700"} gap={"5"} width={"500px"}>
          <Flex direction={"row"} gap={"3"}>
            <Input
              placeholder="Enter your link here"
              color={"white"}
              borderColor={"white"}
            />
            <IconButton
              icon={<ArrowForwardIcon />}
              aria-label="arrow"
              colorScheme="white"
              variant="outline"
              margin={"auto"}
            ></IconButton>
          </Flex>
          <Flex direction={"row"} gap={"3"}>
            <Input placeholder="" readOnly borderColor={"white"} />
            <IconButton
              icon={<CopyIcon />}
              aria-label="copy"
              colorScheme="white"
              variant="outline"
              margin={"auto"}
            ></IconButton>
          </Flex>
        </Card>
      </Card>
    </Flex>
  );
}

export default App;
