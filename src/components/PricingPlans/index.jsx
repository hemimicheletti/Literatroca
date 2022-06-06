import {
  Box,
  Stack,
  HStack,
  Heading,
  Text,
  VStack,
  useColorModeValue,
  List,
  ListItem,
  ListIcon,
  Button,
} from "@chakra-ui/react";
import { FaCheckCircle } from "react-icons/fa";
import { useHistory } from "react-router-dom";

const PriceWrapper = ({ children }) => {
  return (
    <Box
      mb={4}
      shadow="base"
      borderWidth="1px"
      alignSelf={{ base: "center", lg: "flex-start" }}
      borderColor={useColorModeValue("gray.200", "gray.500")}
      borderRadius={"xl"}
      minW={"300px"}
    >
      {children}
    </Box>
  );
};

const PrincingPlans = () => {
  const history = useHistory();
  const handleClick = () => {
    history.push("/register");
  };
  return (
    <Box py={2} id={1} px={4} fontFamily={"Nunito"}> 
      <VStack spacing={2} textAlign="center">
        <Heading as="h1" fontSize="4xl" fontFamily={"Nunito"}>
          Escolha o plano que melhor se encaixa às suas necessidades.
        </Heading>
        <Text fontSize="lg" color={"gray.500"} fontFamily={"Nunito"}>
          Assine qualquer um dos planos e ganhe um livro. Cancele a qualquer
          momento.
        </Text>
      </VStack>
      <Stack
        direction={{ base: "column", lg: "row" }}
        textAlign="center"
        justify="center"
        spacing={{ base: 4, lg: 10 }}
        py={10}
      >
        <PriceWrapper>
          <Box py={4} px={12} borderTopRadius={"xl"} bg={"white"}>
            <Text fontWeight="500" fontSize="2xl">
              Jack Sparrow
            </Text>
            <HStack justifyContent="center">
              <Text fontSize="3xl" fontWeight="600">
                R$
              </Text>
              <Text fontSize="5xl" fontWeight="900">
                29
              </Text>
              <Text fontSize="3xl" color="gray.500">
                /mês
              </Text>
            </HStack>
          </Box>
          <VStack
            bg={useColorModeValue("white")}
            py={4}
            borderBottomRadius={"xl"}
          >
            <List spacing={3} textAlign="start" px={12}>
              <ListItem>
                <ListIcon as={FaCheckCircle} color="green.500" />
                Envie 1 livro por mês
              </ListItem>
              <ListItem>
                <ListIcon as={FaCheckCircle} color="green.500" />
                Receba 1 livro
              </ListItem>
              <ListItem>
                <ListIcon as={FaCheckCircle} color="green.500" />
                Frete grátis
              </ListItem>
            </List>
            <Box w="80%" pt={7}>
              <Button
                w="full"
                bg={"#273D40"}
                color={"white"}
                fontFamily={"Inter"}
                _hover={{
                  transform: "scale(1.1)",
                  bgColor: "#1f3133",
                }}
                fontSize={["xs", "sm"]}
                textTransform={"uppercase"}
                boxShadow={"0px 0px 10px rgba(0, 0, 0, 0.5)"}
                onClick={handleClick}
              >
                Assine agora
              </Button>
            </Box>
          </VStack>
        </PriceWrapper>

        <PriceWrapper>
          <Box position="relative" borderRadius={"xl"} bg={"white"}>
            <Box
              position="absolute"
              top="-16px"
              left="50%"
              style={{ transform: "translate(-50%)" }}
            >
              <Text
                textTransform="uppercase"
                bg="#273D40"
                color={"white"}
                px={3}
                py={1}
                fontSize="sm"
                fontWeight="600"
                rounded="xl"
              >
                Mais Popular
              </Text>
            </Box>
            <Box py={4} px={12}>
              <Text fontWeight="500" fontSize="2xl">
                Barba Negra
              </Text>
              <HStack justifyContent="center">
                <Text fontSize="3xl" fontWeight="600">
                  R$
                </Text>
                <Text fontSize="5xl" fontWeight="900">
                  129
                </Text>
                <Text fontSize="3xl" color="gray.500">
                  /mês
                </Text>
              </HStack>
            </Box>
            <VStack
              bg={useColorModeValue("white")}
              py={4}
              borderBottomRadius={"xl"}
            >
              <List spacing={3} textAlign="start" px={12}>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="green.500" />
                  Envie até 5 livros por mês
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="green.500" />
                  Receba até 5 livros
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="green.500" />
                  Caixa personalizada
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="green.500" />
                  Brinde mensal
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="green.500" />
                  Frete grátis.
                </ListItem>
              </List>
              <Box w="80%" pt={7}>
                <Button
                  w="full"
                  bg={"#273D40"}
                  color={"white"}
                  _hover={{
                    transform: "scale(1.1)",
                    bgColor: "#1f3133",
                  }}
                  fontSize={["xs", "sm"]}
                  textTransform={"uppercase"}
                  fontFamily={"Inter"}
                  boxShadow={"0px 0px 10px rgba(0, 0, 0, 0.5)"}
                  onClick={handleClick}
                >
                  Assine agora
                </Button>
              </Box>
            </VStack>
          </Box>
        </PriceWrapper>
        <PriceWrapper>
          <Box py={4} px={12} borderTopRadius={"xl"} bg={"white"}>
            <Text fontWeight="500" fontSize="2xl">
              Capitão Gancho
            </Text>
            <HStack justifyContent="center">
              <Text fontSize="3xl" fontWeight="600">
                R$
              </Text>
              <Text fontSize="5xl" fontWeight="900">
                79
              </Text>
              <Text fontSize="3xl" color="gray.500">
                /mês
              </Text>
            </HStack>
          </Box>
          <VStack
            bg={useColorModeValue("white")}
            py={4}
            borderBottomRadius={"xl"}
          >
            <List spacing={3} textAlign="start" px={12}>
              <ListItem>
                <ListIcon as={FaCheckCircle} color="green.500" />
                Envie 3 livros por mês.
              </ListItem>
              <ListItem>
                <ListIcon as={FaCheckCircle} color="green.500" />
                Receba 3 livros por mês
              </ListItem>
              <ListItem>
                <ListIcon as={FaCheckCircle} color="green.500" />
                Frete grátis.
              </ListItem>
            </List>
            <Box w="80%" pt={7}>
              <Button
                w="full"
                bg={"#273D40"}
                color={"white"}
                _hover={{
                  transform: "scale(1.1)",
                  bgColor: "#1f3133",
                }}
                fontSize={["xs", "sm"]}
                textTransform={"uppercase"}
                fontFamily={"Inter"}
                boxShadow={"0px 0px 10px rgba(0, 0, 0, 0.5)"}
                onClick={handleClick}
              >
                Assine agora
              </Button>
            </Box>
          </VStack>
        </PriceWrapper>
      </Stack>
    </Box>
  );
};
export default PrincingPlans;
