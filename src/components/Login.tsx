import { FC, useState } from "react";
import styled from "styled-components";
import { MdEmail } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { device } from "utils/device";

const Root = styled.div`
  max-width: 500px;
  min-width: 300px;
  width: 40%;
  max-height: 200px;
  height: 30%;
  position: fixed;
  bottom: 20px;
  right: 0;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 20px;
  padding: 40px 60px;

  @media ${device.tablet} {
    padding: 20px 40px;
  }

  @media ${device.mobileM} {
    padding: 20px;
    margin: 10px;
  }
`;

const Header = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const Content = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid black;
  gap: 10px;
`;

const Text = styled.p`
  width: 60%;
  color: black;
  margin: auto 0;
  text-align: end;

  @media ${device.mobile} {
    font-size: 15px;
    padding: 5px;
  }
`;

const EmailInput = styled.input`
  width: inherit;
  flex: 1;
  border: none;
  outline: none;
  color: #808080;
`;

const Submit = styled.p`
  font-weight: 700;
  color: black;
  cursor: pointer;

  &:hover {
    color: red;
  }
`;

const Login: FC = () => {
  const [email, setEmail] = useState<string>("");
  const navigate = useNavigate();

  const handleSubmit = () => {
    console.log(email);
    localStorage.setItem("user", "1");
    navigate("/welcome");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  return (
    <Root>
      <Header>
        <MdEmail size={30} color="gray" cursor={"pointer"} />
        <Text>Join the ONX family and get access to our page</Text>
      </Header>
      <Content>
        <EmailInput
          type="email"
          placeholder="Your email"
          value={email}
          onChange={handleChange}
        />
        <Submit onClick={handleSubmit}>Submit</Submit>
      </Content>
    </Root>
  );
};

export default Login;
