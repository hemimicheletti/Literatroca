import polvo from "../../assets/images/logo.polvo.png";
import UserAction from "../UserAction";
import { HStack, Img } from "@chakra-ui/react";

const Container = () => {
  return (
    <HStack
      display="flex"
      justifyContent="center"
      alignItems="center"
      margin="auto"
      flexDir={["column", "column", "row-reverse"]}
    >
      <UserAction />
      <Img w={["300px", "300px", "350px"]} src={polvo} alt="logo" zIndex={1} />
    </HStack>
  );
};

export default Container;
