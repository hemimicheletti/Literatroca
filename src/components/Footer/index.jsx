import {
  Box,
  Container,
  Link,
  SimpleGrid,
  Stack,
  Text,
  Flex,
  Image,
  Tag,
  useColorModeValue,
} from "@chakra-ui/react";
import logo from "../../assets/images/logo.polvo.png";

const Logo = () => {
  return <Image src={logo} alt="polvo" width={70} />;
};

const ListHeader = ({ children }) => {
  return (
    <Text fontWeight={"700"} fontSize={"lg"} mb={2}>
      {children}
    </Text>
  );
};
const Footer = () => {
  return (
    <Box
      bg={"#EBFDFD"}
      color={useColorModeValue("gray.700", "gray.200")}
      fontFamily={"Nunito"}
    >
      <Container as={Stack} maxW={"6xl"} py={10} margin={"0 auto"}>
        <SimpleGrid columns={{ base: 2, sm: 2, md: 4 }} spacing={8}>
          <Stack align={"flex-start"}>
            <ListHeader>Produtos</ListHeader>
            <Link href={"#"}>Overview</Link>
            <Stack direction={"row"} align={"center"} spacing={2}>
              <Link href={"#2"}>Features</Link>
              <Tag
                size={"sm"}
                bg={useColorModeValue("green.300", "green.800")}
                ml={2}
                color={"white"}
              >
                New
              </Tag>
            </Stack>
            <Link href={"#1"}>Preços</Link>
          </Stack>
          <Stack align={"flex-start"}>
            <ListHeader>LiteraTroca</ListHeader>
            {[
              { title: "Sobre Nós", id: "#2" },
              { title: "Imprensa", id: "#1" },
              { title: "Parceiros", id: "#3" },
            ].map((item) => (
              <Link href={item.id} key={item.title}>
                {item.title}
              </Link>
            ))}
          </Stack>
          <Stack align={"flex-start"}>
            <ListHeader>Direitos</ListHeader>
            {[
              {
                title: "Política de Cookies",
                id: "https://www.vw.com.br/pt/volkswagen/informacoes-legais/politica-de-cookies.html",
              },
              {
                title: "Política de Privacidade",
                id: "https://pndastore.com.br/politica-de-privacidade/?gclid=Cj0KCQjw4PKTBhD8ARIsAHChzRJyImRYfUcuYG1klAMyQWl6_hAwO3i3UVdA62Z0VGlV69yN1ussMd0aAhiYEALw_wcB",
              },
            ].map((item) => (
              <Link href={item.id} target="_blank">
                {item.title}
              </Link>
            ))}
          </Stack>
          <Image
            src={
              "https://www.zetadesign.com.br/wp-content/uploads/2019/06/Gestao-Redes-Sociais.png"
            }
            alt="Redes Sociais"
            display={["none", "flex", "flex", "flex"]}
          />
        </SimpleGrid>
      </Container>
      <Box py={10}>
        <Flex
          align={"center"}
          _before={{
            content: '""',
            borderBottom: "1px solid",
            borderColor: useColorModeValue("gray.200", "gray.700"),
            flexGrow: 1,
            mr: 8,
          }}
          _after={{
            content: '""',
            borderBottom: "1px solid",
            borderColor: useColorModeValue("gray.200", "gray.700"),
            flexGrow: 1,
            ml: 8,
          }}
        >
          <Logo />
        </Flex>
        <Text pt={6} fontSize={"sm"} textAlign={"center"}>
          © 2022 LiteraTroca. All rights reserved
        </Text>
      </Box>
    </Box>
  );
};
export default Footer;
