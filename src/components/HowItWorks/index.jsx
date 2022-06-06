import {
  Box,
  Heading,
  Text,
  Image,
  Stack,
  VStack,
  SimpleGrid,
} from "@chakra-ui/react";
import passo1 from "../../assets/images/passo1.svg";
import passo2 from "../../assets/images/passo2.svg";
import passo3 from "../../assets/images/passo3.svg";
import passo4 from "../../assets/images/passo4.svg";

const HowItWorks = () => {
  const steps = [
    {
      image: passo1,
      step: "Passo 1",
      text: "Escolha um livro para desapegar.",
    },
    {
      image: passo2,
      step: "Passo 2",
      text: "Escolha um gênero que deseja receber.",
    },
    { image: passo3, step: "Passo 3", text: "Preencha seu endereço." },
    {
      image: passo4,
      step: "Passo 4",
      text: "Agora é só esperar chegar para começar sua nova história.",
    },
  ];
  return (
    <VStack mb={5} >
      <Heading as="h1" fontSize="4xl" fontFamily={"Nunito"}>
        Como funciona?
      </Heading>
      <SimpleGrid columns={{ base: 1, md: 2, xl: 4 }} spacing={{ base: 5, lg: 8 }}>
        {steps.map((item, index) => (
          <Box
            maxW={"245px"}
            minH={"280px"}
            w={"full"}
            bg={"white"}
            boxShadow={"2xl"}
            rounded={"md"}
            p={6}
            m={4}
            overflow={"hidden"}
            fontFamily={"Nunito"}
            key={index}
          >
            <Image src={item.image} margin={"0 auto"} w={105} h={110} />
            <Stack>
              <Text
                color={"green.500"}
                textTransform={"uppercase"}
                fontWeight={800}
                fontSize={"sm"}
                letterSpacing={1.1}
                mt={4}
                fontFamily={"Nunito"}
              >
                {item.step}
              </Text>
              <Heading
                color={"gray.700"}
                fontSize={"1xl"}
                fontFamily={"Nunito"}
              >
                {item.text}
              </Heading>
            </Stack>
          </Box>
        ))}
      </SimpleGrid>
    </VStack>
  );
};
export default HowItWorks;
