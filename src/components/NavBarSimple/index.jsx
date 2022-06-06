import {
  Img,
  Button,
  HStack,
  Heading,
  Menu,
  MenuButton,
  IconButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import { IoMdSettings } from "react-icons/io";
import { useHistory } from "react-router-dom";
import logo from "../../assets/images/logo.polvo.png";
import { useAuth } from "../../providers/auth";
const NavBarSimple = ({ type }) => {
  const history = useHistory();
  const { logout } = useAuth();
  return (
    <HStack
      width="100%"
      justify="space-between"
      bg="#273D40"
      as="header"
      p={4}
      boxShadow={"0px 0px 10px black"}
    >
      <HStack>
        <Img src={logo} h={"60px"} />
        <Heading color={"#FFFFFF"} fontFamily={"Cabin Sketch, cursive"}>
          LiteraTroca
        </Heading>
      </HStack>
      <>
        {type !== "admin" ? (
          <Button
            color={"#FFFFFF"}
            ml="30px"
            width="100px"
            variant="ghost"
            onClick={() => history.push("/")}
            _hover={{
              transform: "scale(1.1)",
              bgColor: "#1f3133",
            }}
          >
            Voltar
          </Button>
        ) : (
          <Menu>
            <MenuButton
              as={IconButton}
              aria-label="Options"
              border={"none"}
              icon={<IoMdSettings color={"white"} size={30} />}
              variant="outline"
              _hover={{ filter: "brightness(0.5)" }}
              _active={{ filter: "brightness(0.5)" }}
            />

            <MenuList>
              <MenuItem onClick={() => history.push("/dashboard")}>
                Dashboard
              </MenuItem>
              <MenuItem onClick={logout}>Logout</MenuItem>
            </MenuList>
          </Menu>
        )}
      </>
    </HStack>
  );
};

export default NavBarSimple;
