import Link from "next/link";

export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-slate-900 text-white">
      <h1 className="text-4xl font-bold mb-8">Welcome to Printer Service</h1>
      <div className="flex gap-4">
        <Link
          href="/printRequest"
          className="px-6 py-3 bg-primary text-primary-foreground rounded-md hover:bg-primary/90"
        >
          Go to User Dashboard
        </Link>
        <Link
          href="/admin"
          className="px-6 py-3 bg-secondary text-secondary-foreground rounded-md hover:bg-secondary/90"
        >
          Go to Admin Dashboard
        </Link>
      </div>
    </div>
  );
}
