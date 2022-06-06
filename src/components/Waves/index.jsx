import { Box } from "@chakra-ui/react";
import "./style.css";

const Waves = () => {
  return (
    <Box position={"absolute"} bottom={"0"} w={"100%"} overflow={"hidden"}>
      <svg
        className="waves"
        xmlns="http://www.w3.org/2000/svg"
        src="http://www.w3.org/1999/xlink"
        viewBox="0 24 150 28"
        preserveAspectRatio="none"
        shapeRendering="auto"
      >
        <defs>
          <path
            id="gentle-wave"
            d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
          />
        </defs>
        <g className="parallax">
          <use href="#gentle-wave" x="48" y="0" fill="rgba(63, 140, 133,0.7)" />
          <use href="#gentle-wave" x="48" y="3" fill="rgba(63, 140, 133,0.5)" />
          <use href="#gentle-wave" x="48" y="5" fill="rgba(63, 140, 133,0.3)" />
        </g>
      </svg>
    </Box>
  );
};

export default Waves;
