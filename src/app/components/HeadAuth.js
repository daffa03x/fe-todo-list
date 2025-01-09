import React from "react";

const HeadAuth = ({ deskripsi }) => {
  return (
    <div className="text-center mb-8">
      <div className="bg-indigo-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
        <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
        </svg>
      </div>
      <h1 className="text-3xl font-bold text-gray-900">Welcome to todo list</h1>
      <p className="text-gray-600 mt-2">{deskripsi}</p>
    </div>
  );
};

export default HeadAuth;
