// src/utils/translate.ts

export interface TranslateResponse {
  translated: string;
}

const API_URL = "http://localhost:3001/translate";

/**
 * Translate English to Japanese
 */
export async function translateToJapanese(
  text: string
): Promise<string> {
  if (!text.trim()) return "";

  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ text }),
    });

    if (!response.ok) {
      throw new Error("Translation failed");
    }

    const data: TranslateResponse = await response.json();

    return data.translated ?? "";
  } catch (error) {
    console.error("Translation Error:", error);

    // Return original text if translation fails
    return text;
  }
}

/**
 * Detect whether text is English
 */
export function isEnglish(text: string): boolean {
  return /^[A-Za-z0-9\s.,'"()\-_/&]+$/.test(text);
}

/**
 * Automatically translate only English text
 */
export async function autoTranslate(
  text: string
): Promise<string> {
  if (!text.trim()) return "";

  if (!isEnglish(text)) {
    return text;
  }

  return await translateToJapanese(text);
}

/**
 * Debounce helper
 */
export function debounce<T extends (...args: any[]) => void>(
  callback: T,
  delay = 600
) {
  let timer: number;

  return (...args: Parameters<T>) => {
    window.clearTimeout(timer);

    timer = window.setTimeout(() => {
      callback(...args);
    }, delay);
  };
}

/**
 * Translate a person's name to Katakana
 */
export async function translateName(
  name: string
): Promise<string> {
  if (!name.trim()) return "";

  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        text: `Convert this person's name into Japanese Katakana only: ${name}`,
      }),
    });

    const data: TranslateResponse = await response.json();

    return data.translated ?? name;
  } catch {
    return name;
  }
}

/**
 * Translate address into Japanese
 */
export async function translateAddress(
  address: string
): Promise<string> {
  if (!address.trim()) return "";

  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        text: `Translate this address into natural Japanese: ${address}`,
      }),
    });

    const data: TranslateResponse = await response.json();

    return data.translated ?? address;
  } catch {
    return address;
  }
}