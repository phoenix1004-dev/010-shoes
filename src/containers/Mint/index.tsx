import { PageMarker, PageTitle, Text } from "components/basic";
import { styled } from "styled-components";
import { device } from "utils/device";
import shoesImg from "assets/images/placeholder-shoes-dior.jpg";
import whiteSneakerImg from "assets/images/placeholder-whitesneaker.jpg";
import { ScrollContainer } from "react-indiana-drag-scroll";
import { useEffect, useMemo, useState } from "react";
import useStore from "hooks/useStore";
import { AiOutlineDoubleRight } from "react-icons/ai";

const Root = styled.div`
  padding: 130px 0 130px 80px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  position: relative;
  background: ${(props) => props.theme.colors.bg};
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

const Img = styled.img`
  pointer-events: none;
`;

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
  display: flex;
  flex-direction: column;
  width: 30vw;
  min-width: 30vw;
  align-self: center;

  @media ${device.tablet} {
    width: 100%;
    min-width: unset;
  }
`;

const StyledAiOutlineDoubleRight = styled(AiOutlineDoubleRight)`
  position: fixed;
  top: 80%;
  left: 90%;
  transform: translate(-50%, -50%);
  z-index: 10000;
  font-size: 100px;
`;

const MR = styled.div`
  margin-top: 50px;
`;

const Mint = () => {
  const { store } = useStore();
  const [isShow, setIsShow] = useState<boolean>(false);

  useEffect(() => {
    const toggleIcon = () => {
      setIsShow(!isShow);
    };

    setTimeout(toggleIcon, 600);
  }, [isShow]);

  const container = useMemo(() => {
    return (
      <>
        <HScroller>
          <Part1>
            <PageMarker>Minting</PageMarker>
            <PageTitle className="part1-title">
              010 NFT-Sneaker Minting – Exclusive and Unique
            </PageTitle>
            <Text className="part1-text">
              Welcome to the exclusive minting of our 010 NFT-Sneaker collection
              – a groundbreaking fusion of digital artwork and physical
              sneakers. This collection represents not only the future of
              sneaker design but also the potential of blockchain technology in
              the fashion world.
            </Text>
          </Part1>
          <Img src={shoesImg} alt="" />
          <Part3>
            <PageTitle>Project and Sneaker Details</PageTitle>
            <MR />
            <Text>
              Our 010 collection stands out with its unique blend of digital
              design and physical shoes. Each sneaker is meticulously designed
              and can be acquired both as a digital NFT and as a real shoe. The
              collection comprises a total of 10,000 NFTs, with some exclusive
              pieces in the collection and the rest of the sneakers being white.
              These different rarity levels make each NFT a valuable collector’s
              item.
            </Text>
          </Part3>
          <Img src={whiteSneakerImg} alt="" />
          <Part2>
            <PageTitle>Project and Sneaker Details</PageTitle>
            <TwoColumn>
              <Text>
                Our 010 collection stands out with its unique blend of digital
                design and physical shoes. Each sneaker is meticulously designed
                and can be acquired both as a digital NFT and as a real shoe.
                The collection comprises a total of 10,000 NFTs, with some
                exclusive pieces in the collection and the rest of the sneakers
                being white. These different rarity levels make each NFT a
                valuable collector’s item.
              </Text>
              <Text>
                Our 010 collection stands out with its unique blend of digital
                design and physical shoes. Each sneaker is meticulously designed
                and can be acquired both as a digital NFT and as a real shoe.
                The collection comprises a total of 10,000 NFTs, with some
                exclusive pieces in the collection and the rest of the sneakers
                being white. These different rarity levels make each NFT a
                valuable collector’s item.
              </Text>
            </TwoColumn>
          </Part2>
          <Img src={whiteSneakerImg} alt="" />
          <Part3>
            <PageTitle>Artistic and Creative Aspects</PageTitle>
            <MR />
            <Text>
              The design of the NFT sneakers comes from our talented in-house
              design team, known for their innovative approaches and deep
              understanding of sneaker culture. Each NFT is not only a digital
              artwork but can also be redeemed for a physical sneaker. When
              redeemed, the NFT is burned, increasing its rarity in the digital
              space. After minting, you also have the option to customize your
              sneaker in the configurator and purchase additional colors. These
              customizations can be transferred to the physical sneaker,
              including personalizations like initials and special design
              elements. The customizer will be available after the mint.
            </Text>
          </Part3>
          <Img src={whiteSneakerImg} alt="" />
          <Part3>
            <PageTitle>Sales and Purchase Details</PageTitle>
            <MR />
            <Text>
              The minting is scheduled for between December 2024 till Q1 2025.
              The price for each NFT is 489 USDT, payable in Solana. The
              purchase is limited: regular whitelist members can mint one
              sneaker, super whitelist members can mint up to two, and ultra
              whitelist members can mint up to three. The pre-sale is exclusive
              to partners like the Stone Ape Crew and includes 3,500 NFTs.
            </Text>
          </Part3>
          <Img src={whiteSneakerImg} alt="" />
          <Part3>
            <PageTitle>User Experience and Community</PageTitle>
            <MR />
            <Text>
              As a holder of a 010 NFT sneaker, you will become part of an
              exclusive community with access to special content, events, and a
              planned marketplace. Our goal is to continually develop the
              project with the community, known as the “Game Changers.” Primary
              communication will take place via Twitter, with a closed Discord
              group added later.
            </Text>
          </Part3>
          <Img src={whiteSneakerImg} alt="" />
          <Part3 style={{ paddingRight: "30px" }}>
            <PageTitle>Future Plans and Vision</PageTitle>
            <MR />
            <Text>
              The 010 NFT sneaker collection is just the beginning. Future drops
              and collaborations with other brands are already in the works. Our
              long-term goal is to establish a sneaker brand – by the crypto
              community, for the crypto community. This includes the
              distribution of special sneakers in physical stores worldwide,
              closing the gap between the digital and physical sneaker worlds.
            </Text>
          </Part3>
        </HScroller>
      </>
    );
  }, []);

  return (
    <Root className="full">
      {store.isTablet ? (
        container
      ) : (
        <>
          <ScrollContainer>{container}</ScrollContainer>
          {!isShow && <StyledAiOutlineDoubleRight color="#fef900" />}
        </>
      )}
    </Root>
  );
};

export default Mint;
