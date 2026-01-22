import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function WorkerFoodChecklist() {
  const [completedTasks, setCompletedTasks] = useState({});
  const [expandedTask, setExpandedTask] = useState(null);

  const tasks = [
    {
      id: 'supermarkets',
      title: 'Supermarkets',
      description: 'Find major supermarket chains',
      steps: ['Locate nearby Carrefour, Auchan, or Leclerc', 'Compare prices between stores', 'Sign up for loyalty cards', 'Check weekly promotions', 'Use store apps for deals'],
      links: [{ label: 'Carrefour', href: 'https://www.carrefour.fr', description: 'Major supermarket chain' }]
    },
    {
      id: 'markets',
      title: 'Local Markets',
      description: 'Discover fresh produce at local markets',
      steps: ['Find market days and locations', 'Visit early for best selection', 'Buy seasonal produce', 'Negotiate prices at closing time', 'Bring reusable bags'],
      links: [{ label: 'Market Finder', href: 'https://www.google.com/maps', description: 'Search for local markets' }]
    }
  ];

  const completedCount = Object.values(completedTasks).filter(Boolean).length;
  const progress = Math.round((completedCount / tasks.length) * 100);

  const toggleTask = (taskId) => { setCompletedTasks(prev => ({ ...prev, [taskId]: !prev[taskId] })); };
  const toggleExpand = (taskId) => { setExpandedTask(expandedTask === taskId ? null : taskId); };

  return (
    <main className="max-w-5xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
      <Link to="/worker/dashboard" className="inline-flex items-center gap-2 text-primary hover:underline mb-4 sm:mb-6 text-sm sm:text-base">
        <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
        Back to dashboard
      </Link>

      <div className="bg-green-50 rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 mb-6 sm:mb-8">
        <div className="flex flex-col sm:flex-row items-start gap-3 sm:gap-4">
          <div className="bg-green-500/10 rounded-full p-3 sm:p-4">
            <svg className="w-6 h-6 sm:w-8 sm:h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
          </div>
          <div className="flex-1">
            <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-1 sm:mb-2">Food & Groceries</h1>
            <p className="text-sm sm:text-base text-slate-600">Local grocery guides and markets</p>
          </div>
        </div>

        <div className="mt-4 sm:mt-6">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs sm:text-sm font-semibold text-slate-700">Section progress</span>
            <span className="text-xl sm:text-2xl font-bold text-green-600">{progress}%</span>
          </div>
          <div className="w-full bg-slate-200 rounded-full h-3">
            <div className="bg-green-600 h-3 rounded-full transition-all duration-500" style={{ width: `${progress}%` }}></div>
          </div>
          <p className="text-xs sm:text-sm text-slate-600 mt-2">{completedCount} out of {tasks.length} tasks completed</p>
        </div>
      </div>

      <div className="space-y-3 sm:space-y-4 relative z-10">
        {tasks.map((task) => (
          <div key={task.id} className="bg-white rounded-lg sm:rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition overflow-hidden">
            <div className="p-4 sm:p-6 cursor-pointer" onClick={() => toggleExpand(task.id)}>
              <div className="flex items-start gap-3 sm:gap-4">
                <button onClick={(e) => { e.stopPropagation(); toggleTask(task.id); }} className={`flex-shrink-0 w-6 h-6 rounded border-2 flex items-center justify-center transition cursor-pointer ${completedTasks[task.id] ? 'bg-green-500 border-green-500' : 'border-slate-300 hover:border-green-600'}`}>
                  {completedTasks[task.id] && (<svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>)}
                </button>

                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2 sm:gap-4">
                    <div className="flex-1 min-w-0">
                      <h3 className={`text-base sm:text-lg font-semibold mb-1 ${completedTasks[task.id] ? 'text-slate-400 line-through' : 'text-slate-900'}`}>{task.title}</h3>
                      <p className="text-xs sm:text-sm text-slate-600">{task.description}</p>
                      {completedTasks[task.id] && (<span className="inline-flex items-center gap-1 mt-2 px-3 py-1 bg-green-50 text-green-700 text-xs font-medium rounded-full">Completed</span>)}
                    </div>
                    <div className="text-green-600 p-2">
                      <svg className={`w-5 h-5 transform transition ${expandedTask === task.id ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                    </div>
                  </div>

                  {expandedTask === task.id && (
                    <div className="mt-4 sm:mt-6 pt-4 sm:pt-6 border-t border-slate-100">
                      <div className="mb-4 sm:mb-6">
                        <h4 className="text-xs sm:text-sm font-semibold text-slate-700 mb-2 sm:mb-3 flex items-center gap-2"><span className="text-green-600">📝</span>Steps to follow</h4>
                        <ol className="space-y-2">
                          {task.steps.map((step, idx) => (<li key={idx} className="flex items-start gap-3"><span className="flex-shrink-0 w-6 h-6 bg-green-500/10 text-green-600 rounded-full flex items-center justify-center text-xs font-bold">{idx + 1}</span><span className="text-slate-700 text-xs sm:text-sm pt-0.5">{step}</span></li>))}
                        </ol>
                      </div>

                      {task.links && task.links.length > 0 && (
                        <div>
                          <h4 className="text-xs sm:text-sm font-semibold text-slate-700 mb-2 sm:mb-3 flex items-center gap-2"><span className="text-green-600">🔗</span>Useful links</h4>
                          <div className="space-y-2">
                            {task.links.map((link, idx) => (<a key={idx} href={link.href} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()} className="block p-3 sm:p-4 bg-green-50 hover:bg-green-100 rounded-lg transition group"><div className="flex items-start justify-between gap-2"><div className="flex-1 min-w-0"><div className="font-medium text-sm sm:text-base text-green-600 group-hover:underline break-words">{link.label}</div>{link.description && (<div className="text-xs sm:text-sm text-slate-600 mt-1">{link.description}</div>)}</div><svg className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 flex-shrink-0 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg></div></a>))}
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
