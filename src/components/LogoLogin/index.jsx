import { Img, VStack, Text, Heading, Box } from "@chakra-ui/react";
import logo from "../../assets/images/logo.polvo.png";
const LogoLogin = ({ type }) => {
  return (
    <VStack
      maxW={"90%"}
      textAlign={"center"}
      bgColor={"honeydew"}
      w={"500px"}
      p={4}
      boxShadow={" 2px 2px 5px rgba(0, 0, 0, 0.5)"}
      rounded={"lg"}
    >
      <Img
        src={logo}
        w={"200px"}
        _hover={{ cursor: "pointer", transform: "scale(1.1)" }}
      />

      <Heading fontFamily={"Nunito"}>
        {type === "register"
          ? "Não ter esqueleto tem algumas vantagens"
          : "É observando que se aprende"}
      </Heading>
      <Box>
        <Text fontFamily={"Nunito"} fontSize={["md", "xl"]}>
          {type === "register"
            ? "Polvos são capazes de atravessar buracos do tamanho dos olhos deles e podem dar praticamente qualquer forma aos seus corpos."
            : "Os polvos tratam-se de animais muito inteligentes, capazes de resolver problemas complexos, discriminar através de condicionamento clássico e aprender utilizando a observação."}
        </Text>
      </Box>
    </VStack>
  );
};

export default LogoLogin;
