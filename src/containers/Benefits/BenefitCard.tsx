import { Text } from "components/basic";
import { styled } from "styled-components";

type Props = {
  img: string;
  text: string;
};

const Root = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
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

const BenefitCard: React.FC<Props> = ({ img, text }) => {
  return (
    <Root>
      <Img src={img} alt="" />
      <StyledText>{text}</StyledText>
    </Root>
  );
};

export default BenefitCard;
