"use client";

import { usePrint } from "@/lib/PrintContext";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const StatusBadge = ({ status }: { status: string }) => {
  const variants: Record<string, string> = {
    Pending: "bg-yellow-100 text-yellow-800 border border-yellow-300",
    Completed: "bg-green-100 text-green-800 border border-green-300 animate-pulse",
    Error: "bg-red-100 text-red-800 border border-red-300",
  };

  return (
    <Badge
      className={`px-3 py-1 text-xs font-semibold rounded-full ${variants[status] || ""}`}
      variant="outline"
    >
      {status}
    </Badge>
  );
};

export const UserPrintJobs = () => {
  const { printJobs } = usePrint();

  if (printJobs.length === 0) {
    return <p className="text-muted-foreground">You have no active print jobs.</p>;
  }

  return (
    <div className="space-y-4">
      {printJobs.map((job) => (
        <Card
          key={job.id}
          className="border border-gray-200 shadow-sm hover:shadow-md transition-all duration-200"
        >
          <CardContent className="flex justify-between items-center py-4">
            {/* Left: File & settings */}
            <div>
              <p className="font-bold text-lg">{job.fileName}</p>
              <p className="text-sm text-muted-foreground">
                {job.settings.copies} cop(y/ies), {job.settings.pagesPerSheet} per sheet
              </p>
            </div>

            {/* Right: Status + Retrieval code */}
            <div className="text-right space-y-2">
              <StatusBadge status={job.status} />

              {job.status === "Completed" && job.retrievalCode && (
                <div className="bg-green-50 border border-green-200 rounded-lg px-3 py-2">
                  <p className="text-sm text-green-900">Your print is ready!</p>
                  <p className="text-sm font-bold text-green-900">
                    Code:{" "}
                    <span className="text-lg tracking-widest">
                      {job.retrievalCode}
                    </span>
                  </p>
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};
