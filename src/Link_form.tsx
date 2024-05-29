import { ArrowForwardIcon, CopyIcon } from "@chakra-ui/icons";
import { Card, Flex, IconButton, Input } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { axiosClient } from "./config";

function LinkForm() {
  const [isLoading, setLoading] = useState(false);
  const [longLink, setLongLink] = useState("");
  const [shortLink, setShortLink] = useState("");

  const handlesubmit = async () => {
    setLoading(true);
    const response = await axiosClient
      .post("https://api-ssl.bitly.com/v4/shorten", { long_url: longLink })
      .then((res) => res.data)
      .finally(() => setLoading(false));

    setShortLink(response["link"]);
  };
  return (
    <Card padding={"7"} bg={"purple.700"} gap={"5"} width={"500px"}>
      <Flex direction={"row"} gap={"3"}>
        <Input
          placeholder="Enter your link here"
          value={longLink}
          onChange={(e) => setLongLink(e.target.value)}
          color={"white"}
          borderColor={"white"}
        />
        <IconButton
          isLoading={isLoading}
          onClick={handlesubmit}
          icon={<ArrowForwardIcon />}
          aria-label="arrow"
          colorScheme="white"
          variant="outline"
          margin={"auto"}
        ></IconButton>
      </Flex>
      <Flex direction={"row"} gap={"3"}>
        <Input
          placeholder=""
          readOnly
          borderColor={"white"}
          value={shortLink}
        />
        <IconButton
          icon={<CopyIcon />}
          aria-label="copy"
          colorScheme="white"
          variant="outline"
          margin={"auto"}
        ></IconButton>
      </Flex>
    </Card>
  );
}

export default LinkForm;
