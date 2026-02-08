
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Worker } from '../types';

const SingleSourceView: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className="flex-1 w-full max-w-4xl mx-auto px-4 pt-6 pb-24 lg:pb-12">
      <header className="mb-10">
        <div className="flex items-center gap-2 text-slate-500 text-xs font-bold uppercase tracking-widest mb-2">
          <span className="material-symbols-outlined text-lg">grid_view</span>
          SingleZip Dashboard
        </div>
        <h1 className="text-4xl font-black tracking-tighter mb-2">Worker Verification</h1>
        <p className="text-slate-500 text-lg">Ensure your staff are compliant and ready to work with automated background checks.</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        <div className="bg-white dark:bg-surface-dark p-6 rounded-3xl shadow-soft border border-slate-100 dark:border-slate-800 relative overflow-hidden group">
          <div className="absolute -right-4 -top-4 size-32 bg-primary/5 rounded-full blur-2xl" />
          <div className="size-12 rounded-2xl bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center text-primary mb-6">
            <span className="material-symbols-outlined text-3xl">person_add</span>
          </div>
          <h3 className="text-2xl font-bold mb-2">Verify New Worker</h3>
          <p className="text-slate-500 mb-8">Start a new request for DBS, Right to Work, or References.</p>
          <button className="w-full bg-primary hover:bg-primary-dark text-white font-bold h-14 rounded-2xl shadow-lg transition-all flex items-center justify-center gap-2">
            Start Request
            <span className="material-symbols-outlined">arrow_forward</span>
          </button>
        </div>

        <div className="bg-white dark:bg-surface-dark p-6 rounded-3xl shadow-soft border border-slate-100 dark:border-slate-800 flex flex-col justify-between">
          <div>
            <div className="size-12 rounded-2xl bg-slate-50 dark:bg-slate-800 flex items-center justify-center text-slate-500 mb-6">
              <span className="material-symbols-outlined text-3xl">upload_file</span>
            </div>
            <h3 className="text-2xl font-bold mb-2">Bulk Upload</h3>
            <p className="text-slate-500 mb-8">Upload a CSV of existing staff for retroactive verification.</p>
          </div>
          <button className="w-full bg-white dark:bg-slate-800 border-2 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 font-bold h-14 rounded-2xl hover:bg-slate-50 transition-all flex items-center justify-center gap-2">
            <span className="material-symbols-outlined">upload</span>
            Upload CSV
          </button>
        </div>
      </div>

      <section>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-black">Recent Verifications</h2>
          <button className="text-primary font-bold">View All</button>
        </div>
        <div className="bg-white dark:bg-surface-dark rounded-3xl border border-slate-100 dark:border-slate-800 overflow-hidden shadow-soft">
           <VerificationListItem name="Sarah Jenkins" check="DBS (Enhanced)" status="Verified" time="2m ago" />
           <VerificationListItem name="Mike Ross" check="Right to Work" status="Action Required" time="1h ago" />
           <VerificationListItem name="Jessica Pearson" check="Professional References" status="In Progress" time="1d ago" />
           <VerificationListItem name="Louis Hicks" check="Identity Check" status="In Progress" time="2d ago" />
        </div>
      </section>
    </div>
  );
};

const VerificationListItem = ({ name, check, status, time }: { name: string, check: string, status: string, time: string }) => {
  const isVerified = status === 'Verified';
  const isAction = status === 'Action Required';

  return (
    <div className="p-5 flex items-center justify-between border-b border-slate-50 dark:border-slate-800 last:border-0 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors cursor-pointer">
      <div className="flex items-center gap-4">
        <div className="size-12 rounded-full overflow-hidden border-2 border-slate-100 dark:border-slate-700">
          <img src={`https://picsum.photos/100/100?sig=${name}`} alt={name} />
        </div>
        <div>
          <p className="font-bold">{name}</p>
          <p className="text-xs text-slate-500 font-medium">{check}</p>
        </div>
      </div>
      <div className="flex flex-col items-end gap-1">
        <span className={`px-2 py-0.5 rounded text-[10px] font-black uppercase tracking-wider ${isVerified ? 'bg-emerald-100 text-emerald-700' : isAction ? 'bg-red-100 text-red-700' : 'bg-amber-100 text-amber-700'}`}>
          {status}
        </span>
        <span className="text-[10px] text-slate-400 font-bold">{time}</span>
      </div>
    </div>
  );
};

export default SingleSourceView;
