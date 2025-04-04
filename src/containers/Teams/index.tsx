import { PageTitle, Text } from "components/basic";
import { styled } from "styled-components";
import { device } from "utils/device";
import memberImg from "assets/images/team-placeholder.jpg";
import MemberCard from "./MemberCard";
import useStore from "hooks/useStore";
import { Carousel } from "components/Carousel";
import { useCallback, useEffect, useRef, useState } from "react";
import { ScrollContainer } from "react-indiana-drag-scroll";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";

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
  margin: 50px 60px 10px 30px;
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
  max-width: 900px;
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

const ScrollAction = styled.div`
  width: 150px;
  height: 40px;
  background-color: #12121f;
  position: fixed;
  bottom: 5%;
  right: 3%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 10px;
  padding-right: 10px;
`;

const ScrollText = styled.p``;

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
  const initialSet = useRef(false);
  const statusSet = useRef(0);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [startIndex, setStartIndex] = useState(0);
  const [endIndex, setEndIndex] = useState(0);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

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
        console.log("here->inner->", lastObserved);
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

  const handleCarousel = useCallback((index: number) => {
    setSelectedIndex(index);
  }, []);

  const handleNext = () => {
    if (endIndex === teams.length - 1) return;
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

  console.log("here->", startIndex, endIndex);

  return (
    <Root className="full">
      <PageTitle className="pl-[32px]">Our Team</PageTitle>
      <StyledText className="pl-[32px]">
        We are a carefully curated team of industry professionals driven by a
        single mission—to create a fashion brand that challenges the norm.
        Specializing in high-quality sneakers with a twist, we strive for
        innovation, highest quality craftsmanship, and bold designs to push the
        boundaries of what’s possible.
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
        <>
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
                    ref={(el) => (itemRefs.current[i] = el)}
                  />
                );
              })}
            </Container>
            <RightGradient />
          </ScrollContainer>
          <ScrollAction>
            <MdKeyboardArrowLeft
              color="#25fcff"
              size={28}
              style={{ opacity: startIndex === 0 ? 0.5 : 1 }}
              onClick={handlePrev}
            />
            <ScrollText>Scroll</ScrollText>
            <MdKeyboardArrowRight
              color="#25fcff"
              size={28}
              style={{ opacity: endIndex === teams.length - 1 ? 0.5 : 1 }}
              onClick={handleNext}
            />
          </ScrollAction>
        </>
      )}
    </Root>
  );
};

export default Teams;
