import {
  Flex,
  ButtonGroup,
  HStack,
  Link,
  Button,
  Heading,
  Image,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  useBreakpointValue,
} from "@chakra-ui/react";
import { Link as ReactRouterLink } from "react-router-dom";
import * as React from "react";
import { FiMenu } from "react-icons/fi";
import logo from "../../assets/images/logo.polvo.png";
import { useHistory } from "react-router-dom";

const NavBar = () => {
  const history = useHistory();
  const isDesktop = useBreakpointValue({
    base: false,
    md: true,
  });
  return (
    <>
      <HStack
        as="header"
        justify="space-between"
        bgColor="#273D40"
        boxShadow={"0px 0px 10px black"}
        p={4}
      >
        <Image
          src={logo}
          h={"60px"}
          _hover={{ cursor: "pointer", transform: "scale(1.1)" }}
        />
        <Heading color={"#FFFFFF"} fontFamily={"Cabin Sketch, cursive"}>
          LiteraTroca
        </Heading>

        {isDesktop ? (
          <Flex justify="flex-end" flex="1">
            <ButtonGroup spacing="8" variant="link" pt={2}>
              {[
                {
                  title: "Quem Somos",
                  id: "/about-us",
                },
                { title: "Planos", id: "#1" },
              ].map((item, index) => (
                <Link color={"#FFFFFF"} key={index} href={item.id}>
                  {item.title}
                </Link>
              ))}
            </ButtonGroup>

            <Button
              color={"#FFFFFF"}
              ml="30px"
              width="100px"
              variant="ghost"
              onClick={() => history.push("/login")}
              _hover={{
                transform: "scale(1.1)",
                bgColor: "#1f3133",
              }}
            >
              Entrar
            </Button>
          </Flex>
        ) : (
          <Flex>
            <Menu justifyContent={"flex-end"}>
              <MenuButton
                as={Button}
                _hover={{
                  transform: "scale(1.1)",
                  bgColor: "#1f3133",
                }}
                variant="ghost"
                color={"white"}
                bg={"#1f3133"}
              >
                {<FiMenu fontSize="1.25rem" />}
              </MenuButton>
              <MenuList variant="link">
                <MenuItem>
                  <Link
                    as={ReactRouterLink}
                    to="about-us"
                    fontFamily={"Nunito"}
                  >
                    Quem somos
                  </Link>
                </MenuItem>
                <MenuItem>
                  <Link href="#1" fontFamily={"Nunito"}>
                    Planos
                  </Link>
                </MenuItem>
                <MenuItem>
                  <Button
                    color={"#FFFF"}
                    width={"50%"}
                    m={"0 auto"}
                    variant="ghost"
                    bgColor={"#1f3133"}
                    onClick={() => history.push("/login")}
                    _hover={{
                      transform: "scale(1.1)",
                      bgColor: "#1f3133",
                    }}
                  >
                    Entrar
                  </Button>
                </MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        )}
      </HStack>
    </>
  );
};
export default NavBar;
