import { Text } from "components/basic";
import { styled } from "styled-components";
import { forwardRef } from "react";

type Props = {
  img: string;
  text: string;
};

const Root = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 60px;
  cursor-event: none;
`;

const Img = styled.img`
  width: 90px;
  height: 90px;
  object-fit: cover;
`;

const StyledText = styled(Text)`
  max-width: 300px;
  text-align: center;
`;

const BenefitCard = forwardRef<HTMLDivElement, Props>(({ img, text }, ref) => {
  return (
    <Root ref={ref}>
      <Img src={img} alt="" />
      <StyledText>{text}</StyledText>
    </Root>
  );
});

export default BenefitCard;
