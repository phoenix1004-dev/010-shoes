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
  width: 70vw;
  min-width: 70vw;
  align-self: center;

  @media ${device.tablet} {
    width: 100%;
    min-width: unset;
  }
`;

const ThreeColumn = styled.div`
  display: grid;
  grid-gap: 72px;
  grid-template-columns: repeat(3, 1fr);
  margin-top: 84px;
  @media ${device.tablet} {
    grid-gap: 20px;
    margin-top: 24px;
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

const StyledAiOutlineDoubleRight = styled(AiOutlineDoubleRight)`
  position: fixed;
  top: 80%;
  left: 90%;
  transform: translate(-50%, -50%);
  z-index: 10000;
  font-size: 100px;
`;

const Chip = () => {
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
            <PageMarker>Chip</PageMarker>
            <PageTitle className="part1-title">
              010 x Next-Gen Technology: Redefining Luxury for the Digital Age
            </PageTitle>
            <Text className="part1-text">
              At 010, we’re not just designing luxury street-style sneakers;
              we’re revolutionizing the way you experience, own, and interact
              with your footwear. Embedded within each pair of our sneakers is
              cutting-edge technology: a next-generation chip innovation that
              uniquely identifies every pair of 010 sneakers, empowering you
              with full ownership control, security, and authenticity.
            </Text>
          </Part1>
          <Img src={shoesImg} alt="" />
          <Part2>
            <PageTitle>Unbreakable Security & Authenticity</PageTitle>
            <br />
            <Text className="part1-text">
              The embedded chip operates as a hardware wallet directly within
              the sneaker. Here’s what it does:
            </Text>
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
          <Img src={whiteSneakerImg} alt="" />
          <Part3>
            <PageTitle>Seamless Integration with the Blockchain</PageTitle>
            <br />
            <Text className="part1-text">
              The 010 sneakers aren't just luxury fashion; they are a part of a
              decentralized future. We have built a comprehensive platform that
              allows you to:
            </Text>
            <ThreeColumn>
              <Text>
                <strong>Verify Authenticity:</strong> Easily authenticate any
                010 sneaker by verifying the chip’s unique cryptographic
                signature on our platform. This ensures that your sneaker is
                original, with its history and provenance verifiable on the
                blockchain.
              </Text>
              <Text>
                <strong>Ownership Control:</strong> Using the chip’s technology,
                ownership of a 010 sneaker is digitally and securely tied to the
                user, enabling effortless transfers of ownership via our
                platform.
              </Text>
              <Text>
                <strong>Sneaker Trading Spot:</strong> Imagine you list your
                sneakers on a marketplace and verifiably sell or transfer
                ownership with complete transparency and security. Every
                transaction is backed by blockchain, ensuring no room for fraud.
                Our goal is to create a place where people enjoy trading
                verified physical sneakers.
              </Text>
            </ThreeColumn>
          </Part3>
          <Part2>
            <PageTitle>Technology that Goes Beyond Fashion</PageTitle>
            <br />
            <Text className="part1-text">
              Our partnership with a leading manufacturer of blockchain chip
              technology ensures that 010 sneakers are not just a statement of
              style, but also a beacon of technological innovation:
            </Text>
            <TwoColumn>
              <Text>
                <strong>Self-Sovereign Authentication:</strong> The chip doesn’t
                rely on a central server for authentication. All verification
                happens directly on-chain, making the authentication process
                decentralized, secure, and transparent.
              </Text>
              <Text>
                <strong>Future-Proof Integration:</strong> The chips are
                designed to be compatible with existing decentralized
                applications (dapps) and protocols such as PBT (Physical-Backed
                Tokens). This opens up new possibilities for integrating your
                sneaker into larger ecosystems of digital ownership and beyond.
              </Text>
            </TwoColumn>
          </Part2>
          <Part2 style={{ paddingRight: 84 }}>
            <PageTitle>The Future of Reselling & Ownership</PageTitle>
            <br />
            <Text className="part1-text">
              We envision a future where your sneakers aren’t just worn; they’re
              part of a dynamic ecosystem of ownership and resellable assets:
            </Text>
            <TwoColumn>
              <Text>
                <strong>Smart Reselling:</strong> Imagine reselling a
                limited-edition sneaker with full proof of authenticity embedded
                within the shoe itself. No more third-party
                verifications—ownership is transferred with a simple
                cryptographic transaction.
              </Text>
              <Text>
                <strong>Ownership as a Service:</strong> Leverage the chip’s
                technology to "lease" or temporarily transfer ownership of your
                sneaker for exhibitions, fashion shows, or special events. The
                possibilities for decentralized ownership extend far beyond
                simple reselling.
              </Text>
            </TwoColumn>
          </Part2>
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
        <>
          <ScrollContainer>{container}</ScrollContainer>
          {!isShow && <StyledAiOutlineDoubleRight color="#fef900" />}
        </>
      )}
    </Root>
  );
};

export default Chip;
