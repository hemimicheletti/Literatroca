import { Tr, Td, HStack, Img } from "@chakra-ui/react";
import PendingBookFunction from "../PendingBookFunction";

const PendingBook = ({ book }) => {
  return (
    <Tr>
      <Td>
        <Img
          src={book.cover}
          w={"50px"}
          _hover={{ cursor: "pointer", transform: "scale(1.1)" }}
          boxShadow={"0px 0px 5px black"}
        />
      </Td>
      <Td>{book.title}</Td>
      <Td>
        <HStack>
          <PendingBookFunction type="approve" book={book} />
          <PendingBookFunction type="edit" book={book} />
          <PendingBookFunction type="delete" book={book} />
        </HStack>
      </Td>
      <Td textTransform={"capitalize"}>{book.status}</Td>
    </Tr>
  );
};

export default PendingBook;
