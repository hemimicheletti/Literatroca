import { VStack, Stack } from "@chakra-ui/react";
import FormLogin from "../../components/FormLogin";
import LogoLogin from "../../components/LogoLogin";
import NavBarSimple from "../../components/NavBarSimple";
import Waves from "../../components/Waves";
import { motion } from "framer-motion";
import { useHistory } from "react-router-dom";
import { useEffect } from "react";
const Login = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const history = useHistory();
  useEffect(() => {
    if (user) {
      history.push("/dashboard");
    }
  });
  return (
    <motion.div
      initial={{ opacity: 0.2 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      exit={{ opacity: 0 }}
    >
      <VStack
        w={"100%"}
        h={"100vh"}
        bg={"#EBFDFD"}
        overflow="auto"
        spacing={[4, 4, 20, 20]}
      >
        <NavBarSimple />
        <Stack
          p={4}
          w={"1200px"}
          maxW={"90%"}
          justify={"space-evenly"}
          display={"flex"}
          align={"center"}
          flexDir={["column", "column", "row"]}
          zIndex={"1"}
        >
          <FormLogin />
          <LogoLogin />
        </Stack>
        <Waves />
      </VStack>
    </motion.div>
  );
};

export default Login;
