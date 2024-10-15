import { Children, useCallback, useEffect, useState } from "react";
import useEmblaCarousel, {
  EmblaCarouselType,
  EmblaOptionsType,
} from "embla-carousel-react";
import { DotButton } from "./DotButton";
import { NextArrow } from "./NextArrow";
import { PrevArrow } from "./PrevArow";
import styled from "styled-components";

const Root = styled.div`
  position: relative;
  height: 100%;

  .carousel__container {
    display: flex;
    height: 100%;
  }

  .next-arrow {
    position: absolute;
    top: 50%;
    right: 0;
  }

  .prev-arrow {
    position: absolute;
    top: 50%;
    left: 0;
  }

  .carousel__Dots {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 2rem 0 1rem 0;
  }
`;

type Props = {
  children: React.ReactNode;
  dotSelectedColor?: string;
  dotColor?: string;
  arrows?: boolean;
  dots?: boolean;
  selectedIndex?: number;
  onClick?: (index: number) => void;
  option?: EmblaOptionsType;
  onEmbla?: (embla: EmblaCarouselType) => void;
  containerStyle?: React.CSSProperties;
  childStyle?: React.CSSProperties;
  dotStyle?: React.CSSProperties;
  rootStyle?: React.CSSProperties;
  className?: string;
};

export const Carousel: React.FC<Props> = ({
  children,
  dotSelectedColor = "#72A9D9",
  dotColor,
  arrows = false,
  dots = false,
  selectedIndex = 0,
  onClick = null,
  option = {
    slidesToScroll: 1,
    align: "start",
  },
  onEmbla,
  containerStyle,
  childStyle,
  dotStyle,
  rootStyle,
  className,
}) => {
  const [emblaRef, embla] = useEmblaCarousel(option);

  useEffect(() => {
    if (onEmbla && embla) {
      onEmbla(embla);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [embla]);

  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const scrollPrev = useCallback(() => embla && embla.scrollPrev(), [embla]);
  const scrollNext = useCallback(() => embla && embla.scrollNext(), [embla]);
  const scrollTo = useCallback(
    (index: number) => embla && embla.scrollTo(index),
    [embla]
  );

  const onSelect = useCallback(() => {
    if (!embla) return;
    onClick && onClick(embla.selectedScrollSnap());
    setPrevBtnEnabled(embla.canScrollPrev());
    setNextBtnEnabled(embla.canScrollNext());
  }, [embla, onClick]);

  useEffect(() => {
    if (!embla) return;
    onSelect();
    setScrollSnaps(embla.scrollSnapList());
    embla.on("select", onSelect);
  }, [embla, onSelect]);

  useEffect(() => {
    if (!embla) return;
    embla.scrollTo(selectedIndex);
  }, [embla, selectedIndex]);

  return (
    <Root ref={emblaRef} style={rootStyle} className={className}>
      <div className="carousel__container" style={containerStyle}>
        {Children.map(children, (child) => (
          <div className="carousel__slide" style={childStyle}>
            {child}
          </div>
        ))}
      </div>
      {arrows && (
        <>
          <NextArrow
            className="next-arrow"
            onClick={scrollNext}
            disabled={!nextBtnEnabled}
          />
          <PrevArrow
            className="prev-arrow"
            onClick={scrollPrev}
            disabled={!prevBtnEnabled}
          />
        </>
      )}
      {dots && (
        <div className="carousel__Dots" style={dotStyle}>
          {scrollSnaps.map((_, index) => (
            <DotButton
              aria-label={index}
              key={`dots-${index}`}
              selected={index === selectedIndex}
              onClick={() => {
                scrollTo(index);
              }}
              color={dotColor}
              selectedColor={dotSelectedColor}
            />
          ))}
        </div>
      )}
    </Root>
  );
};
