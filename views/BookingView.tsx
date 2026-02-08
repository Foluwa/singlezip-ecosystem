
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const BookingView: React.FC = () => {
  const navigate = useNavigate();
  const [selectedDate, setSelectedDate] = useState<number | null>(12);
  const [selectedTime, setSelectedTime] = useState<string>('10:00 AM');

  const handleConfirm = () => {
    if (!selectedDate || !selectedTime) {
      alert('Please select a date and time');
      return;
    }
    navigate('/booking/confirmed');
  };
  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-background-dark max-w-md mx-auto w-full relative">
       <header className="sticky top-0 z-50 bg-white/90 dark:bg-background-dark/90 backdrop-blur-md border-b border-slate-100 dark:border-slate-800 px-4 h-14 flex items-center justify-between">
          <button onClick={() => navigate('/')} className="p-2 text-slate-500"><span className="material-symbols-outlined">arrow_back_ios_new</span></button>
          <h1 className="text-base font-bold">Schedule Demo</h1>
          <div className="w-8" />
       </header>

       <main className="flex-1 overflow-y-auto no-scrollbar p-6">
          <h2 className="text-3xl font-black tracking-tighter leading-tight mb-4">Let’s bring SingleZip to you.</h2>
          <p className="text-slate-500 mb-8">We’ll walk your team through the ecosystem and show you how to eliminate paperwork for good.</p>

          <div className="space-y-4 mb-10">
             <CheckItem label="Personalized walkthrough" />
             <CheckItem label="Q&A with a sector specialist" />
             <CheckItem label="Immediate setup assistance" />
          </div>

          <div className="h-2 bg-slate-50 dark:bg-slate-800 -mx-6 mb-8" />

          <section className="space-y-8">
             <div>
                <h3 className="text-xl font-bold mb-6">Select a Date</h3>
                <div className="grid grid-cols-7 gap-y-4 text-center">
                   {['S','M','T','W','T','F','S'].map(d => <span key={d} className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{d}</span>)}
                   {Array.from({length: 15}).map((_, i) => {
                     const day = i + 1;
                     return (
                       <button 
                         key={i} 
                         onClick={() => setSelectedDate(day)}
                         className={`size-10 flex items-center justify-center rounded-full text-sm font-bold transition-all ${
                           selectedDate === day 
                             ? 'bg-primary text-white shadow-glow' 
                             : 'hover:bg-slate-100 dark:hover:bg-slate-800'
                         }`}
                       >
                         {day}
                       </button>
                     );
                   })}
                </div>
             </div>

             <div>
                <h3 className="text-xl font-bold mb-4">Available Time</h3>
                <div className="grid grid-cols-3 gap-3">
                   {['09:00 AM', '09:30 AM', '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM'].map(t => (
                     <button 
                       key={t} 
                       onClick={() => setSelectedTime(t)}
                       className={`py-3 rounded-xl border text-[11px] font-black uppercase tracking-wider transition-all ${
                         selectedTime === t 
                           ? 'bg-primary/10 border-primary text-primary shadow-sm' 
                           : 'border-slate-100 dark:border-slate-800 hover:border-primary'
                       }`}
                     >
                       {t}
                     </button>
                   ))}
                </div>
             </div>
          </section>
       </main>

       <div className="sticky bottom-0 bg-white/95 dark:bg-background-dark/95 border-t border-slate-100 dark:border-slate-800 p-6 shadow-up">
          <button onClick={handleConfirm} className="w-full h-14 bg-primary hover:bg-primary-dark text-white font-bold rounded-2xl shadow-glow text-lg flex items-center justify-center gap-3 active:scale-[0.98] transition-transform">
             Confirm Booking
             <span className="material-symbols-outlined">arrow_forward</span>
          </button>
          <p className="text-center text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-4">Free onsite demo • No commitment</p>
       </div>
    </div>
  );
};

const CheckItem = ({ label }: { label: string }) => (
  <div className="flex items-center gap-3">
    <span className="material-symbols-outlined text-primary text-xl filled">check_circle</span>
    <span className="text-sm font-bold text-slate-700 dark:text-slate-300">{label}</span>
  </div>
);

export default BookingView;
