
import React from 'react';
import { useNavigate } from 'react-router-dom';

const LandingView: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col lg:flex-row min-h-screen w-full bg-white dark:bg-background-dark">
      
      {/* LEFT PANEL: Fixed Content */}
      <div className="w-full lg:w-[480px] xl:w-[540px] flex-shrink-0 bg-white dark:bg-surface-dark border-r border-slate-100 dark:border-slate-800 z-20 flex flex-col justify-between p-6 sm:p-8 lg:p-12 relative">
        <header className="flex items-center justify-between w-full mb-10 lg:mb-0">
          <div className="flex items-center gap-3">
            <div className="size-10 text-primary">
               {/* SingleZip Logo SVG */}
               <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                  <path d="M20 34C27.732 34 34 27.732 34 20C34 13.0825 29.027 7.34263 22.5 6.09632" stroke="currentColor" strokeWidth="4.5" strokeLinecap="round"/>
                  <path d="M17.5 6.09632C10.973 7.34263 6 13.0825 6 20C6 27.732 12.268 34 20 34" stroke="currentColor" strokeWidth="4.5" strokeLinecap="round"/>
                  <circle cx="20" cy="5" r="3.5" fill="currentColor"/>
               </svg>
            </div>
            <h2 className="text-2xl font-bold tracking-tight text-slate-800 dark:text-white">
              Single<span className="text-primary">Zip</span>
            </h2>
          </div>
          <button onClick={() => navigate('/login')} className="text-sm font-bold text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors py-2 px-3 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800">Log In</button>
        </header>

        <main className="flex flex-col gap-6 sm:gap-8 max-w-sm">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 w-fit text-[11px] font-bold uppercase tracking-wider">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            SingleZip v2.0 is live
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[0.95]">
            From verification <br/>
            to care logging — <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">in one flow.</span>
          </h1>
          
          <p className="text-base sm:text-lg text-slate-500 font-medium leading-relaxed">
            SingleZip connects background checks, hiring, onboarding, and daily care records into a single system built for real care environments.
          </p>

          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-3 text-sm sm:text-base font-bold text-slate-700 dark:text-slate-300">
               <span className="material-symbols-outlined text-primary text-xl filled">check_circle</span>
               Verify once
            </div>
            <div className="flex items-center gap-3 text-sm sm:text-base font-bold text-slate-700 dark:text-slate-300">
               <span className="material-symbols-outlined text-primary text-xl filled">check_circle</span>
               Hire faster
            </div>
            <div className="flex items-center gap-3 text-sm sm:text-base font-bold text-slate-700 dark:text-slate-300">
               <span className="material-symbols-outlined text-primary text-xl filled">check_circle</span>
               Care logging that genuinely saves time
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 pt-4">
             <button onClick={() => navigate('/booking')} className="h-14 px-8 bg-primary hover:bg-primary-dark text-white text-base font-bold rounded-xl shadow-lg shadow-primary/20 transition-all hover:scale-[1.02] active:scale-[0.98] w-full sm:w-auto flex items-center justify-center gap-2">
               Book a demo
               <span className="material-symbols-outlined">arrow_forward</span>
             </button>
             <button onClick={() => navigate('/onboarding/step1')} className="h-14 px-8 bg-slate-50 dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-900 dark:text-white text-base font-bold rounded-xl border border-slate-200 dark:border-slate-700 transition-all w-full sm:w-auto">
               Get Started
             </button>
          </div>
        </main>

        <footer className="mt-10 lg:mt-0">
          <div className="text-[10px] text-slate-400 font-medium leading-relaxed max-w-xs">
            <div className="flex gap-4 mb-4">
               <button onClick={() => navigate('/privacy')} className="hover:text-slate-600 dark:hover:text-slate-300 transition-colors">Privacy</button>
               <button onClick={() => navigate('/terms')} className="hover:text-slate-600 dark:hover:text-slate-300 transition-colors">Terms</button>
            </div>
            <p>SingleZip. © 2026. All rights reserved.</p>
            <p className="opacity-70 mt-1">SingleZip is a trading name and product of AirMonk Ltd.</p>
          </div>
        </footer>
      </div>

      {/* RIGHT PANEL: Infinite Canvas */}
      <div className="flex-1 bg-dot-pattern relative overflow-hidden flex flex-col items-center justify-center p-4 sm:p-6 min-h-[500px] lg:min-h-screen border-t lg:border-t-0 border-slate-100 dark:border-slate-800">
        <div className="absolute inset-0 bg-gradient-to-b from-white/0 via-transparent to-white/50 dark:to-background-dark/80 pointer-events-none lg:hidden" />
        
        <div className="relative z-10 w-full max-w-2xl flex flex-col gap-6 lg:animate-float">
           <div className="bg-white dark:bg-surface-dark rounded-3xl p-6 sm:p-8 shadow-2xl border border-slate-100 dark:border-slate-700 relative overflow-hidden group hover:border-primary/20 transition-colors">
              <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
                 <span className="material-symbols-outlined text-8xl sm:text-9xl">grid_view</span>
              </div>
              <div className="flex justify-between items-start mb-6 relative z-10">
                 <h3 className="text-xl sm:text-2xl font-extrabold tracking-tight">The SingleZip Ecosystem</h3>
                 <button className="size-8 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-400 hover:text-slate-900 transition-colors">
                    <span className="material-symbols-outlined text-lg">close</span>
                 </button>
              </div>

              <div className="grid gap-3 sm:gap-4 relative z-10">
                 <EcosystemCard 
                    icon="verified_user" 
                    iconColor="text-blue-600" 
                    iconBg="bg-blue-50 dark:bg-blue-900/20"
                    title="SingleSource"
                    headline="Verify workers once. Never again."
                    description="Workers complete all checks once. Eliminate redundant verification costs and get instant compliance."
                 />
                 <EcosystemCard 
                    icon="work" 
                    iconColor="text-purple-600" 
                    iconBg="bg-purple-50 dark:bg-purple-900/20"
                    title="BrayJobs"
                    headline="Hire pre-verified talent in hours."
                    description="Post shifts. Match with workers instantly based on location. Fill vacancies faster."
                 />
                 <EcosystemCard 
                    icon="health_and_safety" 
                    iconColor="text-teal-600" 
                    iconBg="bg-teal-50 dark:bg-teal-900/20"
                    title="DoubleThing"
                    headline="Log care without touching paper."
                    description="Workers record care notes digitally. Notes sync instantly, reducing admin time and improving audit trails."
                 />
              </div>

              <div className="mt-8 relative z-10">
                <button onClick={() => navigate('/booking')} className="w-full bg-primary hover:bg-primary-dark text-white h-14 rounded-xl font-bold text-lg shadow-lg shadow-primary/20 transition-all flex items-center justify-center gap-2 group/btn active:scale-[0.99]">
                  Book an Onsite Demo
                  <span className="material-symbols-outlined group-hover/btn:translate-x-1 transition-transform">arrow_forward</span>
                </button>
                <p className="text-center mt-3 text-xs font-bold text-slate-400 uppercase tracking-widest">We'll come to you</p>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};

const EcosystemCard: React.FC<{ 
  icon: string; 
  iconColor: string; 
  iconBg: string; 
  title: string; 
  headline: string; 
  description: string; 
}> = ({ icon, iconColor, iconBg, title, headline, description }) => {
  return (
    <div className="flex gap-4 sm:gap-5 p-4 sm:p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/50 hover:bg-white dark:hover:bg-slate-800 border border-transparent hover:border-slate-200 dark:hover:border-slate-700 hover:shadow-soft transition-all cursor-pointer group">
      <div className={`size-10 sm:size-12 rounded-xl flex items-center justify-center shrink-0 ${iconBg} ${iconColor}`}>
         <span className="material-symbols-outlined text-[24px] sm:text-[28px]">{icon}</span>
      </div>
      <div>
         <span className={`text-[9px] sm:text-[10px] font-black uppercase tracking-widest mb-1 block ${iconColor}`}>{title}</span>
         <h4 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white leading-tight mb-1 sm:mb-2">{headline}</h4>
         <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

export default LandingView;
