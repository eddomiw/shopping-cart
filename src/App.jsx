import Header from "./components/Header";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";
import PropTypes from "prop-types";

function App({ cartItems }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header cartItems={cartItems} />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;

App.propTypes = {
  cartItems: PropTypes.object.isRequired,
};
