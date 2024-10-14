import Welcome from "components/Welcome";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const WelcomePage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (sessionStorage.getItem("user") === "1") {
      navigate(-1);
    }
  });

  return <Welcome />;
};

export default WelcomePage;
