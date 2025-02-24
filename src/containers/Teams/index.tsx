import { PageTitle, Text } from "components/basic";
import { styled } from "styled-components";
import { device } from "utils/device";
import memberImg from "assets/images/team-placeholder.jpg";
import MemberCard from "./MemberCard";
import useStore from "hooks/useStore";
import { Carousel } from "components/Carousel";
import { useCallback, useState } from "react";
import { ScrollContainer } from "react-indiana-drag-scroll";

const Root = styled.div`
  padding: 130px 0 0px 80px;
  margin-bottom: auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: relative;

  @media ${device.tablet} {
    padding: 94px 58px;
    height: 100vh;
  }
  @media ${device.mobile} {
    padding: 94px 28px;
  }
`;

const Container = styled.div`
  display: inline-flex;
  min-width: 100%;
  height: calc(100% - 60px);
  margin: 60px 60px 10px 20px;
  align-items: center;
  gap: 24px;
`;

const SliderContainer = styled.div`
  overflow-x: hidden;
  overflow-y: auto;
  margin-top: 50px;
  width: 100%;
  height: calc(100vh - 393px);
  @media ${device.mobile} {
    margin-top: 40px;
  }
  @media ${device.mobileS} {
    width: 100%;
  }

  & .carousel__slide {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const StyledText = styled(Text)`
  max-width: 700px;
  margin-top: 28px;
  @media ${device.mobile} {
    margin-top: 30px;
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

const teams = [
  {
    name: "Thomas",
    role: "The visionary entrepreneur",
    desc: "Thomas is the creative mastermind and marketing specialist driving our project. With a sharp eye for innovation and a passion for disruptive ideas, he is the visionary leader who turns concepts into reality.",
  },
  {
    name: "Stoned Ape Group",
    role: "The NFT nerds",
    desc: "The Stoned Ape Group are the NFT experts behind our digital strategy. Known for their deep knowledge of blockchain technology, they enrich our project with groundbreaking digital innovation.",
  },
  {
    name: "Benny",
    role: "The master of art",
    desc: "Benny is our artistic genius, bringing each design to life with exceptional creativity. His craftsmanship ensures that 010 looks exactly as it should.",
  },
  {
    name: "Tino",
    role: "The fashion designer",
    desc: "Tino is our fashion designer, straight from the ranks of Adidas. With a rich background in sneaker design, he combines style and functionality to create our unique footwear.",
  },
];

const Teams = () => {
  const { store } = useStore();
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleCarousel = useCallback((index: number) => {
    setSelectedIndex(index);
  }, []);

  return (
    <Root className="full">
      <PageTitle>Our Team</PageTitle>
      <StyledText>
        We are a curated team of industry professionals united by the single
        goal to create an unconventional fashion brand that speciallizes in
        high-qality sneakers with a twist.
      </StyledText>
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
            {teams.map((v, i) => {
              return (
                <MemberCard
                  key={`member-carousel-${i}`}
                  img={memberImg}
                  name={v.name}
                  desc={v.desc}
                  twitterUrl="https://twitter.com"
                  facebookUrl="https://facebook.com"
                  instagramUrl="https://instagram.com"
                  linkedInUrl="https://linkedin.com"
                  role={v.role}
                />
              );
            })}
          </Carousel>
        </SliderContainer>
      ) : (
        <ScrollContainer style={{ width: "100%", height: "100%" }}>
          <Container>
            {teams.map((v, i) => {
              return (
                <MemberCard
                  key={`member-${i}`}
                  img={memberImg}
                  name={v.name}
                  desc={v.desc}
                  twitterUrl="https://twitter.com"
                  facebookUrl="https://facebook.com"
                  instagramUrl="https://instagram.com"
                  linkedInUrl="https://linkedin.com"
                  role={v.role}
                />
              );
            })}
          </Container>
          <RightGradient />
        </ScrollContainer>
      )}
    </Root>
  );
};

export default Teams;
