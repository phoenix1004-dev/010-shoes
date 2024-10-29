import { PageMarker, PageTitle, Text } from "components/basic";
import { styled } from "styled-components";
import { device } from "utils/device";
import shoesImg from "assets/images/placeholder-shoes-dior.jpg";
import whiteSneakerImg from "assets/images/placeholder-whitesneaker.jpg";
import { ScrollContainer } from "react-indiana-drag-scroll";
import { useMemo } from "react";
import useStore from "hooks/useStore";

const Root = styled.div`
  padding: 130px 0 130px 80px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  position: relative;
  @media ${device.tablet} {
    padding: 94px 58px;
  }
  @media ${device.mobile} {
    padding: 94px 28px;
  }
`;

const HScroller = styled.div`
  display: inline-flex;
  gap: 90px;
  height: calc(100vh - 260px);
  padding-right: 80px;
  @media ${device.tablet} {
    flex-direction: column;
    overflow-x: hidden;
    gap: 30px;
    padding-right: 0;
    margin-right: 0;
    height: -webkit-fill-available;
  }
`;

const Part1 = styled.div`
  display: flex;
  flex-direction: column;
  width: 30vw;
  min-width: 30vw;
  align-self: center;

  & .part1-title {
    margin-top: 36px;
  }

  & .part1-text {
    margin-top: 84px;
  }

  @media ${device.tablet} {
    width: 100%;
    min-width: unset;

    & .part1-title {
      margin-top: 16px;
    }

    & .part1-text {
      margin-top: 34px;
    }
  }
`;

const Img = styled.img``;

const Part2 = styled.div`
  display: flex;
  flex-direction: column;
  width: 50vw;
  min-width: 50vw;
  align-self: center;

  @media ${device.tablet} {
    width: 100%;
    min-width: unset;
  }
`;

const TwoColumn = styled.div`
  display: grid;
  grid-gap: 72px;
  grid-template-columns: repeat(2, 1fr);
  margin-top: 84px;
  @media ${device.tablet} {
    grid-gap: 20px;
    margin-top: 24px;
  }
`;

const Part3 = styled.div`
  display: grid;
  grid-gap: 14px;
  grid-template-columns: repeat(2, 1fr);
  img {
    height: 100%;
  }
  @media ${device.tablet} {
    grid-gap: 12px;
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: repeat(2, 1fr);
    img {
      width: 100%;
    }
  }
`;

const RightGradient = styled.div`
  width: 180px;
  height: 100%;
  position: fixed;
  z-index: 100;
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

const Mint = () => {
  const { store } = useStore();

  const container = useMemo(() => {
    return (
      <>
        <HScroller>
          <Part1>
            <PageMarker>Minting</PageMarker>
            <PageTitle className="part1-title">
              Getting them is part of the charm.
            </PageTitle>
            <Text className="part1-text">
              At vero eos et accusamus et iusto odio dignissimos et ducimus qui
              blanditiis praesentium voluptatum deleniti atque corrupti quos
              dolores et quas molestias ut ipsa excepturi sint occaecati
              cupiditate non provident, similique sunt in culpa qui officia
              deserunt mollitia animi, id est laborum et dolorum fuga.
              <br />
              <br />
              Ut aut reiciendis voluptatibus maiores alias consequatur aut
              perferendis doloribus asperiores repellat.
            </Text>
          </Part1>
          <Img src={shoesImg} alt="" />
          <Part2>
            <PageTitle>Another headline goes here.</PageTitle>
            <TwoColumn>
              <Text>
                At vero eos et accusamus et iusto odio dignissimos et ducimus
                qui blanditiis praesentium voluptatum deleniti atque corrupti
                quos dolores et quas molestias ut ipsa excepturi sint occaecati
                cupiditate non provident, similique sunt in culpa qui officia
                deserunt mollitia animi, id est laborum et dolorum fuga.
                <br />
                <br /> Ut aut reiciendis voluptatibus maiores alias consequatur
                aut perferendis doloribus asperiores repellat.
              </Text>
              <Text>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
                voluptas sit aspernatur aut odit aut fugit.
              </Text>
            </TwoColumn>
          </Part2>
          <Part3 style={{ gridGap: "14px" }}>
            <Img src={whiteSneakerImg} alt="" />
          </Part3>
        </HScroller>
        <RightGradient />
      </>
    );
  }, []);

  return (
    <Root className="full">
      {store.isTablet ? (
        container
      ) : (
        <ScrollContainer>{container}</ScrollContainer>
      )}
    </Root>
  );
};

export default Mint;
