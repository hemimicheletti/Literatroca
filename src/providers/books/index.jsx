import { useContext, createContext } from "react";
import axios from "axios";
import { useState } from "react";
import { toast } from "react-toastify";
import { url } from "..";

export const BooksContext = createContext();
export const BooksProvider = ({ children }) => {
  const [books, setBooks] = useState([]);

  const token = {
    headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
  };

  const getBooks = async () => {
    await axios
      .get(`${url}/books`, token)
      .then((res) => {
        setBooks(res.data);
      })
      .catch((err) => console.log(err));
  };

  const addBooksApi = (book) => {
    axios
      .post(`${url}/books`, book, token)
      .then(() => {
        toast.success("Livro cadastrado com sucesso! 🐙");
        getBooks();
      })
      .catch((err) => {
        console.log(err);
        toast.error("Erro ao cadastrar livro 🐙");
      });
  };

  const patchBooksApi = (id, book) => {
    axios
      .patch(`${url}/books/${id}`, book, token)
      .then(() => {
        toast.success("Livro atualizado com sucesso! 🐙");
        getBooks();
      })
      .catch((err) => {
        console.log(err);
        toast.error("Erro ao atualizar livro! 🐙");
      });
  };

  const deleteBooksApi = (id) => {
    axios
      .delete(`${url}/books/${id}`, token)
      .then(() => {
        toast.success("Livro deletado com sucesso! 🐙");
        getBooks();
      })
      .catch((err) => {
        console.log(err);
        toast.error("Erro ao deletar livro! 🐙");
      });
  };

  const sendBooksApi = (id) => {
    axios
      .delete(`${url}/books/${id}`, token)
      .then(() => {
        toast.success("Envio confirmado! 🐙");
        getBooks();
      })
      .catch((err) => {
        console.log(err);
        toast.error("Erro ao confirmar envio! 🐙");
      });
  };

  return (
    <BooksContext.Provider
      value={{
        books,
        addBooksApi,
        deleteBooksApi,
        patchBooksApi,
        setBooks,
        getBooks,
        sendBooksApi,
      }}
    >
      {children}
    </BooksContext.Provider>
  );
};

export const useBooks = () => useContext(BooksContext);
