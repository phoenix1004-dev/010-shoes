import WelcomeContainer from "containers/Welcome";
import WithAppbar from "layouts/WithAppbar";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const WelcomePage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("user") === "2") {
      navigate(-1);
    }
  });

  return (
    <WithAppbar>
      <WelcomeContainer />
    </WithAppbar>
  );
};

export default WelcomePage;
