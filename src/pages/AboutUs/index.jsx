import CallToAction from "../../components/CallToAction";
import FormContact from "../../components/FormContact";
import NavBarSimple from "../../components/NavBarSimple";
import { motion } from "framer-motion";
import { Box } from "@chakra-ui/react";
const AboutUs = () => {
  return (
    <motion.div
      initial={{ opacity: 0.2 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      exit={{ opacity: 0 }}
    >
      <Box bgColor={"#EBFDFD"} w={"100%"} h={"100vh"} overflow={"auto"}>
        <NavBarSimple />
        <CallToAction />
        <FormContact />
      </Box>
    </motion.div>
  );
};

export default AboutUs;
