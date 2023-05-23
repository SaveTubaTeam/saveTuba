
import { useContext } from "react";
import { LanguageContext } from "./QuizHandler.js";
import { translations } from "./translations.js";

/**
 * Utility function to generate text dependant on the language
 * @param {React Component props} props destructured just for the contentID
 * @returns
 */
export default function MultiLingualContent({ contentID }) {
  const { language } = useContext(LanguageContext);

  return translations[language][contentID];
}