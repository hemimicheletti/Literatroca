import { VStack, Box, Select } from "@chakra-ui/react";
import AdminTable from "../../components/AdminTable";
import NavBarSimple from "../../components/NavBarSimple";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";
const Admin = () => {
  const history = useHistory();
  const user = JSON.parse(localStorage.getItem("user"));
  const [state, setState] = useState("books");
  useEffect(() => {
    if (user.id !== 1) {
      history.push("/");
      toast.error("Você não tem permissão para acessar esta página");
    }
  });

  return (
    <motion.div
      initial={{ opacity: 0.2 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      exit={{ opacity: 0 }}
    >
      <VStack w={"100%"} h={"100vh"} bg={"#EBFDFD"}>
        <NavBarSimple type="admin" />
        <Box>
          <Select
            variant={"simple"}
            bgColor={"#edf2f7"}
            onChange={(e) => setState(e.target.value)}
          >
            <option value="books">Livros Pendentes</option>
            <option value="clients">Destinatários</option>
          </Select>
        </Box>

        <AdminTable state={state} />
      </VStack>
    </motion.div>
  );
};

export default Admin;
