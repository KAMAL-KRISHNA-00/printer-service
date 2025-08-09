'use client';

import React, { createContext, useState, useContext, ReactNode } from 'react';

// Define the shape of a print job
export interface PrintJob {
  id: string;
  fileName: string;
  status: 'Pending' | 'Printing' | 'Completed' | 'Error';
  settings: {
    pagesPerSheet: '1' | '2' | '4';
    copies: number;
  };
  submittedAt: Date;
  completedAt?: Date;
  retrievalCode?: string;
}

// Define the context shape
interface PrintContextType {
  printJobs: PrintJob[];
  addJob: (job: Omit<PrintJob, 'id' | 'status' | 'submittedAt'>) => void;
  updateJobStatus: (id: string, status: PrintJob['status']) => void;
}

// Create the context with a default undefined value
const PrintContext = createContext<PrintContextType | undefined>(undefined);

// Helper function to generate a random 4-digit code
const generateCode = (): string => {
  return Math.floor(1000 + Math.random() * 9000).toString();
};

// Create the provider component
export const PrintProvider = ({ children }: { children: ReactNode }) => {
  const [printJobs, setPrintJobs] = useState<PrintJob[]>([]);

  const addJob: PrintContextType['addJob'] = (jobDetails) => {
    const newJob: PrintJob = {
      ...jobDetails,
      id: `job-${Date.now()}`,
      status: 'Pending',
      submittedAt: new Date(),
    };
    setPrintJobs((prevJobs) => [newJob, ...prevJobs]);
  };

  const updateJobStatus: PrintContextType['updateJobStatus'] = (id, status) => {
    setPrintJobs((prevJobs) =>
      prevJobs.map((job) => {
        if (job.id === id) {
          const isCompleted = status === 'Completed';
          return {
            ...job,
            status,
            ...(isCompleted && {
              completedAt: new Date(),
              retrievalCode: generateCode(),
            }),
          };
        }
        return job;
      })
    );
  };

  return (
    <PrintContext.Provider value={{ printJobs, addJob, updateJobStatus }}>
      {children}
    </PrintContext.Provider>
  );
};

// Custom hook to use the print context
export const usePrint = () => {
  const context = useContext(PrintContext);
  if (context === undefined) {
    throw new Error('usePrint must be used within a PrintProvider');
  }
  return context;
};