import { PageMarker, PageText } from "components/basic";
import { styled } from "styled-components";
import { device } from "utils/device";
import oxImg from "assets/images/logo/white/o-ten-icon.svg";

const Root = styled.div`
  padding: 130px 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  @media ${device.tablet} {
    padding: 74px 28px;
    overflow: hidden;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 38px;
  width: 70%;
`;

const LogoBg = styled.img`
  position: absolute;
  left: 50%;
  top: 50%;
  opacity: 5%;
  transform: translate(-50%, -50%);
  width: 75%;

  @media ${device.mobile} {
    width: 280%;
    transform: translate(-10%, -50%);
  }
`;

const AboutIntro = () => {
  return (
    <Root className="full">
      <LogoBg src={oxImg} alt="logo" />
      <Container>
        <PageMarker>101 is the model of yesterday</PageMarker>
        <PageText>
          <b> 010 [O-TEN]</b> is the first fashion brand that unites the best of
          both the digital and the real world.
        </PageText>
      </Container>
    </Root>
  );
};

export default AboutIntro;
