"use client";

import {
  useState,
  useRef,
  type ChangeEvent,
  type DragEvent,
  type FormEvent,
  type ReactNode,
} from "react";
import { motion } from "framer-motion";

import CountrySelector from "./country-selector";
import ConsultationSelector from "./consultation-selector";

import { countries } from "@/data/countries";

import {
  parsePhoneNumberFromString,
  AsYouType,
  getExampleNumber,
  type CountryCode,
} from "libphonenumber-js";
import examples from "libphonenumber-js/examples.mobile.json";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faUser,
  faEnvelope,
  faGlobe,
  faPhone,
  faTag,
  faPaperclip,
  faMessage,
  faTrashCanArrowUp,
  faFilePdf,
  faFileWord,
  faFileExcel,
  faFileImage,
  faFileZipper,
  faFileAudio,
  faFileVideo,
  faFilePowerpoint,
  faFileLines,
} from "@fortawesome/free-solid-svg-icons";

import type {  IconDefinition, } from "@fortawesome/fontawesome-svg-core";



type Country = {
  name: string;
  code: string;
  iso: string;
  continent?: string;
  utcTime?: string[];
};

type FormState = {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
};

type FormErrors = {
  name?: string;
  email?: string;
  phone?: string;
  subject?: string;
  country?: string;
  countryCode?: string;
};

type CustomCountry = {
  name: string;
  code: string;
};

type UploadFile = {
  file: File;
  name: string;
  size: number;
  type: string;
  progress: number;
  preview: string | null;
};

type FieldProps = {
  label: string;
  icon: IconDefinition;
  required?: boolean;
  children: ReactNode;
};

type ErrorProps = {
  children: ReactNode;
};



/* ---------------- FORMAT ---------------- */
function formatPhone(
  value: string,
  iso: string
): string {
  try {
    const country =
      iso.toUpperCase() as CountryCode;

    const formatter =
      new AsYouType(country);

    return formatter.input(value);
  } catch {
    return value;
  }
}

function isValidPhone(
  value: string,
  iso: string
): boolean {
  try {
    const country =
      iso.toUpperCase() as CountryCode;

    const phone =
      parsePhoneNumberFromString(
        value,
        country
      );

    return phone?.isValid() ?? false;
  } catch {
    return false;
  }
}

function getPlaceholder(
  iso: string
): string {
  try {
    const country =
      iso.toUpperCase() as CountryCode;

    const example =
      getExampleNumber(
        country,
        examples
      );

    return (
      example?.formatNational() ??
      "Enter phone number"
    );
  } catch {
    return "Enter phone number";
  }
}

/* ---------------- MAIN ---------------- */
export default function ContactForm() {

  const [
    selectedCountry, 
    setSelectedCountry
  ] =
    useState<Country>(
      countries[0] as Country
  );

  const [
    customCountry,
    setCustomCountry,
  ] =
    useState<CustomCountry>(
      {
        name: "",
        code: "",
      }
    );

  const [form, setForm] =
    useState<FormState>({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });

  const [files, setFiles] =
    useState<UploadFile[]>(
      []
    );

  const [errors, setErrors] =
    useState<FormErrors>(
      {}
    );

  const fileRef =
    useRef<HTMLInputElement>(
      null
    );

  const [
    isDragging,
    setIsDragging,
  ] = useState(false);

  const [
    isCustomCountry,
    setIsCustomCountry,
  ] = useState(false);

  
  /* ---------- VALIDATION ---------- */
  const validate = (): boolean => {
    const err: FormErrors =
      {};

    if (!form.name.trim()) {
      err.name =
        "Name is required";
    }

    if (
      !form.email.includes("@")
    ) {
      err.email =
        "Valid email required";
    }

    if (
      !isValidPhone(
        form.phone,
        selectedCountry.iso
      )
    ) {
      err.phone =
        "Invalid phone number";
    }

    if (!form.subject) {
      err.subject =
        "Subject required";
    }

    if (isCustomCountry) {
      if (
        !customCountry.name
      ) {
        err.country =
          "Country name required";
      }

      if (
        !customCountry.code.startsWith(
          "+"
        )
      ) {
        err.countryCode =
          "Valid code required";
      }
    }

    setErrors(err);

    return (
      Object.keys(err)
        .length === 0
    );
  };

  const handleSubmit = (
    e: FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    console.log(
      "Submitted:",
      form
    );
  };

  const handleFile = (
    e: ChangeEvent<HTMLInputElement>
  ) => {
    const file =
      e.target.files?.[0];

    if (file) {
      console.log(
        file.name
      );
    }
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-7"
    >
      {/* NAME + EMAIL */}
      <div className="grid gap-5 lg:grid-cols-2">
        <Field label="Your Name" icon={faUser} required>
          <Input
            className={`h-12 rounded-xl ${
              errors.name ? "border-red-500" : ""
            }`}
            value={form.name}
            onChange={(e) =>
              setForm({
                ...form,
                name: e.target.value,
              })
            }
            placeholder="John Doe"
          />

          {errors.name && (
            <Error>{errors.name}</Error>
          )}
        </Field>

        <Field label="Email" icon={faEnvelope} required>
          <Input
            className={`h-12 rounded-xl ${
              errors.email ? "border-red-500" : ""
            }`}
            value={form.email}
            onChange={(e) =>
              setForm({
                ...form,
                email: e.target.value,
              })
            }
            placeholder="john@example.com"
          />

          {errors.email && (
            <Error>{errors.email}</Error>
          )}
        </Field>
      </div>

      {/* COUNTRY + PHONE */}
      <div className="grid gap-5 lg:grid-cols-2">
        <Field label="Country" icon={faGlobe} required>
          <CountrySelector
            countries={countries}
            value={selectedCountry}
            onChange={(c: Country) => {
              setIsCustomCountry(
                c.name === "Other"
              );

              setSelectedCountry(c);
            }}
          />
        </Field>

        <Field label="Phone Number" icon={faPhone} required>
          <div
            className={`
              flex h-12 items-center overflow-hidden
              rounded-xl border
              ${
                errors.phone
                  ? "border-red-500"
                  : "border-input"
              }
            `}
          >
            <div className="px-4 text-sm text-muted-foreground">
              {isCustomCountry
                ? customCountry.code
                : selectedCountry.code}
            </div>

            <div className="h-5 w-px bg-border" />

            <input
              className="
                h-full flex-1 bg-transparent
                px-4 text-sm outline-none
              "
              value={form.phone}
              onChange={(e) =>
                setForm({
                  ...form,
                  phone: formatPhone(
                    e.target.value,
                    selectedCountry.iso
                  ),
                })
              }
              placeholder={getPlaceholder(
                selectedCountry.iso
              )}
            />
          </div>

          {errors.phone && (
            <Error>{errors.phone}</Error>
          )}
        </Field>
      </div> 

      {/* SUBJECT */}
      <Field
        label="Subject"
        icon={faTag}
        required
      >
        <ConsultationSelector
          value={form.subject}
          onChange={(value) =>
            setForm({
              ...form,
              subject: value,
            })
          }
        />

        {errors.subject && (
          <Error>
            {errors.subject}
          </Error>
        )}
      </Field>

      {/* FILE */}
      <Field label="Attachment" icon={faPaperclip}>
        <div
          onClick={() => fileRef.current?.click()}
          onDragOver={(e) => {
            e.preventDefault();
            setIsDragging(true);
          }}
          onDragLeave={() => setIsDragging(false)}
          onDrop={(e) => {
            e.preventDefault();
            setIsDragging(false);

            const dropped = Array.from(e.dataTransfer.files || []);
            const newFiles = handleFiles(dropped, files, setFiles);

            if (newFiles.length > 0) {
              setFiles((prev) => [...prev, ...newFiles]);
            }
          }}
          className={`
            relative cursor-pointer rounded-2xl border-2 border-dashed
            transition-all duration-300
            ${isDragging 
              ? "border-primary bg-primary/5 scale-[1.01]" 
              : "border-border bg-background hover:border-primary"}
          `}
        >
          {/* EMPTY */}
          {files.length === 0 && (
            <div className="flex flex-col items-center justify-center py-10 lg:py-12 text-center">
              <div className="w-12 h-12 flex items-center justify-center rounded-2xl bg-primary/10 text-primary mb-4">
                <FontAwesomeIcon icon={faPaperclip} className="text-xl" />
              </div>
              <p className="text-sm font-medium">Upload or drag files here</p>
              <p className="text-xs text-muted-foreground mt-1">
                Click to browse or drag & drop
              </p>
            </div>
          )}

          {/* FILE LIST */}
          {files.length > 0 && (
            <div className="p-4 space-y-3">

              {files.map((file, index) => {
                const fileIcon = getFileIcon(file.type, file.name);
                const label = getFileLabel(file.name);

                return (
                  <div
                    key={index}
                    className="space-y-2 bg-muted/40 rounded-xl px-3 py-3"
                  >

                    {/* TOP */}
                    <div className="flex items-center justify-between">

                      <div className="flex items-center gap-3">

                        {/* ICON */}
                        {file.preview ? (
                          <img
                            src={file.preview}
                            className="w-10 h-10 rounded-md object-cover"
                          />
                        ) : (
                          <div className={`w-10 h-10 flex items-center justify-center rounded-md ${fileIcon.className}`}>
                            <FontAwesomeIcon icon={fileIcon.icon} />
                          </div>
                        )}

                        {/* INFO */}
                        <div>
                          <p className="text-sm font-medium">{file.name}</p>

                          <div className="flex items-center gap-2 mt-1">

                            {/* TYPE BADGE */}
                            <span className="text-[10px] px-2 py-[2px] rounded bg-primary/10 text-primary font-medium">
                              {label}
                            </span>

                            {/* SIZE */}
                            <span className="text-xs text-muted-foreground">
                              {(file.size / 1024 / 1024).toFixed(2)} MB
                            </span>

                          </div>
                        </div>

                      </div>

                      {/* REMOVE */}
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();   // ✅ STOP parent click
                          setFiles((prev) => removeFile(index, prev));
                        }}
                        className="w-8 h-8 flex items-center justify-center rounded-md text-red-500 hover:bg-red-100"
                      >
                        <FontAwesomeIcon icon={faTrashCanArrowUp} />
                      </button>

                    </div>

                    {/* PROGRESS BAR */}
                    <div className="w-full h-1.5 bg-muted rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-primary to-purple-600 transition-all duration-300"
                        style={{ width: `${file.progress}%` }}
                      />
                    </div>

                  </div>
                );
              })}
            </div>
          )}

          {/* FOOTER */}
          <div className="flex justify-between text-xs px-4 pb-4 text-muted-foreground">
            {files.length > 0 ? (
              <>
                <span>Total: {getTotalSize(files)} MB</span>
                <span>{files.length} files</span>
                <span>Max size: 25MB each</span>
              </>
            ) : (
              <>
                <span>Any file type supported</span>
                <span>Max size: 25MB each</span>
              </>
            )}
          </div>
        </div>

        <input
          ref={fileRef}
          type="file"
          multiple
          className="hidden"
          onChange={(e) => {
            const selected = Array.from(e.target.files || []);
            const newFiles = handleFiles(selected, files, setFiles);

            if (newFiles.length > 0) {
              setFiles((prev) => [...prev, ...newFiles]);
            }

            e.target.value = "";
          }}
        />
      </Field>

      {/* MESSAGE */}
      <Field label="Message" icon={faMessage} >
        <Textarea
          rows={4}
          value={form.message}
          onChange={(e) =>
            setForm({
              ...form,
              message: e.target.value,
            })
          }
          placeholder="Tell us briefly about your concern."
          className="
            min-h-[130px]
            resize-none
            rounded-xl
          "
        />
      </Field>

      {/* BUTTON */}
      <Button
        className="
          h-12 w-full rounded-xl
          bg-[#D4A017]
          text-black
          font-semibold
          transition-colors
          hover:bg-[#C39214]
        "
      >
        Request Appointment
      </Button>

      {/* FOOTER */}
      <p className="text-xs text-center text-muted-foreground pb-4 font-heading">
        Your information is used only for appointment scheduling and remains confidential.
      </p>
    </motion.form>
  );
}

/* FIELD */
function Field({
  label,
  icon,
  required,
  children,
}: FieldProps) {
  return (
    <div className="space-y-2">
      <Label className="flex items-center gap-3 text-sm font-heading">
        <span
          className={`flex h-6 w-6 items-center justify-center rounded-sm ${getIconStyle(
            icon
          )}`}
        >
          <FontAwesomeIcon
            icon={icon}
            className="text-sm"
          />
        </span>

        <span className="font-medium text-foreground">
          {label}

          {required && (
            <span className="ml-1 text-red-500">
              <sup>*</sup>
            </span>
          )}
        </span>
      </Label>

      {children}
    </div>
  );
}

function getIconStyle(
  icon: IconDefinition
): string {
  switch (
    icon.iconName
  ) {
    case "user":
      return "bg-indigo-100 text-indigo-600";

    case "envelope":
      return "bg-blue-100 text-blue-600";

    case "globe":
      return "bg-purple-100 text-purple-600";

    case "phone":
      return "bg-green-100 text-green-600";

    case "tag":
      return "bg-pink-100 text-pink-600";

    case "paperclip":
      return "bg-orange-100 text-orange-600";

    case "message":
      return "bg-rose-100 text-rose-600";

    default:
      return "bg-primary/10 text-primary";
  }
}

/* ERROR */
function Error({
  children,
}: ErrorProps) {
  return (
    <p className="mt-1 pl-3 text-start text-xs text-red-500">
      {children}
    </p>
  );
}

function handleFiles(
  selectedFiles: File[],
  currentFiles: UploadFile[],
  setFiles: React.Dispatch<
    React.SetStateAction<
      UploadFile[]
    >
  >
): UploadFile[] {
  const MAX_SIZE =
    25 *
    1024 *
    1024;

  const validFiles:
    UploadFile[] = [];

  selectedFiles.forEach(
    (file) => {
      if (
        file.size >
        MAX_SIZE
      ) {
        return;
      }

      const exists =
        currentFiles.some(
          (f) =>
            f.name ===
            file.name
        );

      if (exists) {
        return;
      }

      const newFile: UploadFile =
        {
          file,
          name: file.name,
          size: file.size,
          type: file.type,
          progress: 0,
          preview:
            file.type.startsWith(
              "image/"
            )
              ? URL.createObjectURL(
                  file
                )
              : null,
        };

      simulateUploadProgress(
        newFile,
        (
          progress
        ) => {
          setFiles(
            (prev) =>
              prev.map(
                (f) =>
                  f.name ===
                  newFile.name
                    ? {
                        ...f,
                        progress,
                      }
                    : f
              )
          );
        }
      );

      validFiles.push(
        newFile
      );
    }
  );

  return validFiles;
}

function getTotalSize(
  files: UploadFile[]
): string {
  const total =
    files.reduce(
      (
        acc,
        file
      ) =>
        acc +
        file.size,
      0
    );

  return (
    total /
    1024 /
    1024
  ).toFixed(2);
}

function getFileLabel(
  name = ""
): string {
  return (
    name
      .split(".")
      .pop()
      ?.toUpperCase() ??
    "FILE"
  );
}

function simulateUploadProgress(
  file: UploadFile,
  onProgress: (
    progress: number
  ) => void
): void {
  let progress = 0;

  const interval =
    setInterval(() => {
      progress +=
        Math.random() *
        25;

      if (
        progress >=
        100
      ) {
        progress = 100;
        clearInterval(
          interval
        );
      }

      onProgress(
        progress
      );
    }, 200);
}

function removeFile(
  index: number,
  files: UploadFile[]
): UploadFile[] {
  return files.filter(
    (_, i) =>
      i !== index
  );
}

function getFileIcon(
  type: string,
  name: string = ""
): {
  icon: IconDefinition;
  className: string;
} {
  const ext = name
    .split(".")
    .pop()
    ?.toLowerCase();

  // IMAGE
  if (type.startsWith("image/")) {
    return {
      icon: faFileImage,
      className:
        "text-pink-500 bg-pink-100",
    };
  }

  // PDF
  if (ext === "pdf") {
    return {
      icon: faFilePdf,
      className:
        "text-red-500 bg-red-100",
    };
  }

  // WORD
  if (
    ext === "doc" ||
    ext === "docx"
  ) {
    return {
      icon: faFileWord,
      className:
        "text-blue-600 bg-blue-100",
    };
  }

  // EXCEL
  if (
    ext === "xls" ||
    ext === "xlsx" ||
    ext === "csv"
  ) {
    return {
      icon: faFileExcel,
      className:
        "text-green-600 bg-green-100",
    };
  }

  // POWERPOINT
  if (
    ext === "ppt" ||
    ext === "pptx"
  ) {
    return {
      icon: faFilePowerpoint,
      className:
        "text-orange-500 bg-orange-100",
    };
  }

  // ZIP
  if (
    ext === "zip" ||
    ext === "rar" ||
    ext === "7z"
  ) {
    return {
      icon: faFileZipper,
      className:
        "text-yellow-600 bg-yellow-100",
    };
  }

  // VIDEO
  if (
    ext === "mp4" ||
    ext === "mov" ||
    ext === "avi"
  ) {
    return {
      icon: faFileVideo,
      className:
        "text-purple-600 bg-purple-100",
    };
  }

  // AUDIO
  if (
    ext === "mp3" ||
    ext === "wav"
  ) {
    return {
      icon: faFileAudio,
      className:
        "text-indigo-600 bg-indigo-100",
    };
  }

  // DEFAULT
  return {
    icon: faFileLines,
    className:
      "text-gray-600 bg-gray-100",
  };
}
