import { styled } from "styled-components";
import { device } from "utils/device";
import productImg1 from "assets/images/top-view.png";
import productImg2 from "assets/images/detail.png";
import productImg3 from "assets/images/detail2.png";
import productImg4 from "assets/images/detail3.png";
import productImg5 from "assets/images/detail4.png";
import productImg6 from "assets/images/detail5.png";
import useStore from "hooks/useStore";
import ScrollContainer from "react-indiana-drag-scroll";
import { useEffect, useRef, useState } from "react";
import { AiOutlineDoubleRight, AiOutlineDoubleLeft } from "react-icons/ai";

const Root = styled.div`
  padding: 130px 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  background: ${(props) => props.theme.colors.bg};
  @media ${device.tablet} {
    padding: 74px 28px;
    overflow: auto;
  }
`;

const Container = styled.div`
  width: 180%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  align-items: center;
  grid-gap: 48px;

  @media ${device.mobile} {
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: repeat(6, 1fr);
  }
`;

const ProductImage = styled.img`
  width: 100%;
  height: auto;
  max-height: calc(100vh - 260px);
  aspect-ratio: 1/2;
  object-fit: cover;
  pointer-events: none;

  @media ${device.mobile} {
    height: 100%;
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

const images = [
  productImg1,
  productImg2,
  productImg3,
  productImg4,
  productImg5,
  productImg6,
];

const SneakerGallery = () => {
  const { store } = useStore();
  const initialSet = useRef(false);
  const statusSet = useRef(0);
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
    if (endIndex === images.length - 1) return;
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
      {store.isTablet ? (
        <ScrollContainer className="w-full h-full">
          {images.map((item, index) => (
            <ProductImage
              key={index}
              src={item}
              alt={`product-image${index}`}
            />
          ))}
        </ScrollContainer>
      ) : (
        <>
          <ScrollContainer className="h-full">
            <Container>
              {images.map((item, index) => (
                <ProductImage
                  key={index}
                  src={item}
                  alt={`product-image${index}`}
                  ref={(el) => (itemRefs.current[index] = el)}
                />
              ))}
            </Container>
          </ScrollContainer>
          {startIndex !== 0 && (
            <StyledAiOutlineDoubleLeft color="#fef900" onClick={handlePrev} />
          )}
          {endIndex !== images.length - 1 && (
            <StyledAiOutlineDoubleRight color="#fef900" onClick={handleNext} />
          )}
        </>
      )}
    </Root>
  );
};

export default SneakerGallery;
