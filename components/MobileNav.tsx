
import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';

const MobileNav: React.FC = () => {
  const location = useLocation();

  return (
    <nav className="fixed bottom-0 left-0 right-0 h-20 bg-surface-light dark:bg-surface-dark border-t border-gray-200 dark:border-gray-800 flex items-center justify-around z-40 pb-4">
      <NavLink 
        to="/dashboard"
        className={`flex flex-col items-center gap-1 w-16 ${location.pathname === '/dashboard' ? 'text-primary' : 'text-gray-400'}`}
      >
        <span className={`material-symbols-outlined text-[26px] ${location.pathname === '/dashboard' ? 'filled' : ''}`}>home</span>
        <span className="text-[10px] font-bold">Home</span>
      </NavLink>

      <NavLink 
        to="/singlesource"
        className={`flex flex-col items-center gap-1 w-16 ${location.pathname === '/singlesource' ? 'text-primary' : 'text-gray-400'}`}
      >
        <span className="material-symbols-outlined text-[26px]">verified_user</span>
        <span className="text-[10px] font-bold">Verify</span>
      </NavLink>

      <NavLink 
        to="/brayjobs"
        className={`flex flex-col items-center gap-1 w-16 ${location.pathname === '/brayjobs' ? 'text-primary' : 'text-gray-400'}`}
      >
        <span className="material-symbols-outlined text-[26px]">work</span>
        <span className="text-[10px] font-bold">Jobs</span>
      </NavLink>

      <NavLink 
        to="/doublething"
        className={`flex flex-col items-center gap-1 w-16 ${location.pathname === '/doublething' ? 'text-primary' : 'text-gray-400'}`}
      >
        <span className="material-symbols-outlined text-[26px]">health_and_safety</span>
        <span className="text-[10px] font-bold">Care</span>
      </NavLink>
    </nav>
  );
};

export default MobileNav;
