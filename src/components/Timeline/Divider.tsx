import { FC } from "react";
import styled from "styled-components";

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
`;

const Symbol = styled.span`
  font-size: 24px;
  margin-left: 10px;
  margin-right: 10px;
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
`;

const FirstPart = styled.div<{ color: string }>`
  width: 50%;
  height: 100%;
  background-color: ${(props) => props.color};
`;

const SecondPart = styled.div<{ color: string }>`
  width: 50%;
  height: 100%;
  background-color: ${(props) => props.color};
`;

const Divider: FC<Props> = ({ year, firstColor, secondColor }) => {
  return (
    <Root>
      <Line />
      <Text>
        <Symbol>[</Symbol>MINT NFT COLLECTION<Symbol>]</Symbol>
      </Text>
      <FirstPart color={firstColor} />
      <SecondPart color={secondColor} />
    </Root>
  );
};

export default Divider;
