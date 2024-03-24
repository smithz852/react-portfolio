import React from 'react';

import { PortfolioNavbar } from './Components/PortfolioNavbar'

import { Outlet } from 'react-router';

export function App() {
  return (
    <>
      <PortfolioNavbar />
      <main>
      <Outlet />
      </main>
      
     
    </>
  );
}

 

// export default App
