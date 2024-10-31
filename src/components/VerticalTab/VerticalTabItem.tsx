import { useCallback } from "react";
import { styled } from "styled-components";
import { device } from "utils/device";

const Root = styled.div<{
  height?: string | number;
}>`
  width: 100%;
  height: ${(props) => props.height || "100px"};
  position: relative;
  display: flex;
  align-items: center;
`;

const Container = styled.div<{ left?: boolean; selected?: boolean }>`
  position: absolute;
  display: flex;
  align-items: center;
  gap: 36px;
  width: 50%;
  left: ${(props) => (props.left ? 0 : "50%")};
  transform: ${(props) =>
    props.left
      ? `translate(${props.selected ? "10px" : "4px"}, 0px)`
      : `translate(${props.selected ? "-10px" : "-4px"}, 0px)`};
  cursor: pointer;

  @media ${device.mobile} {
    gap: 26px;
  }
  @media ${device.mobileM} {
    gap: 16px;
  }
`;

const Square = styled.div<{ selected?: boolean }>`
  width: ${(props) => (props.selected ? "20px" : "8px")};
  min-width: ${(props) => (props.selected ? "20px" : "8px")};
  height: ${(props) => (props.selected ? "20px" : "8px")};
  background-color: ${(props) =>
    props.selected ? props.theme.colors.white : props.theme.colors.grey};
  transform: rotate(45deg);
  position: relative;

  &:after {
    content: "";
    display: ${(props) => (props.selected ? "block" : "none")};
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background: radial-gradient(farthest-side at 50%, #4cfdf3, #000);
    opacity: 0.2;
  }
`;

const Line = styled.div<{ selected?: boolean }>`
  height: 0;
  border-bottom: 1px dashed
    ${(props) =>
      props.selected ? props.theme.colors.white : props.theme.colors.grey};
  width: 100%;
`;

const Text = styled.div<{ selected?: boolean }>`
  max-width: 200px;
  font-size: 16px;
  color: ${(props) =>
    props.selected ? props.theme.colors.cyan : props.theme.colors.grey};
  // text-wrap: nowrap;

  @media (min-width: 1400px) {
    text-wrap: nowrap;
  }
`;

type Props = {
  label: string;
  selected?: boolean;
  left?: boolean;
  id: string | number;
  onClick: (id: number | string) => void;
};

const VerticalTabItem: React.FC<Props> = ({
  label,
  selected,
  left,
  id,
  onClick,
}) => {
  const handleClick = useCallback(() => {
    onClick(id);
  }, [onClick, id]);

  return (
    <Root>
      <Container left={left} selected={selected} onClick={handleClick}>
        {left ? (
          <>
            <Text selected={selected}>{label}</Text>
            <Line selected={selected} />
            <Square selected={selected} />
          </>
        ) : (
          <>
            <Square selected={selected} />
            <Line selected={selected} />
            <Text selected={selected}>{label}</Text>
          </>
        )}
      </Container>
    </Root>
  );
};

export default VerticalTabItem;
