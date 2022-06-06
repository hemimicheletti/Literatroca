import {
  Flex,
  Container,
  Heading,
  Stack,
  Text,
  Button,
  Image,
  useBreakpointValue,
} from "@chakra-ui/react";
import { useHistory } from "react-router-dom";

import imgesq from "../../assets/images/imgesq.png";
import imgdir from "../../assets/images/imgdir.png";
import boys from "../../assets/images/boys.png";

const RegisterLandingPg = () => {
  const history = useHistory();
  const handleClick = () => {
    history.push("/register");
  };

  const isDesktop = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <>
      {isDesktop ? (
        <Flex
          p={2}
          flexDirection={["column", "row"]}
          maxW={"80%"}
          alignItems={"center"}
          m={"0 auto"}
        >
          <Stack py={5} w={"55%"}>
            <Image src={imgesq} alt="livros" />
          </Stack>

          <Container display={"flex"}>
            <Stack textAlign={"center"} align={"center"} py={5}>
              <Heading
                fontWeight={600}
                fontSize={["2xl", "3xl", "5xl"]}
                lineHeight={"110%"}
              >
                Trocar livros{" "}
                <Text as={"span"} color={"orange.400"}>
                  nunca foi tão fácil
                </Text>
              </Heading>
              <Text color={"gray.500"} maxW={"3xl"} fontSize={"2xl"}>
                Comece agora mesmo. Aqui você encontra a melhor tecnologia em
                curadoria de livros para proporcionar a melhor experiência para
                nossos clientes de forma rápida e segura. Entre nessa onda de
                incentivo a leitura.
              </Text>
              <Stack spacing={6} direction={"row"}>
                <Button
                  rounded={"full"}
                  px={6}
                  color={"white"}
                  onClick={handleClick}
                  bg={"orange.400"}
                  _hover={{ bg: "orange.500", transform: "scale(1.1)" }}
                  fontSize={["xs", "sm"]}
                  textTransform={"uppercase"}
                  fontFamily={"Inter"}
                  textShadow={"0px 0px 2px black"}
                  boxShadow={"0px 0px 10px rgba(0, 0, 0, 0.5)"}
                  mt={5}
                >
                  Cadastre-se
                </Button>
              </Stack>
            </Stack>
          </Container>
          <Stack
            alignItems={"center"}
            justifyContent={"center"}
            w={"55%"}
            py={28}
          >
            <Image src={imgdir} alt="livros" />
          </Stack>
        </Flex>
      ) : (
        <Flex
          p={2}
          flexDirection={["column", "row"]}
          maxW={"90%"}
          alignItems={"center"}
          m={"0 auto"}
        >
          <Stack py={5}>
            <Image src={boys} alt="livros" w="200px" />
          </Stack>

          <Container display={"flex"}>
            <Stack textAlign={"center"} align={"center"} py={5}>
              <Heading
                fontWeight={600}
                fontSize={{ base: "3xl", sm: "4xl", md: "5xl" }}
                lineHeight={"110%"}
              >
                Trocar livros
                <Text as={"span"} color={"orange.400"}>
                  nunca foi tão fácil
                </Text>
              </Heading>
              <Stack spacing={6} direction={"row"}>
                <Button
                  rounded={"full"}
                  px={6}
                  onClick={handleClick}
                  colorScheme={"orange"}
                  bg={"orange.400"}
                  _hover={{ bg: "orange.500", transform: "scale(1.1)" }}
                  fontSize={["xs", "sm"]}
                  textTransform={"uppercase"}
                  fontFamily={"Inter"}
                  boxShadow={"0px 0px 10px rgba(0, 0, 0, 0.5)"}
                >
                  Cadastre-se
                </Button>
              </Stack>
            </Stack>
          </Container>
        </Flex>
      )}
    </>
  );
};
export default RegisterLandingPg;
