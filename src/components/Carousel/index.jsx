import { Box, Img, useBreakpointValue } from "@chakra-ui/react";
import { Slider } from "infinite-react-carousel/lib";

const Carousel = ({ books }) => {
  const approvedBooks = books.filter((book) => book.status === "aprovado");
  const variant = useBreakpointValue([10, 3, 4, 4, 10]);
  return (
    <>
      {approvedBooks.length > 0 && (
        <Box>
          <Slider
            arrows={false}
            arrowsBlock={false}
            autoplay={true}
            autoplaySpeed={800}
            duration={1000}
            pauseOnHover={false}
            slidesPerRow={1}
            slidesToShow={variant ? variant : 10}
          >
            {approvedBooks.map((book, index) => {
              return (
                <Img
                  boxShadow="3px 3px 3px #333"
                  marginTop={10}
                  maxW={["100px", "120px", "140px"]}
                  src={book.cover}
                  alt={book.title}
                  key={index}
                  _hover={{ transform: "scale(1.1)" }}
                  transition="1s"
                />
              );
            })}
          </Slider>
        </Box>
      )}
    </>
  );
};

export default Carousel;
