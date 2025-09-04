
import { BarChart, RefreshCw, Lock, Percent } from 'lucide-react';

function Dashboard() {
  return (

    <div className="flex gap-6 py-4">
      {/* Total Revenue */}
      <div className="bg-white rounded-xl shadow p-6 flex-1 min-w-[280px] flex flex-col justify-between">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2">
            <span className="bg-gray-900 p-2 rounded-lg"><BarChart size={22} className="text-white" /></span>
            <span className="font-semibold text-gray-700">Total Revenue</span>
          </div>
          <RefreshCw size={18} className="text-gray-400" />
        </div>
        <div className="text-3xl font-bold text-gray-900 mb-2">$245,678</div>
        <div className="flex items-center justify-between">
          <span className="text-green-600 text-sm font-semibold flex items-center gap-1">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="green" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 17l6-6 4 4 8-8" /></svg>
            12% (+$26,800)
          </span>
          {/* Simple trend line SVG */}
          <svg width="60" height="32" viewBox="0 0 60 32"><path d="M2 30 Q20 10 30 20 Q40 30 58 6" stroke="green" strokeWidth="2" fill="none" /></svg>
        </div>
      </div>
      {/* Average Order Value */}
      <div className="bg-white rounded-xl shadow p-6 flex-1 min-w-[280px] flex flex-col justify-between">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2">
            <span className="bg-gray-900 p-2 rounded-lg"><Lock size={22} className="text-white" /></span>
            <span className="font-semibold text-gray-700">Average Order Value</span>
          </div>
          <RefreshCw size={18} className="text-gray-400" />
        </div>
        <div className="text-3xl font-bold text-gray-900 mb-2">$67.42</div>
        <div className="flex items-center justify-between">
          <span className="text-green-600 text-sm font-semibold flex items-center gap-1">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="green" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 17l6-6 4 4 8-8" /></svg>
            8% (+$4.85)
          </span>
          <svg width="60" height="32" viewBox="0 0 60 32"><path d="M2 30 Q20 20 30 10 Q40 20 58 6" stroke="green" strokeWidth="2" fill="none" /></svg>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow p-6 flex-1 min-w-[280px] flex flex-col justify-between">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2">
            <span className="bg-gray-900 p-2 rounded-lg"><Percent size={22} className="text-white" /></span>
            <span className="font-semibold text-gray-700">Conversion Rate</span>
          </div>
          <RefreshCw size={18} className="text-gray-400" />
        </div>
        <div className="text-3xl font-bold text-gray-900 mb-2">4.8%</div>
        <div className="flex items-center justify-between">
          <span className="text-green-600 text-sm font-semibold flex items-center gap-1">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="green" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 17l6-6 4 4 8-8" /></svg>
            0.3% (+24 Orders)
          </span>
          <svg width="60" height="32" viewBox="0 0 60 32"><path d="M2 30 Q20 25 30 15 Q40 25 58 6" stroke="green" strokeWidth="2" fill="none" /></svg>
        </div>
      </div>
    </div>

  );
}

export default Dashboard;