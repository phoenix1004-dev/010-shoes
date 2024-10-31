import { PageTitle, Text } from "components/basic";
import { styled } from "styled-components";
import { device } from "utils/device";
import shoesImg from "assets/images/sneaker-intro-2.png";
import { Box } from "components/basic/Box";
import VerticalTab from "components/VerticalTab/VerticalTab";
import { useState } from "react";

const Root = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  position: relative;
  background: ${(props) => props.theme.colors.bg};
  @media ${device.tablet} {
    padding: 94px 0;
    overflow: auto;
  }
  @media ${device.mobile} {
    padding: 94px 0;
    overflow: auto;
  }
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  flex-grow: 1;
  height: 100%;

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
  align-items: center;
  justify-content: center;
  width: 100%;
  @media ${device.mobile} {
    padding: 24px;
  }
`;

const Right = styled.div`
  background-color: #fff;
  color: #0b0b18;
  padding: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  @media ${device.mobile} {
    padding-bottom: 90px;
  }
`;

const Img = styled.img`
  width: 70%;
  max-height: 70%;
  object-fit: contain;
`;

const HR = styled.hr`
  margin: 40px 0;
  border-top: 1px solid #b7b7b8;
`;

const TabContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80%;
  @media ${device.mobile} {
    width: 100%;
  }
`;
const SneakerDetail = () => {
  const [selected, setSelected] = useState<number | string>(1);
  const [selectedTitle, setSelectedTitle] = useState<string>(MOCK[0].label);
  const [selectedContent, setSelectedContent] = useState<string>(
    MOCK[0].content
  );
  return (
    <Root className="full">
      <Container>
        <Left>
          <TabContainer>
            <VerticalTab
              tabs={MOCK}
              selected={selected}
              onTabChange={(id) => {
                const val: number = typeof id === "string" ? parseInt(id) : id;
                setSelected(id);
                setSelectedTitle(MOCK[val - 1].label);
                setSelectedContent(MOCK[val - 1].content);
              }}
            />
          </TabContainer>
        </Left>
        <Right>
          <Img src={shoesImg} alt="" />
          <Box maxWidth="600px" margin="40px 0 0 0">
            <PageTitle style={{ color: "#0b0b18" }}>
              {selected < "10" ? "0" + selected : selected}:{" "}
              <b>{selectedTitle}</b>
            </PageTitle>
            <HR />
            <Text style={{ color: "#0b0b18" }}>{selectedContent}</Text>
          </Box>
        </Right>
      </Container>
    </Root>
  );
};

export default SneakerDetail;

const MOCK = [
  {
    id: 1,
    label: "Design & Aesthetics",
    content:
      "Inspired by early gaming aesthetics, the minimalist design of the 010 OG Sneaker reflects the pixelated style of classics like Super Mario and Donkey Kong. These retro elements blend with modern, minimalist lines, fusing basketball and skate culture into a versatile everyday sneaker. The sleek white color emphasizes simplicity, while a jagged geometric pattern on the side gives it a futuristic touch. Small ventilation holes are strategically placed to improve breathability without compromising the design.",
  },
  {
    id: 2,
    label: "Materials & Craftsmanship",
    content:
      "Handcrafted in Italy from premium leather, the 010 OG Sneaker offers a luxurious feel and durability. The leather is flawlessly smooth, and the craftsmanship is evident in the precise stitching and perfect fit. The tongue, also made from high-quality leather, features a subtly embossed logo, underscoring its understated elegance.",
  },
  {
    id: 3,
    label: "Technical Features",
    content:
      "More than just a shoe, the 010 OG Sneaker is a high-tech product. Each sneaker is equipped with a chip that serves as a certificate of authenticity, using NFT and smart contract technology. When tapped with a smartphone, the chip unlocks additional features and exclusive content through a dedicated website.",
  },
  {
    id: 4,
    label: "Comfort and Performance",
    content:
      "Equipped with a flexible white rubber sole, the sneaker offers excellent cushioning and grip without compromising its sleek design. The interior is lined with soft leather or textile, enhancing comfort, making it perfect for everyday wear.",
  },
  {
    id: 5,
    label: "Creative Direction",
    content:
      "Designed by renowned footwear designer Tino Valentinitsch, who has worked with Adidas and Y3, the 010 OG Sneaker is a true work of art. Limited to just 10,000 pairs, each sneaker is numbered and authenticated by its unique NFT certificate.",
  },
  {
    id: 6,
    label: "Brand Identity",
    content:
      "The 010 OG Sneaker targets a discerning audience that values fashion, sneakers, and the crypto world. Positioned in the high-end luxury segment, it embodies innovation and a strong connection to the crypto community.",
  },
  {
    id: 7,
    label: "Price and Availability",
    content:
      "Available only through its NFT, the sneaker is priced at 489 USDT. After purchase, the sneaker will be custom-made. Buyers can personalize their sneakers with colors, initials, and other details to ensure that each pair is unique.",
  },
];
