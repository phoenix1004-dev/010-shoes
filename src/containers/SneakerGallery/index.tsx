import { styled } from "styled-components";
import { device } from "utils/device";
import productImg1 from "assets/images/top-view.png";
import productImg2 from "assets/images/detail.png";
import productImg3 from "assets/images/detail2.png";
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
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 14px;
  max-width: 1400px;

  @media ${device.mobile} {
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: repeat(3, 1fr);
  }
`;

const ProductImage = styled.img`
  width: 100%;
  height: calc(100% - 260px);
  max-height: 800px;
  object-fit: contain;

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
        </ScrollContainer>
      ) : (
        <Container>
          <ProductImage src={productImg1} alt="product-image1" />
          <ProductImage src={productImg2} alt="product-image2" />
          <ProductImage src={productImg3} alt="product-image3" />
        </Container>
      )}
    </Root>
  );
};

export default SneakerGallery;
