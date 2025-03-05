import { PageMarker } from "components/basic";
import { styled } from "styled-components";
import { device } from "utils/device";
import oxImg from "assets/images/sneaker-intro-4.png";

const Root = styled.div`
  padding: 130px 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  background: ${(props) => props.theme.colors.bg};
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
  height: calc(100% - 260px);
  left: 50%;
  top: 50%;
  opacity: 50%;
  transform: translate(-50%, -50%);
  width: 55%;
  @media ${device.mobile} {
    width: 90%;
  }
`;

const PageText = styled.div`
  font-size: 24px;
  font-weight: 400;
  color: ${(props) => props.theme.colors.white};

  @media ${device.mobile} {
    font-size: 18px;
  }
`;

const SneakerStart2 = () => {
  return (
    <Root className="full">
      <LogoBg src={oxImg} alt="logo" style={{ width: "auto" }} />
      <Container>
        <PageMarker>THE FUTURE OF SNEAKERS STARTS HERE</PageMarker>
        <PageText>
          Trends start with innovators, are spotted by visionaries, and
          amplified by the masses. The 010 OG Sneaker is more than a shoe—it’s a
          statement. Handcrafted in Italy from the finest materials, it merges
          luxury craftsmanship with cutting-edge technology. An embedded NFC
          chip provides tamper-proof authenticity and unlocks exclusive digital
          family-only experiences.
          <br />
          <br />
          Designed for sneaker collectors, NFT pioneers, and crypto enthusiasts,
          the 010 OG Sneaker is for those who don’t just chase trends—they
          create them.
          <br />
          <br />
          Exclusivity, innovation, and identity—this is 010.
        </PageText>
      </Container>
    </Root>
  );
};

export default SneakerStart2;
