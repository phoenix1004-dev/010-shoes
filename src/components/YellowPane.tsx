import { styled } from "styled-components";

type Props = {
  className?: string;
  children?: React.ReactNode;
};

const Root = styled.div`
  background-color: ${(props) => props.theme.colors.secondaryBg};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.theme.colors.black};
  font-size: 16px;
`;

const YellowPane: React.FC<Props> = ({ className, children }) => {
  return <Root className={className}>{children}</Root>;
};

export default YellowPane;
