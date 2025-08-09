"use client";

import { PrintRequestForm } from "./components/PrintRequestForm";
import { UserPrintJobs } from "./components/UserPrintJobs";
import { Separator } from "@/components/ui/separator";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";

export default function PrintRequestPage() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-4xl font-bold tracking-tight">Submit a Print Job</h1>
        <p className="text-muted-foreground">Upload your file and choose your settings.</p>
        <Separator className="mt-4" />
      </div>

      {/* Print Request Form */}
      <Card className="shadow-md border border-gray-200">
        <CardHeader>
          <CardTitle>New Print Request</CardTitle>
          <CardDescription>Fill in the details to submit your print job.</CardDescription>
        </CardHeader>
        <CardContent>
          <PrintRequestForm />
        </CardContent>
      </Card>

      {/* User Print Jobs */}
      <div>
        <h2 className="text-2xl font-bold mb-4">My Print Jobs</h2>
        <Card className="shadow-md border border-gray-200">
          <CardContent className="pt-6">
            <UserPrintJobs />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
