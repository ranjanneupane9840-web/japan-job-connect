import { useEffect, useState } from "react";
import {
  type ResumeData,
  defaultResumeData,
} from "../types/Resume";

const STORAGE_KEY = "japan-job-connect-resume";

export function useResumeStorage() {
  const [data, setData] = useState<ResumeData>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);

      if (!saved) {
        return defaultResumeData;
      }

      const parsed = JSON.parse(saved);

      return {
        ...defaultResumeData,
        ...parsed,
      };
    } catch (error) {
      console.error("Failed to load resume data", error);

      return defaultResumeData;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(data)
      );
    } catch (error) {
      console.error("Failed to save resume data", error);
    }
  }, [data]);

  const updateField = <K extends keyof ResumeData>(
    key: K,
    value: ResumeData[K]
  ) => {
    setData((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const updateHistory = (
    id: string,
    updates: Partial<ResumeData["history"][number]>
  ) => {
    setData((prev) => ({
      ...prev,
      history: prev.history.map((item) =>
        item.id === id
          ? {
              ...item,
              ...updates,
            }
          : item
      ),
    }));
  };

  const addHistoryRow = () => {
    setData((prev) => ({
      ...prev,
      history: [
        ...prev.history,
        {
          id: crypto.randomUUID(),
          year: "",
          month: "",
          content: "",
          type: "blank",
        },
      ],
    }));
  };

  const removeHistoryRow = (id: string) => {
    setData((prev) => {
      if (prev.history.length <= 1) {
        return prev;
      }

      return {
        ...prev,
        history: prev.history.filter(
          (item) => item.id !== id
        ),
      };
    });
  };

  const updateLicense = (
    id: string,
    updates: Partial<ResumeData["licenses"][number]>
  ) => {
    setData((prev) => ({
      ...prev,
      licenses: prev.licenses.map((item) =>
        item.id === id
          ? {
              ...item,
              ...updates,
            }
          : item
      ),
    }));
  };

  const addLicenseRow = () => {
    setData((prev) => ({
      ...prev,
      licenses: [
        ...prev.licenses,
        {
          id: crypto.randomUUID(),
          year: "",
          month: "",
          content: "",
        },
      ],
    }));
  };

  const removeLicenseRow = (id: string) => {
    setData((prev) => {
      if (prev.licenses.length <= 1) {
        return prev;
      }

      return {
        ...prev,
        licenses: prev.licenses.filter(
          (item) => item.id !== id
        ),
      };
    });
  };

  const resetData = () => {
    localStorage.removeItem(STORAGE_KEY);

    setData(defaultResumeData);
  };

  return {
    data,

    setData,

    updateField,

    updateHistory,

    addHistoryRow,

    removeHistoryRow,

    updateLicense,

    addLicenseRow,

    removeLicenseRow,

    resetData,
  };
}