import { useState } from "react";

import Header from "../Header/Header";
import Promo from "../Promo/Promo";
import NavTab from "../NavTab/NavTab";
import AboutProject from "../AboutProject/AboutProject";
import Techs from "../Techs/Techs";
import AboutMe from "../AboutMe/AboutMe";
import Footer from "../Footer/Footer";
import Navigation from "../Navigation/Navigation";
import "./Main.css";

function Main(props) {
  const [isNavigationOpen, setIsNavigationOpen] = useState(false);

  const toggleNavigation = () => {
    setIsNavigationOpen(!isNavigationOpen);
  };

  return (
    <main className="main">
      <div className="main__header-container">
        <Header loggedIn={props.loggedIn} openNavigation={toggleNavigation} />
      </div>
      <Promo />
      <NavTab />
      <AboutProject />
      <Techs />
      <AboutMe />
      <Navigation
        isNavigationOpen={isNavigationOpen}
        setIsNavigationOpen={setIsNavigationOpen}
        closeNavigation={toggleNavigation}
      />
      <Footer />
    </main>
  );
}

export default Main;
