import { FC, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import WithAppbar from "layouts/WithAppbar";
import LoginContainer from "containers/Login";

const LoginPage: FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("user") === "2") {
      navigate(-1);
    }
  });

  return (
    <WithAppbar>
      <LoginContainer />
    </WithAppbar>
  );
};

export default LoginPage;
