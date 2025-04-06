import { FC } from "react";
import styled from "styled-components";

type Props = {
  year: number;
};

const Root = styled.div`
  height: 100%;
  min-width: 300px;
  background-color: transparent;
  position: relative;
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

const Divider: FC<Props> = ({ year }) => {
  return (
    <Root>
      <Line />
      <Text>
        <Symbol>[</Symbol>MINT NFT COLLECTION<Symbol>]</Symbol>
      </Text>
    </Root>
  );
};

export default Divider;
