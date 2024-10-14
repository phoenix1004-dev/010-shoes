import { PageTitle } from "components/basic";
import { styled } from "styled-components";
import { device } from "utils/device";
import benefitImg from "assets/images/benefit-placeholder.png";
import BenefitCard from "./BenefitCard";
import useStore from "hooks/useStore";
import { Carousel } from "components/Carousel";
import { useCallback, useState } from "react";

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
  grid-column-gap: 14px;
  grid-row-gap: 60px;
  grid-template-rows: repeat(2, 1fr);
  grid-template-columns: repeat(4, 1fr);
  width: 100%;
  margin-top: 10%;
  max-width: 1200px;

  @media ${device.tablet} {
    grid-template-rows: repeat(2, 1fr);
    grid-template-columns: repeat(3, 1fr);
  }

  @media ${device.mobile} {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const SliderContainer = styled.div`
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

  const handleCarousel = useCallback((index: number) => {
    setSelectedIndex(index);
  }, []);

  const showMobileBenefits = () => {
    const rows = [];

    for (let i = 0; i < benefits.length; i += 2) {
      if (i + 1 < benefits.length) {
        rows.push(
          <MobileContainer key={`benefit-carousel-${i}`}>
            <BenefitCard img={benefitImg} text={benefits[i]} />
            <BenefitCard img={benefitImg} text={benefits[i + 1]} />
          </MobileContainer>
        );
      } else {
        rows.push(
          <MobileContainer key={`benefit-carousel-${i}`}>
            <BenefitCard img={benefitImg} text={benefits[i]} />
          </MobileContainer>
        );
      }
    }
    return rows;
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
            {showMobileBenefits()}
          </Carousel>
        </SliderContainer>
      ) : (
        <Container>
          {benefits.map((v, i) => {
            return (
              <BenefitCard key={`benefit-${i}`} img={benefitImg} text={v} />
            );
          })}
        </Container>
      )}
    </Root>
  );
};

export default Benefits;
