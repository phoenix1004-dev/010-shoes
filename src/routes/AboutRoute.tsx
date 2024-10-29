import FullPageNav from "components/FullPageNav";
import useFullPageSlide from "hooks/useFullPageSlide";
import useStore from "hooks/useStore";
import { Outlet } from "react-router-dom";

const urls = [
  "/about",
  "/about/intro",
  "/about/main",
  "/about/benefits",
  "/about/team",
  "/about/faq",
];

const AboutRoute = () => {
  const { store } = useStore();
  useFullPageSlide(urls);
  return (
    <>
      <FullPageNav urls={urls} horizontal={store.isTablet} />
      <Outlet />
    </>
  );
};

export default AboutRoute;
