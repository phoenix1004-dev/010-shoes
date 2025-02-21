import WithAppbar from "layouts/WithAppbar";
import { styled } from "styled-components";
import img1 from "assets/images/placeholder-woman-w-sneakers.jpg";
import img2 from "assets/images/placeholder-group.jpg";
import img3 from "assets/images/placeholder-shoe-casasport.jpg";
import img4 from "assets/images/placeholder-shoes-dior.jpg";
import YellowPane from "components/YellowPane";
import { device } from "utils/device";
import { useEffect, useState } from "react";

const Root = styled.div`
  padding: 130px 80px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: ${(props) => props.theme.colors.bg};

  @media ${device.tablet} {
    padding: 74px 28px;
  }
`;

const Gallery = styled.div`
  display: grid;
  grid-gap: 14px;
  grid-template-rows: repeat(2, 1fr);
  grid-template-columns: repeat(4, 1fr);
  flex-grow: 1;

  @media ${device.tablet} {
    display: flex;
    flex-direction: column;
    gap: 24px;
  }

  .gallery-1 {
    grid-area: 1 / 1 / span 2 / span 2;
    background-image: url(${img1});
    background-size: cover;
    background-position: center;
    font-size: 40px;
  }

  .gallery-2 {
    grid-area: 1 / 3 / span 1 / span 2;
    background-image: url(${img2});
    background-size: cover;
    background-position: center;
    font-size: 32px;
  }

  .gallery-3 {
    grid-area: 2 / 3 / span 1 / span 1;
    background-image: url(${img3});
    background-size: cover;
    background-position: center;
    font-size: 20px;
  }

  .gallery-4 {
    grid-area: 2 / 4 / span 1 / span 1;
    background-image: url(${img4});
    background-size: cover;
    background-position: center;
    font-size: 20px;
  }

  .gallery-1,
  .gallery-2,
  .gallery-3,
  .gallery-4 {
    display: flex;
    align-items: flex-end;
    padding: 36px 15% 36px 36px;
    position: relative;

    @media ${device.tablet} {
      padding: 12px;
      font-size: 18px;
      height: 300px;
    }

    &:after {
      content: "";
      width: 100%;
      height: 100%;
      position: absolute;
      left: 0;
      top: 0;
      background-color: ${(props) => props.theme.colors.secondaryBg};
      opacity: 20%;
      transform: scaleX(0);
      transform-origin: 100% 50%;
    }
    &:hover:after {
      transform: scaleX(1);
      transform-origin: 0 50%;
      transition: transform 175ms ease-in-out;
    }
  }
`;

const GridRow = styled.div`
  display: grid;
  grid-gap: 14px;
  grid-template-columns: repeat(3, 1fr);
  margin-top: 14px;
  min-height: 90px;

  @media ${device.tablet} {
    display: flex;
    flex-direction: column;
    gap: 14px;
  }
`;

const StyledYellowPane = styled(YellowPane)`
  text-transform: uppercase;
  font-weight: 500;
  padding: 12px;
`;

const NewsBadge = styled(YellowPane)`
  font-size: 18px;
  font-weight: 700;
  text-transform: uppercase;
  position: absolute;
  left: 34px;
  top: 34px;
  padding: 10px 30px;
  z-index: 1000;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  position: relative;
`;

const Text = styled.div`
  color: ${(props) => props.theme.colors.bg};
  font-weight: 600;
`;

const NewsPage = () => {
  const [day, setDay] = useState<number>(100);
  const [hour, setHour] = useState<number>(20);
  const [minute, setMinute] = useState<number>(18);
  const [second, setSecond] = useState<number>(42);

  useEffect(() => {
    const interval = setInterval(() => {
      if (second > 0) setSecond(second - 1);
      else if (minute > 0) {
        setMinute(minute - 1);
        setSecond(59);
      } else if (hour > 0) {
        setHour(hour - 1);
        setMinute(59);
        setSecond(59);
      } else if (day > 0) {
        setDay(day - 1);
        setHour(23);
        setMinute(59);
        setSecond(59);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [day, hour, minute, second]);

  return (
    <WithAppbar theme="light">
      <Root>
        <Container>
          <Gallery>
            <div className="gallery-1">
              <NewsBadge>Latest news</NewsBadge>
              <Text>The latest news article preview always goes here</Text>
            </div>
            <div className="gallery-2">
              <Text>The second newest article is located in this spot</Text>
            </div>
            <div className="gallery-3">
              <Text>Older articles are shown in the smaller fields</Text>
            </div>
            <div className="gallery-4">
              <Text>Older articles are shown in the smaller fields</Text>
            </div>
          </Gallery>
          <GridRow>
            <StyledYellowPane>
              TIME UNTIL MINT: <span style={{ marginLeft: "20px" }}></span>
              {day} :{hour} : {minute} : {second}
            </StyledYellowPane>
            <StyledYellowPane>An solana-based project</StyledYellowPane>
            <StyledYellowPane>Older news articles</StyledYellowPane>
          </GridRow>
        </Container>
      </Root>
    </WithAppbar>
  );
};

export default NewsPage;
