import {
  Container,
  Flex,
  Box,
  Heading,
  Text,
  IconButton,
  Button,
  VStack,
  HStack,
  Wrap,
  WrapItem,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  Textarea,
} from "@chakra-ui/react";
import {
  MdPhone,
  MdEmail,
  MdLocationOn,
  MdFacebook,
  MdOutlineEmail,
} from "react-icons/md";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { BsGithub, BsDiscord, BsPerson } from "react-icons/bs";
import emailjs from "@emailjs/browser";

const FormContact = () => {
  const userID = process.env.REACT_APP_USER_ID;
  const templateID = process.env.REACT_APP_TEMPLATE_ID;
  const serviceID = process.env.REACT_APP_SERVICE_ID;

  const schema = yup.object().shape({
    name: yup
      .string()
      .required("Nome obrigatório")
      .min(3, "Mínimo 3 caracteres"),
    email: yup.string().required("Email obrigatório").email("Email Inválido"),
    message: yup
      .string()
      .required("Mensagem obrigatória")
      .min(10, "Escreva uma mensagem maior"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });
  const invalidName = errors.name ? true : false;
  const invalidEmail = errors.email ? true : false;
  const invalidMessage = errors.message ? true : false;

  const onSend = (data) => {
    emailjs.send(serviceID, templateID, data, userID).then(
      (response) => {
        toast.success("Mensagem enviada! 🐙");
      },
      (error) => {
        toast.error("Oops, algo deu errado. Tente novamente. 🐙");
      }
    );
  };

  return (

    <Container maxW="full" mt={0} centerContent overflow="hidden">

      <Flex>
        <Box
          bg="#3F8C85"
          color="white"
          borderRadius="lg"
          m={{ sm: 4, md: 16, lg: 10 }}
          p={{ sm: 5, md: 5, lg: 16 }}
        >
          <Box p={4}>
            <Wrap spacing={{ base: 20, sm: 3, md: 5, lg: 20 }}>
              <WrapItem>
                <Box>
                  <Heading>Contate-nos</Heading>
                  <Text mt={{ sm: 3, md: 3, lg: 5 }} color="white">
                    Preencha o formulário para entrar em contato
                  </Text>
                  <Box py={{ base: 5, sm: 5, md: 8, lg: 10 }}>
                    <VStack pl={0} spacing={3} alignItems="flex-start">
                      <Button
                        size="md"
                        variant="ghost"
                        color="#DCE2FF"
                        _hover={{ border: "2px solid #EBFDFD" }}
                        leftIcon={<MdPhone color="#EBFDFD" size="20px" />}
                      >
                        +55-988888888
                      </Button>
                      <Button
                        size="md"
                        height="48px"
                        variant="ghost"
                        color="#DCE2FF"
                        _hover={{ border: "2px solid #EBFDFD" }}
                        leftIcon={<MdEmail color="#EBFDFD" size="20px" />}
                      >
                        literatroca@gmail.com
                      </Button>
                      <Button
                        size="md"
                        pading-left="0px"
                        variant="ghost"
                        color="#DCE2FF"
                        _hover={{ border: "2px solid #EBFDFD" }}
                        leftIcon={<MdLocationOn color="#EBFDFD" size="20px" />}
                      >
                        Rio de Janeiro, Brasil
                      </Button>
                    </VStack>
                  </Box>
                  <HStack
                    mt={{ lg: 10, md: 10 }}
                    spacing={5}
                    px={5}
                    alignItems="flex-start"
                  >
                    <IconButton
                      aria-label="facebook"
                      variant="ghost"
                      size="lg"
                      isRound={true}
                      _hover={{ bg: "#EBFDFD" }}
                      icon={<MdFacebook size="28px" />}
                    />
                    <IconButton
                      aria-label="github"
                      variant="ghost"
                      size="lg"
                      isRound={true}
                      _hover={{ bg: "#EBFDFD" }}
                      icon={<BsGithub size="28px" />}
                    />
                    <IconButton
                      aria-label="discord"
                      variant="ghost"
                      size="lg"
                      isRound={true}
                      _hover={{ bg: "#EBFDFD" }}
                      icon={<BsDiscord size="28px" />}
                    />
                  </HStack>
                </Box>
              </WrapItem>
              <WrapItem>
                <Box bg="white" borderRadius="lg">
                  <Box m={8} color="#0B0E3F">
                    <VStack
                      as="form"
                      spacing={5}
                      onSubmit={handleSubmit(onSend)}
                    >
                      <FormControl id="name" isInvalid={invalidName}>
                        <FormLabel>Seu Nome</FormLabel>
                        <InputGroup borderColor="#E0E1E7">
                          <InputLeftElement
                            pointerEvents="none"
                            children={<BsPerson color="gray.800" />}
                          />
                          <Input
                            type="text"
                            size="md"
                            placeholder="Digite o seu nome"
                            {...register("name")}
                          />
                        </InputGroup>
                      </FormControl>
                      <FormControl id="email" isInvalid={invalidEmail}>
                        <FormLabel>E-Mail</FormLabel>
                        <InputGroup borderColor="#E0E1E7">
                          <InputLeftElement
                            pointerEvents="none"
                            children={<MdOutlineEmail color="gray.800" />}
                          />
                          <Input
                            type="text"
                            size="md"
                            placeholder="Digite o seu e-mail"
                            {...register("email")}
                          />
                        </InputGroup>
                      </FormControl>
                      <FormControl id="message" isInvalid={invalidMessage}>
                        <FormLabel>Mensagem</FormLabel>
                        <Textarea
                          borderColor="gray.300"
                          _hover={{
                            borderRadius: "gray.300",
                          }}
                          placeholder="Digite a sua mensagem."
                          {...register("message")}
                        />
                      </FormControl>
                      <FormControl>
                        <Button
                          bg={"#273D40"}
                          color={"white"}
                          _hover={{
                            transform: "scale(1.1)",
                            bgColor: "#1f3133",
                          }}
                          fontSize={["xs", "sm"]}
                          w={"100%"}
                          textTransform={"uppercase"}
                          boxShadow={"0px 0px 10px rgba(0, 0, 0, 0.5)"}
                          fontFamily="Inter"
                          type="submit"
                        >
                          Enviar
                        </Button>
                      </FormControl>
                    </VStack>
                  </Box>
                </Box>
              </WrapItem>
            </Wrap>
          </Box>
        </Box>
      </Flex>
    </Container>
  );
};

export default FormContact;
