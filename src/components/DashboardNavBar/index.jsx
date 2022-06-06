import logo from "../../assets/images/logo.polvo.png";
import { IoExitOutline } from "react-icons/io5";
import { RiGitRepositoryPrivateLine } from "react-icons/ri";
import {
  HStack,
  Heading,
  Img,
  Avatar,
  Text,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
  PopoverArrow,
  Button,
  Icon,
} from "@chakra-ui/react";
import pato from "../../assets/images/avatar.png";
import { useAuth } from "../../providers/auth";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
const DashboardNavBar = () => {
  const loggedUser = JSON.parse(localStorage.getItem("user"));
  const { logout } = useAuth();
  const history = useHistory();
  return (
    <HStack
      as="header"
      justify="space-between"
      bg="#273D40"
      boxShadow={"0 4px 2px -2px #333"}
      w="100%"
      p={4}
    >
      <HStack>
        <Img src={logo} alt="logo" h="60px" />
        <Heading color={"#FFFFFF"} fontFamily={"Cabin Sketch, cursive"}>
          LiteraTroca
        </Heading>
      </HStack>
      <HStack>
        <Popover>
          <PopoverTrigger>
            <Avatar
              src={pato}
              _hover={{ transform: "scale(1.1)", cursor: "pointer" }}
            />
          </PopoverTrigger>
          <PopoverContent maxW={"150px"}>
            <PopoverArrow />
            <PopoverBody>
              <Text
                color="black"
                fontSize="xl"
                textOverflow={"ellipsis"}
                overflow={"hidden"}
                whiteSpace={"nowrap"}
              >
                {loggedUser.name}
              </Text>
              <Button
                w="100%"
                bgColor="#273D40"
                color="#fff"
                my={2}
                _hover={{ bgColor: "#3F8C85" }}
                _active={{ bgColor: "#3F8C85", border: "none" }}
                onClick={() => logout()}
              >
                <HStack justifyContent="space-between" w="100%">
                  <Text>Sair</Text>
                  <Icon as={IoExitOutline} />
                </HStack>
              </Button>

              {loggedUser.id === 1 ? (
                <Button
                  w="100%"
                  bgColor="#273D40"
                  color="#fff"
                  _hover={{ bgColor: "#3F8C85" }}
                  _active={{ bgColor: "#3F8C85", border: "none" }}
                  onClick={() => history.push("/admin")}
                >
                  <HStack justifyContent="space-between" w="100%">
                    <Text>Admin</Text>
                    <Icon as={RiGitRepositoryPrivateLine} />
                  </HStack>
                </Button>
              ) : (
                <></>
              )}
            </PopoverBody>
          </PopoverContent>
        </Popover>
      </HStack>
    </HStack>
  );
};

export default DashboardNavBar;
