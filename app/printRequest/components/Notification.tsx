'use client';

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { FiBell, FiCheckCircle, FiClock } from 'react-icons/fi';
import { usePrint } from '@/lib/PrintContext';

export function Notifications() {
  const { printJobs } = usePrint();
  const completedJob = printJobs.find(job => job.status === 'Completed');

  return (
    <Card className="bg-slate-800/80 backdrop-blur-sm border border-slate-700 text-white">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-lg"><FiBell/> Notifications</CardTitle>
      </CardHeader>
      <CardContent className="grid gap-4">
        {completedJob && (
          <div className="flex items-start gap-4">
            <div className="bg-green-500/20 text-green-400 p-2 rounded-full">
              <FiCheckCircle className="h-4 w-4" />
            </div>
            <div className="grid gap-1">
              <p className="text-sm font-medium leading-none">Your print job '{completedJob.fileName}' is complete.</p>
              <p className="text-sm text-slate-400">Just now</p>
            </div>
          </div>
        )}
        <div className="flex items-start gap-4">
            <div className="bg-blue-500/20 text-blue-400 p-2 rounded-full">
              <FiClock className="h-4 w-4" />
            </div>
            <div className="grid gap-1">
              <p className="text-sm font-medium leading-none">File 'Lab_Report.docx' uploaded successfully.</p>
              <p className="text-sm text-slate-400">1 hour ago</p>
            </div>
          </div>
      </CardContent>
    </Card>
  );
}
