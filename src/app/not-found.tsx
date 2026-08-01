import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-5 text-center bg-slate-900 text-white">
      <h2 className="text-3xl font-extrabold mb-2">404 — Page Not Found</h2>
      <p className="text-sm text-slate-400 mb-6">
        The page you are looking for does not exist.
      </p>
      <Link
        href="/"
        className="px-5 py-2.5 rounded-xl font-bold text-sm text-white"
        style={{ background: "linear-gradient(135deg, #4F3FFF, #6B5EFF)" }}
      >
        Return Home
      </Link>
    </div>
  );
}
