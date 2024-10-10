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
  grid-gap: 16px;
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
  const [selectedTitle, setSelectedTitle] = useState<string>("Leather");
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
            <Text style={{ color: "#0b0b18" }}>
              The rubber sole is made from recycled rubber or other natural and
              sub-natural rubber. Rubber soles have resistance to wear and tear
              and stability for the extended contraction that others don't
              offer.
            </Text>
          </Box>
        </Right>
      </Container>
    </Root>
  );
};

export default SneakerDetail;

const MOCK = [
  { id: 1, label: "Leather" },
  { id: 2, label: "Sole" },
  { id: 3, label: "Stitching" },
  { id: 4, label: "Laces" },
  { id: 5, label: "Toe cap" },
];
