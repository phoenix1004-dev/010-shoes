import { styled } from "styled-components";
import { device } from "utils/device";

export const PageTitle = styled.div`
  font-size: 32px;
  font-weight: 600;
  color: ${(props) => props.theme.colors.white};

  @media ${device.mobile} {
    font-size: 24px;
  }
`;

export const PageMarker = styled.div`
  font-size: 16px;
  font-weight: 600;
  color: ${(props) => props.theme.colors.cyan};
  text-transform: uppercase;

  @media ${device.mobile} {
    font-size: 11px;
  }
`;

export const PageText = styled.div`
  font-size: 46px;
  font-weight: 400;
  color: ${(props) => props.theme.colors.white};

  @media ${device.mobile} {
    font-size: 22px;
  }
`;

export const Text = styled.div`
  font-size: 16px;
  color: ${(props) => props.theme.colors.white};
  line-height: 140%;

  @media ${device.mobile} {
    font-size: 14px;
  }
`;

export const SmallText = styled.div`
  font-size: 12px;
  color: ${(props) => props.theme.colors.white};
  line-height: 180%;

  @media ${device.mobile} {
    font-size: 10px;
  }
`;
