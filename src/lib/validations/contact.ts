import { z } from "zod";

/**
 * Detects gibberish or bot-like text patterns
 * Checks for:
 * - Excessive consonants in a row (more than 5)
 * - Very low vowel ratio (less than 10%)
 * - Mixed case gibberish patterns
 */
function isGibberish(text: string): boolean {
  if (!text || text.length < 3) return false;

  const cleanText = text.replace(/[^a-zA-Z]/g, "");
  if (cleanText.length < 3) return false;

  // Check for excessive consonants in a row
  const maxConsonants = 5;
  const consonantPattern = new RegExp(`[^aeiouAEIOU]{${maxConsonants + 1},}`);
  if (consonantPattern.test(cleanText)) {
    return true;
  }

  // Check vowel ratio (should be at least 10% vowels)
  const vowels = cleanText.match(/[aeiouAEIOU]/g);
  const vowelRatio = vowels ? vowels.length / cleanText.length : 0;
  if (vowelRatio < 0.1) {
    return true;
  }

  // Check for random case patterns (e.g., gLjqVoGlpC)
  // If more than 40% of lowercase letters are followed by uppercase, it's suspicious
  let caseTransitions = 0;
  for (let i = 0; i < cleanText.length - 1; i++) {
    if (
      cleanText[i] === cleanText[i].toLowerCase() &&
      cleanText[i + 1] === cleanText[i + 1].toUpperCase()
    ) {
      caseTransitions++;
    }
  }
  const transitionRatio = cleanText.length > 1 ? caseTransitions / (cleanText.length - 1) : 0;
  if (transitionRatio > 0.4) {
    return true;
  }

  return false;
}

const gibberishValidation = z.string().refine(
  (val) => !isGibberish(val),
  "Invalid input detected. Please enter valid text."
);

export const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .pipe(gibberishValidation),
  email: z.string().email("Please enter a valid email address"),
  company: z
    .string()
    .optional()
    .refine(
      (val) => !val || !isGibberish(val),
      "Invalid input detected. Please enter valid text."
    ),
  message: z
    .string()
    .min(10, "Message must be at least 10 characters")
    .pipe(gibberishValidation),
  // Honeypot field - should be empty for legitimate users
  website: z.string().optional(),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;

