import { PageMarker } from "components/basic";
import { styled } from "styled-components";
import { device } from "utils/device";
import oxImg from "assets/images/sneaker-intro-1.png";
import animatedLogo from "assets/images/xoxo-animation.gif";

const Root = styled.div`
  padding: 130px 80px;
  display: flex;
  align-items: center;
  // justify-content: center;
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
`;

const LogoBg = styled.img`
  position: absolute;
  left: 50%;
  top: 50%;
  opacity: 50%;
  transform: translate(-50%, -50%);
  width: 55%;
  z-index: -1;
  @media ${device.mobile} {
    width: 80%;
  }
`;

const Logo = styled.img`
  height: 200px;
  min-width: 300px;
  opacity: 0.8;
  object-fit: cover;
`;

const SneakerStart1 = () => {
  return (
    <Root className="full">
      <LogoBg src={oxImg} alt="logobg" />
      <Container>
        <PageMarker>Made with love</PageMarker>
        <Logo src={animatedLogo} alt="logo" />
      </Container>
    </Root>
  );
};

export default SneakerStart1;
