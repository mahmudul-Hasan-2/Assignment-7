import React from "react";
import { Link } from "react-router";

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 px-4">
      <div className="max-w-xl text-center rounded-3xl bg-white p-10 shadow-xl">
        <p className="text-5xl font-extrabold text-[#111827]">404</p>
        <h1 className="mt-4 text-3xl font-semibold text-[#111827]">
          Page Not Found
        </h1>
        <p className="mt-3 text-sm text-slate-500">
          The page you are looking for does not exist or has been moved.
        </p>
        <Link
          to="/"
          className="mt-8 inline-block rounded-full bg-[#2563eb] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#1d4ed8]"
        >
          Go back home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
