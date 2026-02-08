
import React, { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';

const BookingView: React.FC = () => {
  const navigate = useNavigate();
  const today = new Date();
  const [currentMonth, setCurrentMonth] = useState(today.getMonth());
  const [currentYear, setCurrentYear] = useState(today.getFullYear());
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string>('10:00 AM');

  const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  const calendarDays = useMemo(() => {
    const firstDay = new Date(currentYear, currentMonth, 1);
    const lastDay = new Date(currentYear, currentMonth + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = firstDay.getDay();
    
    const days = [];
    // Add empty cells for days before month starts
    for (let i = 0; i < startingDayOfWeek; i++) {
      days.push(null);
    }
    // Add actual days
    for (let day = 1; day <= daysInMonth; day++) {
      days.push(new Date(currentYear, currentMonth, day));
    }
    return days;
  }, [currentMonth, currentYear]);

  const isDateDisabled = (date: Date | null) => {
    if (!date) return true;
    const todayStart = new Date(today.getFullYear(), today.getMonth(), today.getDate());
    return date < todayStart;
  };

  const isSameDate = (date1: Date | null, date2: Date | null) => {
    if (!date1 || !date2) return false;
    return date1.getDate() === date2.getDate() && 
           date1.getMonth() === date2.getMonth() && 
           date1.getFullYear() === date2.getFullYear();
  };

  const goToPreviousMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
  };

  const goToNextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
  };

  const isPreviousMonthDisabled = () => {
    if (currentYear < today.getFullYear()) return true;
    if (currentYear === today.getFullYear() && currentMonth <= today.getMonth()) return true;
    return false;
  };

  const handleConfirm = () => {
    if (!selectedDate || !selectedTime) {
      alert('Please select a date and time');
      return;
    }
    navigate('/booking/confirmed', { 
      state: { 
        selectedDate, 
        selectedTime 
      } 
    });
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
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-bold">Select a Date</h3>
                  <div className="flex items-center gap-2">
                    <button 
                      onClick={goToPreviousMonth}
                      disabled={isPreviousMonthDisabled()}
                      className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
                    >
                      <span className="material-symbols-outlined text-lg">chevron_left</span>
                    </button>
                    <span className="text-sm font-bold min-w-[140px] text-center">
                      {monthNames[currentMonth]} {currentYear}
                    </span>
                    <button 
                      onClick={goToNextMonth}
                      className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-all"
                    >
                      <span className="material-symbols-outlined text-lg">chevron_right</span>
                    </button>
                  </div>
                </div>
                <div className="grid grid-cols-7 gap-y-4 text-center">
                   {['S','M','T','W','T','F','S'].map(d => <span key={d} className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{d}</span>)}
                   {calendarDays.map((date, i) => {
                     if (!date) {
                       return <div key={`empty-${i}`} className="size-10" />;
                     }
                     const disabled = isDateDisabled(date);
                     const selected = isSameDate(date, selectedDate);
                     return (
                       <button 
                         key={i} 
                         onClick={() => !disabled && setSelectedDate(date)}
                         disabled={disabled}
                         className={`size-10 flex items-center justify-center rounded-full text-sm font-bold transition-all ${
                           selected
                             ? 'bg-primary text-white shadow-glow' 
                             : disabled
                             ? 'text-slate-300 dark:text-slate-700 cursor-not-allowed'
                             : 'hover:bg-slate-100 dark:hover:bg-slate-800'
                         }`}
                       >
                         {date.getDate()}
                       </button>
                     );
                   })}
                </div>
             </div>

             <div>
                <h3 className="text-xl font-bold mb-4">Available Time</h3>
                <div className="overflow-x-auto -mx-6 px-6" style={{ WebkitOverflowScrolling: 'touch' }}>
                   <div className="flex gap-3 pb-2 min-w-max">
                      {[
                        '09:00 AM', '09:30 AM', '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM',
                        '12:00 PM', '12:30 PM', '01:00 PM', '01:30 PM', '02:00 PM', '02:30 PM',
                        '03:00 PM', '03:30 PM', '04:00 PM', '04:30 PM', '05:00 PM', '05:30 PM'
                      ].map(t => (
                        <button 
                          key={t} 
                          onClick={() => setSelectedTime(t)}
                          className={`py-3 px-6 rounded-xl border text-[11px] font-black uppercase tracking-wider transition-all whitespace-nowrap flex-shrink-0 ${
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
