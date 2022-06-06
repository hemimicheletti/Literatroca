import {
  IconButton,
  Td,
  Tr,
  VStack,
  Text,
  Img,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverArrow,
  PopoverCloseButton,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  useDisclosure,
} from "@chakra-ui/react";
import { AiFillCheckCircle, AiFillMinusCircle } from "react-icons/ai";
import { useBooks } from "../../providers/books";
import { IoMdSend } from "react-icons/io";
import { useAuth } from "../../providers/auth";
const ApprovedBook = ({ user }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { sendBooksApi } = useBooks();
  const { updateUser } = useAuth();
  const userData = JSON.parse(localStorage.getItem("user"));
  const sendBook = () => {
    sendBooksApi(user.toReceive.id);
    updateUser(userData.id, {
      toReceive: "",
    });
    onClose();
  };
  return (
    <Tr>
      <Td>{user.name}</Td>
      <Td>
        <VStack>
          <Text>{`Cep: ${user.address.cep}`}</Text>
          <Text>{`Rua: ${user.address.street}`}</Text>
          <Text>{`Número: ${user.address.number}`}</Text>
          <Text>{`Bairro: ${user.address.neighbourhood}`}</Text>
          <Text>{`Cidade: ${user.address.city}`}</Text>
          <Text>{`Estado: ${user.address.state}`}</Text>
        </VStack>
      </Td>
      <Td>
        <Img
          src={user.toReceive.cover}
          w={"70px"}
          boxShadow={"0px 0px 5px #333"}
          _hover={{ transform: "scale(1.1)" }}
        />
      </Td>
      <Td>{user.toReceive.title}</Td>
      <Td>
        <Popover
          isOpen={isOpen}
          onOpen={onOpen}
          onClose={onClose}
          closeOnBlur={false}
        >
          <PopoverTrigger>
            <IconButton variant={"ghost"} icon={<IoMdSend />} />
          </PopoverTrigger>
          <PopoverContent w={"340px"}>
            <PopoverArrow />
            <PopoverCloseButton />
            <PopoverHeader>Atenção!</PopoverHeader>
            <PopoverBody>
              <Text>Confirmar envio?</Text>
            </PopoverBody>
            <PopoverFooter
              w={"100%"}
              display={"flex"}
              justifyContent={"space-evenly"}
            >
              <IconButton
                variant={"ghost"}
                icon={<AiFillCheckCircle />}
                onClick={sendBook}
              />
              <IconButton
                variant={"ghost"}
                icon={<AiFillMinusCircle />}
                onClick={onClose}
              />
            </PopoverFooter>
          </PopoverContent>
        </Popover>
      </Td>
    </Tr>
  );
};

export default ApprovedBook;
