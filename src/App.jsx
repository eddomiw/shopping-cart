import Header from "./components/Header";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";
import PropTypes from "prop-types";

function App({ itemCounts }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header itemCounts={itemCounts} />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;

App.propTypes = {
  itemCounts: PropTypes.object.isRequired,
};
