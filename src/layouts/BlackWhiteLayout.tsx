import Footer from "components/Footer";
import Nav from "components/Nav";
import CSS from "csstype";
import { styled } from "styled-components";
import { motion, AnimatePresence } from "framer-motion";

const Root = styled.div`
  min-height: 100vh;
`;

type Props = {
  children?: React.ReactNode;
  theme?: "dark" | "light";
  style?: CSS.Properties;
};
const BlackWhiteLayout: React.FC<Props> = ({
  children,
  theme = "dark",
  style,
}) => {
  return (
    <Root style={style}>
      <Nav />
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          {children}
        </motion.div>
      </AnimatePresence>
      <Footer />
    </Root>
  );
};

export default BlackWhiteLayout;
