import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="w-full border-t border-slate-200 bg-white mt-12">
      <div className="max-w-6xl mx-auto px-4 py-5 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-xs text-slate-500">
        <div>
          <p className="font-semibold text-slate-800">Strenva</p>
          <p>Your guided journey for a smooth relocation to France.</p>
        </div>
        <div className="flex gap-6">
          <div className="flex flex-col gap-1">
            <span className="font-semibold text-slate-700">Navigation</span>
            <Link to="/administratif" className="hover:text-primary">Administrative procedures</Link>
            <Link to="/logement" className="hover:text-primary">Find housing</Link>
            <Link to="/food" className="hover:text-primary">Food & Groceries</Link>
            <Link to="/jobs" className="hover:text-primary">Jobs / Internships / Apprenticeships</Link>
            <Link to="/loisirs" className="hover:text-primary">Leisure </Link>
          </div>
          <div className="flex flex-col gap-1">
            <span className="font-semibold text-slate-700">Contact</span>
            <a href="mailto:contact@strenva.fr" className="hover:text-primary">
              contact@strenva.fr
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-slate-100">
        <div className="max-w-6xl mx-auto px-4 py-3 text-[10px] text-slate-400 flex items-center justify-between">
          <p>© {new Date().getFullYear()} Strenva. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
