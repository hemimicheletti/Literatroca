import {
  Box,
  chakra,
  Flex,
  SimpleGrid,
  Stat,
  StatLabel,
  StatNumber,
  useColorModeValue,
} from "@chakra-ui/react";
import { BsPerson } from "react-icons/bs";
import { FiServer } from "react-icons/fi";
import { GoLocation } from "react-icons/go";

const StatsCard = (props) => {
  const { title, stat, icon } = props;
  return (
    <Stat
      px={{ base: 2, md: 4 }}
      py={"5"}
      shadow={"xl"}
      border={"1px solid"}
      borderColor={useColorModeValue("gray.800", "gray.500")}
      rounded={"lg"}
      bg={"white"}
      boxShadow={"0px 0px 10px rgba(0, 0, 0, 0.5)"}
    >
      <Flex justifyContent={"space-between"}>
        <Box pl={{ base: 2, md: 4 }}>
          <StatLabel fontWeight={"medium"} isTruncated>
            {title}
          </StatLabel>
          <StatNumber fontSize={"2xl"} fontWeight={"medium"}>
            {stat}
          </StatNumber>
        </Box>
        <Box
          my={"auto"}
          color={useColorModeValue("gray.800", "gray.200")}
          alignContent={"center"}
        >
          {icon}
        </Box>
      </Flex>
    </Stat>
  );
}

const Statistics = () => {
  return (
    <>
      <Box maxW="7xl" mx={"auto"} pt={2} px={{ base: 2, sm: 12, md: 17 }} fontFamily={"Nunito"}  id={2}>
        <chakra.h1
          textAlign={"center"}
          fontSize={"4xl"}
          py={5}
          fontWeight={"bold"}
        >
          O que estamos fazendo?
        </chakra.h1>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: 5, lg: 8 }}>
          <StatsCard title={"Transitamos mais de "} stat={"10,000 livros"} />
          <StatsCard title={"Em todo"} stat={"território nacional"} />
          <StatsCard
            title={"Atendendo com"}
            stat={"eficiência suas necessidades"}
          />
        </SimpleGrid>
      </Box>
      <Box  maxW="7xl" 
            mx={"auto"} pt={5} px={{ base: 2, sm: 12, md: 17 }}>
        <chakra.h1
          textAlign={"center"}
          fontSize={"4xl"}
          py={5}
          fontWeight={"bold"}
          fontFamily={"Nunito"}
        >
          Estamos crescendo, faça parte você também.
        </chakra.h1>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: 5, lg: 8 }} >
          <StatsCard
            title={"Usuários"}
            stat={"5,000"}
            icon={<BsPerson size={"3em"} />}
          />
          <StatsCard
            title={"Banco de livros"}
            stat={"11,000"}
            icon={<FiServer size={"3em"} />}
          />
          <StatsCard
            title={"Envie e receba"}
            stat={"pelos correios"}
            icon={<GoLocation size={"3em"} />}
          />
        </SimpleGrid>
      </Box>
    </>
  );
};
export default Statistics;
