"use client";
import { cn } from "@/lib/utils";
import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";

export type StateType = File[];
interface DropzoneProps {
  files: StateType;
  setFiles: React.Dispatch<React.SetStateAction<StateType>>;
}
export const MyDropzone = ({ files, setFiles }: DropzoneProps) => {
  const onDrop = useCallback(
    (acceptedFiles: StateType) => {
      // Do something with the files
      setFiles((prev) => [...prev, ...acceptedFiles]);
      console.log({ acceptedFiles });
    },
    [setFiles]
  );
  const { getRootProps, isDragActive, getInputProps } = useDropzone({ onDrop });
  return (
    <div className="max-w-xl flex flex-col gap-2">
      <div
        {...getRootProps()}
        className="w-full border cursor-pointer rounded-xl h-32 p-2 bg-white grid place-items-center"
      >
        <div
          className={cn("w-full h-full bg-blue-200 rounded-lg p-2", {
            "border-dashed border-2 border-blue-500": isDragActive,
          })}
        >
          <input {...getInputProps()} />
          {isDragActive ? (
            <p>Drop the files here ...</p>
          ) : (
            <p>Drag and drop some files here, or click to select files</p>
          )}
        </div>
      </div>

      {files?.length > 0 && (
        <div className="flex flex-col gap-2">
          {files.map((file) => {
            return (
              <div key={file.name} className="flex flex-wrap gap-2">
                <p className="p-2 bg-orange-600 text-white rounded-lg">
                  {file.name}
                </p>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
