import { ArrowForwardIcon, CopyIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Card,
  Flex,
  IconButton,
  Input,
  useToast,
} from "@chakra-ui/react";
import { AxiosError } from "axios";
import { useState } from "react";
import { axiosClient } from "./config";
import ConfettiExplosion from "react-confetti-explosion";
import { QRCodeSVG } from "qrcode.react";

function LinkForm() {
  const toast = useToast();
  const [isLoading, setLoading] = useState(false);
  const [longLink, setLongLink] = useState("");
  const [shortLink, setShortLink] = useState("");
  const [isExploding, setIsExploding] = useState(false);
  const [showQRCode, setShowQRCode] = useState(false);

  const handleButtonClick = () => {
    if (shortLink.trim() !== "") {
      setShowQRCode(true);
    } else {
      toast({
        title: "No short link available",
        status: "warning",
        position: "top-right",
        isClosable: true,
        description: "Please generate a short link first.",
      });
    }
  };

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
        setTimeout(() => {
          setIsExploding(false);
        }, 2000);
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
        <Box pos={"relative"}>
          <IconButton
            onClick={copy}
            icon={<CopyIcon />}
            aria-label="copy"
            colorScheme="white"
            variant="outline"
            margin={"auto"}
          ></IconButton>
          <Box position={"absolute"}>
            {isExploding && (
              <ConfettiExplosion particleCount={250} force={0.8} width={1000} />
            )}
          </Box>
        </Box>
      </Flex>
      <Flex
        direction={"column"}
        gap={"10"}
        justifySelf={"center"}
        align={"center"}
      >
        <Button
          variant="outline"
          colorScheme="white"
          onClick={handleButtonClick}
          disabled={!shortLink}
        >
          Generat QRCode
        </Button>
        {showQRCode && <QRCodeSVG value={shortLink} />}
      </Flex>
    </Card>
  );
}

export default LinkForm;
