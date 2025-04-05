import { useCallback } from "react";
import { styled } from "styled-components";
import TimelineItem from "./TimelineItem";
import { device } from "utils/device";

const Root = styled.div<{ width?: string | number; height?: string | number }>`
  width: ${(props) => props.width || "100%"};
  height: ${(props) => props.height || "100%"};
  display: flex;
  padding-left: 70px;

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
    id: number | string;
    label: string;
    year: number;
    texts: string[];
  }[];

  selected?: number | string;
  onTabChange: (id: number | string) => void;
};

const Timeline: React.FC<Props> = ({ data, selected, onTabChange }) => {
  const handleClick = useCallback(
    (id: number | string) => {
      onTabChange(id);
    },
    [onTabChange]
  );

  return (
    <Root>
      {data.map(({ id, label, year, texts }, index) => {
        return (
          <TimelineItem
            key={id}
            id={id}
            label={label}
            index={index + 1}
            year={year}
            texts={texts}
            left={index % 2 === 1}
            selected={selected === id}
            onClick={handleClick}
            height="140px"
          />
        );
      })}
    </Root>
  );
};

export default Timeline;
