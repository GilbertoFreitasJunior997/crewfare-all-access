"use client";

import "./styles.css";
import { DropIndicatorIcon } from "@/components/atoms/drop-indicator-icon";
import { InputContainer } from "@/components/atoms/input-container";
import { InputLabel } from "@/components/atoms/input-label";
import {
  InputBase,
  InputProvider,
  InputProviderRenderProps,
} from "@/components/atoms/input-provider";
import { memo, useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";

// inner is extracted so it can use hooks at top level
const Inner = ({
  name,
  text,
  showText,
  className,
  value,
  onChange,
}: InputProviderRenderProps<File | null> & BannerInputProps) => {
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

    onChange(file);
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    multiple: false,
    onDropAccepted: handleFileAccepted,
    accept: {
      "image/*": [".jpeg", ".png"],
    },
  });

  useEffect(() => {
    if (!value) {
      setImageUrl(undefined);
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
    reader.readAsDataURL(value);

    return () => {
      reader.abort();
    };
  }, [value]);

  return (
    <InputContainer className={className}>
      <InputLabel />

      <button
        type="button"
        className="flex justify-center items-center w-full h-[244px] rounded-2xl select-none cursor-pointer bg-secondary banner-input-dashed-border bg-cover bg-no-repeat bg-center overflow-hidden"
        {...getRootProps()}
        style={{
          backgroundImage: imageUrl ? `url(${imageUrl})` : undefined,
        }}
      >
        <input
          id={name}
          name={name}
          {...getInputProps()}
        />

        <div className="w-full flex flex-col gap-3 items-center justify-center">
          {value ? (
            <span className="font-bold text-5xl">
              {(showText && text) ?? ""}
            </span>
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
    </InputContainer>
  );
};

export type BannerInputProps = InputBase<File | null> & {
  className?: string;
  text?: string;
  showText?: boolean;
};
export const BannerInput = memo((props: BannerInputProps) => (
  <InputProvider
    {...props}
    emptyValue={null}
  >
    {(providerProps) => (
      <Inner
        {...props}
        {...providerProps}
      />
    )}
  </InputProvider>
));
