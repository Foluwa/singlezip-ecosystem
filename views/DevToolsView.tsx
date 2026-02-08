
import React from 'react';
import { useNavigate } from 'react-router-dom';

const DevToolsView: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className="flex-1 w-full max-w-4xl mx-auto px-4 pt-6 pb-24 lg:pb-12">
      <header className="mb-10">
        <h1 className="text-4xl font-black tracking-tighter mb-2">Developer Hub</h1>
        <p className="text-slate-500 text-lg">Manage API keys and view system documentation.</p>
      </header>

      <section className="mb-12">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold">API Keys</h2>
          <button className="bg-primary hover:bg-primary-dark text-white font-bold px-5 py-2 rounded-xl text-sm shadow-lg">Create New Key</button>
        </div>
        <div className="space-y-4">
           <ApiKeyCard env="Production" status="Active" keyPrefix="sk_live_8392" time="Used 2m ago" color="emerald" />
           <ApiKeyCard env="Development" status="Active" keyPrefix="sk_test_2291" time="Used 5d ago" color="amber" />
        </div>
      </section>

      <section className="mb-12">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold">Quick Documentation</h2>
        </div>
        <div className="bg-[#0f172a] rounded-3xl overflow-hidden shadow-2xl border border-slate-700">
           <div className="bg-[#1e293b] p-4 border-b border-slate-700 flex items-center justify-between">
              <div className="flex gap-2">
                <span className="bg-primary text-white px-2 py-0.5 rounded text-[10px] font-mono font-bold">POST</span>
                <span className="text-slate-400 font-mono text-xs">/v1/shifts/create</span>
              </div>
              <span className="material-symbols-outlined text-slate-500 text-sm">content_copy</span>
           </div>
           <div className="p-6 overflow-x-auto">
             <pre className="font-mono text-xs text-blue-300 leading-relaxed">
{`curl -X POST https://api.singlezip.com/v1/shifts/create \\
  -H "Authorization: Bearer sk_live_..." \\
  -H "Content-Type: application/json" \\
  -d '{
    "worker_id": "wk_892348",
    "start_time": "2023-11-14T09:00:00Z",
    "location_id": "loc_5521"
  }'`}
             </pre>
           </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-6">Data Architecture</h2>
        <div className="p-8 bg-[#0d0d1a] grid-bg rounded-[2.5rem] border border-slate-800 shadow-inner h-[400px] relative overflow-hidden flex items-center justify-center group cursor-grab">
           {/* Abstract ERD representation */}
           <div className="relative p-6 bg-[#1e1e2e] border border-primary/50 rounded-xl shadow-2xl z-10 scale-110">
              <div className="flex items-center gap-2 mb-4">
                <span className="material-symbols-outlined text-primary text-sm">schema</span>
                <span className="font-mono text-xs font-bold text-white">public.workers</span>
              </div>
              <div className="space-y-2">
                 <div className="flex items-center justify-between gap-8">
                   <div className="flex items-center gap-2">
                     <span className="material-symbols-outlined text-[10px] text-yellow-400">key</span>
                     <span className="text-[10px] font-mono">id</span>
                   </div>
                   <span className="text-[10px] font-mono text-slate-500">uuid</span>
                 </div>
                 <div className="flex items-center justify-between gap-8">
                   <div className="flex items-center gap-2">
                     <div className="size-2.5" />
                     <span className="text-[10px] font-mono">full_name</span>
                   </div>
                   <span className="text-[10px] font-mono text-slate-500">text</span>
                 </div>
              </div>
           </div>
           <svg className="absolute inset-0 size-full pointer-events-none opacity-40">
             <path d="M 500,200 C 600,100 800,400 900,150" fill="none" stroke="#2b2bee" strokeWidth="2" strokeDasharray="5,5" />
           </svg>
        </div>
      </section>
    </div>
  );
};

const ApiKeyCard = ({ env, status, keyPrefix, time, color }: any) => {
  const colorClasses: Record<string, string> = {
    emerald: 'bg-emerald-500',
    amber: 'bg-amber-500'
  };

  return (
    <div className="bg-white dark:bg-surface-dark p-5 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-soft group hover:border-primary/30 transition-all">
       <div className="flex justify-between items-start mb-4">
          <div>
            <div className="flex items-center gap-2">
               <h3 className="text-lg font-bold">{env}</h3>
               <span className={`size-2 rounded-full ${colorClasses[color]} animate-pulse`} />
            </div>
            <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-1">Created Oct 2023 • {time}</p>
          </div>
          <span className="material-symbols-outlined text-slate-300 hover:text-red-500 transition-colors cursor-pointer">refresh</span>
       </div>
       <div className="bg-slate-50 dark:bg-slate-900 p-4 rounded-xl flex items-center justify-between border border-slate-100 dark:border-slate-800">
          <code className="text-xs font-mono text-slate-500">{keyPrefix}••••••••••••••••</code>
          <div className="flex gap-2">
            <button className="p-1 hover:text-primary"><span className="material-symbols-outlined text-lg">visibility</span></button>
            <button className="p-1 hover:text-primary"><span className="material-symbols-outlined text-lg">content_copy</span></button>
          </div>
       </div>
    </div>
  );
};

export default DevToolsView;
