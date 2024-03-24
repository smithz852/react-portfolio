import React from 'react';

import { PortfolioNavbar } from './Components/PortfolioNavbar'

import { Outlet } from 'react-router';
import { FooterComp } from './Components/FooterComp';

export function App() {
  return (
    <>
      <PortfolioNavbar />
      <main>
      <Outlet />
      </main>
      <FooterComp />
      
     
    </>
  );
}

 

// export default App
