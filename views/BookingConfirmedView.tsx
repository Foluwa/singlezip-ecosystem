
import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const BookingConfirmedView: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { selectedDate, selectedTime } = location.state || {};

  const formatDate = (date: Date | null) => {
    if (!date) return 'Not selected';
    const options: Intl.DateTimeFormatOptions = { month: 'short', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
  };
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-white dark:bg-background-dark text-center">
       <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mb-8 relative">
          <div className="absolute inset-0 bg-primary/5 rounded-full animate-ping" />
          <span className="material-symbols-outlined text-primary text-6xl font-black">check_circle</span>
       </div>
       
       <h1 className="text-3xl font-black tracking-tighter leading-tight mb-4">You’re all set for your onsite demo.</h1>
       <p className="text-slate-500 max-w-xs mx-auto mb-12">We’ve sent a confirmation email with details. We look forward to meeting you and your team.</p>

       <div className="w-full max-w-sm bg-slate-50 dark:bg-slate-800/50 rounded-3xl p-6 space-y-4 mb-12 border border-slate-100 dark:border-slate-700">
          <div className="flex items-center gap-4">
             <div className="size-10 bg-primary rounded-xl flex items-center justify-center text-white"><span className="material-symbols-outlined text-lg">calendar_today</span></div>
             <div className="text-left"><p className="text-[10px] font-black text-primary uppercase tracking-widest">Date & Time</p><p className="font-bold text-sm">{formatDate(selectedDate)}, {selectedTime || 'Not selected'}</p></div>
          </div>
          <div className="flex items-center gap-4">
             <div className="size-10 bg-primary rounded-xl flex items-center justify-center text-white"><span className="material-symbols-outlined text-lg">location_on</span></div>
             <div className="text-left"><p className="text-[10px] font-black text-primary uppercase tracking-widest">Location</p><p className="font-bold text-sm">Sunrise Care Home, London</p></div>
          </div>
          <div className="flex items-center gap-4 pt-4 border-t border-slate-100 dark:border-slate-700">
             <img src="https://picsum.photos/100/100?sig=host" className="size-10 rounded-full" />
             <div className="text-left"><p className="text-[10px] font-black text-primary uppercase tracking-widest">Host</p><p className="font-bold text-sm">Sarah Jenkins <span className="block text-[10px] font-medium text-slate-400 capitalize">SingleZip Specialist</span></p></div>
          </div>
       </div>

       <button onClick={() => navigate('/')} className="text-slate-400 font-bold text-sm hover:text-primary transition-colors">Close</button>
    </div>
  );
};

export default BookingConfirmedView;
