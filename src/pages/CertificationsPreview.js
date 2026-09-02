import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../context/ThemeContext';
import { Link } from 'react-router-dom';
import { MessageCircle } from 'lucide-react';

export default function CertificationsPreview() {
  const { t } = useTranslation();
  const { isDark } = useTheme();
  const [modalImage, setModalImage] = useState(null);

  const certifications = t('certifications.list', { returnObjects: true }).slice(0, 4);

  return (
    <section
      id="certifications"
      className={`py-16 px-6 flex flex-col items-center relative overflow-hidden transition-colors duration-300 ${
        isDark
          ? 'bg-gradient-to-b from-slate-950 via-slate-900 to-slate-800'
          : 'bg-gradient-to-b from-slate-100 via-slate-50 to-slate-200'
      }`}
    >
  {/* ==== Titre style Contact ==== */}
<div className={`text-center mb-8 transition-all duration-700`}>
  {/* Titre */}
  <h2
    className={`text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r ${
      isDark ? 'from-sky-300 via-purple-300 to-pink-300' : 'from-indigo-600 via-purple-600 to-pink-600'
    }`}
  >
    {t('home.certificationsTitle')}
  </h2>

  {/* Barre sous le titre */}
  <div
    className={`w-24 h-1 mx-auto my-3 rounded-full bg-gradient-to-r ${
      isDark
        ? 'from-sky-400 via-purple-400 to-pink-400'
        : 'from-indigo-500 via-purple-500 to-pink-500'
    }`}
  />

  {/* Description */}
  <p className={`text-sm ${isDark ? 'text-slate-400' : 'text-gray-600'}`}>
    {t('home.certificationsDescription')}
  </p>
</div>

      {/* ==== GRID 4 COLONNES ==== */}
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
                {t('home.viewMoreCertifications')}
              </span>
            </div>

            {/* Titre */}
            <div className="p-3 mt-auto">
              <h4 className={`text-center font-semibold text-base bg-gradient-to-r ${
                isDark
                  ? 'from-sky-300 via-purple-300 to-pink-300 text-transparent bg-clip-text'
                  : 'from-indigo-600 via-purple-600 to-pink-600 text-transparent bg-clip-text'
              }`}>
                {cert.title}
              </h4>
            </div>
          </div>
        ))}
      </div>

      {/* ==== BOUTON VIEW MORE ==== */}
      <div className="mt-10">
        <Link
          to="/certifications"
          className="px-8 py-3 rounded-lg bg-indigo-600 text-white text-lg font-semibold hover:bg-indigo-700 transition shadow-lg"
        >
          {t('home.viewMoreCertifications')}
        </Link>
      </div>

      {/* ==== MODAL ==== */}
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
