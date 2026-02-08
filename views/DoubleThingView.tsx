
import React from 'react';
import { useNavigate } from 'react-router-dom';

const DoubleThingView: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className="flex-1 w-full max-w-4xl mx-auto px-4 pt-6 pb-24 lg:pb-12">
      <header className="mb-10 flex justify-between items-start">
        <div>
          <h1 className="text-4xl font-black tracking-tighter mb-2 leading-none">Care Records & Compliance</h1>
          <p className="text-slate-500 text-lg">Real-time logs, medication tracking, and CQC-ready reports.</p>
        </div>
        <button className="size-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center">
          <span className="material-symbols-outlined text-[32px]">clinical_notes</span>
        </button>
      </header>

      <section className="bg-red-50 dark:bg-red-900/10 border border-red-100 dark:border-red-900/30 rounded-3xl p-6 mb-8 relative overflow-hidden group">
        <div className="absolute top-0 right-0 size-32 bg-red-500/5 rounded-full -mr-10 -mt-10" />
        <div className="flex items-start gap-4 mb-6">
          <div className="bg-red-100 dark:bg-red-900/40 p-3 rounded-2xl text-red-600 dark:text-red-400">
            <span className="material-symbols-outlined">warning</span>
          </div>
          <div>
            <h3 className="text-xl font-bold">Action Required</h3>
            <p className="text-slate-600 dark:text-red-100/70 mt-1">2 Urgent items requiring manager sign-off (Missed Meds, Incidents).</p>
          </div>
        </div>
        <div className="flex justify-end">
           <button 
            onClick={() => navigate('/incident-review')}
            className="bg-red-600 hover:bg-red-700 text-white font-bold px-6 py-3 rounded-xl transition-all shadow-lg shadow-red-500/20 flex items-center gap-2"
           >
             Review Now
             <span className="material-symbols-outlined">arrow_forward</span>
           </button>
        </div>
      </section>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
        <SummaryCard label="Logs Today" value="142" growth="+12%" color="emerald" />
        <SummaryCard label="Missed Meds" value="3" subtitle="Critical" color="red" />
        <SummaryCard label="Open Incidents" value="5" subtitle="Review" color="amber" />
        <SummaryCard label="CQC Readiness" value="94%" icon="verified_user" color="blue" inverse />
      </div>

      <section>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-black">Active Logs</h2>
          <button className="text-primary font-bold">View All</button>
        </div>
        <div className="space-y-3">
          <LogItem name="Eleanor Rigby" type="Meds" time="10m ago" icon="medication" color="blue" />
          <LogItem name="Arthur Dent" type="Nutrition" time="25m ago" icon="restaurant" color="emerald" />
          <LogItem name="Martha Jones" type="Care" time="42m ago" icon="spa" color="purple" />
          <LogItem name="John Smith" type="Fall" time="1h ago" icon="report_problem" color="amber" priority />
        </div>
      </section>
    </div>
  );
};

const SummaryCard = ({ label, value, growth, subtitle, icon, color, inverse = false }: any) => {
  const colorClasses: Record<string, string> = {
    emerald: 'text-emerald-600 bg-emerald-50 dark:bg-emerald-900/20',
    red: 'text-red-600 bg-red-50 dark:bg-red-900/20',
    amber: 'text-amber-600 bg-amber-50 dark:bg-amber-900/20',
    blue: 'text-blue-600 bg-blue-50 dark:bg-blue-900/20'
  };

  if (inverse) return (
    <div className="bg-primary p-5 rounded-3xl shadow-xl shadow-primary/20 text-white flex flex-col justify-between h-36">
       <span className="text-[10px] font-black uppercase tracking-widest opacity-80">{label}</span>
       <div className="flex items-end justify-between">
         <span className="text-3xl font-black">{value}</span>
         {icon && <span className="material-symbols-outlined text-white/50">{icon}</span>}
       </div>
    </div>
  );

  return (
    <div className="bg-white dark:bg-surface-dark p-5 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-soft flex flex-col justify-between h-36">
       <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">{label}</span>
       <div className="flex items-end justify-between">
         <span className={`text-3xl font-black ${color === 'red' ? 'text-red-600' : ''}`}>{value}</span>
         {growth && <span className={`text-[10px] font-black px-1.5 py-0.5 rounded ${colorClasses[color]}`}>{growth}</span>}
         {subtitle && <span className={`text-[10px] font-black px-1.5 py-0.5 rounded ${colorClasses[color]}`}>{subtitle}</span>}
       </div>
    </div>
  );
};

const LogItem = ({ name, type, time, icon, color, priority }: any) => {
  const colorClasses: Record<string, string> = {
    blue: 'bg-blue-50 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400 border-blue-100 dark:border-blue-800',
    emerald: 'bg-emerald-50 text-emerald-600 dark:bg-emerald-900/20 dark:text-emerald-400 border-emerald-100 dark:border-emerald-800',
    purple: 'bg-purple-50 text-purple-600 dark:bg-purple-900/20 dark:text-purple-400 border-purple-100 dark:border-purple-800',
    amber: 'bg-amber-50 text-amber-600 dark:bg-amber-900/20 dark:text-amber-400 border-amber-100 dark:border-amber-800'
  };

  return (
    <div className={`p-4 bg-white dark:bg-surface-dark rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm flex items-center gap-4 ${priority ? 'border-l-4 border-l-amber-500' : ''}`}>
       <div className="size-10 rounded-full overflow-hidden shrink-0 border-2 border-slate-100">
         <img src={`https://picsum.photos/100/100?sig=${name}`} alt={name} />
       </div>
       <div className="flex-1">
         <div className="flex justify-between">
           <p className="font-bold text-sm">{name}</p>
           <span className="text-[10px] text-slate-400 font-bold uppercase">{time}</span>
         </div>
         <div className="flex items-center gap-3 mt-1">
           <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[9px] font-black uppercase tracking-wider border ${colorClasses[color]}`}>
             <span className="material-symbols-outlined text-[12px]">{icon}</span>
             {type}
           </span>
           <span className="text-[10px] text-slate-400 font-medium">bySarah Jenkins</span>
         </div>
       </div>
    </div>
  );
};

export default DoubleThingView;
