import bookCover from "../../assets/images/livro.jpg";
import { GiWhiteBook } from "react-icons/gi";
import {
  HStack,
  VStack,
  Heading,
  Icon,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  FormErrorMessage,
  Button,
  FormControl,
  FormLabel,
  Select,
  Img,
  Input,
} from "@chakra-ui/react";

import { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useBooks } from "../../providers/books";
import { useAuth } from "../../providers/auth";

const UserAction = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const [cover, setCover] = useState("");
  const { books, addBooksApi } = useBooks();
  const { updateUser } = useAuth();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const allGenres = [
    ...new Set(
      books
        .filter((book) => book.status === "aprovado")
        .reduce((acc, curr) => {
          curr.genre.forEach((gen) => {
            acc.push(gen);
          });
          return acc;
        }, [])
    ),
  ].sort();

  const schema = yup.object().shape({
    title: yup.string().required("Título obrigatório"),
    author: yup.string().required("Autor obrigatório"),
    genre: yup.string().required("Digite pelo menos um gênero"),
    cep: yup
      .string()
      .matches(/^[0-9]+$/, "Apenas números")
      .min(8, "Digite os oito números do CEP")
      .max(8, "Digite os oito números do CEP")
      .required(),
    number: yup.string().required("Digite o número"),
    cover: yup.string(),
  });

  const {
    register,
    handleSubmit,
    setValue,
    setFocus,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onRegister = (data) => {
    let {
      title,
      author,
      genre,
      cep,
      number,
      cover,
      city,
      neighbourhood,
      selectedGenre,
      state,
      street,
    } = data;
    selectedGenre.split(",");

    const correctBook = books
      .filter((book) => book.status === "aprovado")
      .find((book) => book.genre.includes(selectedGenre));
    const newBook = {
      title: title,
      author: author,
      genre: [genre],
      cover: cover,
      status: "pendente",
    };
    const userInfo = {
      address: {
        cep: cep,
        number: number,
        city: city,
        neighbourhood: neighbourhood,
        state: state,
        street: street,
      },
      selectedGenre: selectedGenre,
      toReceive: correctBook,
    };
    addBooksApi(newBook);
    updateUser(user.id, userInfo);
    onClose();
  };

  const checkCEP = (e) => {
    const cep = e.target.value;

    fetch(`https://viacep.com.br/ws/${cep}/json`)
      .then((res) => res.json())
      .then((data) => {
        setValue("street", data.logradouro);
        setValue("neighbourhood", data.bairro);
        setValue("city", data.localidade);
        setValue("state", data.uf);
        setFocus("number");
      });
  };

  return (
    <>
      <HStack
        display="flex"
        flexDirection="column"
        justify="space-around"
        align="center"
        rounded="10px"
        marginTop={["40px", "40px", "0px", "0px"]}
      >
        <Icon
          as={GiWhiteBook}
          w={20}
          h={20}
          onClick={onOpen}
          color="#273D40"
          filter="drop-shadow(#273D40 1px 1px 2px)"
          transition="2s"
          _hover={{
            cursor: "pointer",
            transition: "2s",
            transform: "scale(1.5)",
          }}
        />
        <Heading
          as="h2"
          fontSize={["xl", "3xl", "5xl"]}
          fontFamily="'Cabin Sketch', cursive"
          fontWeight="bold"
          textAlign="center"
          textTransform="uppercase"
          textShadow="#273D40 1px 1px 2px"
          color="#fff"
          width="100%"
          paddingTop={6}
        >
          troque seu livro
        </Heading>
      </HStack>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent bgColor="white" color="black">
          <ModalCloseButton />
          <ModalBody>
            <VStack as="form" onSubmit={handleSubmit(onRegister)} py={6}>
              <HStack h="100%" alignItems="flex-start">
                <VStack h="100%">
                  <Heading
                    as="h6"
                    fontSize="xl"
                    color="black"
                    fontWeight={"bold"}
                  >
                    Cadastre seu livro
                  </Heading>
                  <FormControl isInvalid={errors.title}>
                    <FormLabel>Título</FormLabel>
                    <Input
                      {...register("title")}
                      color="#273D40"
                      placeholder="Digite o título"
                      outline={errors.title ? "1.5px solid red" : "none"}
                      border={"none"}
                      variant={"filled"}
                    />
                    <FormErrorMessage color={"red"}>
                      {errors.title?.message}
                    </FormErrorMessage>
                  </FormControl>
                  <FormControl isInvalid={errors.author}>
                    <FormLabel>Autor</FormLabel>
                    <Input
                      {...register("author")}
                      color="#273D40"
                      placeholder="Digite o autor"
                      outline={errors.author ? "1.5px solid red" : "none"}
                      border={"none"}
                      variant={"filled"}
                    />
                    <FormErrorMessage color={"red"}>
                      {errors.author?.message}
                    </FormErrorMessage>
                  </FormControl>
                  <FormControl isInvalid={errors.genre}>
                    <FormLabel>Gênero</FormLabel>
                    <Input
                      {...register("genre")}
                      color="#273D40"
                      placeholder="Digite o gênero"
                      outline={errors.genre ? "1.5px solid red" : "none"}
                      border={"none"}
                      variant={"filled"}
                    />
                    <FormErrorMessage color={"red"}>
                      {errors.genre?.message}
                    </FormErrorMessage>
                  </FormControl>
                  <FormControl>
                    <FormLabel>Capa</FormLabel>
                    <Input
                      {...register("cover")}
                      color="#273D40"
                      placeholder="Escolha uma imagem"
                      onChange={(e) => setCover(e.target.value)}
                      variant={"filled"}
                    />
                  </FormControl>
                  <Img src={cover ? cover : bookCover} w="70%" py={2} />
                </VStack>
                <VStack h="100%" w="50%">
                  <Heading
                    as="h6"
                    fontSize="xl"
                    color="black"
                    fontWeight={"bold"}
                  >
                    Peça seu livro
                  </Heading>
                  <FormControl>
                    <FormLabel>Escolha um gênero</FormLabel>
                    <Select
                      {...register("selectedGenre")}
                      color="#273D40"
                      variant={"filled"}
                    >
                      {allGenres.map((genre, index) => (
                        <option value={genre} key={index}>
                          {genre}
                        </option>
                      ))}
                    </Select>
                  </FormControl>
                  <FormControl isInvalid={errors.cep}>
                    <FormLabel>CEP</FormLabel>
                    <Input
                      {...register("cep")}
                      onBlur={checkCEP}
                      color="#273D40"
                      placeholder="70000000"
                      outline={errors.cep ? "1.5px solid red" : "none"}
                      border={"none"}
                      variant={"filled"}
                    />
                    <FormErrorMessage color={"red"}>
                      {errors.cep?.message}
                    </FormErrorMessage>
                  </FormControl>
                  <FormControl isReadOnly>
                    <FormLabel>Rua</FormLabel>
                    <Input
                      {...register("street")}
                      color="#273D40"
                      variant={"filled"}
                    />
                  </FormControl>
                  <FormControl isInvalid={errors.number}>
                    <FormLabel>Número</FormLabel>
                    <Input
                      {...register("number")}
                      color="#273D40"
                      type="number"
                      outline={errors.number ? "1.5px solid red" : "none"}
                      border={"none"}
                      variant={"filled"}
                    />
                    <FormErrorMessage color={"red"}>
                      {errors.number?.message}
                    </FormErrorMessage>
                  </FormControl>
                  <FormControl isReadOnly>
                    <FormLabel>Bairro</FormLabel>
                    <Input
                      {...register("neighbourhood")}
                      color="#273D40"
                      variant={"filled"}
                    />
                  </FormControl>
                  <FormControl isReadOnly>
                    <FormLabel>Cidade</FormLabel>
                    <Input
                      {...register("city")}
                      color="#273D40"
                      variant={"filled"}
                    />
                  </FormControl>
                  <FormControl isReadOnly>
                    <FormLabel>Estado</FormLabel>
                    <Input
                      {...register("state")}
                      color="#273D40"
                      variant={"filled"}
                    />
                  </FormControl>
                </VStack>
              </HStack>
              <Button
                color={"white"}
                w={"100%"}
                bgColor="#273D40"
                _hover={{ bgColor: "#2F4F53" }}
                _active={{ bgColor: "#2F4F53" }}
                type="submit"
              >
                Enviar
              </Button>
            </VStack>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default UserAction;
