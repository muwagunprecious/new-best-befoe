"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-5 text-center bg-slate-900 text-white">
      <h2 className="text-2xl font-bold mb-3">Something went wrong!</h2>
      <p className="text-sm text-slate-400 mb-6 max-w-md">
        {error.message || "An unexpected error occurred."}
      </p>
      <button
        onClick={() => reset()}
        className="px-5 py-2.5 rounded-xl font-bold text-sm text-white"
        style={{ background: "linear-gradient(135deg, #4F3FFF, #6B5EFF)" }}
      >
        Try again
      </button>
    </div>
  );
}
