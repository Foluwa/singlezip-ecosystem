
import React from 'react';
import { useNavigate } from 'react-router-dom';

const IncidentReviewView: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className="flex-1 w-full max-w-md mx-auto h-screen flex flex-col bg-background-light dark:bg-background-dark overflow-hidden">
       <header className="h-14 flex items-center justify-between px-4 bg-white dark:bg-surface-dark border-b border-slate-200 dark:border-slate-800 shrink-0">
          <button onClick={() => navigate('/dashboard')} className="text-primary font-bold flex items-center gap-1">
             <span className="material-symbols-outlined">arrow_back_ios</span>
             Dashboard
          </button>
          <h1 className="text-sm font-bold">Incident #4291</h1>
          <div className="w-12" />
       </header>

       <div className="flex-1 overflow-y-auto no-scrollbar">
          <div className="bg-red-600 p-4 flex items-center justify-between text-white shadow-md">
             <div className="flex items-center gap-3">
                <span className="material-symbols-outlined animate-pulse">warning</span>
                <div>
                   <h2 className="text-lg font-black uppercase tracking-wider leading-none">Critical Incident</h2>
                   <p className="text-[10px] font-bold opacity-80 mt-1 uppercase tracking-widest">Room 104 • Unreviewed</p>
                </div>
             </div>
             <span className="bg-white/20 px-2 py-1 rounded text-xs font-bold font-mono">10:50 PM</span>
          </div>

          <div className="p-4 space-y-6">
             <div className="bg-white dark:bg-surface-dark rounded-3xl overflow-hidden shadow-soft border border-slate-100 dark:border-slate-800">
                <div className="relative h-64 bg-slate-900 group">
                   <img src="https://picsum.photos/600/400?sig=incident" className="w-full h-full object-cover opacity-60" />
                   <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                   <div className="absolute top-4 right-4 flex items-center gap-2 bg-black/50 px-2 py-1 rounded text-[10px] font-bold text-white border border-white/10 uppercase tracking-widest">
                      <span className="size-2 rounded-full bg-red-500 animate-pulse" />
                      Recorded
                   </div>
                   <div className="absolute bottom-6 left-6 right-6">
                      <h3 className="text-white text-3xl font-black tracking-tight">Fall Detected</h3>
                      <p className="text-white/60 text-sm font-medium">Mrs. Alice Thompson (84y)</p>
                   </div>
                   <button className="absolute bottom-6 right-6 p-2 bg-white/20 rounded-full text-white backdrop-blur-md">
                      <span className="material-symbols-outlined">fullscreen</span>
                   </button>
                </div>
                <div className="grid grid-cols-2 divide-x divide-slate-100 dark:divide-slate-800 p-4">
                   <div className="p-2">
                      <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-1">Location</p>
                      <p className="text-xs font-bold">Room 104, East Wing</p>
                   </div>
                   <div className="p-2 pl-6">
                      <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-1">Sensor ID</p>
                      <p className="text-xs font-bold font-mono">CAM-104-A</p>
                   </div>
                </div>
             </div>

             <div className="space-y-4">
                <div className="flex items-center justify-between">
                   <h3 className="text-lg font-black tracking-tighter">Staff Log Notes</h3>
                   <span className="text-[10px] font-black text-primary bg-primary/5 px-2 py-1 rounded-full uppercase tracking-widest">Update Added</span>
                </div>
                <div className="bg-white dark:bg-surface-dark rounded-3xl p-5 shadow-soft border border-slate-100 dark:border-slate-800 flex gap-4">
                   <img src="https://picsum.photos/100/100?sig=sarah" className="size-10 rounded-full shrink-0" />
                   <div className="space-y-2">
                      <div className="flex justify-between items-center">
                         <p className="text-sm font-bold">Sarah Jenkins <span className="text-slate-400 font-normal ml-1">RN</span></p>
                         <span className="text-[10px] text-slate-400">10:55 PM</span>
                      </div>
                      <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed bg-slate-50 dark:bg-slate-900/50 p-3 rounded-2xl rounded-tl-none border border-slate-100 dark:border-slate-800">
                         Resident found seated on floor near bedside. Conscious and alert. Vitals stable (BP 120/80). Assisted back to bed with aid. No visible injuries. Dr. Smith notified for follow-up.
                      </p>
                   </div>
                </div>
             </div>
          </div>
       </div>

       <footer className="p-4 bg-white/95 dark:bg-surface-dark/95 backdrop-blur-md border-t border-slate-200 dark:border-slate-800 flex gap-3 shadow-up pb-10">
          <button className="flex-1 h-14 border-2 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 font-black rounded-2xl uppercase tracking-widest text-xs">Escalate</button>
          <button onClick={() => navigate('/dashboard')} className="flex-[2] h-14 bg-primary text-white font-black rounded-2xl text-sm shadow-glow flex items-center justify-center gap-2">
             <span className="material-symbols-outlined">check_circle</span>
             Mark as Reviewed
          </button>
       </footer>
    </div>
  );
};

export default IncidentReviewView;
