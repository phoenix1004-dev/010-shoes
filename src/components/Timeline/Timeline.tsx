import { useCallback } from "react";
import { styled } from "styled-components";
import TimelineItem from "./TimelineItem";
import { device } from "utils/device";
import Divider from "./Divider";

const Root = styled.div<{ width?: string | number; height?: string | number }>`
  width: ${(props) => props.width || "100%"};
  height: ${(props) => props.height || "100%"};
  display: flex;

  &:before {
    content: "";
    position: absolute;
    width: 100%;
    height: 0;
    border-top: 2px solid #6e6e75;
    left: 100px;
    top: 50%;
  }

  @media ${device.mobile} {
    overflow-x: unset;
    display: block;
    padding: 40px 0 0 0;
    position: relative;
    &:before {
      content: "";
      position: absolute;
      width: 0;
      height: 100%;
      border-left: 2px solid #6e6e75;
      top: 0;
      left: 50%;
    }
  }
`;

type Props = {
  data: {
    year: number;
    originColor: string;
    nextColor: string;
    children: { id: number; label: string; texts: string[] }[];
  }[];

  selected?: number | string;
  onTabChange: (id: number) => void;
};

const Timeline: React.FC<Props> = ({ data, selected, onTabChange }) => {
  const handleClick = useCallback(
    (id: number) => {
      onTabChange(id);
    },
    [onTabChange]
  );

  return (
    <Root>
      {data.map(({ year, originColor, nextColor, children }, index) => (
        <div
          className="md:flex pt-[40px] md:pl-[70px]"
          style={{ backgroundColor: originColor }}
        >
          {children.map(({ id, label, texts }) => {
            return (
              <TimelineItem
                key={id}
                id={id}
                label={label}
                index={id}
                year={year}
                texts={texts}
                left={(id - 1) % 2 === 1}
                selected={selected === id}
                onClick={handleClick}
                height="140px"
              />
            );
          })}
          {index < data.length - 1 && (
            <Divider
              year={year}
              firstColor={originColor}
              secondColor={nextColor}
            />
          )}
        </div>
      ))}
    </Root>
  );
};

export default Timeline;
