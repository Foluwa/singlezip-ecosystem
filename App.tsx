
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import LandingView from './views/LandingView';
import OnboardingStep1 from './views/OnboardingStep1';
import OnboardingStep2 from './views/OnboardingStep2';
import DashboardView from './views/DashboardView';
import SingleSourceView from './views/SingleSourceView';
import BrayJobsView from './views/BrayJobsView';
import DoubleThingView from './views/DoubleThingView';
import ProfileView from './views/ProfileView';
import MessagingView from './views/MessagingView';
import DevToolsView from './views/DevToolsView';
import BookingView from './views/BookingView';
import BookingConfirmedView from './views/BookingConfirmedView';
import IncidentReviewView from './views/IncidentReviewView';
import PrivacyView from './views/PrivacyView';
import TermsView from './views/TermsView';
import Sidebar from './components/Sidebar';
import MobileNav from './components/MobileNav';

const AppContent: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isEcosystemModalOpen, setIsEcosystemModalOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // Sync theme
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const showNav = !['/', '/onboarding/step1', '/onboarding/step2', '/booking', '/booking/confirmed', '/privacy', '/terms'].includes(location.pathname);

  const handleEcosystemNavigate = (path: string) => {
    navigate(path);
    setIsEcosystemModalOpen(false);
  };

  return (
    <div className="flex min-h-screen bg-background-light dark:bg-background-dark transition-colors duration-300">
      {showNav && (
        <div className="hidden lg:block w-20">
          <Sidebar toggleTheme={() => setIsDarkMode(!isDarkMode)} />
        </div>
      )}
      
      <div className="flex-1 flex flex-col relative w-full overflow-x-hidden">
        <Routes>
          <Route path="/" element={<LandingView />} />
          <Route path="/onboarding/step1" element={<OnboardingStep1 />} />
          <Route path="/onboarding/step2" element={<OnboardingStep2 />} />
          <Route path="/dashboard" element={<DashboardView />} />
          <Route path="/singlesource" element={<SingleSourceView />} />
          <Route path="/brayjobs" element={<BrayJobsView />} />
          <Route path="/doublething" element={<DoubleThingView />} />
          <Route path="/profile" element={<ProfileView />} />
          <Route path="/messaging" element={<MessagingView />} />
          <Route path="/dev-tools" element={<DevToolsView />} />
          <Route path="/booking" element={<BookingView />} />
          <Route path="/booking/confirmed" element={<BookingConfirmedView />} />
          <Route path="/incident-review" element={<IncidentReviewView />} />
          <Route path="/privacy" element={<PrivacyView />} />
          <Route path="/terms" element={<TermsView />} />
        </Routes>

        {showNav && (
          <div className="lg:hidden">
            <MobileNav />
          </div>
        )}
      </div>

      {/* Ecosystem Modal - Triggered by central logo usually or specific dashboard button */}
      {isEcosystemModalOpen && (
        <div className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm flex items-end sm:items-center justify-center p-0 sm:p-4">
          <div className="relative w-full max-w-md bg-white dark:bg-surface-dark rounded-t-3xl sm:rounded-3xl shadow-2xl flex flex-col max-h-[90vh] overflow-hidden animate-slide-up">
            <div className="flex justify-center pt-3 pb-1 sm:hidden bg-white dark:bg-surface-dark sticky top-0 z-10">
              <div className="h-1.5 w-12 rounded-full bg-gray-300 dark:bg-gray-600"></div>
            </div>
            <div className="flex items-center justify-between px-6 py-4 bg-white dark:bg-surface-dark border-b border-gray-100 dark:border-gray-800">
              <div className="flex items-center gap-2">
                 <div className="size-6 text-primary">
                    <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                      <path d="M20 34C27.732 34 34 27.732 34 20C34 13.0825 29.027 7.34263 22.5 6.09632" stroke="currentColor" strokeWidth="4.5" strokeLinecap="round"/>
                      <path d="M17.5 6.09632C10.973 7.34263 6 13.0825 6 20C6 27.732 12.268 34 20 34" stroke="currentColor" strokeWidth="4.5" strokeLinecap="round"/>
                      <circle cx="20" cy="5" r="3.5" fill="currentColor"/>
                   </svg>
                 </div>
                 <h2 className="text-lg font-bold text-gray-900 dark:text-white">Single<span className="text-primary">Zip</span></h2>
              </div>
              <button onClick={() => setIsEcosystemModalOpen(false)} className="text-gray-400 hover:text-gray-600 p-1">
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>
            <div className="overflow-y-auto px-6 py-6 space-y-4">
              <div onClick={() => handleEcosystemNavigate('/singlesource')} className="cursor-pointer group flex flex-col p-4 bg-slate-50 dark:bg-slate-800 rounded-xl border border-transparent hover:border-primary transition-all">
                <div className="flex items-center gap-3 mb-2">
                  <span className="material-symbols-outlined text-primary">verified_user</span>
                  <h3 className="font-bold">SingleSource</h3>
                </div>
                <p className="text-sm text-gray-500">Includes automated DBS and Right to Work checks.</p>
              </div>
              <div onClick={() => handleEcosystemNavigate('/brayjobs')} className="cursor-pointer group flex flex-col p-4 bg-slate-50 dark:bg-slate-800 rounded-xl border border-transparent hover:border-primary transition-all">
                <div className="flex items-center gap-3 mb-2">
                  <span className="material-symbols-outlined text-purple-500">work</span>
                  <h3 className="font-bold">BrayJobs</h3>
                </div>
                <p className="text-sm text-gray-500">Hire and onboard verified workers in hours.</p>
              </div>
              <div onClick={() => handleEcosystemNavigate('/doublething')} className="cursor-pointer group flex flex-col p-4 bg-slate-50 dark:bg-slate-800 rounded-xl border border-transparent hover:border-primary transition-all">
                <div className="flex items-center gap-3 mb-2">
                  <span className="material-symbols-outlined text-red-500">health_and_safety</span>
                  <h3 className="font-bold">DoubleThing</h3>
                </div>
                <p className="text-sm text-gray-500">Log care activities digitally without touching paper.</p>
              </div>
            </div>
            <div className="p-6 border-t border-gray-100 dark:border-gray-800">
              <button onClick={() => handleEcosystemNavigate('/booking')} className="w-full bg-primary hover:bg-primary-dark text-white font-bold py-4 rounded-xl shadow-lg">
                Book an Onsite Demo
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Persistence Button to open ecosystem modal from dashboard */}
      {showNav && location.pathname === '/dashboard' && (
        <button 
          onClick={() => setIsEcosystemModalOpen(true)}
          className="fixed bottom-24 right-6 lg:bottom-10 lg:right-10 z-40 bg-primary text-white p-4 rounded-full shadow-2xl hover:scale-105 transition-transform"
        >
          <span className="material-symbols-outlined text-[32px] block">grid_view</span>
        </button>
      )}
    </div>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

export default App;
