import {
  Box,
  Center,
  Flex,
  Heading,
  Text,
  Stack,
  Container,
  Avatar,
  useColorModeValue,
} from '@chakra-ui/react';

const Testimonial = ({ children }) => {
  return <Box >{children}</Box>;
};

const TestimonialContent = ({ children }) => {
  return (
    <Stack
      bg={"#3F8C85"}
      boxShadow={'lg'}
      p={8}
      minH={350}
      maxH={{base: "250", md: "250", xl: "350"}}
      minW={{base: "", md:"200", lg:"170"}}
      maxW={{base: "80%", md:"60%", lg: "60%", xl:"230"}}
      rounded={'xl'}
      align={'center'}
      pos={'relative'}
      margin={"0 auto"}
      _after={{
        content: `""`,
        w: 0,
        h: 0,
        borderLeft: 'solid transparent',
        borderLeftWidth: 16,
        borderRight: 'solid transparent',
        borderRightWidth: 16,
        borderTop: 'solid',
        borderTopWidth: 16,
        borderTopColor: "#3F8C85",
        pos: 'absolute',
        bottom: '-16px',
        left: '50%',
        transform: 'translateX(-50%)',
      }}>
      {children}
    </Stack>
  );
};
const team = [
{name: "Alessandra", image: 'https://ca.slack-edge.com/TQZR39SET-U02MNJR5ASK-7169c136ebdb-512', position: "Product Owner", header: "Death by Black Hole - Neil deGrasse Tyson", text: "Quando investigamos cientificamente o mundo natural, a única coisa pior do que um crente cego é um negador que vê." },
{name: "Breno", image: 'https://ca.slack-edge.com/TQZR39SET-U02N38YJK8T-a2ba3fd4f904-512', position: "Teach Lead", header: "Além do bem e do mal - Friedrich Nietzsche.", text: "Aquele que luta com monstros deve acautelar-se para não tornar-se também um monstro. Quando se olha muito tempo para um abismo, o abismo olha de volta para você." },
{name: "Daniel", image: 'https://ca.slack-edge.com/TQZR39SET-U02N09PH47P-42bc86096c80-512', position: "Quality Assurance", header: "Tartarugas Até Lá Embaixo - John Green", text: "A vida é uma história que contam sobre nós, não uma história que escolhemos contar." },
{name: "Gustavo", image: 'https://ca.slack-edge.com/TQZR39SET-U02N386N79Q-781c38f9d79d-512', position: "Scrum Master", header: "Fedro - Platão", text: "Em virtude da essência, todas as almas humanas contemplam a verdade" },
{name: "Hemi", image: 'https://ca.slack-edge.com/TQZR39SET-U02N5FT395J-ea1bde03b88c-512', position: "Quality Assurance", header: "A hora da Estrela - Clarisse Lispector", text: "(...) Vagamente pensava de muito longe e sem palavras o seguinte: já que sou, o jeito é ser" }
]

const TestimonialHeading = ({ children }) => {
  return (
    <Heading as={'h3'} fontSize={'xl'} color={"white"} fontFamily={"Nunito"}>
      {children}
    </Heading>
  );
};

const TestimonialText = ({ children }) => {
  return (
    <Text
      textAlign={'center'}
      color={useColorModeValue('gray.200', 'gray.400')}
      fontSize={'sm'}
      fontFamily={"Nunito"} >     
      {children}
    </Text>
  );
};

const TestimonialAvatar = ({
  src,
  name,
  title,
}) => {
  return (
    <Flex align={'center'} mt={8} direction={'column'}>
      <Avatar src={src} alt={name} mb={2} _hover={"transform: scale(1.1)"}/>
      <Stack spacing={-1} align={'center'}>
        <Text fontWeight={600} fontFamily={"Nunito"}>{name}</Text>
        <Text fontSize={'sm'} fontFamily={"Nunito"} color={useColorModeValue('gray.600', 'gray.400')}>
          {title}
        </Text>
      </Stack>
    </Flex>
  );
};

const Team = () => {

    return (
        <Center bg={"#EBFDFD"} mt={5} id={3}>
          <Container maxW={'7xl'} py={5} as={Stack} spacing={12}>
            <Stack spacing={0} align={'center'}>
              <Heading color={"gray.900"} fontFamily={"Nunito"}>Nosso Time</Heading>
              <Text color={"gray.900"} fontFamily={"Nunito"}>Conheça mais de cada membro da equipe</Text>
            </Stack>
            <Stack
              direction={{ base: 'column', lg: 'row' }}
              spacing={{ base: 10, md: 4, lg: 10 }}
            >
              {team.map((item) => (
                  <Testimonial key={item.name} >
                  <TestimonialContent>
                    <TestimonialHeading>{item.header}</TestimonialHeading>
                    <TestimonialText>
                      {item.text}
                    </TestimonialText>
                  </TestimonialContent>
                  <TestimonialAvatar
                    src={
                      item.image
                    }
                    name={item.name}
                    title={item.position}
                  />
                </Testimonial>
              ))}
            </Stack>
          </Container>
        </Center>
      );
}
export default Team;