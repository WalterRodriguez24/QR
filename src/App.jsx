import { Center, Flex, Image, Text, Button, Box } from "@chakra-ui/react";
import qr from "./img/QR.png";
import { FaCopy } from "react-icons/fa";

function App() {
  const copyText = () => {
    const textToCopy = "Oxec7842178520bb71f30523bcce4c10adc7e1cec4";

    const textArea = document.createElement("textarea");
    textArea.value = textToCopy;

    document.body.appendChild(textArea);

    textArea.select();
    document.execCommand("copy");

    document.body.removeChild(textArea);
  };

  return (
    <Center h="100vh">
      <Box
        p="35"
        maxWidth="450"
        borderWidth="1px"
        borderColor="white"
        borderStyle="solid"
        borderRadius="38px"
        backgroundColor="white"
      >
        <Flex direction="column" align="center">
          <Flex p="5" maxW="500px" gap="1rem" borderWidth="1px" align="center">
            <Image borderRadius="md" src={qr} w="200px" h="200px" />

            <Box ml={4}>
              <Text fontSize="xl" fontWeight="semibold" lineHeight="short">
                Send only USDT to this address.
                <br />
                Ensure the network is{" "}
                <Text as="span" fontSize="xl" fontWeight="bold" color="orange">
                  Binance
                  <br />
                  Smart Chain (BEP20)
                </Text>
                .
              </Text>
              <Text fontSize="lg" color="gray.600">
                Minimum Deposit <br />
                <Text as="span" fontSize="xl" fontWeight="bold" color="black">
                  0.00000001 USDT
                </Text>
              </Text>
              <Text fontSize="sm" color="gray.500">
                Expected arrival & unlock <br />
                <Text as="span" fontSize="xl" fontWeight="bold" color="black">
                  15 Network Confirmations
                </Text>
              </Text>
            </Box>
          </Flex>
          <Flex
            alignItems="center"
            mt={3}
            bg="blue.100"
            borderRadius="1rem"
            p="2"
            backgroundColor="#e6ecee"
          >
            <Text
              fontSize="sm"
              marginX="auto"
              marginRight="0.5rem"
              marginLeft="1rem"
            >
              Oxec7842178520bb71f30523bcce4c10adc7e1cec4
            </Text>

            <Button
              rightIcon={<FaCopy />}
              colorScheme="blue"
              onClick={copyText}
              variant="ghost"
              border="none"
              backgroundColor="#e6ecee"
              textAlign="center"
              cursor="pointer"
              color="blue"
            >
              Copy
            </Button>
          </Flex>
        </Flex>
      </Box>
    </Center>
  );
}

export default App;
