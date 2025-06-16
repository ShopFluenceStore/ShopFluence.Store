"use client";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";

type ShippingOption = {
  label: string;
  flagSrc: string;
};

type LanguageOption = {
  label: string;
  flagSrc: string;
};

type Props = {
  languageOptions?: LanguageOption[];
  shippingOptions?: ShippingOption[];
  colors?: {
    primary: string;
    text: string;
    hover: string;
  };
};

const defaultLanguageOptions = [
  { label: "English, USD", flagSrc: "/Images/usa.jpg" },
  { label: "English, PKR", flagSrc: "/Images/pakistan.jpg" },
  { label: "English, GBP", flagSrc: "/Images/uk.jpg" },
  { label: "English, INR", flagSrc: "/Images/india.jpg" },
  { label: "Arabic, SAR", flagSrc: "/Images/saudi-arabia.jpg" },
];

const defaultShippingOptions = [
  { label: "Pakistan", flagSrc: "/Images/pakistan.jpg" },
  { label: "USA", flagSrc: "/Images/usa.jpg" },
  { label: "UK", flagSrc: "/Images/uk.jpg" },
  { label: "India", flagSrc: "/Images/india.jpg" },
  { label: "Saudi Arabia", flagSrc: "/Images/saudi-arabia.jpg" },
];

export default function LanguageShippingDropdowns({
  languageOptions = defaultLanguageOptions,
  shippingOptions = defaultShippingOptions,
  colors = { primary: "var(--main)", text: "var(--text)", hover: "var(--main-bg)" },
}: Props) {
  const [language, setLanguage] = useState<LanguageOption>(languageOptions[0]);
  const [country, setCountry] = useState(shippingOptions[0].label);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [isCountryOpen, setIsCountryOpen] = useState(false);
  const langRef = useRef<HTMLDivElement>(null);
  const countryRef = useRef<HTMLDivElement>(null);

  // Close dropdowns when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (langRef.current && !langRef.current.contains(event.target as Node)) {
        setIsLangOpen(false);
      }
      if (
        countryRef.current &&
        !countryRef.current.contains(event.target as Node)
      ) {
        setIsCountryOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const selectedFlag =
    shippingOptions.find((opt) => opt.label === country)?.flagSrc || "";

  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center w-full px-4 sm:px-6 gap-4 sm:gap-6">
      {/* Language Selector */}
      <div className="relative w-full sm:w-auto" ref={langRef}>
        <div
          onClick={() => {
            setIsLangOpen(!isLangOpen);
            setIsCountryOpen(false);
          }}
          className={`flex items-center justify-between w-full sm:w-auto gap-2 py-3 sm:py-2 text-sm text-[${colors.text}] hover:text-[${colors.primary}] transition-colors cursor-pointer rounded-md sm:rounded-none`}
          aria-expanded={isLangOpen}
          aria-haspopup="listbox"
          aria-label="Select language"
        >
          <div className="flex items-center gap-2">
            <div className="w-5 flex-shrink-0">
              <Image
                src={language.flagSrc}
                alt=""
                width={20}
                height={14}
                className="w-full h-auto object-cover"
                aria-hidden="true"
              />
            </div>
            <span className="truncate">{language.label}</span>
          </div>
          <ChevronDown className={`w-4 h-4 flex-shrink-0 transition-transform ${isLangOpen ? "rotate-180" : ""}`} />
        </div>

        {isLangOpen && (
          <div className="absolute z-50 w-full sm:w-48 mt-1 bg-white border border-[var(--sub-text)] rounded-md shadow-lg">
            <div role="listbox" aria-label="Language options" className="max-h-60 overflow-y-auto">
              {languageOptions.map((option) => (
                <div
                  key={option.label}
                  role="option"
                  aria-selected={language.label === option.label}
                  onClick={() => {
                    setLanguage(option);
                    setIsLangOpen(false);
                  }}
                  className={`px-4 py-3 sm:py-2 cursor-pointer text-sm text-[${colors.text}] hover:bg-[${colors.hover}] hover:text-[${colors.primary}] transition-colors flex items-center gap-2`}
                >
                  <div className="w-5 flex-shrink-0">
                    <Image
                      src={option.flagSrc}
                      alt=""
                      width={20}
                      height={14}
                      className="w-full h-auto object-cover"
                      aria-hidden="true"
                    />
                  </div>
                  <span className="truncate">{option.label}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Country Selector */}
      <div className="relative w-full sm:w-auto" ref={countryRef}>
        <div
          onClick={() => {
            setIsCountryOpen(!isCountryOpen);
            setIsLangOpen(false);
          }}
          className={`flex items-center justify-between w-full sm:w-auto gap-2 py-3 sm:py-2 text-sm text-[${colors.text}] hover:text-[${colors.primary}] transition-colors cursor-pointer rounded-md sm:rounded-none`}
          aria-expanded={isCountryOpen}
          aria-haspopup="listbox"
          aria-label="Select shipping country"
        >
          <div className="flex items-center gap-2">
            <span className="hidden sm:inline">Ship to</span>
            <span className="sm:hidden">Country:</span>
            <span className="font-medium">{country}</span>
            <div className="w-5 flex-shrink-0">
              <Image
                src={selectedFlag}
                alt=""
                width={20}
                height={14}
                className="w-full h-auto object-cover"
                aria-hidden="true"
              />
            </div>
          </div>
          <ChevronDown className={`w-4 h-4 flex-shrink-0 transition-transform ${isCountryOpen ? "rotate-180" : ""}`} />
        </div>

        {isCountryOpen && (
          <div className="absolute z-50 w-full sm:w-48 mt-1 bg-white border border-[var(--sub-text)] rounded-md shadow-lg">
            <div role="listbox" aria-label="Country options" className="max-h-60 overflow-y-auto">
              {shippingOptions.map((option) => (
                <div
                  key={option.label}
                  role="option"
                  aria-selected={country === option.label}
                  onClick={() => {
                    setCountry(option.label);
                    setIsCountryOpen(false);
                  }}
                  className={`px-4 py-3 sm:py-2 cursor-pointer text-sm text-[${colors.text}] hover:bg-[${colors.hover}] hover:text-[${colors.primary}] transition-colors flex items-center gap-2`}
                >
                  <div className="w-5 flex-shrink-0">
                    <Image
                      src={option.flagSrc}
                      alt=""
                      width={20}
                      height={14}
                      className="w-full h-auto object-cover"
                      aria-hidden="true"
                    />
                  </div>
                  <span className="truncate">{option.label}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function ChevronDown({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M19 9l-7 7-7-7"
      />
    </svg>
  );
}