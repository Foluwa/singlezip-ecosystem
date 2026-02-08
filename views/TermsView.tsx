
import React from 'react';
import { useNavigate } from 'react-router-dom';

const TermsView: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-white dark:bg-background-dark flex justify-center">
      <div className="w-full max-w-3xl p-6 sm:p-12">
        <header className="mb-12">
          <button onClick={() => navigate('/')} className="flex items-center gap-2 text-slate-500 hover:text-primary transition-colors font-bold mb-6">
            <span className="material-symbols-outlined">arrow_back</span>
            Back
          </button>
          <h1 className="text-4xl font-black tracking-tight mb-2">Terms of Service</h1>
          <p className="text-slate-500">Effective Date: September 1, 2025</p>
        </header>

        <div className="prose prose-slate dark:prose-invert max-w-none">
          <p className="lead text-lg font-medium text-slate-600 dark:text-slate-300">
            Welcome to SingleZip. These terms govern your use of our operating system for the UK care sector. By accessing SingleSource, BrayJobs, or DoubleThing, you agree to these terms.
          </p>

          <h3>1. Definitions</h3>
          <ul className="list-disc pl-5 space-y-2 mb-6">
            <li><strong>"Platform"</strong> refers to the SingleZip ecosystem including all modules.</li>
            <li><strong>"Provider"</strong> refers to care homes or agencies using the platform.</li>
            <li><strong>"Worker"</strong> refers to individuals using the platform to find work or log care.</li>
          </ul>

          <h3>2. Acceptable Use</h3>
          <p>
            You agree to use SingleZip only for lawful purposes related to care provision. 
            You must not input false information regarding qualifications, identity, or care logs. 
            Falsifying care records is a serious offense and will be reported to the CQC and relevant authorities.
          </p>

          <h3>3. Verification & Compliance</h3>
          <p>
            While SingleSource automates checks (DBS, Right to Work), Providers remain ultimately responsible for ensuring staff suitability under CQC Regulation 19. 
            SingleZip acts as a data processor facilitating these checks.
          </p>

          <h3>4. Availability & Liability</h3>
          <p>
            We strive for 99.9% uptime. However, SingleZip is provided "as is". 
            AirMonk Ltd is not liable for operational losses arising from platform unavailability, though we maintain robust business continuity plans.
          </p>

          <h3>5. Subscription & Fees</h3>
          <p>
            Providers agree to pay fees as set out in their service order. 
            Worker accounts are free. Hiring fees via BrayJobs are payable upon successful shift completion.
          </p>

          <div className="mt-12 border-t border-slate-200 dark:border-slate-700 pt-8">
            <p className="text-sm text-slate-400">
              SingleZip is a product of AirMonk Ltd, registered in England & Wales (Company No. 12345678).
              <br/>Registered Office: 12 Tech City, London, EC1V 2NX.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsView;
