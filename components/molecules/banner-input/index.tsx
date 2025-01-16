"use client";

import "./styles.css";
import { DropIndicatorIcon } from "@/components/atoms/drop-indicator-icon";
import { InputContainer } from "@/components/atoms/input-container";
import { InputLabel } from "@/components/atoms/input-label";
import {
  type InputBase,
  InputProvider,
  type InputProviderRenderProps,
} from "@/components/atoms/input-provider";
import { useFormProvider } from "@/hooks/use-form-provider";
import { LoaderCircleIcon } from "lucide-react";
import { memo, useState } from "react";
import { useDropzone } from "react-dropzone";
import { toast } from "sonner";
import { twMerge } from "tailwind-merge";

export type BannerInputValue = {
  file: File;
  base64: string;
};

// inner is extracted so it can use hooks at top level
const Inner = ({
  name,
  text,
  showText,
  className,
  value,
  onChange,
}: InputProviderRenderProps<BannerInputValue | null> & BannerInputProps) => {
  const [isLoading, setIsLoading] = useState(false);

  const { form } = useFormProvider();
  const hasError = !!form?.getError(name);

  const handleFileAccepted = (files: File[]) => {
    const file = files[0];

    if (!file) {
      return;
    }
    if (file.type !== "image/jpeg" && file.type !== "image/png") {
      toast.warning("Banner must be jpeg or png");
      return;
    }
    if (isLoading) {
      return;
    }

    setIsLoading(true);

    const reader = new FileReader();
    reader.onloadend = (e) => {
      const result = e.target?.result;
      if (!result) {
        return;
      }

      setIsLoading(false);
      onChange({
        file,
        base64: result as string,
      });
    };
    reader.onerror = () => {
      setIsLoading(false);
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
    <InputContainer className={className}>
      <InputLabel />

      <button
        type="button"
        className={twMerge(
          "flex justify-center items-center w-full h-[244px] rounded-2xl select-none cursor-pointer bg-cover bg-no-repeat bg-center overflow-hidden",
          hasError
            ? "banner-input-dashed-border-error bg-danger/5"
            : "banner-input-dashed-border bg-secondary",
        )}
        {...getRootProps()}
        style={{
          backgroundImage: value?.base64 ? `url(${value?.base64})` : undefined,
        }}
      >
        <input
          id={name}
          name={name}
          {...getInputProps()}
        />

        <div className="w-full flex flex-col gap-3 items-center justify-center">
          {isLoading ? (
            <LoaderCircleIcon className="animate-spin" />
          ) : value ? (
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

export type BannerInputProps = InputBase<BannerInputValue | null> & {
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
