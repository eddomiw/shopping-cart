import Header from "./components/Header";
import Footer from "./components/Footer";
import FooterCopyright from "./components/FooterCopyright";
import { Outlet } from "react-router-dom";
import PropTypes from "prop-types";

function App({ cartItems }) {
  return (
    <div className="flex flex-col ">
      <Header cartItems={cartItems} />
      <Outlet />
      <Footer />
      <FooterCopyright />
    </div>
  );
}

export default App;

App.propTypes = {
  cartItems: PropTypes.object.isRequired,
};
