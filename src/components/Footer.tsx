import { styled } from "styled-components";
import { FlexBox } from "./basic/Box";
import { SOCIAL_LINKS } from "../constants";
import useStore from "hooks/useStore";

const Root = styled.div`
  position: fixed;
  left: 50px;
  bottom: 29px;
  transform-origin: top left;
  transform: rotate(-90deg);
`;

const Link = styled.a`
  display: flex;
  font-size: 14px;
  color: ${(props) => props.theme.colors.text};
  opacity: 0.5;
  gap: 3px;
  text-decoration: none;
  &:hover {
    opacity: 1;
  }
`;

const Footer = () => {
  const { store } = useStore();

  if (store.isMobile) return null;

  return (
    <Root>
      <FlexBox alignItems="center" gap="50px">
        {SOCIAL_LINKS.map((link) => {
          return (
            <Link href={link.url} key={link.url} target="_blank">
              {link.label}
            </Link>
          );
        })}
      </FlexBox>
    </Root>
  );
};

export default Footer;
