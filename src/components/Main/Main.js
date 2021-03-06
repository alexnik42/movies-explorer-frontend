import "./Main.css";
import Header from "../Header/Header";
import Promo from "../Promo/Promo";
import AboutProject from "../AboutProject/AboutProject";
import Techs from "../Techs/Techs";
import AboutMe from "../AboutMe/AboutMe";
import Footer from "../Footer/Footer";

function Main({ loggedIn, menuPopupOpen, menuPopupClose }) {
  return (
    <>
      <Header
        loggedIn={loggedIn}
        menuPopupOpen={menuPopupOpen}
        menuPopupClose={menuPopupClose}
      />
      <Promo />
      <AboutProject />
      <Techs />
      <AboutMe />
      <Footer />
    </>
  );
}

export default Main;
