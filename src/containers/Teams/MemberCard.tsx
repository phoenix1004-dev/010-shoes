import { Box, FlexBox } from "components/basic/Box";
import { Fragment, useState } from "react";
import { styled } from "styled-components";
import {
  FaLinkedinIn,
  FaTwitter,
  FaFacebookF,
  FaInstagram,
} from "react-icons/fa";
import { device } from "utils/device";

type Props = {
  img: string;
  name: string;
  desc?: string;
  twitterUrl?: string;
  facebookUrl?: string;
  instagramUrl?: string;
  linkedInUrl?: string;
  role: string;
};

const Root = styled.div`
  width: calc(100% / 4);
  height: 100%;
  min-width: 340px;
  max-height: 500px;
  display: flex;
  align-items: center;

  @media ${device.mobileM} {
    width: min(100%, 340px);
    min-width: min(100%, 340px);
  }

  @media ${device.mobile} {
    height: min(100%, 400px);
  }
`;

const Main = styled.div`
  min-width: 340px;
  max-width: 100%;
  height: 100%;
  max-height: 700px;
  position: relative;

  @media ${device.mobileM} {
    width: min(100%, 340px);
    min-width: min(100%, 340px);
  }

  @media ${device.mobile} {
    height: min(100%, 400px);
  }
`;

const Img = styled.img`
  width: 100%;
  height: calc(100% - 62px);
  object-fit: contain;
  background: #e0dfe4;
`;

const Content = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: calc(100% - 62px);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #ffff0080;
  mix-blend-mode: hard-light;
  padding: 24px;
  transform: scaleX(1);
  transform-origin: 0 50%;
  transition: transform 175ms ease-in-out;

  @media ${device.mobileM} {
    padding: 14px;
  }
`;

const Name = styled.div`
  font-size: 24px;
  color: ${(props) => props.theme.colors.bg};
  font-weight: 600;

  @media ${device.mobileM} {
    font-size: 16px;
  }
`;

const Desc = styled.div`
  font-size: 20px;
  color: ${(props) => props.theme.colors.bg};

  @media ${device.tablet} {
    font-size: 16px;
  }

  @media ${device.mobileM} {
    font-size: 13px;
  }
`;

const SocialIcon = styled.a`
  padding: 4px;
  svg {
    width: 16px;
    height: 16px;
    fill: ${(props) => props.theme.colors.bg};
  }
`;

const BottomName = styled.div`
  font-size: 16px;
  font-weight: 600;
  color: ${(props) => props.theme.colors.white};
  @media ${device.tablet} {
    text-align: center;
  }
`;

const RoleText = styled.div`
  font-size: 16px;
  font-weight: 400;
  color: ${(props) => props.theme.colors.white};
  margin-top: 4px;
  @media ${device.tablet} {
    text-align: center;
  }
`;

const MemberCard: React.FC<Props> = ({
  img,
  name,
  desc,
  twitterUrl,
  facebookUrl,
  instagramUrl,
  linkedInUrl,
  role,
}) => {
  const [isHovered, setHover] = useState<boolean>(false);
  return (
    <Root>
      <Main
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <Img src={img} alt="" />
        {isHovered && (
          <Content>
            <Name>
              {name.split(" ").map((nn) => {
                return <Fragment key={nn}>{nn} </Fragment>;
              })}
            </Name>
            <div>
              <Desc>{desc}</Desc>
              <FlexBox alignItems="center" gap="12px" marginTop="20px">
                {twitterUrl && (
                  <SocialIcon href={twitterUrl} target="_blank">
                    <FaTwitter />
                  </SocialIcon>
                )}
                {facebookUrl && (
                  <SocialIcon href={facebookUrl} target="_blank">
                    <FaFacebookF />
                  </SocialIcon>
                )}
                {instagramUrl && (
                  <SocialIcon href={instagramUrl} target="_blank">
                    <FaInstagram />
                  </SocialIcon>
                )}
                {linkedInUrl && (
                  <SocialIcon href={linkedInUrl} target="_blank">
                    <FaLinkedinIn />
                  </SocialIcon>
                )}
              </FlexBox>
            </div>
          </Content>
        )}
        <Box marginTop="10px">
          <BottomName>{name}</BottomName>
          <RoleText>{role}</RoleText>
        </Box>
      </Main>
    </Root>
  );
};

export default MemberCard;
