import { FC, useState } from "react";
import styled from "styled-components";
import { MdEmail } from "react-icons/md";
import { RiTwitterXFill } from "react-icons/ri";
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

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PopupContainer = styled.div`
  background: white;
  padding: 20px;
  border-radius: 8px;
  width: 300px;
  text-align: center;
  position: relative;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  color: black;
  border: none;
  font-size: 16px;
  cursor: pointer;
`;

const Input = styled.input`
  width: 100%;
  padding: 8px;
  margin: 10px 0;
  color: black;
  border: 1px solid #ddd;
  border-radius: 4px;
`;

const Button = styled.button`
  width: 100%;
  background-color: black;
  color: white;
  padding: 8px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background-color: #2563eb;
  }
`;

type PopupProps = {
  onClose: () => void;
};

const EmialPopup: FC<PopupProps> = ({ onClose }) => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleComplete = () => {
    localStorage.setItem("user", "1");
    navigate("/welcome");
  };

  const handleSubmit = () => {
    alert(`Submitted email: ${email}`);
    onClose();
    handleComplete();
  };

  return (
    <Overlay>
      <PopupContainer>
        <CloseButton onClick={onClose}>&times;</CloseButton>
        <p className="text-gray-600 mx-[16px]">
          Please enter your email in order to be one of the first to see the
          shoe made for the digital creators by creators.
        </p>
        <Input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Button onClick={handleSubmit}>Submit</Button>
      </PopupContainer>
    </Overlay>
  );
};

const XPopup: FC<PopupProps> = ({ onClose }) => {
  const navigate = useNavigate();

  const handleComplete = () => {
    localStorage.setItem("user", "1");
    navigate("/welcome");
  };

  const handleSubmit = () => {
    onClose();
    handleComplete();
  };

  return (
    <Overlay>
      <PopupContainer>
        <CloseButton onClick={onClose}>&times;</CloseButton>
        <p className="text-gray-600 my-[16px]">
          Please follow us on X under @010sneaker in order to be one of the
          first to see the shoe made for the digital creators by creators.
        </p>
        <Button onClick={handleSubmit}>Done</Button>
      </PopupContainer>
    </Overlay>
  );
};

const Login: FC = () => {
  const [isEmailPopup, setIsEmailPopup] = useState(false);
  const [isXPopup, setIsXPopup] = useState(false);

  const openEmailPopup = () => {
    setIsEmailPopup(true);
  };

  const closeEmailPopup = () => {
    setIsEmailPopup(false);
  };

  const openXPopup = () => {
    setIsXPopup(true);
  };

  const closeXPopup = () => {
    setIsXPopup(false);
  };

  return (
    <Root>
      <Text>Join the 010 family and get access to our page</Text>
      <ButtonGroup>
        <RiTwitterXFill
          size={30}
          color="gray"
          cursor={"pointer"}
          onClick={openXPopup}
        />
        <p style={{ margin: 0 }}>OR</p>
        <MdEmail
          size={30}
          color="gray"
          cursor={"pointer"}
          onClick={openEmailPopup}
        />
      </ButtonGroup>
      {isEmailPopup && <EmialPopup onClose={closeEmailPopup} />}
      {isXPopup && <XPopup onClose={closeXPopup} />}
    </Root>
  );
};

export default Login;
