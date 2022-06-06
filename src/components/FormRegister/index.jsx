import {
  FormControl,
  Input,
  Link,
  Button,
  Heading,
  Select,
  VStack,
  FormErrorMessage,
} from "@chakra-ui/react";
import { Link as ReactRouterLink } from "react-router-dom";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useRegister } from "../../providers/register";

const FormRegister = () => {
  const schema = yup.object().shape({
    name: yup
      .string()
      .required("Nome obrigatório")
      .min(3, "Mínimo 3 caracteres"),
    email: yup.string().required("Email obrigatório").email("Email Inválido"),
    password: yup
      .string()
      .required("Senha obrigatória")
      .min(8, "Minimo 8 caracteres"),
    passwordConfirm: yup
      .string()
      .oneOf([yup.ref("password")], "Senhas não conferem"),
    plan: yup.string().required("Plano obrigatório").min(2, "Escolha um plano"),
    payment: yup
      .string()
      .required("Escolha uma forma de pagamento")
      .min(2, "Escolha uma forma de pagamento"),
  });

  const { userRegister } = useRegister();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  return (
    <VStack
      fontFamily={"Inter"}
      align={"center"}
      maxW={"90%"}
      w={"500px"}
      bg={"#3F8C85"}
      spacing={6}
      rounded={"lg"}
      p={4}
      boxShadow={"0px 0px 10px rgba(0, 0, 0, 0.5)"}
      as="form"
      onSubmit={handleSubmit(userRegister)}
    >
      <Heading color={"#FFFFFF"} fontFamily="Inter">
        Cadastre-se
      </Heading>

      <FormControl
        isInvalid={errors.name}
        display={"flex"}
        flexDirection={"column"}
        alignItems={"center"}
      >
        <Input
          backgroundColor={"#FFFFFF"}
          color={"#A39E9E"}
          type="text"
          {...register("name")}
          placeholder="Nome Completo"
          w={"90%"}
          outline={errors.name ? "1.5px solid yellow" : "none"}
          border={"none"}
        />
        <FormErrorMessage color={"yellow.300"} textShadow={"0px 0px 2px black"}>
          {errors.name?.message}
        </FormErrorMessage>
      </FormControl>

      <FormControl
        isInvalid={errors.email}
        display={"flex"}
        flexDirection={"column"}
        alignItems={"center"}
      >
        <Input
          backgroundColor={"#FFFFFF"}
          color={"#A39E9E"}
          type="email"
          {...register("email")}
          placeholder="Email"
          w={"90%"}
          outline={errors.email ? "1.5px solid yellow" : "none"}
          border={"none"}
        />
        <FormErrorMessage color={"yellow.300"} textShadow={"0px 0px 2px black"}>
          {errors.email?.message}
        </FormErrorMessage>
      </FormControl>

      <FormControl
        isInvalid={errors.password}
        display={"flex"}
        flexDirection={"column"}
        alignItems={"center"}
      >
        <Input
          backgroundColor={"#FFFFFF"}
          color={"#A39E9E"}
          type="password"
          {...register("password")}
          placeholder="Senha"
          w={"90%"}
          outline={errors.password ? "1.5px solid yellow" : "none"}
          border={"none"}
        />
        <FormErrorMessage color={"yellow.300"} textShadow={"0px 0px 2px black"}>
          {errors.password?.message}
        </FormErrorMessage>
      </FormControl>

      <FormControl
        isInvalid={errors.passwordConfirm}
        display={"flex"}
        flexDirection={"column"}
        alignItems={"center"}
      >
        <Input
          backgroundColor={"#FFFFFF"}
          color={"#A39E9E"}
          type="password"
          {...register("passwordConfirm")}
          placeholder="Confirme sua senha"
          w={"90%"}
          outline={errors.passwordConfirm ? "1.5px solid yellow" : "none"}
          border={"none"}
        />
        <FormErrorMessage color={"yellow.300"} textShadow={"0px 0px 2px black"}>
          {errors.passwordConfirm?.message}
        </FormErrorMessage>
      </FormControl>
      <FormControl
        isInvalid={errors.plan}
        display={"flex"}
        flexDirection={"column"}
        alignItems={"center"}
      >
        <Select
          backgroundColor={"#FFFFFF"}
          color={"#A39E9E"}
          w={"90%"}
          {...register("plan")}
          outline={errors.plan ? "1.5px solid yellow" : "none"}
          border={"none"}
        >
          <option value="">Plano</option>
          <option value="jacksparrow">Jack Sparrow</option>
          <option value="barbanegra">Barba Negra</option>
          <option value="capitaogancho">Capitão Gancho</option>
        </Select>
        <FormErrorMessage color={"yellow.300"} textShadow={"0px 0px 2px black"}>
          {errors.plan?.message}
        </FormErrorMessage>
      </FormControl>

      <FormControl
        isInvalid={errors.payment}
        display={"flex"}
        flexDirection={"column"}
        alignItems={"center"}
      >
        <Select
          backgroundColor={"#FFFFFF"}
          fontFamily={"Inter"}
          color={"#A39E9E"}
          w={"90%"}
          {...register("payment")}
          outline={errors.payment ? "1.5px solid yellow" : "none"}
          border={"none"}
        >
          <option value="">Forma de pagamento</option>
          <option value="credito">Crédito</option>
          <option value="debito">Débito</option>
          <option value="pix">Pix</option>
        </Select>
        <FormErrorMessage color={"yellow.300"} textShadow={"0px 0px 2px black"}>
          {errors.payment?.message}
        </FormErrorMessage>
      </FormControl>
      <Link color={"white"} as={ReactRouterLink} to="/login">
        Já tem cadastro? Faça Login
      </Link>
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
        Cadastrar
      </Button>
    </VStack>
  );
};

export default FormRegister;
