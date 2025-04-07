import { FC } from "react";
import styled from "styled-components";
import { device } from "utils/device";

type Props = {
  year: number;
  firstColor: string;
  secondColor: string;
};

const Root = styled.div`
  height: 100%;
  min-width: 250px;
  background-color: transparent;
  position: relative;
  display: flex;

  @media ${device.mobile} {
    height: 70px;
    display: block;
  }
`;

const Text = styled.div`
  width: max-content;
  text-align: center;
  color: #fdf84c;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 16px;
  font-weight: 600;
  background-color: #0b0b18;

  @media ${device.mobile} {
    font-size: 12px;
  }
`;

const Symbol = styled.span`
  font-size: 24px;
  margin-left: 10px;
  margin-right: 10px;

  @media ${device.mobile} {
    font-size: 16px;
    margin-left: 5px;
    margin-right: 5px;
  }
`;

const Line = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  height: 100%;
  border-left-width: 2px;
  border-left-style: dashed;
  border-left-color: #24fcff80;
  border-image: repeating-linear-gradient(
      to bottom,
      #24fcff80 0,
      #24fcff80 20px,
      transparent 20px,
      transparent 30px
    )
    1;

  @media ${device.mobile} {
    top: 50%;
    left: 0;
    width: 100%;
    height: 0;
    border-left: none;
    border-bottom-width: 2px;
    border-bottom-style: dashed;
    border-bottom-color: #24fcff80;
    border-image: repeating-linear-gradient(
        to right,
        #24fcff80 0,
        #24fcff80 20px,
        transparent 20px,
        transparent 30px
      )
      1;
  }
`;

const FirstPart = styled.div<{ color: string }>`
  width: 50%;
  height: 100%;
  position: relative;
  background-color: ${(props) => props.color};

  @media ${device.mobile} {
    width: 100%;
    height: 50%;
  }
`;

const SecondPart = styled.div<{ color: string }>`
  width: 50%;
  height: 100%;
  position: relative;
  background-color: ${(props) => props.color};

  @media ${device.mobile} {
    width: 100%;
    height: 50%;
  }
`;

const FirstYear = styled.div`
  position: absolute;
  top: 20%;
  right: -5px;
  transform: rotate(-90deg) translateX(50%);
  color: #fdf84c;

  @media ${device.mobile} {
    top: unset;
    left: 5%;
    bottom: 0;
    transform: none;
  }
`;

const SecondYear = styled.div`
  position: absolute;
  top: 20%;
  left: -5px;
  transform: rotate(-90deg) translateX(50%);
  color: #fdf84c;

  @media ${device.mobile} {
    top: 3px;
    left: 5%;
    bottom: unset;
    transform: none;
  }
`;

const Divider: FC<Props> = ({ year, firstColor, secondColor }) => {
  return (
    <Root>
      <FirstPart color={firstColor}>
        <FirstYear>{2000 + year}</FirstYear>
      </FirstPart>
      <SecondPart color={secondColor}>
        <SecondYear>{2000 + year + 1}</SecondYear>
      </SecondPart>
      <Line />
      <Text>
        <Symbol>[</Symbol>MINT NFT COLLECTION<Symbol>]</Symbol>
      </Text>
    </Root>
  );
};

export default Divider;
