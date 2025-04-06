import { SmallText } from "components/basic";
import { Box, FlexBox } from "components/basic/Box";
import { useCallback } from "react";
import { styled } from "styled-components";
import { device } from "utils/device";

const Root = styled.div<{
  height?: string | number;
}>`
  width: 100%;
  min-height: ${(props) => props.height || "100px"};
  min-width: 320px;
  position: relative;
  display: flex;

  @media ${device.mobile} {
    min-width: unset;
  }
`;

const Container = styled.div<{ left?: boolean; selected?: boolean }>`
  position: absolute;
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 100%;
  top: ${(props) => (props.left ? "0" : "50%")};
  bottom: ${(props) => (props.left ? "50%" : "0")};
  justify-content: ${(props) => (props.left ? "flex-end" : "flex-start")};
  transform: ${(props) =>
    props.left
      ? `translate(0px,${props.selected ? "15px" : "15px"})`
      : `translate(0px, ${props.selected ? "-13px" : "-13px"})`};
  cursor: pointer;

  @media ${device.mobile} {
    width: 50%;
    max-width: 50%;
    min-width: 50%;
    flex-direction: row;
    gap: 16px;
    left: ${(props) => (props.left ? 0 : "50%")};
    top: unset;
    bottom: unset;
    justify-content: ${(props) => (props.left ? "flex-end" : "flex-start")};
    transform: ${(props) =>
      props.left
        ? `translate(${props.selected ? "15px" : "15px"}, 0px)`
        : `translate(${props.selected ? "-13px" : "-13px"}, 0px)`};
  }
  @media ${device.mobileM} {
    gap: 8px;
  }
`;

const Square = styled.div<{ selected?: boolean }>`
  width: 28px;
  min-width: 28px;
  height: 28px;
  color: ${(props) =>
    props.selected ? props.theme.colors.white : props.theme.colors.grey};
  border-color: ${(props) =>
    props.selected ? props.theme.colors.white : props.theme.colors.grey};
  border-width: ${(props) => (props.selected ? "3px" : "2px")};
  border-style: solid;
  transform: rotate(45deg);
  position: relative;
  background-color: #0b0b18;
  display: flex;
  align-items: center;
  justify-content: center;

  &:after {
    content: "";
    display: ${(props) => (props.selected ? "block" : "none")};
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 150px;
    height: 150px;
    border-radius: 50%;
    background: radial-gradient(farthest-side at 50%, #4cfdf3, #000);
    opacity: 0.2;
  }

  div {
    transform: rotate(-45deg);
    font-size: 10px;
  }

  @media ${device.mobile} {
    margin-top: -14px;
  }
`;

const Line = styled.div<{ selected?: boolean }>`
  width: 0;
  height: 30px;
  min-height: 8px;
  transform: translate(14px, 0);
  border-left: 1px dashed
    ${(props) =>
      props.selected ? props.theme.colors.white : props.theme.colors.grey};

  @media ${device.mobile} {
    width: 30px;
    height: 0;
    min-width: 8px;
    min-height: unset;
    transform: translate(0, 0);
    border-bottom: 1px dashed
      ${(props) =>
        props.selected ? props.theme.colors.white : props.theme.colors.grey};
  }
`;

const Text = styled.div<{ selected?: boolean }>`
  font-size: 24px;
  color: ${(props) =>
    props.selected ? props.theme.colors.cyan : props.theme.colors.grey};
  text-wrap: nowrap;
  @media ${device.mobile} {
    font-size: 16px;
    margin-top: -8px;
  }
`;

const SmText = styled.div`
  font-size: 14px;
  text-wrap: wrap;
  margin-bottom: 6px;

  @media ${device.mobile} {
    font-size: 10px;
    margin-bottom: 3px;
  }
`;

type Props = {
  label: string;
  year: number;
  index: number;
  texts: string[];
  selected?: boolean;
  left?: boolean;
  id: number;
  onClick: (id: number) => void;
  height?: string;
};

const TimelineItem: React.FC<Props> = ({
  label,
  year,
  texts,
  index,
  selected,
  left,
  id,
  onClick,
  height,
}) => {
  const handleClick = useCallback(() => {
    onClick(id);
  }, [onClick, id]);

  return (
    <Root height={height}>
      <Container left={left} selected={selected} onClick={handleClick}>
        {left ? (
          <>
            <Text selected={selected}>
              <div>{`${label} / ${year}`}</div>
              {texts.length && (
                <Box marginTop="8px">
                  {texts.map((text, idx) => {
                    return (
                      <FlexBox key={idx} gap="2px" flexWrap="nowrap">
                        <SmallText>⋅</SmallText>
                        <SmText>{text}</SmText>
                      </FlexBox>
                    );
                  })}
                </Box>
              )}
            </Text>
            <Line selected={selected} />
            <Square selected={selected}>
              <div>{index < 10 && index > 0 ? `0${index}` : index}</div>
            </Square>
          </>
        ) : (
          <>
            <Square selected={selected}>
              <div>{index < 10 && index > 0 ? `0${index}` : index}</div>
            </Square>
            <Line selected={selected} />
            <Text selected={selected}>
              <div>{`${label} / ${year}`}</div>
              {texts.length && (
                <Box marginTop="8px" position="absolute">
                  {texts.map((text, idx) => {
                    return (
                      <FlexBox key={idx} gap="2px" flexWrap="nowrap">
                        <SmallText>⋅</SmallText>
                        <SmText>{text}</SmText>
                      </FlexBox>
                    );
                  })}
                </Box>
              )}
            </Text>
          </>
        )}
      </Container>
    </Root>
  );
};

export default TimelineItem;
