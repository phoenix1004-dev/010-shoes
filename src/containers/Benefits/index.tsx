import { PageTitle } from "components/basic";
import { styled } from "styled-components";
import { device } from "utils/device";
import benefitImg from "assets/images/benefit-placeholder.png";
import BenefitCard from "./BenefitCard";
import useStore from "hooks/useStore";
import { Carousel } from "components/Carousel";
import { useCallback, useEffect, useRef, useState } from "react";
import ScrollContainer from "react-indiana-drag-scroll";
import { AiOutlineDoubleRight, AiOutlineDoubleLeft } from "react-icons/ai";

const Root = styled.div`
  padding: 130px 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;

  @media ${device.tablet} {
    padding: 94px 58px;
    justify-content: space-around;
    height: 100vh;
  }
  @media ${device.mobile} {
    padding: 94px 28px;
    justify-content: space-around;
  }
`;

const Container = styled.div`
  display: grid;
  grid-column-gap: 30px;
  grid-row-gap: 60px;
  grid-template-rows: repeat(1, 1fr);
  grid-auto-flow: column;
  width: max-content;
  margin-top: 10%;

  @media ${device.tablet} {
    grid-template-rows: repeat(2, 1fr);
    grid-template-columns: repeat(3, 1fr);
  }

  @media ${device.mobile} {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const SliderContainer = styled.div`
  width: 100vw;
  overflow: hidden;
  margin-top: 50px;
  @media ${device.mobileS} {
    width: 300px;
  }
`;

const MobileContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 120px;
  align-items: center;

  @media ${device.tablet} {
    gap: 60px;
  }
`;

const StyledAiOutlineDoubleRight = styled(AiOutlineDoubleRight)`
  position: fixed;
  bottom: 5%;
  right: 5%;
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

const benefits = [
  "**Uniqueness & Personalization**: Every sneaker is as unique as its wearer, thanks to customizable NFTs that allow you to personalize your sneakers, making them a true expression of your personality.",
  "**Seamless integration of digital and physical worlds**: 010 sneakers bridge the gap between the digital and real worlds, offering an innovative and immersive experience.",
  "**Innovative design & high standards**: Our sneakers are the result of countless hours of design and development to meet the highest quality standards and push the boundaries of what’s possible.",
  "**Authenticity & enhanced experience**: The built-in chip is not only a symbol of authenticity; it is a portal that opens up new ways to experience your sneakers and enables interactions that were previously unimaginable.",
  "**Community-driven movement**: We are more than just a brand – we are part of a movement, driven by pioneers and innovators. By joining us, you become a co-creator and ambassador, helping shape the future of fashion.",
  "**Limited editions & exclusive releases**: Our future holds more limited editions, offering you access to exclusive designs that make you stand out from the crowd.",
  "**Future-oriented vision**: We are committed to not just changing the fashion world but improving it, with a mission that goes beyond products and leaves a lasting impact.",
  "**Long-term commitment**: 010 is here to stay, with continuous innovation and new experiences that will keep you at the forefront of fashion and technology.",
  "**Bold mission & resilience**: Our journey has not been easy, but our determination to create something groundbreaking – despite the challenges – shows our commitment to delivering real value to our community.",
];

const Benefits = () => {
  const { store } = useStore();
  const [selectedIndex, setSelectedIndex] = useState(0);
  const initialSet = useRef(false);
  const statusSet = useRef(0);
  const [startIndex, setStartIndex] = useState(0);
  const [endIndex, setEndIndex] = useState(0);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  const handleCarousel = useCallback((index: number) => {
    setSelectedIndex(index);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        let lastObserved = -1;
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const observedIndex = itemRefs.current.findIndex(
              (el) => el === entry.target
            );

            if (observedIndex !== -1) {
              lastObserved = observedIndex;
            }
          }
        });
        if (lastObserved === -1) return;
        if (!initialSet.current) {
          setEndIndex(lastObserved);
          initialSet.current = true;
        } else if (lastObserved > statusSet.current) {
          setStartIndex((prev) => prev + 1);
          setEndIndex((prev) => prev + 1);
        } else if (lastObserved < statusSet.current) {
          setStartIndex((prev) => prev - 1);
          setEndIndex((prev) => prev - 1);
        }
        statusSet.current = lastObserved;
      },
      { threshold: 0.6 }
    );

    itemRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      itemRefs.current.forEach((el) => {
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  const handleNext = () => {
    if (endIndex === benefits.length - 1) return;
    itemRefs.current[endIndex + 1]?.scrollIntoView({
      behavior: "smooth",
      inline: "end",
    });
  };

  const handlePrev = () => {
    if (startIndex === 0) return;
    itemRefs.current[startIndex - 1]?.scrollIntoView({
      behavior: "smooth",
      inline: "start",
    });
  };

  return (
    <Root className="full">
      <PageTitle>Benefits</PageTitle>
      {store.isTablet ? (
        <SliderContainer>
          <Carousel
            selectedIndex={selectedIndex}
            onClick={handleCarousel}
            arrows
            childStyle={{
              minWidth: "100%",
            }}
            option={{}}
          >
            {benefits.map((v, i) => (
              <MobileContainer key={`benefit-carousel-${i}`}>
                <BenefitCard
                  img={benefitImg}
                  text={v}
                  ref={(el) => (itemRefs.current[i] = el)}
                />
              </MobileContainer>
            ))}
          </Carousel>
        </SliderContainer>
      ) : (
        <div className="w-full relative">
          <ScrollContainer>
            <Container>
              {benefits.map((v, i) => (
                <BenefitCard
                  key={`benefit-${i}`}
                  img={benefitImg}
                  text={v}
                  ref={(el) => (itemRefs.current[i] = el)}
                  data-id={i}
                />
              ))}
            </Container>
          </ScrollContainer>
          {startIndex !== 0 && (
            <StyledAiOutlineDoubleLeft color="#fef900" onClick={handlePrev} />
          )}
          {endIndex !== benefits.length - 1 && (
            <StyledAiOutlineDoubleRight color="#fef900" onClick={handleNext} />
          )}
        </div>
      )}
    </Root>
  );
};

export default Benefits;
