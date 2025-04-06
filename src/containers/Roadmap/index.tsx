import { styled } from "styled-components";
import { device } from "utils/device";
import { useState } from "react";
import Timeline from "components/Timeline/Timeline";
import ScrollContainer from "react-indiana-drag-scroll";
import useStore from "hooks/useStore";

const Root = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  padding: 100px 0 100px 100px;
  overflow: hidden;
  align-items: center;
  justify-content: flex-start;
  position: relative;
  background: ${(props) => props.theme.colors.bg};

  @media ${device.tablet} {
    overflow: auto;
  }

  @media ${device.mobile} {
    padding: 94px 0 0 0;
    overflow: auto;
  }
`;

const Container = styled.div`
  flex-grow: 1;
  height: 100vh;

  @media ${device.mobile} {
    height: 100%;
  }
`;

const TabContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  @media ${device.mobile} {
    width: 100%;
    height: unset;
  }
`;
const Roadmap = () => {
  const [selected, setSelected] = useState<number>(1);
  const { store } = useStore();

  return (
    <Root>
      {!store.isMobile ? (
        <ScrollContainer>
          <Container>
            <TabContainer>
              <Timeline
                data={MOCK}
                selected={selected}
                onTabChange={(id) => setSelected(id)}
              />
            </TabContainer>
          </Container>
        </ScrollContainer>
      ) : (
        <Container>
          <TabContainer>
            <Timeline
              data={MOCK}
              selected={selected}
              onTabChange={(id) => setSelected(id)}
            />
          </TabContainer>
        </Container>
      )}
    </Root>
  );
};

export default Roadmap;

const MOCK = [
  {
    year: 23,
    color: "#0b0b18",
    children: [
      { id: 1, label: "Q1", texts: ["design & concept development"] },
      { id: 2, label: "Q2", texts: ["design & concept development"] },
      {
        id: 3,
        label: "Q3",
        texts: [
          "1st seed fundraising",
          "expanding team",
          "project planning",
          "first prototypes",
        ],
      },
      {
        id: 4,
        label: "Q4",
        texts: [
          "raise public awareness",
          "community building",
          "app development",
          "2nd seed fundraising",
          "ONYX @ Sneakercon",
        ],
      },
    ],
  },
  {
    year: 24,
    color: "#12121f",
    children: [
      { id: 5, label: "Q1", texts: ["design & concept development"] },
      { id: 6, label: "Q2", texts: ["design & concept development"] },
      {
        id: 7,
        label: "Q3",
        texts: [
          "1st seed fundraising",
          "expanding team",
          "project planning",
          "first prototypes",
        ],
      },
      {
        id: 8,
        label: "Q4",
        texts: [
          "raise public awareness",
          "community building",
          "app development",
          "2nd seed fundraising",
          "ONYX @ Sneakercon",
        ],
      },
    ],
  },
];
