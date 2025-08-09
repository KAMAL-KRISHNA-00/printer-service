"use client";

import { usePrint } from "@/lib/PrintContext";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

export default function AdminPage() {
  const { printJobs, updateJobStatus } = usePrint();

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-4xl font-bold tracking-tight">Admin Dashboard</h1>
        <p className="text-muted-foreground">Manage and track all incoming print requests.</p>
        <Separator className="mt-4" />
      </div>

      {/* Card Wrapper */}
      <Card className="shadow-md border border-gray-200">
        <CardHeader>
          <CardTitle>Pending Print Jobs</CardTitle>
          <CardDescription>Review, update, and manage print jobs in real-time.</CardDescription>
        </CardHeader>

        <CardContent>
          {/* Table */}
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>File Name</TableHead>
                <TableHead>Settings</TableHead>
                <TableHead>Submitted</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Action</TableHead>
              </TableRow>
            </TableHeader>

            <TableBody>
              {printJobs.length === 0 && (
                <TableRow>
                  <TableCell colSpan={5} className="text-center py-8 text-muted-foreground">
                    No pending jobs.
                  </TableCell>
                </TableRow>
              )}

              {printJobs.map((job) => (
                <TableRow key={job.id} className="hover:bg-muted/50 transition-colors">
                  <TableCell className="font-medium">{job.fileName}</TableCell>
                  <TableCell className="text-muted-foreground">
                    {job.settings.copies}x, {job.settings.pagesPerSheet} p/s
                  </TableCell>
                  <TableCell className="text-muted-foreground">
                    {new Date(job.submittedAt).toLocaleTimeString()}
                  </TableCell>
                  <TableCell>
                    {job.status === "Pending" && (
                      <Badge variant="secondary" className="bg-yellow-100 text-yellow-800">
                        Pending
                      </Badge>
                    )}
                    {job.status === "Completed" && (
                      <Badge variant="outline" className="bg-green-100 text-green-800 border-green-300">
                        Completed ✅
                      </Badge>
                    )}
                  </TableCell>
                  <TableCell>
                    {job.status === "Pending" && (
                      <Button
                        size="sm"
                        onClick={() => updateJobStatus(job.id, "Completed")}
                        className="bg-green-500 hover:bg-green-600 text-white"
                      >
                        Mark as Completed
                      </Button>
                    )}
                    {job.status === "Completed" && (
                      <span className="text-sm font-bold text-green-700">Done ✅</span>
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
