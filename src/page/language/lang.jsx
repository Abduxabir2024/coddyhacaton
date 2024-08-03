import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";

function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const lang = localStorage.getItem("language");

  useEffect(() => {
    if (!lang) {
      localStorage.setItem("language", "ru");
    }
  }, []);

  const handleLanguageChange = (event) => {
    const selectedLanguage = event.target.value;
    localStorage.setItem("language", selectedLanguage);
    i18n.changeLanguage(selectedLanguage);
  };

  return (
    <div className="relative max-w-[120px]  text-secondary">
      <select
        defaultValue={localStorage.getItem("language")}
        onChange={handleLanguageChange}
        className="text-cyan cursor-pointer text-white bg-gray-900 px-[20px] py-[10px] border border-cyan focus:outline-none rounded-[10px]"
      >
        <option value="uz">UZ</option>
        <option value="ru">RU</option>
        <option value="en">EN</option>
      </select>
    </div>
  );
}

export default LanguageSwitcher;
