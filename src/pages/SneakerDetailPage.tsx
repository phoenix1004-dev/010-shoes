import SneakerDetail from "containers/SneakerDetail";
import useStore from "hooks/useStore";
import WithAppbar from "layouts/WithAppbar";

const SneakerDetailPage = () => {
  const { store } = useStore();
  return (
    <WithAppbar linkColor={store.isTablet ? undefined : "#0b0b18"}>
      <SneakerDetail />
    </WithAppbar>
  );
};

export default SneakerDetailPage;
