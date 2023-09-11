import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';

import { AppBar } from '../AppBar/AppBar';

export const Layout = ({handleLogin, handleOpenCart}) => {
  return (
    <div >    
      <AppBar handleLogin={handleLogin} handleOpenCart={handleOpenCart}/> 
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>     
    </div>
  );
};