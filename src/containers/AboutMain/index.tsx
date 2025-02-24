import { PageMarker, PageTitle, Text } from "components/basic";
import { styled } from "styled-components";
import { device } from "utils/device";
import shoesImg from "assets/images/placeholder-shoes-dior.jpg";
import whiteSneakerImg from "assets/images/placeholder-whitesneaker.jpg";
import modelImg from "assets/images/placeholder-model.jpg";
import { ScrollContainer } from "react-indiana-drag-scroll";
import { useEffect, useMemo, useRef, useState } from "react";
import useStore from "hooks/useStore";
import { AiOutlineDoubleRight, AiOutlineDoubleLeft } from "react-icons/ai";

const Root = styled.div`
  padding: 130px 80px;
  display: flex;
  align-items: center;
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
  position: relative;
  display: inline-flex;
  gap: 80px;
  height: calc(100vh - 260px);
  scrollbar-width: none;

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
  flex: 1;
  height: calc(100vh - 260px);
  pointer-events: none;
`;

const ImgContainer = styled.div`
  flex: 1;

  @media ${device.tablet} {
    width: 100%;
    flex: none;
    justify-items: center;
  }
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
  display: flex;
  flex-direction: column;
  width: 50vw;
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
  position: fixed;
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

const StyledAiOutlineDoubleRight = styled(AiOutlineDoubleRight)`
  position: fixed;
  bottom: 5%;
  right: 3%;
  transform: translate(-50%, -50%);
  z-index: 10000;
  font-size: 64px;
`;

const StyledAiOutlineDoubleLeft = styled(AiOutlineDoubleLeft)`
  position: fixed;
  bottom: 5%;
  left: 10%;
  transform: translate(-50%, -50%);
  z-index: 10000;
  font-size: 64px;
`;

const Section = styled.div`
  width: calc(100vw - 160px);
  display: flex;
  justify-content: space-between;
  gap: 20px;

  @media ${device.tablet} {
    flex-direction: column;
    width: calc(100vw - 116px);
  }

  @media ${device.mobile} {
    width: calc(100vw - 56px);
  }
`;

const AboutMain = () => {
  const { store } = useStore();
  const [index, setIndex] = useState(0);
  const divRef1 = useRef<HTMLDivElement | null>(null);
  const divRef2 = useRef<HTMLDivElement | null>(null);
  const divRef3 = useRef<HTMLDivElement | null>(null);

  const handleIntersection = (entries: IntersectionObserverEntry[]) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // Update index based on which section is visible
        if (entry.target === divRef1.current) {
          setIndex(0);
        } else if (entry.target === divRef2.current) {
          setIndex(1);
        } else if (entry.target === divRef3.current) {
          setIndex(2);
        }
      }
    });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.5,
    });

    const ref1 = divRef1.current;
    const ref2 = divRef2.current;
    const ref3 = divRef3.current;

    if (ref1) observer.observe(ref1);
    if (ref2) observer.observe(ref2);
    if (ref3) observer.observe(ref3);

    return () => {
      if (ref1) observer.unobserve(ref1);
      if (ref2) observer.unobserve(ref2);
      if (ref3) observer.unobserve(ref3);
    };
  }, []);

  const onClickRight = () => {
    switch (index + 1) {
      case 0:
        if (divRef1.current) {
          divRef1.current.scrollIntoView({
            behavior: "smooth",
            block: "nearest",
            inline: "center",
          });
        }
        break;

      case 1:
        if (divRef2.current) {
          divRef2.current.scrollIntoView({
            behavior: "smooth",
            block: "nearest",
            inline: "center",
          });
        }
        break;

      default:
        if (divRef3.current) {
          divRef3.current.scrollIntoView({
            behavior: "smooth",
            block: "nearest",
            inline: "center",
          });
        }
        break;
    }
    setIndex(index + 1);
  };

  const onClickLeft = () => {
    switch (index - 1) {
      case 0:
        if (divRef1.current) {
          divRef1.current.scrollIntoView({
            behavior: "smooth",
            block: "nearest",
            inline: "center",
          });
        }
        break;

      case 1:
        if (divRef2.current) {
          divRef2.current.scrollIntoView({
            behavior: "smooth",
            block: "nearest",
            inline: "center",
          });
        }
        break;

      default:
        if (divRef3.current) {
          divRef3.current.scrollIntoView({
            behavior: "smooth",
            block: "nearest",
            inline: "center",
          });
        }
        break;
    }
    setIndex(index - 1);
  };

  const container = useMemo(() => {
    return (
      <>
        <HScroller>
          <Section ref={divRef1}>
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
            <ImgContainer className="justify-items-end">
              <Img src={shoesImg} alt="shoes image" />
            </ImgContainer>
          </Section>
          <Section ref={divRef2}>
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
            <ImgContainer className="justify-items-end">
              <Img src={whiteSneakerImg} alt="white sneaker image" />
            </ImgContainer>
          </Section>
          <Section ref={divRef3}>
            <ImgContainer>
              <Img src={modelImg} alt="model image" />
            </ImgContainer>
            <Part3>
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
                it’s a gateway to experiences previously unimaginable. At 010,
                we bring you the best of both worlds, and together we will write
                a new chapter in the fashion world.
              </Text>
            </Part3>
          </Section>
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
          {index !== 0 && (
            <StyledAiOutlineDoubleLeft color="#fef900" onClick={onClickLeft} />
          )}
          {index !== 2 && (
            <StyledAiOutlineDoubleRight
              color="#fef900"
              onClick={onClickRight}
            />
          )}
        </>
      )}
    </Root>
  );
};

export default AboutMain;
