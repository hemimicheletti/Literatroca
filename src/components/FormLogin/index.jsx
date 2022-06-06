import {
  FormControl,
  Heading,
  FormErrorMessage,
  VStack,
  Input,
  Button,
  Link,
} from "@chakra-ui/react";
import { useAuth } from "../../providers/auth";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link as ReactRouterLink } from "react-router-dom";

const FormLogin = () => {
  const schema = yup.object().shape({
    email: yup.string().required("Email obrigatório").email("Email Inválido"),
    password: yup
      .string()
      .required("Senha obrigatória")
      .min(8, "Mínimo de 8 caracteres"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const { login } = useAuth();

  return (
    <VStack
      display={"flex"}
      direction={"column"}
      rounded={"lg"}
      bg={"#3F8C85"}
      maxW={"90%"}
      w={"500px"}
      h={"500px"}
      justify={"space-evenly"}
      align={"center"}
      p={4}
      boxShadow={"0px 0px 10px rgba(0, 0, 0, 0.5)"}
      as="form"
      onSubmit={handleSubmit(login)}
      spacing={6}
    >
      <Heading
        fontSize={"4xl"}
        fontFamily={"Inter, sans-serif"}
        color={"#FFFFFF"}
      >
        Login
      </Heading>

      <FormControl
        id="email"
        isInvalid={errors.email}
        display={"flex"}
        flexDirection={"column"}
        alignItems={"center"}
      >
        <Input
          type="email"
          {...register("email")}
          placeholder="Digite seu e-mail"
          w={"90%"}
          bgColor={"white"}
          outline={errors.email ? "1.5px solid yellow" : "none"}
          border={"none"}
        />
        <FormErrorMessage color={"yellow.300"} textShadow={"0px 0px 2px black"}>
          {errors.email?.message}
        </FormErrorMessage>
      </FormControl>

      <FormControl
        id="password"
        isInvalid={errors.password}
        display={"flex"}
        flexDirection={"column"}
        alignItems={"center"}
      >
        <Input
          type="password"
          {...register("password")}
          placeholder="Digite sua senha"
          w={"90%"}
          bgColor={"white"}
          outline={errors.password ? "1.5px solid yellow" : "none"}
          border={"none"}
        />
        <FormErrorMessage color={"yellow.300"} textShadow={"0px 0px 2px black"}>
          {errors.password?.message}
        </FormErrorMessage>
      </FormControl>

      <Button
        bg={"#273D40"}
        color={"white"}
        _hover={{
          transform: "scale(1.1)",
          bgColor: "#1f3133",
        }}
        fontSize={["xs", "sm"]}
        w={"50%"}
        textTransform={"uppercase"}
        boxShadow={"0px 0px 10px rgba(0, 0, 0, 0.5)"}
        type="submit"
      >
        Entrar
      </Button>

      <Link
        color={"#FFFFFF"}
        as={ReactRouterLink}
        to={"/register"}
        fontFamily={"Inter"}
      >
        Ainda não é cadastrado?
      </Link>
    </VStack>
  );
};

export default FormLogin;
