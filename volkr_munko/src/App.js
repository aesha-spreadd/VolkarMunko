import React from 'react';
import Footer from './Components/Footer';
import Banner from './Components/Banner';
import Finance from './Components/Finance';
import Contact from './Components/Contact';
import Advantages from './Components/Advantages';
import WealthManagement from './Components/WealthManagement';
import Products from './Components/Products';
import { cardData, advantagesList, wealthManagementData } from './cardsData';
import { GlobalStyles } from './GlobalStyles';

const App = () => {
  return (
    <div>
      <GlobalStyles />
      <Banner />
      <Finance />
      <Products data={cardData} />
      <Advantages data={advantagesList} />
      <WealthManagement data={wealthManagementData} />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
