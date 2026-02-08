
import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const MessagingView: React.FC = () => {
  const navigate = useNavigate();
  const [messages, setMessages] = useState([
    { sender: 'Sarah Jenkins', text: 'Hi, I just submitted the fall report for the downtown site. Let me know if you need anything else.', time: '10:42 AM', type: 'text', avatar: 'https://picsum.photos/100/100?sig=1' },
    { sender: 'Sarah Jenkins', text: 'Here is the PDF copy.', time: '10:43 AM', type: 'file', fileName: 'Fall_Report_Final.pdf', fileSize: '2.4 MB', avatar: 'https://picsum.photos/100/100?sig=1' },
  ]);
  const [inputValue, setInputValue] = useState('');
  const chatEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = () => {
    if (!inputValue.trim()) return;
    setMessages([...messages, {
      sender: 'You',
      text: inputValue,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      type: 'text',
      avatar: 'https://picsum.photos/100/100?sig=me'
    }]);
    setInputValue('');
  };

  return (
    <div className="flex-1 w-full max-w-md mx-auto h-screen flex flex-col bg-background-light dark:bg-background-dark">
       <header className="h-16 flex items-center justify-between px-4 bg-white/90 dark:bg-surface-dark/90 backdrop-blur-md border-b border-gray-200 dark:border-gray-800 shrink-0 z-20">
         <div className="flex items-center gap-3">
           <button onClick={() => navigate('/profile')} className="text-slate-500"><span className="material-symbols-outlined">arrow_back</span></button>
           <div className="flex flex-col">
             <h1 className="text-sm font-bold">Sarah Jenkins</h1>
             <span className="text-[10px] font-bold text-green-500 flex items-center gap-1 uppercase tracking-widest">
               <span className="size-1.5 rounded-full bg-green-500" />
               Active now
             </span>
           </div>
         </div>
         <div className="flex items-center gap-2">
           <button className="size-10 rounded-full flex items-center justify-center text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
             <span className="material-symbols-outlined">phone</span>
           </button>
           <button className="size-10 rounded-full flex items-center justify-center text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
             <span className="material-symbols-outlined">more_vert</span>
           </button>
         </div>
       </header>

       <div className="flex-1 overflow-y-auto no-scrollbar p-4 space-y-6">
          <div className="flex justify-center">
            <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 bg-slate-100 dark:bg-slate-800 px-3 py-1 rounded-full">Today</span>
          </div>

          {messages.map((msg, i) => (
            <div key={i} className={`flex items-end gap-3 ${msg.sender === 'You' ? 'justify-end' : 'justify-start'}`}>
              {msg.sender !== 'You' && (
                <img src={msg.avatar} alt="Avatar" className="size-8 rounded-full shrink-0 mb-1" />
              )}
              <div className={`max-w-[80%] flex flex-col gap-1 ${msg.sender === 'You' ? 'items-end' : ''}`}>
                <span className="text-[10px] text-slate-400 font-bold ml-1">{msg.sender} • {msg.time}</span>
                <div className={`p-4 rounded-2xl ${msg.sender === 'You' ? 'bg-primary text-white rounded-br-none shadow-glow' : 'bg-white dark:bg-surface-dark border border-slate-100 dark:border-slate-700 rounded-bl-none shadow-soft'}`}>
                  {msg.type === 'text' ? (
                    <p className="text-sm leading-relaxed">{msg.text}</p>
                  ) : (
                    <div className="space-y-3">
                      <p className="text-sm">{msg.text}</p>
                      <div className="bg-slate-50 dark:bg-slate-900/50 p-3 rounded-xl border border-slate-200 dark:border-slate-700 flex items-center gap-3">
                        <div className="size-10 bg-red-100 dark:bg-red-900/30 rounded-lg flex items-center justify-center text-red-600 dark:text-red-400">
                          <span className="material-symbols-outlined">description</span>
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-xs font-bold truncate">{msg.fileName}</p>
                          <p className="text-[10px] text-slate-400">{msg.fileSize} • PDF</p>
                        </div>
                        <span className="material-symbols-outlined text-slate-400">download</span>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
          <div ref={chatEndRef} />
       </div>

       <div className="bg-white/95 dark:bg-surface-dark/95 backdrop-blur-md border-t border-slate-200 dark:border-slate-800 p-4 pb-12">
          <div className="flex gap-2 overflow-x-auto no-scrollbar mb-4">
             <button className="whitespace-nowrap px-4 py-2 bg-primary/10 text-primary text-xs font-bold rounded-xl border border-primary/20 flex items-center gap-2">
               <span className="material-symbols-outlined text-sm">add_circle</span> Offer Shift
             </button>
             <button className="whitespace-nowrap px-4 py-2 bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-400 text-xs font-bold rounded-xl border border-slate-200 dark:border-slate-700 flex items-center gap-2">
               <span className="material-symbols-outlined text-sm">calendar_today</span> View Schedule
             </button>
          </div>
          <div className="flex items-center gap-2">
            <button className="p-2 text-slate-400"><span className="material-symbols-outlined">add</span></button>
            <div className="flex-1 bg-slate-100 dark:bg-slate-900 rounded-2xl flex items-center px-4 py-2">
              <input 
                type="text" 
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Type a message..." 
                className="bg-transparent border-none focus:ring-0 w-full text-sm" 
              />
              <span className="material-symbols-outlined text-slate-400 cursor-pointer">mood</span>
            </div>
            <button 
              onClick={handleSend}
              className="size-11 rounded-full bg-primary text-white flex items-center justify-center shadow-lg transition-transform active:scale-90"
            >
              <span className="material-symbols-outlined ml-0.5">send</span>
            </button>
          </div>
       </div>
    </div>
  );
};

export default MessagingView;
