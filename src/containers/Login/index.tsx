import styled from "styled-components";
import image from "assets/images/sneaker-intro-1.png";
import xPopup from "assets/images/logo/x-popup.svg";
import oPopup from "assets/images/logo/o-popup.svg";
import Login from "components/Login";
import { device } from "utils/device";
import { useEffect, useState } from "react";

const Root = styled.div`
  width: 100vw;
  height: 100vh;
`;

const ImgBox = styled.div`
  width: 70%;
  height: 70%;
  max-height: 650px;
  position: fixed;
  top: 50%;
  left: 50%;
  aspect-ratio: 1/1;
  transform: translate(-50%, -50%);
  background-image: url(${image});
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain, cover;

  @media ${device.mobile} {
    width: 100%;
    max-width: 600px;
  }
`;

const XLogoBox = styled.div`
  width: 50%;
  height: 50%;
  max-width: 600px;
  max-height: 600px;
  position: fixed;
  top: 50%;
  left: 50%;
  aspect-ratio: 1/1;
  transform: translate(-50%, -50%);
  background-image: url(${xPopup});
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain, cover;

  @media ${device.mobile} {
    width: 100%;
    max-width: 600px;
  }
`;

const OLogoBox = styled.div`
  width: 60%;
  height: 60%;
  max-width: 700px;
  max-height: 700px;
  position: fixed;
  top: 50%;
  left: 50%;
  aspect-ratio: 1/1;
  transform: translate(-50%, -50%);
  background-image: url(${oPopup});
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain, cover;

  @media ${device.mobile} {
    width: 100%;
    max-width: 600px;
  }
`;

const LoginContainer = () => {
  const [flag, setFlag] = useState<boolean>(false);

  useEffect(() => {
    setTimeout(() => {
      toggleFlag();
    }, 1000);
  });

  const toggleFlag = () => {
    setFlag((prev) => !prev);
  };

  return (
    <Root>
      {flag && <XLogoBox />}
      {!flag && <OLogoBox />}
      <ImgBox />
      <Login />
    </Root>
  );
};

export default LoginContainer;
