
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FeedItem } from '../types';

const MOCK_FEED: FeedItem[] = [
  {
    id: '1',
    module: 'DoubleThing',
    title: 'Critical Incident: Fall Detected',
    description: 'Alert triggered in Room 104. Resident monitoring system indicates a fall event.',
    time: '2m ago',
    priority: 'High',
    actionLabel: 'Review Report'
  },
  {
    id: '2',
    module: 'BrayJobs',
    title: 'Shift Filled: Night Shift',
    description: 'Oct 12 shift filled by Mark T.',
    time: '14m ago'
  },
  {
    id: '3',
    module: 'SingleSource',
    title: 'Worker Verified',
    description: 'Sarah Jenkins has completed her DBS check.',
    time: '1h ago',
    actionLabel: 'Deploy Worker'
  }
];

const DashboardView: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="flex-1 w-full h-full bg-dot-pattern min-h-screen">
      <div className="max-w-3xl mx-auto px-4 pt-8 pb-24 lg:pb-12">
        <header className="mb-8 flex items-end justify-between">
           <div>
             <h1 className="text-3xl font-black tracking-tight text-slate-900 dark:text-white">Unified Feed</h1>
           </div>
           <button className="p-2 text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors">
             <span className="material-symbols-outlined">tune</span>
           </button>
        </header>

        <section className="mb-8 flex gap-3 overflow-x-auto no-scrollbar pb-2">
           <button className="bg-primary text-white px-4 py-2 rounded-lg text-sm font-bold shadow-lg shadow-primary/20 flex items-center gap-2 whitespace-nowrap">
             <span className="material-symbols-outlined text-lg">view_stream</span>
             All Updates
           </button>
           <button className="bg-white dark:bg-surface-dark text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 px-4 py-2 rounded-lg text-sm font-bold hover:bg-slate-50 dark:hover:bg-slate-800 flex items-center gap-2 whitespace-nowrap transition-colors">
             <span className="material-symbols-outlined text-lg text-red-500">error</span>
             Critical
           </button>
           <button className="bg-white dark:bg-surface-dark text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 px-4 py-2 rounded-lg text-sm font-bold hover:bg-slate-50 dark:hover:bg-slate-800 flex items-center gap-2 whitespace-nowrap transition-colors">
             <span className="material-symbols-outlined text-lg text-amber-500">pending_actions</span>
             Action Req
           </button>
        </section>

        <div className="space-y-4">
          <div className="flex items-center gap-4 py-2 opacity-40">
            <div className="h-px bg-slate-400 dark:bg-slate-600 flex-1" />
            <span className="text-[10px] font-black uppercase tracking-widest text-slate-500">Today</span>
            <div className="h-px bg-slate-400 dark:bg-slate-600 flex-1" />
          </div>

          {MOCK_FEED.map((item) => (
            <FeedCard key={item.id} item={item} onAction={(path) => navigate(path)} />
          ))}
          
          <div className="flex items-center gap-4 py-6 opacity-40">
            <div className="h-px bg-slate-400 dark:bg-slate-600 flex-1" />
            <span className="text-[10px] font-black uppercase tracking-widest text-slate-500">Yesterday</span>
            <div className="h-px bg-slate-400 dark:bg-slate-600 flex-1" />
          </div>

           <FeedCard 
             item={{
               id: '4',
               module: 'BrayJobs',
               title: 'New Shift Posted',
               description: 'Weekend Nursing Shift added by Manager.',
               time: 'Yesterday',
               actionLabel: 'Confirm Shift'
             }} 
             onAction={() => navigate('/brayjobs')} 
           />
        </div>
      </div>
    </div>
  );
};

const FeedCard: React.FC<{ item: FeedItem, onAction: (path: string) => void }> = ({ item, onAction }) => {
  const isHigh = item.priority === 'High';
  const colors: Record<string, string> = {
    'DoubleThing': 'text-red-600 bg-red-50 dark:bg-red-900/20 border-red-500',
    'BrayJobs': 'text-purple-600 bg-purple-50 dark:bg-purple-900/20 border-purple-500',
    'SingleSource': 'text-blue-600 bg-blue-50 dark:bg-blue-900/20 border-blue-500'
  };

  const icons: Record<string, string> = {
    'DoubleThing': 'health_and_safety',
    'BrayJobs': 'work',
    'SingleSource': 'verified_user'
  };
  
  const moduleColorClass = colors[item.module] || colors['SingleSource'];

  return (
    <article className={`relative bg-white dark:bg-surface-dark rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-slate-100 dark:border-slate-800 overflow-hidden group`}>
       {/* Left Colored Strip */}
       <div className={`absolute left-0 top-0 bottom-0 w-1.5 ${isHigh ? 'bg-red-500' : moduleColorClass.split(' ').pop()?.replace('border-', 'bg-')}`}></div>

       <div className="p-5 pl-7">
         <div className="flex justify-between items-start mb-2">
            <div className="flex items-center gap-2">
               <span className={`material-symbols-outlined text-[16px] ${isHigh ? 'text-red-500' : 'text-slate-400'}`}>{isHigh ? 'warning' : icons[item.module]}</span>
               <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">{item.module} • {item.module === 'DoubleThing' ? 'Care Logs' : item.module === 'BrayJobs' ? 'Hiring' : 'Compliance'}</span>
            </div>
            <span className="text-[10px] font-bold text-slate-400">{item.time}</span>
         </div>

         <div className="flex gap-4">
           {item.module === 'BrayJobs' && (
             <img src={`https://picsum.photos/100/100?sig=${item.id}`} className="size-10 rounded-lg object-cover" alt="Avatar" />
           )}
           {item.module === 'SingleSource' && (
             <img src={`https://picsum.photos/100/100?sig=${item.id}2`} className="size-10 rounded-lg object-cover" alt="Avatar" />
           )}
           {item.module === 'DoubleThing' && (
              <div className="size-10 rounded-lg bg-red-100 dark:bg-red-900/30 flex items-center justify-center text-red-600">
                 <span className="material-symbols-outlined">health_and_safety</span>
              </div>
           )}

           <div className="flex-1">
             <h3 className="text-base font-bold text-slate-900 dark:text-white leading-tight mb-1">{item.title}</h3>
             <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed mb-3">{item.description}</p>
             
             {item.actionLabel && (
               <button 
                 onClick={() => onAction(item.module === 'DoubleThing' ? '/incident-review' : '/profile')}
                 className={`inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 rounded-lg transition-colors ${isHigh ? 'bg-primary text-white hover:bg-primary-dark shadow-glow' : 'bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700'}`}
               >
                 {isHigh && <span className="material-symbols-outlined text-[14px]">visibility</span>}
                 {item.actionLabel}
               </button>
             )}
           </div>
         </div>
       </div>
    </article>
  );
};

export default DashboardView;
