import { FC, useEffect } from "react";
import styled from "styled-components";
import image from "assets/images/intro-animation.gif";
import Login from "components/Login";
import { useNavigate } from "react-router-dom";

const Root = styled.div`
  width: 100vw;
  height: 100vh;
`;

const ImgBox = styled.div`
  width: 40%;
  height: 40%;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-image: url(${image});
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain, cover;
`;

const LoginPage: FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (sessionStorage.getItem("user") === "2") {
      navigate(-1);
    }
  });

  return (
    <Root>
      <ImgBox />
      <Login />
    </Root>
  );
};

export default LoginPage;
