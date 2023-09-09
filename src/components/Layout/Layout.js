import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';

import { AppBar } from '../AppBar/AppBar';

export const Layout = ({handleLogin}) => {
  return (
    <div >    
      <AppBar handleLogin={handleLogin}/> 
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>     
    </div>
  );
};