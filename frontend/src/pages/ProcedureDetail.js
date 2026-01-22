import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import studentProcedures from '../data/procedures_students';
import workerProcedures from '../data/procedures_workers';
import visitorProcedures from '../data/procedures_visitors';

// Import student checklists
import {
  StudentAdministrativeChecklist,
  StudentBenefitsChecklist,
  StudentFoodChecklist,
  StudentHousingChecklist,
  StudentJobsChecklist,
  StudentLeisureChecklist,
  StudentMoreChecklist
} from '../components/checklists/student';

// Import visitor checklists
import {
  VisitorTemporaryHousingChecklist,
  VisitorRestaurantsChecklist,
  VisitorAdministrativeChecklist,
  VisitorLeisureChecklist
} from '../components/checklists/visitor';

// Import worker checklists
import {
  WorkerAdministrativeChecklist,
  WorkerHousingChecklist,
  WorkerBenefitsChecklist,
  WorkerFoodChecklist,
  WorkerLeisureChecklist,
  WorkerMoreChecklist
} from '../components/checklists/worker';

function getData(profile) {
  switch (profile) {
    case 'student':
      return studentProcedures;
    case 'worker':
      return workerProcedures;
    case 'visitor':
      return visitorProcedures;
    default:
      return null;
  }
}

function extractParamsFromPathname(pathname) {
  // Parse /student/procedures/administrative -> { profile: 'student', procedure: 'administrative' }
  const match = pathname.match(/\/(student|worker|visitor)\/procedures\/([a-z-]+)/);
  if (match) {
    return { profile: match[1], procedure: match[2] };
  }
  return { profile: null, procedure: null };
}

export default function ProcedureDetail() {
  const location = useLocation();
  const parsed = extractParamsFromPathname(location.pathname);
  const profile = parsed.profile;
  const procedure = parsed.procedure;

  const data = getData(profile);

  if (!data) {
    return (
      <main className="max-w-4xl mx-auto px-6 py-12">
        <h1 className="text-2xl font-semibold">Profile not found</h1>
        <p className="mt-4">Unknown profile: {profile}</p>
        <Link to="/" className="mt-6 inline-block text-primary">Return to home</Link>
      </main>
    );
  }

  // Show interactive checklist for student administrative procedures
  if (profile === 'student' && procedure === 'administrative') {
    return <StudentAdministrativeChecklist />;
  }

  // Show interactive checklist for student housing
  if (profile === 'student' && procedure === 'housing') {
    return <StudentHousingChecklist />;
  }

  // Show interactive checklist for student jobs
  if (profile === 'student' && procedure === 'jobs') {
    return <StudentJobsChecklist />;
  }

  // Show interactive checklist for student food & groceries
  if (profile === 'student' && procedure === 'food') {
    return <StudentFoodChecklist />;
  }

  // Show interactive checklist for student benefits & aid
  if (profile === 'student' && procedure === 'benefits') {
    return <StudentBenefitsChecklist />;
  }

  // Show interactive checklist for student leisure
  if (profile === 'student' && procedure === 'leisure') {
    return <StudentLeisureChecklist />;
  }

  // Show interactive checklist for student more resources
  if (profile === 'student' && procedure === 'more') {
    return <StudentMoreChecklist />;
  }

  // Show interactive checklist for visitor temporary housing
  if (profile === 'visitor' && procedure === 'temporary-housing') {
    return <VisitorTemporaryHousingChecklist />;
  }

  // Show interactive checklist for visitor restaurants
  if (profile === 'visitor' && procedure === 'restaurants') {
    return <VisitorRestaurantsChecklist />;
  }

  // Show interactive checklist for visitor administrative
  if (profile === 'visitor' && procedure === 'administrative') {
    return <VisitorAdministrativeChecklist />;
  }

  // Show interactive checklist for visitor leisure
  if (profile === 'visitor' && procedure === 'leisure') {
    return <VisitorLeisureChecklist />;
  }

  // Show interactive checklist for worker administrative
  if (profile === 'worker' && procedure === 'administrative') {
    return <WorkerAdministrativeChecklist />;
  }

  // Show interactive checklist for worker housing
  if (profile === 'worker' && procedure === 'housing') {
    return <WorkerHousingChecklist />;
  }

  // Show interactive checklist for worker benefits
  if (profile === 'worker' && procedure === 'benefits') {
    return <WorkerBenefitsChecklist />;
  }

  // Show interactive checklist for worker food
  if (profile === 'worker' && procedure === 'food') {
    return <WorkerFoodChecklist />;
  }

  // Show interactive checklist for worker leisure
  if (profile === 'worker' && procedure === 'leisure') {
    return <WorkerLeisureChecklist />;
  }

  // Show interactive checklist for worker more
  if (profile === 'worker' && procedure === 'more') {
    return <WorkerMoreChecklist />;
  }

  // Fallback to generic procedure display
  const item = data[procedure];

  if (!item) {
    return (
      <main className="max-w-4xl mx-auto px-6 py-12">
        <h1 className="text-2xl font-semibold">Procedure not found</h1>
        <p className="mt-4">No procedure named "{procedure}" for profile "{profile}".</p>
        <Link to={`/${profile}/dashboard`} className="mt-6 inline-block text-primary">Back to dashboard</Link>
      </main>
    );
  }

  return (
    <main className="max-w-4xl mx-auto px-6 py-12">
      <Link to={`/${profile}/dashboard`} className="text-primary hover:underline mb-4 inline-block">← Back to dashboard</Link>
      <h1 className="text-3xl font-semibold mt-4 mb-6">{item.title}</h1>
      <p className="text-slate-600 mb-8">{item.description}</p>

      {item.steps && item.steps.length > 0 && (
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Steps:</h2>
          <ol className="list-decimal list-inside space-y-2">
            {item.steps.map((step, idx) => (
              <li key={idx} className="text-slate-700">{step}</li>
            ))}
          </ol>
        </div>
      )}

      {item.links && item.links.length > 0 && (
        <div>
          <h2 className="text-xl font-semibold mb-4">Useful Links:</h2>
          <ul className="space-y-2">
            {item.links.map((link, idx) => (
              <li key={idx}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  {link.label}
                </a>
                {link.description && <p className="text-sm text-slate-600">{link.description}</p>}
              </li>
            ))}
          </ul>
        </div>
      )}
    </main>
  );
}
