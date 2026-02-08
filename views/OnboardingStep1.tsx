
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const OnboardingStep1: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });
  const [errors, setErrors] = useState({ name: '', email: '', password: '' });
  const [showPassword, setShowPassword] = useState(false);

  const validateForm = () => {
    const newErrors = { name: '', email: '', password: '' };
    let isValid = true;

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
      isValid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
      isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
      isValid = false;
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
      isValid = false;
    } else if (formData.password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      navigate('/onboarding/step2');
    }
  };
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-slate-50 dark:bg-background-dark">
      <div className="w-full max-w-md mb-12 flex justify-center">
        <div className="flex items-center gap-3">
          <div className="size-8 text-primary">
              <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                  <path d="M20 34C27.732 34 34 27.732 34 20C34 13.0825 29.027 7.34263 22.5 6.09632" stroke="currentColor" strokeWidth="4.5" strokeLinecap="round"/>
                  <path d="M17.5 6.09632C10.973 7.34263 6 13.0825 6 20C6 27.732 12.268 34 20 34" stroke="currentColor" strokeWidth="4.5" strokeLinecap="round"/>
                  <circle cx="20" cy="5" r="3.5" fill="currentColor"/>
               </svg>
          </div>
          <h1 className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">
            Single<span className="text-primary">Zip</span>
          </h1>
        </div>
      </div>

      <div className="w-full max-w-[440px] bg-white dark:bg-surface-dark rounded-3xl shadow-2xl border border-slate-100 dark:border-slate-800 overflow-hidden">
        <div className="p-8 pb-4">
          <div className="flex justify-between items-center text-xs font-bold text-slate-400 mb-2 uppercase tracking-widest">
            <span>Step 1 of 2</span>
            <span>50%</span>
          </div>
          <div className="h-1.5 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
            <div className="h-full w-1/2 bg-primary rounded-full transition-all duration-700"></div>
          </div>
        </div>

        <div className="p-8 pt-6">
          <div className="mb-10">
            <h2 className="text-3xl font-extrabold tracking-tight mb-2">Create your employer account</h2>
            <p className="text-slate-500 text-sm">Join the central system for the UK care sector.</p>
          </div>

          <form className="space-y-5" onSubmit={handleSubmit}>
            <div className="space-y-1.5">
              <label className="text-sm font-bold">Full Name</label>
              <input 
                type="text" 
                placeholder="e.g. Jane Doe" 
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                className={`w-full h-12 rounded-xl border dark:bg-slate-900 focus:ring-primary focus:border-primary ${errors.name ? 'border-red-500' : 'border-slate-200 dark:border-slate-700'}`}
              />
              {errors.name && <p className="text-xs text-red-500 font-medium">{errors.name}</p>}
            </div>
            <div className="space-y-1.5">
              <label className="text-sm font-bold">Work Email</label>
              <input 
                type="email" 
                placeholder="name@company.com" 
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                className={`w-full h-12 rounded-xl border dark:bg-slate-900 focus:ring-primary focus:border-primary ${errors.email ? 'border-red-500' : 'border-slate-200 dark:border-slate-700'}`}
              />
              {errors.email && <p className="text-xs text-red-500 font-medium">{errors.email}</p>}
            </div>
            <div className="space-y-1.5">
              <label className="text-sm font-bold">Create Password</label>
              <div className="relative">
                <input 
                  type={showPassword ? 'text' : 'password'} 
                  placeholder="At least 8 characters"
                  value={formData.password}
                  onChange={(e) => setFormData({...formData, password: e.target.value})}
                  className={`w-full h-12 rounded-xl border dark:bg-slate-900 focus:ring-primary focus:border-primary pr-12 ${errors.password ? 'border-red-500' : 'border-slate-200 dark:border-slate-700'}`}
                />
                <span 
                  onClick={() => setShowPassword(!showPassword)}
                  className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 cursor-pointer hover:text-slate-600"
                >
                  {showPassword ? 'visibility' : 'visibility_off'}
                </span>
              </div>
              {errors.password && <p className="text-xs text-red-500 font-medium">{errors.password}</p>}
            </div>

            <button type="submit" className="w-full h-14 mt-6 bg-primary hover:bg-primary-dark text-white font-bold rounded-xl shadow-lg transition-transform active:scale-[0.98] flex items-center justify-center gap-2">
              Continue
              <span className="material-symbols-outlined">arrow_forward</span>
            </button>
          </form>

          <div className="mt-8 pt-8 border-t border-slate-100 dark:border-slate-800 text-center">
            <p className="text-sm text-slate-500">Already have an account? <a href="#" className="text-primary font-bold">Sign in</a></p>
          </div>
        </div>
      </div>
      
      <button onClick={() => navigate('/')} className="mt-8 text-slate-400 font-medium hover:text-slate-600">Back to Landing</button>
    </div>
  );
};

export default OnboardingStep1;
