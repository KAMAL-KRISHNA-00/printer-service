'use client';

import { usePrint } from '@/lib/PrintContext';
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from "sonner";
import { FiUploadCloud } from 'react-icons/fi';
import { Progress } from "@/components/ui/progress";

export function PrintRequestForm() {
  const { addJob } = usePrint();
  const [file, setFile] = useState<File | null>(null);
  const [progress, setProgress] = useState(0);
  const [isUploading, setIsUploading] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isUploading && progress < 100) {
      timer = setTimeout(() => setProgress(prev => prev + 10), 200);
    } else if (progress >= 100) {
      setIsUploading(false);
      if (file) {
        addJob({ fileName: file.name, settings: { copies: 1, pagesPerSheet: '1' } });
        toast.success("Upload Complete!", { 
            description: `"${file.name}" has been submitted.`
        });
      }
    }
    return () => clearTimeout(timer);
  }, [isUploading, progress, file, addJob]);

  const handleFileChange = (files: FileList | null) => {
    if (files && files[0]) {
      setFile(files[0]);
      setProgress(0);
      setIsUploading(true);
    } else {
        toast.error("No file selected", {
            description: "Please choose a file to upload.",
        });
    }
  };

  return (
    <div className="w-full min-h-full text-center">
      <FiUploadCloud className="mx-auto h-16 w-16 text-slate-400 mb-4" />
      <h2 className="text-2xl font-bold mb-2">Upload File</h2>
      <p className="text-slate-400 mb-6">{file ? `Uploading: ${file.name}` : "Select a file to begin"}</p>
      
      <div className="relative mb-6">
        <Button asChild className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold py-6 text-lg rounded-xl shadow-lg hover:scale-105 transition-transform">
           <label htmlFor="file-upload" className="cursor-pointer">Select File</label>
        </Button>
        <Input 
          id="file-upload" 
          type="file" 
          className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
          onChange={(e) => handleFileChange(e.target.files)}
          disabled={isUploading}
        />
      </div>

      {isUploading || progress > 0 ? (
        <div className="space-y-2 text-left">
            <p className="text-sm text-slate-300">
                {progress < 100 ? 'Active complete' : 'Completed'}
                <span className="float-right font-semibold">{progress}%</span>
            </p>
            <Progress value={progress} className="w-full h-3 [&>*]:bg-gradient-to-r [&>*]:from-cyan-400 [&>*]:to-green-400" />
        </div>
      ) : null}
    </div>
  );
}
