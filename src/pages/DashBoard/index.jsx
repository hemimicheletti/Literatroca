import DashboardNavBar from "../../components/DashboardNavBar/index";
import Carousel from "../../components/Carousel";
import Waves from "../../components/Waves";
import Container from "../../components/Container";
import { motion } from "framer-motion";
import { useBooks } from "../../providers/books";
import { Box } from "@chakra-ui/react";
import { useEffect } from "react";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";

const DashBoard = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const history = useHistory();

  const { books, getBooks } = useBooks();
  useEffect(() => {
    getBooks();
    if (!user) {
      history.push("/");
      toast.error("Você precisa estar logado para acessar essa página");
    }
  }, []);
  return (
    <motion.div
      initial={{ opacity: 0.2 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      exit={{ opacity: 0 }}
    >
      {user && (
        <Box h="100vh" w="100%" bg="#EBFDFD" overflow={"auto"}>
          <DashboardNavBar />
          {books && <Carousel books={books} />}
          <Container />
          <Waves />
        </Box>
      )}
    </motion.div>
  );
};

export default DashBoard;
