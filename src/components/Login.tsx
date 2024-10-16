import { FC } from "react";
import styled from "styled-components";
import { FaDiscord } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const Root = styled.div`
  max-width: 500px;
  min-width: 300px;
  width: 40%;
  max-height: 200px;
  height: 20%;
  position: fixed;
  bottom: 0%;
  right: 0%;
  background-color: white;
  display: flex;
  margin: 40px;
`;

const Text = styled.p`
  width: 50%;
  color: black;
  padding: 20px;
  margin: auto 0;
`;

const ButtonGroup = styled.div`
  width: 50%;
  color: black;
  padding: 20px;
  margin: auto 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Login: FC = () => {
  const navigate = useNavigate();

  const handleComplete = () => {
    localStorage.setItem("user", "1");
    navigate("/welcome");
  };

  return (
    <Root>
      <Text>Join the ONX family and get access to our page</Text>
      <ButtonGroup>
        <FaDiscord size={30} cursor={"pointer"} onClick={handleComplete} />
        <p style={{ margin: 0 }}>OR</p>
        <MdEmail size={30} cursor={"pointer"} onClick={handleComplete} />
      </ButtonGroup>
    </Root>
  );
};

export default Login;
