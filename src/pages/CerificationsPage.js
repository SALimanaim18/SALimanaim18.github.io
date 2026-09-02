import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { useTheme } from "../context/ThemeContext";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

export default function CertificationsPage() {
  const { t } = useTranslation();
  const { isDark } = useTheme();

  const certifications = t("certifications.list", { returnObjects: true });
  const [modalImage, setModalImage] = useState(null);

  return (
  <section
  id="certifications"
  className={`pt-32 px-6 flex flex-col items-center relative overflow-hidden transition-colors duration-300 ${
    isDark
      ? "bg-gradient-to-b from-slate-950 via-slate-900 to-slate-800 text-slate-100"
      : "bg-gradient-to-b from-slate-100 via-slate-50 to-slate-200 text-gray-800"
  }`}
>

      {/* ==== Titre ==== */}
      <div className="text-center mb-12">
        <h2
          className={`text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r ${
            isDark
              ? "from-sky-300 via-purple-300 to-pink-300"
              : "from-indigo-600 via-purple-600 to-pink-600"
          }`}
        >
          {t("home.certificationsTitle")}
        </h2>
        <div
          className={`w-24 h-1 mx-auto my-3 rounded-full bg-gradient-to-r ${
            isDark
              ? "from-sky-400 via-purple-400 to-pink-400"
              : "from-indigo-500 via-purple-500 to-pink-500"
          }`}
        />
        <p className={`text-sm ${isDark ? "text-slate-400" : "text-gray-600"}`}>
          {t("home.certificationsDescription")}
        </p>
      </div>
 
      {/* ==== Grid 4 Colonnes ==== */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 w-full max-w-7xl">
        {certifications.map((cert, idx) => (
          <div
            key={idx}
            className="relative group cursor-pointer rounded-xl overflow-hidden shadow-xl transition-transform duration-300 hover:scale-105 bg-white dark:bg-slate-800 flex flex-col"
            onClick={() => setModalImage(`${process.env.PUBLIC_URL}/${cert.image}`)}
          >
            {/* Image */}
            <div className="h-44 w-full overflow-hidden">
              <img
                src={`${process.env.PUBLIC_URL}/${cert.image}`}
                alt={cert.title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
            </div>

            {/* Overlay View Certif */}
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <span className="text-white font-semibold text-lg">
                {t("home.viewMoreCertifications")}
              </span>
            </div>

            {/* Titre */}
            <div className="p-3 mt-auto">
              <h4
                className={`text-center font-semibold text-base bg-gradient-to-r ${
                  isDark
                    ? "from-sky-300 via-purple-300 to-pink-300 text-transparent bg-clip-text"
                    : "from-indigo-600 via-purple-600 to-pink-600 text-transparent bg-clip-text"
                }`}
              >
                {cert.title}
              </h4>
            </div>
          </div>
        ))}
      </div>
<Link
        to="/"
        className={`fixed bottom-6 left-6 w-14 h-14 rounded-full flex items-center justify-center shadow-lg
        transition-all duration-300 transform hover:scale-110 hover:shadow-2xl
        ${
          isDark
            ? "bg-slate-700 text-white hover:bg-sky-500 hover:shadow-sky-400/60"
            : "bg-white text-gray-800 hover:bg-indigo-500 hover:shadow-indigo-400/60"
        }`}
        style={{
          boxShadow: isDark
            ? "0 0 10px rgba(56, 189, 248, 0.7)"
            : "0 0 10px rgba(99, 102, 241, 0.7)",
        }}
      >
        <ArrowLeft size={24} />
      </Link>
      {/* ==== Modal ==== */}
      {modalImage && (
        <div
          className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
          onClick={() => setModalImage(null)}
        >
          <img
            src={modalImage}
            alt="Certification"
            className="max-w-3xl max-h-[90vh] rounded-lg shadow-2xl"
          />
        </div>
      )}
    </section>
  );
}
