import { SmallText } from "components/basic";
import { styled } from "styled-components";
import { device } from "utils/device";
import productImg from "assets/images/sneaker-intro-3.png";
import { Fragment } from "react";

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
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  position: relative;
`;

const ProductImage = styled.img`
  width: 70%;
  height: 70%;
  object-fit: contain;
`;

const Info = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-top: 60px;
  flex-wrap: wrap;
`;

const InfoText = styled(SmallText)`
  font-weight: 800;
  text-transform: uppercase;
`;

const TitleContainer = styled.div`
  position: absolute;
  right: 3%;
  top: 40px;
`;

const Title = styled.div`
  font-size: 54px;
  font-weight: 900;
  color: ${(props) => props.theme.colors.white};
  text-transform: uppercase;
`;

const SneakerMoreInfo = () => {
  return (
    <Root className="full">
      <Container>
        <ProductImage src={productImg} alt="product-image" />
        <Info>
          {infos.map((v, i) => {
            return (
              <Fragment key={v}>
                <InfoText>{v}</InfoText>
                {i !== infos.length - 1 && <SmallText>{` / `}</SmallText>}
              </Fragment>
            );
          })}
        </Info>
        <TitleContainer>
          <Title>
            <span
              style={{
                fontSize: "14px",
                marginRight: "20px",
                verticalAlign: "super",
              }}
            >
              The
            </span>
            Blance
          </Title>
          <InfoText style={{ textAlign: "right", marginTop: "12px" }}>
            DESIGNED BY TINOW VALENTINITSCH
          </InfoText>
        </TitleContainer>
      </Container>
    </Root>
  );
};

export default SneakerMoreInfo;

const infos = [
  "PREMIUM LEATHER",
  "FULLY CUSTOMIZABLE",
  "CREATED FOR EVERYDAY USE",
  "ULTIMATE COMFORT",
  "CRAFTED IN ITALY",
];
