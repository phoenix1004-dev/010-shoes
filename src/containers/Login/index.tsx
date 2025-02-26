import styled from "styled-components";
import image from "assets/images/sneaker-intro-1.png";
import logo from "assets/images/logo/Logo 010.png";
import Login from "components/Login";
import { device } from "utils/device";

const Root = styled.div`
  width: 100vw;
  height: 100vh;
`;

const ImgBox = styled.div`
  width: 100%;
  height: 70%;
  max-height: 700px;
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
    max-width: 600px;
  }
`;

const LogoBox = styled.div`
  width: 60%;
  height: 70%;
  max-width: 900px;
  max-height: 700px;
  position: fixed;
  top: 50%;
  left: 50%;
  aspect-ratio: 2/1;
  transform: translate(-50%, -50%);
  background-image: url(${logo});
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain, cover;

  @media ${device.mobile} {
    width: 100%;
    max-width: 600px;
  }
`;

const LoginContainer = () => {
  return (
    <Root>
      <LogoBox />
      <ImgBox />
      <Login />
    </Root>
  );
};

export default LoginContainer;
