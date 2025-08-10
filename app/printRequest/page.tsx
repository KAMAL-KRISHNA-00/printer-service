'use client';

import { PrintRequestForm } from "./components/PrintRequestForm";
import { UserPrintJobs } from "./components/UserPrintJobs";
import { Sidebar } from "./components/SideBar";
import { Notifications } from "./components/Notification";

export default function PrintRequestPage() {
  return (
    // You can add a background image here for the pattern effect
    // style={{ backgroundImage: "url('/path-to-your-pattern.svg')" }}
    
    <div className="flex min-h-screen w-full bg-slate-900 text-white">
      <Sidebar />
      <main className="flex-1 p-4 sm:p-6 lg:p-8 grid gap-8 md:grid-cols-3 items-start">
        <div className="md:col-span-2 flex flex-col items-center justify-center h-full">
            <PrintRequestForm />
        </div>
        <div className="md:col-span-1">
          <Notifications />
          {/* We can place the UserPrintJobs list here or below the form */}
           <div className="mt-8">
              <UserPrintJobs />
           </div>
        </div>
      </main>
    </div>
  );
}
