import WelcomeContainer from "containers/Welcome";
import WithAppbar from "layouts/WithAppbar";

const WelcomePage = () => {
  return (
    <WithAppbar>
      <WelcomeContainer />
    </WithAppbar>
  );
};

export default WelcomePage;
