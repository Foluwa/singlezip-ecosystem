
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const BrayJobsView: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    position: '',
    site: 'Bray Manor (Main)',
    date: '',
    startTime: '',
    endTime: '',
    enhancedDBS: false,
    singleSourceVerified: true
  });
  const [errors, setErrors] = useState({ position: '', date: '', startTime: '', endTime: '' });

  const validateForm = () => {
    const newErrors = { position: '', date: '', startTime: '', endTime: '' };
    let isValid = true;

    if (!formData.position) {
      newErrors.position = 'Please select a position';
      isValid = false;
    }
    if (!formData.date) {
      newErrors.date = 'Please select a date';
      isValid = false;
    }
    if (!formData.startTime) {
      newErrors.startTime = 'Please select start time';
      isValid = false;
    }
    if (!formData.endTime) {
      newErrors.endTime = 'Please select end time';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      alert('Shift posted successfully!');
    }
  };
  return (
    <div className="flex-1 w-full max-w-4xl mx-auto px-4 pt-6 pb-24 lg:pb-12">
      <header className="mb-10">
        <h1 className="text-4xl font-black tracking-tighter mb-2">Post a Shift</h1>
        <p className="text-slate-500 text-lg">Fill gaps in your rota with verified workers instantly.</p>
      </header>

      <div className="space-y-6">
        <div className="bg-white dark:bg-surface-dark p-6 rounded-3xl shadow-soft border border-slate-100 dark:border-slate-800 grid grid-cols-1 md:grid-cols-2 gap-6">
           <div className="space-y-1.5">
              <label className="text-sm font-bold">Position</label>
              <select 
                value={formData.position}
                onChange={(e) => setFormData({...formData, position: e.target.value})}
                className={`w-full h-12 rounded-xl border dark:bg-slate-900 ${errors.position ? 'border-red-500' : 'border-slate-200 dark:border-slate-700'}`}
              >
                <option value="">Select Role</option>
                <option>Senior Carer</option>
                <option>Registered Nurse</option>
              </select>
              {errors.position && <p className="text-xs text-red-500 font-medium">{errors.position}</p>}
           </div>
           <div className="space-y-1.5">
              <label className="text-sm font-bold">Site / Care Home</label>
              <select 
                value={formData.site}
                onChange={(e) => setFormData({...formData, site: e.target.value})}
                className="w-full h-12 rounded-xl border-slate-200 dark:bg-slate-900 dark:border-slate-700"
              >
                <option>Bray Manor (Main)</option>
                <option>Sunset Wing</option>
              </select>
           </div>
        </div>

        <div className="bg-white dark:bg-surface-dark p-6 rounded-3xl shadow-soft border border-slate-100 dark:border-slate-800 space-y-6">
           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="space-y-1.5">
                 <label className="text-sm font-bold">Date</label>
                 <input 
                   type="date" 
                   value={formData.date}
                   min={new Date().toISOString().split('T')[0]}
                   onChange={(e) => setFormData({...formData, date: e.target.value})}
                   className={`w-full h-12 rounded-xl border dark:bg-slate-900 ${errors.date ? 'border-red-500' : 'border-slate-200 dark:border-slate-700'}`}
                 />
                 {errors.date && <p className="text-xs text-red-500 font-medium">{errors.date}</p>}
              </div>
              <div className="space-y-1.5">
                 <label className="text-sm font-bold">Start Time</label>
                 <input 
                   type="time" 
                   value={formData.startTime}
                   onChange={(e) => setFormData({...formData, startTime: e.target.value})}
                   className={`w-full h-12 rounded-xl border dark:bg-slate-900 ${errors.startTime ? 'border-red-500' : 'border-slate-200 dark:border-slate-700'}`}
                 />
                 {errors.startTime && <p className="text-xs text-red-500 font-medium">{errors.startTime}</p>}
              </div>
              <div className="space-y-1.5">
                 <label className="text-sm font-bold">End Time</label>
                 <input 
                   type="time" 
                   value={formData.endTime}
                   onChange={(e) => setFormData({...formData, endTime: e.target.value})}
                   className={`w-full h-12 rounded-xl border dark:bg-slate-900 ${errors.endTime ? 'border-red-500' : 'border-slate-200 dark:border-slate-700'}`}
                 />
                 {errors.endTime && <p className="text-xs text-red-500 font-medium">{errors.endTime}</p>}
              </div>
           </div>
        </div>

        <div className="bg-white dark:bg-surface-dark p-6 rounded-3xl shadow-soft border border-slate-100 dark:border-slate-800">
          <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-6">Compliance</h3>
          <div className="space-y-4">
             <ToggleItem 
               label="Require Enhanced DBS" 
               sublabel="Mandatory for this role" 
               active={formData.enhancedDBS}
               onToggle={() => setFormData({...formData, enhancedDBS: !formData.enhancedDBS})}
             />
             <ToggleItem 
               label="SingleSource Verified" 
               sublabel="Instantly matches pre-vetted staff" 
               active={formData.singleSourceVerified}
               onToggle={() => setFormData({...formData, singleSourceVerified: !formData.singleSourceVerified})}
             />
          </div>
        </div>

        <button onClick={handleSubmit} className="w-full bg-primary hover:bg-primary-dark text-white font-bold h-16 rounded-2xl shadow-glow text-lg flex items-center justify-center gap-3">
           Post Shift to Verified Pool
           <span className="material-symbols-outlined">send</span>
        </button>
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-black mb-6">Matching Candidates</h2>
        <div className="flex gap-4 overflow-x-auto no-scrollbar pb-4">
          <CandidateCard name="Sarah J." rating={5.0} />
          <CandidateCard name="David M." rating={4.9} />
          <CandidateCard name="Mark T." rating={4.8} />
          <CandidateCard name="Alice W." rating={5.0} />
        </div>
      </div>
    </div>
  );
};

const ToggleItem = ({ label, sublabel, active = false, onToggle }: { label: string, sublabel: string, active?: boolean, onToggle?: () => void }) => (
  <div className="flex items-center justify-between">
    <div>
      <p className="font-bold text-sm">{label}</p>
      <p className="text-xs text-slate-400 font-medium">{sublabel}</p>
    </div>
    <button 
      type="button"
      onClick={onToggle}
      className={`w-12 h-6 rounded-full p-1 transition-colors cursor-pointer ${active ? 'bg-primary' : 'bg-slate-200 dark:bg-slate-700'}`}
    >
       <div className={`size-4 bg-white rounded-full transition-transform ${active ? 'translate-x-6' : 'translate-x-0'}`} />
    </button>
  </div>
);

const CandidateCard = ({ name, rating }: { name: string, rating: number }) => (
  <div className="min-w-[140px] flex-1 bg-white dark:bg-surface-dark p-5 rounded-3xl shadow-soft border border-slate-100 dark:border-slate-800 flex flex-col items-center gap-3">
    <div className="relative">
      <img src={`https://picsum.photos/100/100?sig=${name}`} className="size-16 rounded-full border-2 border-primary" alt={name} />
      <div className="absolute bottom-0 right-0 bg-primary text-white text-[8px] font-bold px-1.5 py-0.5 rounded-full border-2 border-white dark:border-surface-dark">
        {rating}
      </div>
    </div>
    <div className="text-center">
      <p className="font-bold text-sm">{name}</p>
      <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Verified</p>
    </div>
  </div>
);

export default BrayJobsView;
