
import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';

interface SidebarProps {
  toggleTheme: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ toggleTheme }) => {
  const location = useLocation();

  return (
    <aside className="fixed left-0 top-0 h-full w-20 bg-background-dark flex flex-col items-center py-8 gap-8 border-r border-white/10 z-50">
      <NavLink to="/dashboard" className="size-10 text-white hover:text-primary transition-colors mb-4">
        {/* Logo SVG White */}
        <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            <path d="M20 34C27.732 34 34 27.732 34 20C34 13.0825 29.027 7.34263 22.5 6.09632" stroke="currentColor" strokeWidth="4.5" strokeLinecap="round"/>
            <path d="M17.5 6.09632C10.973 7.34263 6 13.0825 6 20C6 27.732 12.268 34 20 34" stroke="currentColor" strokeWidth="4.5" strokeLinecap="round"/>
            <circle cx="20" cy="5" r="3.5" fill="currentColor"/>
        </svg>
      </NavLink>

      <nav className="flex flex-col gap-6 w-full items-center">
        <NavItem 
          icon="dashboard" 
          to="/dashboard"
          active={location.pathname === '/dashboard'} 
        />
        <NavItem 
          icon="verified_user" 
          to="/singlesource"
          active={location.pathname === '/singlesource'} 
        />
        <NavItem 
          icon="work" 
          to="/brayjobs"
          active={location.pathname === '/brayjobs'} 
        />
        <NavItem 
          icon="health_and_safety" 
          to="/doublething"
          active={location.pathname === '/doublething'} 
        />
        <NavItem 
          icon="code" 
          to="/dev-tools"
          active={location.pathname === '/dev-tools'} 
        />
      </nav>

      <div className="mt-auto flex flex-col gap-6">
        <button onClick={toggleTheme} className="text-gray-500 hover:text-white transition-colors">
          <span className="material-symbols-outlined">dark_mode</span>
        </button>
        <button className="text-gray-500 hover:text-white transition-colors">
          <span className="material-symbols-outlined">settings</span>
        </button>
        <div className="size-10 rounded-full overflow-hidden border border-gray-700">
          <img src="https://picsum.photos/100/100" alt="User" />
        </div>
      </div>
    </aside>
  );
};

const NavItem = ({ icon, active, to }: { icon: string, active: boolean, to: string }) => (
  <NavLink to={to} className={`group relative p-3 transition-colors ${active ? 'text-primary' : 'text-gray-500 hover:text-gray-300'}`}>
    {active && <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-6 bg-primary rounded-r-full" />}
    <span className={`material-symbols-outlined text-[26px] ${active ? 'filled' : ''}`}>{icon}</span>
  </NavLink>
);

export default Sidebar;
