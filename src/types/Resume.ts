export interface EducationWorkEntry {
  id: string;
  year: string;
  month: string;
  content: string;
  type: "education" | "work" | "blank";
}

export interface LicenseEntry {
  id: string;
  year: string;
  month: string;
  content: string;
}

export interface ResumeData {
  // -----------------------------
  // Photo
  // -----------------------------
  photoDataUrl: string | null;

  // -----------------------------
  // Personal Information
  // -----------------------------
  fullName: string;
  fullNameKana: string;
  birthDate: string;
  gender: "男" | "女" | "";

  // -----------------------------
  // Current Address
  // -----------------------------
  postalCode: string;
  address: string;
  addressKana: string;
  phone: string;
  email: string;

  // -----------------------------
  // Contact Address
  // -----------------------------
  contactPostalCode: string;
  contactAddress: string;
  contactAddressKana: string;
  contactPhone: string;
  sameAsCurrentAddress: boolean;

  // -----------------------------
  // Resume Date
  // -----------------------------
  filledDate: string;

  // -----------------------------
  // Education & Work History
  // -----------------------------
  history: EducationWorkEntry[];

  // -----------------------------
  // Licenses
  // -----------------------------
  licenses: LicenseEntry[];

  // -----------------------------
  // Resume Fields
  // -----------------------------
  motivation: string;
  selfPR: string;
  commutingTime: string;
  dependents: string;
  spouse: "有" | "無" | "";
  spouseSupport: "有" | "無" | "";
  requests: string;

  // -----------------------------
  // Self Introduction Page
  // -----------------------------
  strengths: string;
  weaknesses: string;
  hobbies: string;
  selfIntro: string;
  reasonForApplying: string;
  futureGoals: string;
}

export const emptyEntry = (
  type: EducationWorkEntry["type"] = "blank"
): EducationWorkEntry => ({
  id: crypto.randomUUID(),
  year: "",
  month: "",
  content: "",
  type,
});

export const emptyLicense = (): LicenseEntry => ({
  id: crypto.randomUUID(),
  year: "",
  month: "",
  content: "",
});

export const defaultResumeData: ResumeData = {
  // Photo
  photoDataUrl: null,

  // Personal
  fullName: "",
  fullNameKana: "",
  birthDate: "",
  gender: "",

  // Address
  postalCode: "",
  address: "",
  addressKana: "",
  phone: "",
  email: "",

  // Contact
  contactPostalCode: "",
  contactAddress: "",
  contactAddressKana: "",
  contactPhone: "",
  sameAsCurrentAddress: true,

  // Date
  filledDate: new Date().toISOString().slice(0, 10),

  // History (12 rows)
  history: Array.from({ length: 12 }, () => emptyEntry()),

  // Licenses (5 rows)
  licenses: Array.from({ length: 5 }, () => emptyLicense()),

  // Resume
  motivation: "",
  selfPR: "",
  commutingTime: "",
  dependents: "0",
  spouse: "",
  spouseSupport: "",
  requests: "",

  // Self Introduction
  strengths: "",
  weaknesses: "",
  hobbies: "",
  selfIntro: "",
  reasonForApplying: "",
  futureGoals: "",
};