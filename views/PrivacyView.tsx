
import React from 'react';
import { useNavigate } from 'react-router-dom';

const PrivacyView: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-white dark:bg-background-dark flex justify-center">
      <div className="w-full max-w-3xl p-6 sm:p-12">
        <header className="mb-12">
          <button onClick={() => navigate('/')} className="flex items-center gap-2 text-slate-500 hover:text-primary transition-colors font-bold mb-6">
            <span className="material-symbols-outlined">arrow_back</span>
            Back
          </button>
          <h1 className="text-4xl font-black tracking-tight mb-2">Privacy Policy</h1>
          <p className="text-slate-500">Last updated: October 14, 2025</p>
        </header>

        <div className="prose prose-slate dark:prose-invert max-w-none">
          <p className="lead text-lg font-medium text-slate-600 dark:text-slate-300">
            At SingleZip (trading as AirMonk Ltd), we take the privacy of our care sector professionals and provider organizations seriously. This policy outlines how we handle the sensitive data required for verification, hiring, and care logging.
          </p>

          <h3>1. Information We Collect</h3>
          <p>To operate the SingleZip ecosystem, we collect:</p>
          <ul className="list-disc pl-5 space-y-2 mb-6">
            <li><strong>Identity Data:</strong> Name, date of birth, and government ID for DBS/Right to Work checks.</li>
            <li><strong>Professional Data:</strong> Employment history, qualifications, and references.</li>
            <li><strong>Care Data:</strong> Logs generated within DoubleThing, including resident interactions and incident reports.</li>
            <li><strong>Usage Data:</strong> How you interact with the SingleSource and BrayJobs modules.</li>
          </ul>

          <h3>2. How We Use Your Data</h3>
          <p>Your data is used to:</p>
          <ul className="list-disc pl-5 space-y-2 mb-6">
            <li>Verify your eligibility to work in the UK care sector (SingleSource).</li>
            <li>Match workers with appropriate shifts based on qualifications (BrayJobs).</li>
            <li>Maintain accurate, legally compliant care records (DoubleThing).</li>
            <li>Improve the safety and efficiency of care delivery.</li>
          </ul>

          <h3>3. Data Security</h3>
          <p>
            We employ banking-grade AES-256 encryption for all data at rest and TLS 1.3 for data in transit. 
            Access to sensitive care records is strictly role-based and audited.
          </p>

          <h3>4. Your Rights</h3>
          <p>
            Under GDPR and UK data protection laws, you have the right to access, correct, or request deletion of your personal data. 
            For compliance data (DBS), retention periods are mandated by law.
          </p>

          <div className="mt-12 p-6 bg-slate-50 dark:bg-slate-800 rounded-2xl border border-slate-100 dark:border-slate-700">
            <h4 className="text-lg font-bold mb-2">Contact Data Protection Officer</h4>
            <p className="mb-4 text-sm">For any privacy-related inquiries, please contact our DPO.</p>
            <a href="mailto:dpo@singlezip.co.uk" className="text-primary font-bold hover:underline">dpo@singlezip.co.uk</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyView;
