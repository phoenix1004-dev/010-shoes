import styled from "styled-components";
import Typewriter from "typewriter-effect";
import image from "assets/images/sneaker-intro-4.png";
import { useNavigate } from "react-router-dom";

const Root = styled.div`
  width: 100vw;
  height: 100vh;
`;

const Container = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  width: 70vw;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ImgBox = styled.div`
  width: 100vw;
  height: 40vh;
  aspect-ratio: 1/1;
  background-image: url(${image});
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain, cover;
`;

const Text = styled.p`
  font-size: 56px;
  text-align: center;
`;

const Welcome = () => {
  const navigate = useNavigate();

  const handleWelcome = () => {
    navigate("/about");
  };

  return (
    <Root>
      <Container>
        <ImgBox />
        <Text>
          <Typewriter
            onInit={(Typewriter) => {
              Typewriter.callFunction(() => handleWelcome());
            }}
            options={{
              strings: `<span style="font-size: 70px; font-weight: bold;">WELCOME</span> TO O-TEN`,
              cursor: "_",
              autoStart: true,
              loop: false,
              delay: 75,
              deleteSpeed: 30,
            }}
          />
        </Text>
      </Container>
    </Root>
  );
};

export default Welcome;
