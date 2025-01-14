"use client";

import { twMerge } from "tailwind-merge";
import { DropIndicatorIcon } from "../drop-indicator-icon";
import "./styles.css";
import { useState } from "react";
import { useDropzone } from "react-dropzone";

export type BannerInputProps = {
  text?: string;
  className?: string;
};

export const BannerInput = ({ className, text }: BannerInputProps) => {
  const [imageUrl, setImageUrl] = useState<string>();

  const handleFileAccepted = (files: File[]) => {
    const file = files[0];

    if (!file) {
      return;
    }
    if (file.type !== "image/jpeg" && file.type !== "image/png") {
      // @TODO toast "incorrect file type"
      return;
    }

    const reader = new FileReader();
    reader.onloadend = (e) => {
      const result = e.target?.result;
      if (!result) {
        return;
      }

      setImageUrl(result as string);
    };
    reader.readAsDataURL(file);
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    multiple: false,
    onDropAccepted: handleFileAccepted,
    accept: {
      "image/*": [".jpeg", ".png"],
    },
  });

  return (
    <button
      type="button"
      className={twMerge(
        "flex justify-center items-center w-full h-[244px] rounded-2xl select-none cursor-pointer bg-secondary banner-input-dashed-border bg-cover bg-no-repeat bg-center",
        className,
      )}
      {...getRootProps()}
      style={{
        backgroundImage: imageUrl ? `url(${imageUrl})` : undefined,
      }}
    >
      <input {...getInputProps()} />

      <div className="w-full flex flex-col gap-3 items-center justify-center">
        {imageUrl ? (
          <span className="font-bold text-5xl"> {text ?? ""} </span>
        ) : (
          <>
            <DropIndicatorIcon />
            <div className="flex items-center flex-row gap-0.5 font-semibold">
              {isDragActive ? (
                <>Drop your files here!</>
              ) : (
                <>Click or drop image</>
              )}
            </div>
          </>
        )}
      </div>
    </button>
  );
};
