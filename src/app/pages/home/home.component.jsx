import React from "react";
import Feature from "../../components/molecules/features/features.component";
import Footer from "../../components/molecules/footer/footer.component";
import FreeAccount from "../../components/molecules/free-account/free-account.component";
import Main from "../../components/molecules/main/main.component";
import NavSection from "../../components/molecules/nav-section/nav-section.component";
import Solutions from "../../components/molecules/solutions/solutions.component";
import Support from "../../components/molecules/support/support.component";

const Home = () => {
    
    return (
      <div>
      <NavSection />
      <Main />
      <Feature />
      <Solutions />
      <Support />
      <FreeAccount />
      <Footer />
      </div>
    );
  };
  
export default Home;
  