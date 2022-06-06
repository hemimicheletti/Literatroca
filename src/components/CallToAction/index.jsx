import {
  Box,
  Button,
  HStack,
  Heading,
  Stack,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import * as React from "react";
import { useHistory } from "react-router-dom";

const CallToAction = () => {
  const history = useHistory();

  return (

    <HStack as="section" justify="center">

      <Box
        py={{
          base: "16",
          md: "24",
        }}
        maxWidth="80vw"
      >
        <Stack
          spacing={{
            base: "8",
            md: "10",
          }}
        >
          <Stack
            spacing={{
              base: "4",
              md: "5",
            }}
            align="center"
          >
            <Heading
              fontFamily="Nunito"
              size={useBreakpointValue({
                base: "lg",
                md: "md",
              })}
            >
              Quem Somos Nós?
            </Heading>
            <Text
              color="muted"
              maxW="2xl"
              textAlign="center"
              fontSize="xl"
              fontFamily="Nunito"
            >
              Talvez possamos responder isso com outra pergunta: quem são vocês?
              Assim como vocês, somos leitores famintos por novas histórias e
              experiências literárias, porém em busca de formas diferentes e
              interessantes de adquirir novos livros. Baseando-se em projetos
              antigos onde pessoas faziam trocas deixando livros em locais
              públicos, decidimos criar um site que permite essa troca entre
              usuários e que faz o trabalho de mediar essa troca, oferecendo uma
              experiência ao leitor. A ideia é promover leitura tão pouco
              explorada nessa nova geração, enquanto damos novas perspectivas a
              você leitor, que pode receber em casa livros que nunca acharia em
              prateleiras comuns, dando a oportunidade de conhecer novos autores
              e histórias diferentes. Também buscamos promover a
              sustentabilidade e o consumo consciente, às vezes você é um leitor
              que está com pouco espaço na estante ou apenas um leitor que não
              tem uma condição de comprar livros novos, por isso estamos aqui
              pra te oferecer nossos serviços. Quer se juntar ao nosso time?
              Cadastre-se hoje mesmo e envie seu livro.
            </Text>
            <Text
              as="cite"
              color="muted"
              maxW="2xl"
              textAlign="center"
              fontSize="xl"
              fontFamily="Nunito"
            >
              "Como eu desejo fugir dos dias normais! Eu quero correr solta com
              minha imaginação" Alice no País das Maravilhas - Lewis Carrol
            </Text>
          </Stack>
          <Stack
            spacing="3"
            direction={{
              base: "column",
              sm: "row",
            }}
            justify="center"
          >
            <Button
              bg={"#273D40"}
              color={"white"}
              _hover={{
                transform: "scale(1.1)",
                bgColor: "#1F3133",
              }}
              fontSize={["xs", "sm"]}
              w={"170px"}
              textTransform={"uppercase"}
              boxShadow={"0px 0px 10px rgba(0, 0, 0, 0.5)"}
              size="lg"
              fontFamily="Inter"
              onClick={() => history.push("/register")}
            >
              Cadastre-se
            </Button>
          </Stack>
        </Stack>
      </Box>
    </HStack>
  );
};

export default CallToAction;
