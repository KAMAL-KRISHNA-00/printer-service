'use client';

import { usePrint, PrintJob } from '@/lib/PrintContext';
import { FiFileText } from 'react-icons/fi';

export function UserPrintJobs() {
    const { printJobs } = usePrint();

    if (printJobs.length === 0) {
        return null; // Don't show anything if no jobs
    }

    return (
        <div className="space-y-3">
            {printJobs.slice(0, 2).map((job) => ( // Show only the first 2 jobs for a cleaner look
                <div key={job.id} className="bg-slate-800/80 p-4 rounded-lg flex items-center justify-between border border-slate-700">
                    <div className="flex items-center gap-3">
                        <FiFileText className="h-5 w-5 text-slate-400" />
                        <p className="font-medium">{job.fileName}</p>
                    </div>
                    <p className="text-sm text-slate-400">{job.status}</p>
                </div>
            ))}
        </div>
    );
}
