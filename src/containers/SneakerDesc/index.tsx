import { PageTitle, Text } from "components/basic";
import { styled } from "styled-components";
import { device } from "utils/device";
import shoesImg from "assets/images/sneaker-intro-2.png";
import { FlexBox } from "components/basic/Box";

const Root = styled.div`
  padding: 130px 0 130px 80px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  position: relative;
  background: ${(props) => props.theme.colors.bg};
  @media ${device.tablet} {
    padding: 94px 58px;
    overflow: auto;
  }
  @media ${device.mobile} {
    padding: 94px 28px;
    overflow: auto;
  }
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: 40% 60%;
  flex-grow: 1;

  @media ${device.tablet} {
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: center;
    height: -webkit-fill-available;
  }
`;

const Left = styled.div`
  display: flex;
  flex-direction: column;
  width: 30vw;
  min-width: 30vw;
  align-self: center;

  & .left-title {
    margin-top: 36px;
  }

  & .left-text {
    margin-top: 84px;
  }

  @media ${device.tablet} {
    width: 100%;
    min-width: unset;

    & .left-title {
      margin-top: 16px;
    }

    & .left-text {
      margin-top: 34px;
    }
  }
`;

const Img = styled.img`
  width: 90%;
  max-height: 80%;
  object-fit: contain;
`;

const SneakerDesc = () => {
  return (
    <Root className="full">
      <Container>
        <Left>
          <PageTitle className="left-title">
            When there's blood on the streets, buy a shoe.
          </PageTitle>
          <Text className="left-text">
            This customizable NFT can be enjoyed both in the digital and
            physical worlds. As a holder, you can either exchange it for a real
            pair of high-quality Italian made sneakers in your size or enjoy
            benefits in the crypto world. It's totally up to you!
            <br />
            <br />
            You can customize the NFT at every stage, adjusting the style of our
            sneaker to your taste. The name of our first NFT sneaker model is
            YETI. Yep, because the sneakers come in a snow-white colourway.
            <br />
            <br />
            This way each holder can embrace the creative freedom of
            customization, where colours & materials can be added step-by-step.
          </Text>
        </Left>
        <FlexBox justifyContent="flex-start" alignItems="center">
          <Img src={shoesImg} alt="" />
        </FlexBox>
      </Container>
    </Root>
  );
};

export default SneakerDesc;
