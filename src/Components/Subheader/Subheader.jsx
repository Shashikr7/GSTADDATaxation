import React from "react";
import "./Subheader.css";

const Subheader = () => {
  return (
    <div className="subheader">
      <ul className="flex justify-end gap-10 py-9">
        <li>
          <a
            href="Login" // Replace with actual link
            className="text-slate-900 hover:text-blue-700 text-sm font-semibold"
          >
            LogIn/Register
          </a>
        </li>
        <li>
          <a
            href="contact" // Replace with actual link
            className="text-slate-900 hover:text-blue-700 text-sm font-semibold"
          >
            Contact Us
          </a>
        </li>
        <li>
          <a
            href="updates" // Replace with actual link
            className="text-slate-900 hover:text-blue-700 text-sm font-semibold"
          >
            Update News
          </a>
        </li>
        <li>
          <a
            href="/due-date" // Replace with actual link
            className="text-slate-900 hover:text-blue-700 text-sm font-semibold"
          >
            Due Date
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Subheader;
