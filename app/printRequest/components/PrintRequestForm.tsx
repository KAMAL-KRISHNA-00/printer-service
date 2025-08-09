"use client";

import { usePrint } from "@/lib/PrintContext";
import { FormEvent, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";

export const PrintRequestForm = () => {
  const { addJob } = usePrint();
  const [fileName, setFileName] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!fileName) {
      alert("Please select a file.");
      return;
    }
    const formData = new FormData(e.currentTarget);
    const settings = {
      pagesPerSheet: formData.get("pagesPerSheet") as "1" | "2" | "4",
      copies: Number(formData.get("copies")),
    };

    addJob({ fileName, settings });
    alert(`Job for "${fileName}" submitted!`);

    // Reset form
    setFileName("");
    e.currentTarget.reset();
  };

  return (
    <Card className="max-w-lg border border-gray-200 shadow-md">
      <CardContent className="pt-6 space-y-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* File Upload */}
          <div className="space-y-2">
            <Label htmlFor="file-upload">File Upload</Label>
            <Input
              id="file-upload"
              name="file"
              type="file"
              required
              onChange={(e) => setFileName(e.target.files?.[0]?.name || "")}
              className="file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 
                         file:text-sm file:font-semibold file:bg-primary file:text-primary-foreground 
                         hover:file:bg-primary/90 cursor-pointer"
            />
          </div>

          {/* Pages Per Sheet */}
          <div className="space-y-2">
            <Label htmlFor="pagesPerSheet">Pages Per Sheet</Label>
            <Select name="pagesPerSheet" defaultValue="1">
              <SelectTrigger>
                <SelectValue placeholder="Select pages per sheet" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1">1</SelectItem>
                <SelectItem value="2">2</SelectItem>
                <SelectItem value="4">4</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Copies */}
          <div className="space-y-2">
            <Label htmlFor="copies">Copies</Label>
            <Input type="number" id="copies" name="copies" defaultValue="1" min="1" />
          </div>

          {/* Submit Button */}
          <Button type="submit" className="w-full font-semibold">
            Submit Request
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};
