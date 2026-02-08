
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const OnboardingStep2: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ cqcId: '', careHomes: '', careType: 'Residential' });
  const [errors, setErrors] = useState({ careHomes: '' });

  const validateForm = () => {
    const newErrors = { careHomes: '' };
    let isValid = true;

    if (!formData.careHomes || parseInt(formData.careHomes) < 1) {
      newErrors.careHomes = 'Please enter at least 1 care home';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      navigate('/dashboard');
    }
  };
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-slate-50 dark:bg-background-dark">
      <div className="w-full max-w-[440px] bg-white dark:bg-surface-dark rounded-3xl shadow-2xl border border-slate-100 dark:border-slate-800 overflow-hidden">
        <header className="px-6 pt-8 pb-4 flex items-center justify-between">
           <button onClick={() => navigate('/onboarding/step1')} className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800">
             <span className="material-symbols-outlined">arrow_back_ios_new</span>
           </button>
           <div className="flex items-center gap-2">
              <div className="size-6 text-primary">
                <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                  <path d="M20 34C27.732 34 34 27.732 34 20C34 13.0825 29.027 7.34263 22.5 6.09632" stroke="currentColor" strokeWidth="4.5" strokeLinecap="round"/>
                  <path d="M17.5 6.09632C10.973 7.34263 6 13.0825 6 20C6 27.732 12.268 34 20 34" stroke="currentColor" strokeWidth="4.5" strokeLinecap="round"/>
                  <circle cx="20" cy="5" r="3.5" fill="currentColor"/>
               </svg>
              </div>
              <h2 className="text-lg font-bold">Single<span className="text-primary">Zip</span></h2>
           </div>
           <div className="w-10" />
        </header>
        
        <div className="px-8 pb-4">
          <div className="h-1.5 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
            <div className="h-full w-full bg-primary rounded-full transition-all duration-700"></div>
          </div>
        </div>

        <div className="p-8 pt-6">
          <div className="mb-10">
            <h2 className="text-3xl font-extrabold tracking-tight mb-2">Tell us about your organization</h2>
            <p className="text-slate-500 text-sm">This helps us tailor the ecosystem to your specific needs.</p>
          </div>

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="space-y-1.5">
              <label className="text-sm font-bold">CQC Provider ID <span className="text-slate-400 font-normal">(Optional)</span></label>
              <input 
                type="text" 
                placeholder="Enter ID" 
                value={formData.cqcId}
                onChange={(e) => setFormData({...formData, cqcId: e.target.value})}
                className="w-full h-12 rounded-xl border-slate-200 dark:bg-slate-900 dark:border-slate-700 focus:ring-primary focus:border-primary" 
              />
            </div>
            <div className="space-y-1.5">
              <label className="text-sm font-bold">Number of Care Homes</label>
              <input 
                type="number" 
                placeholder="e.g. 5" 
                min="1"
                value={formData.careHomes}
                onChange={(e) => setFormData({...formData, careHomes: e.target.value})}
                className={`w-full h-12 rounded-xl border dark:bg-slate-900 focus:ring-primary focus:border-primary ${errors.careHomes ? 'border-red-500' : 'border-slate-200 dark:border-slate-700'}`}
              />
              {errors.careHomes && <p className="text-xs text-red-500 font-medium">{errors.careHomes}</p>}
            </div>
            <div className="space-y-1.5">
              <label className="text-sm font-bold">Primary Care Type</label>
              <select 
                value={formData.careType}
                onChange={(e) => setFormData({...formData, careType: e.target.value})}
                className="w-full h-12 rounded-xl border-slate-200 dark:bg-slate-900 dark:border-slate-700 focus:ring-primary focus:border-primary"
              >
                <option>Residential</option>
                <option>Nursing</option>
                <option>Domiciliary</option>
                <option>Supported Living</option>
              </select>
            </div>

            <button type="submit" className="w-full h-14 mt-6 bg-primary hover:bg-primary-dark text-white font-bold rounded-xl shadow-lg transition-transform active:scale-[0.98] flex items-center justify-center gap-2">
              Complete Setup
              <span className="material-symbols-outlined">arrow_forward</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default OnboardingStep2;
