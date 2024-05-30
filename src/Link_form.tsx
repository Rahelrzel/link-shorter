import { ArrowForwardIcon, CopyIcon } from "@chakra-ui/icons";
import { Card, Flex, IconButton, Input, useToast } from "@chakra-ui/react";
import { AxiosError } from "axios";
import { useState } from "react";
import { axiosClient } from "./config";
import ConfettiExplosion from "react-confetti-explosion";

function LinkForm() {
  const toast = useToast();
  const [isLoading, setLoading] = useState(false);
  const [longLink, setLongLink] = useState("");
  const [shortLink, setShortLink] = useState("");
  const [isExploding, setIsExploding] = useState(false);

  const handlesubmit = async () => {
    setLoading(true);
    const response = await axiosClient
      .post("https://url-shortener-service.p.rapidapi.com/shorten", {
        url: longLink,
      })
      .then((res) => res.data)
      .catch((err) => {
        let disc;
        if (err instanceof AxiosError) {
          disc = err.response?.data.error;
        }
        toast({
          title: "Unable to generate short link",
          status: "error",
          position: "top-right",
          isClosable: true,
          description: disc,
        });
      })
      .finally(() => setLoading(false));

    setShortLink(response["result_url"]);
  };
  const copy = async () => {
    if (!navigator.clipboard) {
      return;
    }
    navigator.clipboard.writeText(shortLink).then(
      function () {
        setIsExploding(true);
      },
      function (err) {
        console.error("Async: Could not copy text: ", err);
      }
    );
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
        {isExploding && <ConfettiExplosion />}
        <IconButton
          onClick={copy}
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
