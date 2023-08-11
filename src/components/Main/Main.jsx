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
    <>
      <div className="wrapper-header">
        <Header loggedIn={props.loggedIn} openNavigation={toggleNavigation} />
      </div>
      <main className="main">
        <Promo />
        <NavTab />
        <AboutProject />
        <Techs />
        <AboutMe />
      </main>
      <Navigation
        isNavigationOpen={isNavigationOpen}
        setIsNavigationOpen={setIsNavigationOpen}
        closeNavigation={toggleNavigation}
      />
      <Footer />
    </>
  );
}

export default Main;
