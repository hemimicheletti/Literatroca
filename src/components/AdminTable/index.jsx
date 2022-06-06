import {
  Table,
  Thead,
  Tbody,
  Box,
  Tr,
  Th,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";
import { useEffect } from "react";
import PendingBook from "../PendingBook";
import { useBooks } from "../../providers/books";
import { useAuth } from "../../providers/auth";
import ApprovedBook from "../ApprovedBook";
const AdminTable = ({ state }) => {
  const { books, getBooks } = useBooks();
  const { users, getUsers } = useAuth();
  useEffect(() => {
    getBooks();
    getUsers();
  }, []);

  const booksFilter = books.filter((book) => book.status === "pendente");

  return (
    <Box overflow={"auto"} maxW={"90%"}>
      {state === "books" ? (
        <TableContainer>
          <Table
            variant={"striped"}
            colorScheme={"telegram"}
            size="sm"
            fontFamily={"Nunito"}
          >
            <TableCaption fontFamily={"Nunito"} fontSize={"sm"}>
              Exclua, altere ou aprove os livros pendentes.
            </TableCaption>
            <Thead>
              <Tr>
                <Th>Capa</Th>
                <Th>Livro</Th>
                <Th>Ação</Th>
                <Th>Status</Th>
              </Tr>
            </Thead>
            <Tbody>
              {booksFilter.map((book) => (
                <PendingBook key={book.id} book={book} />
              ))}
            </Tbody>
          </Table>
        </TableContainer>
      ) : (
        <TableContainer>
          <Table
            variant={"striped"}
            colorScheme={"telegram"}
            size="sm"
            fontFamily={"Nunito"}
          >
            <TableCaption fontFamily={"Nunito"} fontSize={"sm"}>
              Envie os livros para os clientes.
            </TableCaption>
            <Thead>
              <Tr>
                <Th>Usuário</Th>
                <Th>Endereço</Th>
                <Th>Capa</Th>
                <Th>Título</Th>
                <Th>Confirmar</Th>
              </Tr>
            </Thead>
            <Tbody>
              {users
                .filter((user) => user.toReceive && user.address)
                .map((current) => (
                  <ApprovedBook user={current} key={current.id} />
                ))}
            </Tbody>
          </Table>
        </TableContainer>
      )}
    </Box>
  );
};

export default AdminTable;
