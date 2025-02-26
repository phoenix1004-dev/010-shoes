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

const SneakerGallery = () => {
  const { store } = useStore();

  return (
    <Root className="full">
      {store.isTablet ? (
        <ScrollContainer className="w-full h-full">
          <ProductImage src={productImg1} alt="product-image1" />
          <ProductImage src={productImg2} alt="product-image2" />
          <ProductImage src={productImg3} alt="product-image3" />
          <ProductImage src={productImg4} alt="product-image1" />
          <ProductImage src={productImg5} alt="product-image2" />
          <ProductImage src={productImg6} alt="product-image3" />
        </ScrollContainer>
      ) : (
        <ScrollContainer className="h-full">
          <Container>
            <ProductImage src={productImg1} alt="product-image1" />
            <ProductImage src={productImg2} alt="product-image2" />
            <ProductImage src={productImg3} alt="product-image3" />
            <ProductImage src={productImg4} alt="product-image1" />
            <ProductImage src={productImg5} alt="product-image2" />
            <ProductImage src={productImg6} alt="product-image3" />
          </Container>
        </ScrollContainer>
      )}
    </Root>
  );
};

export default SneakerGallery;
