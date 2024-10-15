import { PageMarker, PageTitle, Text } from "components/basic";
import { styled } from "styled-components";
import { device } from "utils/device";
import shoesImg from "assets/images/placeholder-shoes-dior.jpg";
import whiteSneakerImg from "assets/images/placeholder-whitesneaker.jpg";
import modelImg from "assets/images/placeholder-model.jpg";
import { ScrollContainer } from "react-indiana-drag-scroll";
import { useEffect, useMemo, useState } from "react";
import useStore from "hooks/useStore";
import { FiArrowRightCircle } from "react-icons/fi";

const Root = styled.div`
  padding: 130px 0 130px 80px;
  display: flex;
  align-items: center;
  overflow-x: "scroll";
  justify-content: flex-start;
  position: relative;
  & .text-area {
    min-width: 432px;
  }
  @media ${device.tablet} {
    padding: 94px 58px;
  }
  @media ${device.mobile} {
    padding: 94px 28px;
  }
`;

const HScroller = styled.div`
  display: inline-flex;
  gap: 90px;
  height: calc(100vh - 260px);
  padding-right: 80px;
  @media ${device.tablet} {
    flex-direction: column;
    overflow-x: hidden;
    gap: 30px;
    padding-right: 0;
    margin-right: 0;
    height: -webkit-fill-available;
  }
`;

const Part1 = styled.div`
  display: flex;
  flex-direction: column;
  width: 30vw;
  min-width: 30vw;
  align-self: center;

  & .part1-title {
    margin-top: 36px;
  }

  & .part1-text {
    margin-top: 84px;
  }

  @media ${device.tablet} {
    width: 100%;
    min-width: unset;

    & .part1-title {
      margin-top: 16px;
    }

    & .part1-text {
      margin-top: 34px;
    }
  }
`;

const Img = styled.img`
  height: calc(100vh - 260px);
`;

const Part2 = styled.div`
  display: flex;
  flex-direction: column;
  width: 50vw;
  min-width: 50vw;
  align-self: center;

  @media ${device.tablet} {
    width: 100%;
    min-width: unset;
  }
`;

const TwoColumn = styled.div`
  display: grid;
  grid-gap: 72px;
  grid-template-columns: repeat(2, 1fr);
  margin-top: 84px;
  @media ${device.tablet} {
    grid-gap: 20px;
    margin-top: 24px;
  }
`;

const Part3 = styled.div`
  display: grid;
  grid-gap: 14px;
  grid-template-columns: repeat(2, 1fr);
  // img {
  //   height: 100%;
  // }
  @media ${device.tablet} {
    grid-gap: 12px;
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: repeat(2, 1fr);
    img {
      width: 100%;
    }
  }
`;

const Part4 = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;
  min-width: 400px;
  align-self: center;

  @media ${device.tablet} {
    width: 100%;
    min-width: unset;
  }
`;

const RightGradient = styled.div`
  width: 180px;
  height: 100%;
  position: absolute;
  right: 0;
  top: 0;
  background: linear-gradient(
    89deg,
    rgba(0, 0, 0, 0.01) 25%,
    rgba(0, 0, 0, 0.8) 75%
  );

  @media ${device.tablet} {
    display: none;
  }
`;

const StyledFiArrowRightCircle = styled(FiArrowRightCircle)`
  position: fixed;
  top: 80%;
  left: 90%;
  transform: translate(-50%, -50%);
  z-index: 10000;
  font-size: 100px;
  opacity: 0.4;
`;

const AboutMain = () => {
  const { store } = useStore();
  const [isShow, setIsShow] = useState<boolean>(false);

  useEffect(() => {
    const toggleIcon = () => {
      setIsShow(!isShow);
    };

    setTimeout(toggleIcon, 600);
  }, [isShow]);

  const container = useMemo(() => {
    return (
      <>
        <HScroller>
          <Part1 className={store.isTablet ? "" : "text-area"}>
            <PageMarker>About 010 [0-Ten]</PageMarker>
            <PageTitle className="part1-title">
              When there’s blood on the streets, buy a shoe.
            </PageTitle>
            <Text className="part1-text">
              When the NFT bubble burst in 2022 and our collections lost value
              overnight, we faced the same challenges as everyone else. But we
              weren’t ready to sit back. Where others saw losses, we saw
              opportunities.
              <br />
              <br />
              With our passion for sneakers and the drive to create something
              sustainable, we built a brand that stands for more than just
              products – it’s about community, identity, and belonging. We
              invite you to be part of this movement.
            </Text>
          </Part1>
          <Img src={shoesImg} alt="" />
          <Part2>
            <PageTitle>A shoe that holds more than just a foot.</PageTitle>
            <TwoColumn>
              <Text>
                It’s time to move beyond the basics of shoemaking and NFT 101
                and create a truly innovative experience. 010 taps into two
                lasting cornerstones of youth culture simultaneously –
                cutting-edge technology and sneaker fashion. Our vision is
                clear: to create a seamless bridge between the digital and
                physical worlds. Because we know that NFTs are more than just
                digital assets. They are a part of our daily lives.
              </Text>
              <Text>
                Our promises are as sustainable as our visions. We create
                sneakers. Sneakers that transcend the digital space and become
                an essential part of your everyday life. Our sneakers are as
                unique as each of you – you can personalize your pair and make
                it a true expression of your personality.
              </Text>
            </TwoColumn>
          </Part2>
          <Part3 style={{ gridGap: "14px" }}>
            <Img src={whiteSneakerImg} alt="" />
            <Img src={modelImg} alt="" />
          </Part3>
          <Part4>
            <Text>
              **Step into the future: The world’s first true NFT sneaker
              unveiled** We are proud to claim that we have created the first
              true NFT sneaker. We are not just a brand – we are part of a
              movement, driven by pioneers, innovators, and game-changers like
              you. Join us, not just as a customer, but as a co-creator and
              ambassador of our vision.
              <br />
              <br />A sneaker as unique as you. We are far from finished. The
              future holds more limited editions, personalized through NFTs,
              making each pair of sneakers a one-of-a-kind item. The built-in
              chip in all our sneakers is not just a symbol of authenticity –
              it’s a gateway to experiences previously unimaginable. At 010, we
              bring you the best of both worlds, and together we will write a
              new chapter in the fashion world.
            </Text>
          </Part4>
        </HScroller>
        <RightGradient />
      </>
    );
  }, [store]);

  return (
    <Root className="full">
      {store.isTablet ? (
        container
      ) : (
        <>
          <ScrollContainer>{container}</ScrollContainer>
          {!isShow && <StyledFiArrowRightCircle />}
        </>
      )}
    </Root>
  );
};

export default AboutMain;
