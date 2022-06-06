import {
  Popover,
  PopoverTrigger,
  IconButton,
  useDisclosure,
  PopoverContent,
  PopoverArrow,
  PopoverCloseButton,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  Text,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Button,
  VStack,
  FormControl,
  Input,
  FormErrorMessage,
  FormLabel,
} from "@chakra-ui/react";
import {
  AiFillMinusCircle,
  AiFillCheckCircle,
  AiFillEdit,
} from "react-icons/ai";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useBooks } from "../../providers/books";
const PendingBookFunction = ({ type, book }) => {
  const { deleteBooksApi, patchBooksApi } = useBooks();
  const { onOpen, onClose, isOpen } = useDisclosure();
  const schema = yup.object().shape({
    title: yup.string().min("3", "Mínimo 3 caracteres"),
    author: yup.string().min("3", "Mínimo 3 caracteres"),
    genre: yup.string().min("3", "Mínimo 3 caracteres"),

    cover: yup.string().min("3", "Mínimo 3 caracteres"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = (data) => {
    data.genre = data.genre.split(",");
    patchBooksApi(book.id, data);
    onClose();
  };

  return (
    <>
      {type !== "edit" && (
        <Popover
          isOpen={isOpen}
          onOpen={onOpen}
          onClose={onClose}
          closeOnBlur={false}
        >
          <PopoverTrigger>
            {type === "delete" ? (
              <IconButton variant={"ghost"} icon={<AiFillMinusCircle />} />
            ) : (
              <IconButton variant={"ghost"} icon={<AiFillCheckCircle />} />
            )}
          </PopoverTrigger>
          <PopoverContent w={"340px"}>
            <PopoverArrow />
            <PopoverCloseButton />
            <PopoverHeader>Atenção!</PopoverHeader>
            <PopoverBody>
              {type === "delete" ? (
                <Text>Tem certeza que deseja excluir esse livro?</Text>
              ) : (
                <Text>Tem certeza que deseja aprovar esse livro?</Text>
              )}
            </PopoverBody>
            <PopoverFooter
              w={"100%"}
              display={"flex"}
              justifyContent={"space-evenly"}
            >
              <IconButton
                variant={"ghost"}
                icon={<AiFillCheckCircle />}
                onClick={
                  type !== "delete"
                    ? () => patchBooksApi(book.id, { status: "aprovado" })
                    : () => deleteBooksApi(book.id)
                }
              />
              <IconButton
                variant={"ghost"}
                icon={<AiFillMinusCircle />}
                onClick={onClose}
              />
            </PopoverFooter>
          </PopoverContent>
        </Popover>
      )}
      {type === "edit" && (
        <>
          <IconButton
            variant={"ghost"}
            icon={<AiFillEdit />}
            onClick={onOpen}
          />

          <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader fontFamily={"Inter"}>Edite o Livro</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                <VStack
                  w={"100%"}
                  align={"flex-start"}
                  as="form"
                  onSubmit={handleSubmit(onSubmit)}
                >
                  <FormControl isInvalid={errors.title}>
                    <FormLabel>Título do Livro</FormLabel>
                    <Input
                      placeholder="Título"
                      w={"100%"}
                      variant={"filled"}
                      {...register("title")}
                      defaultValue={book.title}
                    />
                    <FormErrorMessage>{errors.title?.message}</FormErrorMessage>
                  </FormControl>
                  <FormControl isInvalid={errors.author}>
                    <FormLabel>Autor do Livro</FormLabel>
                    <Input
                      placeholder="Autor"
                      w={"100%"}
                      variant={"filled"}
                      {...register("author")}
                      defaultValue={book.author}
                    />
                    <FormErrorMessage>
                      {errors.author?.message}
                    </FormErrorMessage>
                  </FormControl>
                  <FormControl isInvalid={errors.genre}>
                    <FormLabel>Gênero do Livro</FormLabel>
                    <Input
                      placeholder="Gênero"
                      w={"100%"}
                      variant={"filled"}
                      {...register("genre")}
                      defaultValue={book.genre}
                    />
                    <FormErrorMessage>{errors.genre?.message}</FormErrorMessage>
                  </FormControl>
                  <FormControl isInvalid={errors.cover}>
                    <FormLabel>Capa do Livro</FormLabel>
                    <Input
                      placeholder="Capa"
                      w={"100%"}
                      variant={"filled"}
                      type={"url"}
                      {...register("cover")}
                      defaultValue={book.cover}
                    />
                    <FormErrorMessage>{errors.cover?.message}</FormErrorMessage>
                  </FormControl>
                  <Button
                    bg={"#273D40"}
                    color={"white"}
                    _hover={{
                      bgColor: "#1f3133",
                    }}
                    fontSize={["xs", "sm"]}
                    w={"100%"}
                    textTransform={"uppercase"}
                    fontFamily={"Inter"}
                    type={"submit"}
                  >
                    Editar
                  </Button>
                </VStack>
              </ModalBody>
            </ModalContent>
          </Modal>
        </>
      )}
    </>
  );
};

export default PendingBookFunction;
