import PrincingPlans from "../../components/PricingPlans";
import Statistics from "../../components/Statistics";
import Team from "../../components/Team";
import Footer from "../../components/Footer";
import NavBar from "../../components/NavBar";
import Wave from "../../components/Wave";
import { Box } from "@chakra-ui/react";
import RegisterLandingPg from "../../components/RegisterLandinPg";
import { motion } from "framer-motion";
import HowItWorks from "../../components/HowItWorks";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";
const Landing = () => {
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
      <Box bg={"#EBFDFD"}>
        <NavBar />
        <RegisterLandingPg />
        <HowItWorks />
        <PrincingPlans />
        <Statistics />
        <Team />
        <Footer />
        <Wave />
      </Box>
    </motion.div>
  );
};

export default Landing;
