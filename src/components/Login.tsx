import { FC } from "react";
import styled from "styled-components";
import { FaTwitter } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { device } from "utils/device";

const Root = styled.div`
  max-width: 500px;
  min-width: 300px;
  width: 40%;
  max-height: 200px;
  height: 20%;
  position: fixed;
  bottom: 20px;
  right: 0;
  background-color: white;
  display: flex;
  margin: 20px;
  padding: 20px;
`;

const Text = styled.p`
  width: 50%;
  color: black;
  padding: 20px;
  margin: auto 0;

  @media ${device.mobile} {
    font-size: 15px;
    padding: 5px;
  }
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
        <FaTwitter
          size={30}
          color="gray"
          cursor={"pointer"}
          onClick={handleComplete}
        />
        <p style={{ margin: 0 }}>OR</p>
        <MdEmail
          size={30}
          color="gray"
          cursor={"pointer"}
          onClick={handleComplete}
        />
      </ButtonGroup>
    </Root>
  );
};

export default Login;
