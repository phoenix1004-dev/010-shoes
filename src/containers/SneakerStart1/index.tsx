import { PageMarker } from "components/basic";
import { styled } from "styled-components";
import { device } from "utils/device";
import oxImg from "assets/images/sneaker-intro-2.png";
import animatedLogo from "assets/images/xoxo-animation.gif";
import { motion } from "framer-motion";

const Root = styled.div`
  padding: 130px 80px;
  display: flex;
  align-items: center;
  position: relative;

  @media ${device.tablet} {
    padding: 74px 28px;
    overflow: hidden;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 38px;
  width: 100%;
  align-items: center;
`;

const LogoBgContainer = styled.div`
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
  z-index: 100;
`;

const LogoBg = styled.img`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: auto;
  height: auto;
  max-height: 60%;
  aspect-ratio: 1/1;
  z-index: 100;

  @media ${device.mobile} {
    width: 80%;
  }
`;

const Logo = styled.img`
  height: 200px;
  width: 100%;
  min-width: 300px;
  max-width: 1536px;
  opacity: 0.8;
  object-fit: cover;

  @media ${device.mobile} {
    height: 100px;
  }
`;

const SneakerStart1 = () => {
  return (
    <Root className="full">
      <LogoBgContainer>
        <motion.div
          className="relative w-full h-full"
          animate={{ rotateY: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        >
          <LogoBg src={oxImg} alt="logobg" />
        </motion.div>
      </LogoBgContainer>
      <Container>
        <PageMarker>FOR THE CREATORS</PageMarker>
        <Logo src={animatedLogo} alt="logo" />
      </Container>
    </Root>
  );
};

export default SneakerStart1;
