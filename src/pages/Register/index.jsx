import { Stack, VStack } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import FormRegister from "../../components/FormRegister";
import LogoLogin from "../../components/LogoLogin";
import NavBarSimple from "../../components/NavBarSimple";
import Waves from "../../components/Waves";
const Register = () => {
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
        bgColor={"#EBFDFD"}
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
          flexDir={["column", "column", "row-reverse"]}
          zIndex={"1"}
        >
          <FormRegister />
          <LogoLogin type="register" />
        </Stack>
        <Waves />
      </VStack>
    </motion.div>
  );
};

export default Register;
