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
    <div className="flex items-center gap-2">
      {/* Language Selector */}
      <div className="relative" ref={langRef}>
        <button
          onClick={() => {
            setIsLangOpen(!isLangOpen);
            setIsCountryOpen(false);
          }}
          className={`flex items-center gap-2 px-4 py-2 text-sm text-[var(--text)] hover:text-[var(--main)] transition-colors cursor-pointer`}
        >
          <div className="flex items-center gap-2">
            <div className="w-5">
              <Image
                src={language.flagSrc}
                alt={language.label}
                width={20}
                height={14}
                className="w-full h-auto object-cover"
              />
            </div>
            {language.label}
          </div>
          <ChevronDown className="w-4 h-4" />
        </button>

        {isLangOpen && (
          <div className="absolute z-10 w-48 mt-1 bg-white border rounded-md shadow-lg">
            {languageOptions.map((option) => (
              <div
                key={option.label}
                onClick={() => {
                  setLanguage(option);
                  setIsLangOpen(false);
                }}
                className={`px-4 py-2 cursor-pointer text-sm text-[var(--text)] hover:text-[var(--main)] transition-colors`}
              >
                <div className="flex items-center gap-2">
                  <div className="w-5">
                    <Image
                      src={option.flagSrc}
                      alt={option.label}
                      width={20}
                      height={14}
                      className="w-full h-auto object-cover"
                    />
                  </div>
                  {option.label}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Country Selector */}
      <div className="relative" ref={countryRef}>
        <button
          onClick={() => {
            setIsCountryOpen(!isCountryOpen);
            setIsLangOpen(false);
          }}
          className={`flex items-center gap-2 px-4 py-2 text-sm text-[var(--text)] hover:text-[var(--main)] transition-colors cursor-pointer`}
        >
          Ship to {country}
          <div className="w-5">
            <Image
              src={selectedFlag}
              alt={country}
              width={20}
              height={14}
              className="w-full h-auto object-cover"
            />
          </div>
          <ChevronDown className="w-4 h-4" />
        </button>

        {isCountryOpen && (
          <div className="absolute z-10 w-48 mt-1 bg-white border rounded-md shadow-lg">
            {shippingOptions.map((option) => (
              <div
                key={option.label}
                onClick={() => {
                  setCountry(option.label);
                  setIsCountryOpen(false);
                }}
                className="flex items-center gap-2 px-4 py-2 cursor-pointer text-sm text-[var(--text)] hover:text-[var(--main)] transition-colors"
              >
                <div className="w-5">
                  <Image
                    src={option.flagSrc}
                    alt={option.label}
                    width={20}
                    height={14}
                    className="w-full h-auto object-cover"
                  />
                </div>
                {option.label}
              </div>
            ))}
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
