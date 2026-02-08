
import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProfileView: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className="flex-1 w-full bg-slate-50 dark:bg-background-dark min-h-screen relative flex flex-col items-center">
      <div className="w-full max-w-md bg-white dark:bg-slate-900 h-full min-h-screen shadow-2xl relative overflow-hidden">
        
        {/* Header */}
        <header className="absolute top-0 w-full z-30 px-4 py-4 flex items-center justify-between text-white">
          <button onClick={() => navigate('/dashboard')} className="p-2 bg-black/20 backdrop-blur-md rounded-full hover:bg-black/40 transition-colors">
            <span className="material-symbols-outlined text-xl">arrow_back</span>
          </button>
          <div className="text-sm font-bold bg-black/20 backdrop-blur-md px-3 py-1 rounded-full">Worker Profile</div>
          <button className="p-2 bg-black/20 backdrop-blur-md rounded-full hover:bg-black/40 transition-colors">
            <span className="material-symbols-outlined text-xl">more_vert</span>
          </button>
        </header>

        {/* Hero Section */}
        <div className="bg-slate-900 text-white pt-24 pb-8 px-6 text-center relative overflow-hidden">
           <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-slate-900 z-0"></div>
           <div className="relative z-10 flex flex-col items-center">
             <div className="relative mb-4">
               <div className="size-28 rounded-full p-1 bg-gradient-to-tr from-primary to-blue-300">
                 <img src="https://picsum.photos/300/300?grayscale" alt="Sarah" className="w-full h-full object-cover rounded-full border-4 border-slate-900" />
               </div>
               <div className="absolute bottom-1 right-1 size-7 bg-green-500 rounded-full border-4 border-slate-900"></div>
             </div>
             
             <h2 className="text-2xl font-bold mb-1">Sarah Jenkins</h2>
             <p className="text-slate-400 text-sm font-medium mb-3">Certified Care Assistant</p>
             
             <div className="inline-flex items-center gap-1.5 bg-primary px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest shadow-glow">
               <span className="material-symbols-outlined text-[14px] filled">verified</span>
               SingleSource Verified
             </div>
           </div>
        </div>

        {/* Stats Strip */}
        <div className="bg-slate-800 border-b border-slate-700 grid grid-cols-3 divide-x divide-slate-700 py-4">
           <div className="text-center">
             <p className="text-xl font-bold text-white">98%</p>
             <p className="text-[9px] text-slate-400 font-bold uppercase tracking-wider">Reliability</p>
           </div>
           <div className="text-center">
             <p className="text-xl font-bold text-white">1,240</p>
             <p className="text-[9px] text-slate-400 font-bold uppercase tracking-wider">Hours</p>
           </div>
           <div className="text-center">
             <p className="text-xl font-bold text-white flex items-center justify-center gap-1">
               4.9 <span className="material-symbols-outlined text-sm text-yellow-500 filled">star</span>
             </p>
             <p className="text-[9px] text-slate-400 font-bold uppercase tracking-wider">Rating</p>
           </div>
        </div>

        {/* Actions */}
        <div className="p-6">
           <button onClick={() => navigate('/messaging')} className="w-full bg-primary hover:bg-primary-dark text-white h-12 rounded-xl font-bold flex items-center justify-center gap-2 shadow-lg shadow-primary/20 transition-all active:scale-[0.98] mb-8">
              <span className="material-symbols-outlined">chat_bubble</span>
              Message Worker
           </button>

           <div className="space-y-6">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-bold text-slate-900 dark:text-white">Shift Schedule</h3>
                  <span className="text-xs text-slate-400 font-medium flex items-center gap-1"><span className="material-symbols-outlined text-[14px]">calendar_month</span> BrayJobs</span>
                </div>
                <div className="bg-slate-50 dark:bg-slate-800 rounded-2xl overflow-hidden border border-slate-100 dark:border-slate-700">
                   <div className="h-24 bg-slate-200 dark:bg-slate-700 relative">
                      <img src="https://picsum.photos/600/200?warehouse" className="w-full h-full object-cover opacity-80" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-4">
                         <div>
                            <p className="text-[9px] font-bold text-slate-300 uppercase tracking-widest mb-0.5">Upcoming Shift</p>
                            <p className="text-white font-bold text-sm">Warehouse B - Zone 4</p>
                         </div>
                      </div>
                   </div>
                   <div className="p-4 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                         <div className="bg-primary/10 text-primary p-2 rounded-lg">
                           <span className="material-symbols-outlined">calendar_today</span>
                         </div>
                         <div>
                           <p className="text-sm font-bold dark:text-white">Tue, Oct 24</p>
                           <p className="text-xs text-slate-500">9:00 AM - 5:00 PM</p>
                         </div>
                      </div>
                      <span className="px-2 py-1 bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400 text-[10px] font-bold uppercase tracking-wider rounded">Confirmed</span>
                   </div>
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-bold text-slate-900 dark:text-white">Care Logs</h3>
                  <span className="text-xs text-slate-400 font-medium flex items-center gap-1"><span className="material-symbols-outlined text-[14px]">health_and_safety</span> DoubleThing</span>
                </div>
                <div className="bg-slate-50 dark:bg-slate-800 rounded-2xl p-4 border border-slate-100 dark:border-slate-700 space-y-4">
                   <div className="flex gap-3 pb-3 border-b border-slate-200 dark:border-slate-700">
                      <div className="size-2 rounded-full bg-primary mt-1.5 shrink-0" />
                      <div>
                         <div className="flex justify-between w-full mb-1">
                            <span className="text-xs font-bold text-primary">Today, 10:30 AM</span>
                            <span className="text-[10px] text-slate-400">By Manager</span>
                         </div>
                         <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">Worker reported minor back discomfort after assisting resident. Offered break.</p>
                      </div>
                   </div>
                </div>
              </div>

           </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileView;
