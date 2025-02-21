import styled from "styled-components";
import { FlexBox } from "./basic/Box";
import logoImg from "assets/images/logo/Logo 010.png";
import logoBlackImg from "assets/images/logo/Logo 010 black.png";
import { useLocation } from "react-router-dom";
import { MENU_ITEMS } from "../constants";
import { useCallback, useContext, useState } from "react";
import FullscreenNav from "./FullscreenNav";
import useStore from "hooks/useStore";
import { device } from "utils/device";
import { Link as RRDLink } from "react-router-dom";
import { CustomThemeContext } from "contexts/CustomThemeContext";
import { MenuIcon } from "./icons";

const Root = styled.div`
  padding: 50px 40px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 9999;

  @media ${device.tablet} {
    padding: 24px 26px;
    background-color: ${(props) => props.theme.colors.bg};
  }
`;

const Logo = styled.img`
  height: 30px;

  @media ${device.tablet} {
    height: 22px;
  }
  &:hover {
    cursor: pointer;
  }
`;

const MenuIconContainer = styled.div`
  height: 16px;
  margin-left: 100px;
  color: ${(props) => props.theme.colors.white};
  &:hover {
    cursor: pointer;
  }
`;

const Link = styled(RRDLink)`
  font-size: 16px;
  position: relative;
  text-decoration: none;
  display: inline-block;
  color: ${(props) => props.theme.colors.white};

  &:after {
    display: block;
    content: "";
    color: ${(props) => props.theme.colors.white};
    padding-bottom: 1px;
    border-bottom: solid 1px ${(props) => props.theme.colors.white};
    transform: scaleX(0);
    transition: transform 275ms ease-in-out;
    transform-origin: 100% 50%;
    margin-top: -1px;
  }

  &:hover:after {
    transform: scaleX(1);
    transform-origin: 0 50%;
    color: ${(props) => props.theme.colors.white};
    border-bottom: solid 1px ${(props) => props.theme.colors.white};
    transition: transform 275ms ease-in-out;
  }

  &.active:after {
    transform: scaleX(1);
    transform-origin: 0 50%;
    color: ${(props) => props.theme.colors.white};
    border-bottom: solid 1px ${(props) => props.theme.colors.white};
    transition: transform 275ms ease-in-out;
  }
`;

type Props = {
  linkColor?: string;
};

const Nav: React.FC<Props> = ({ linkColor }) => {
  const location = useLocation();
  const [showFull, setShowFull] = useState<boolean>(false);
  const { store } = useStore();
  const { currentTheme } = useContext(CustomThemeContext);

  const handleMenu = useCallback(() => {
    setShowFull(true);
  }, []);

  const isActive = useCallback(
    (url: string) => {
      if (!url) return false;
      if (url === "/") {
        if (location.pathname === "/") return true;
        return false;
      }
      return location.pathname.startsWith(url);
    },
    [location.pathname]
  );

  return (
    <Root>
      <FlexBox justifyContent="space-between" alignItems="center">
        <Logo
          src={currentTheme === "dark" ? logoImg : logoBlackImg}
          alt="logo"
        />
        <FlexBox alignItems="center">
          {!store.isMobile && (
            <FlexBox alignItems="center" gap="20px">
              {MENU_ITEMS.map((link) => {
                return (
                  <Link
                    key={link.url}
                    to={link.url}
                    className={isActive(link.url) ? "active" : ""}
                    style={{ color: linkColor || undefined }}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </FlexBox>
          )}

          <MenuIconContainer onClick={handleMenu}>
            <MenuIcon fill={linkColor || "currentColor"} />
          </MenuIconContainer>
        </FlexBox>
      </FlexBox>
      {showFull && <FullscreenNav onClose={() => setShowFull(false)} />}
    </Root>
  );
};

export default Nav;
