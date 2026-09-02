import React, { useRef, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export default function Projects() {
  const { t } = useTranslation();
  const { isDark } = useTheme();
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '-50px 0px -50px 0px'
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="projects"
      className={`py-16 px-6 flex flex-col items-center justify-center relative overflow-hidden transition-colors duration-300 ${
        isDark 
          ? 'bg-gradient-to-b from-slate-950 via-slate-900 to-slate-800' 
          : 'bg-gradient-to-b from-slate-100 via-slate-50 to-slate-200'
      }`}
    >
      {/* Decorative elements */}
      <div className={`absolute top-10 left-8 w-80 h-80 rounded-full blur-3xl pointer-events-none transition-all duration-300 ${
        isDark ? 'bg-sky-500/10' : 'bg-indigo-500/10'
      }`} />
      <div className={`absolute bottom-10 right-8 w-80 h-80 rounded-full blur-3xl pointer-events-none transition-all duration-300 ${
        isDark ? 'bg-pink-500/10' : 'bg-pink-500/10'
      }`} />
      <div className={`absolute top-1/2 left-1/2 w-48 h-48 rounded-full blur-3xl pointer-events-none transition-all duration-300 ${
        isDark ? 'bg-purple-500/10' : 'bg-purple-500/10'
      }`} />

      <div className="max-w-4xl w-full relative z-10">
        {/* Header */}
        {/* ===== HEADER ===== */}
<div className={`text-center mb-12 transition-all duration-700 ${
  isVisible ? 'animate-fade-in' : 'opacity-0 translate-y-8'
}`}>

  {/* Badge comme Contact */}
  <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full backdrop-blur-sm border mb-4 transition-all duration-300 ${
    isDark 
      ? 'bg-purple-500/20 border-purple-400/50' 
      : 'bg-purple-100/80 border-purple-300'
  }`}>
    <Sparkles className={`w-3 h-3 ${isDark ? 'text-purple-300' : 'text-purple-600'}`} />
    <span className={`text-xs font-medium ${isDark ? 'text-purple-200' : 'text-purple-700'}`}>
      Featured Works
    </span>
  </div>

  {/* Titre comme Contact */}
  <h2
    className={`text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r ${
      isDark ? 'from-sky-300 via-purple-300 to-pink-300' : 'from-indigo-600 via-purple-600 to-pink-600'
    }`}
  >
    {t('projects.title')}
  </h2>

  {/* Trait de séparation */}
  <div className={`w-28 h-1 bg-gradient-to-r rounded-full mx-auto mt-3 mb-6 ${
    isDark 
      ? 'from-sky-400 via-purple-400 to-pink-400' 
      : 'from-indigo-500 via-purple-500 to-pink-500'
  }`} />

  {/* Description élargie */}
  <p
    className={`text-base leading-relaxed font-light max-w-3xl mx-auto transition-colors duration-300 ${
      isDark ? 'text-slate-300' : 'text-gray-700'
    }`}
  >
    {t('project.description')}
  </p>
</div>

        {/* Project Showcase Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {[
            {
              title: 'Web Applications',
              icon: '🌐',
              color: 'sky'
            },
            {
              title: 'Mobile Solutions',
              icon: '📱',
              color: 'purple'
            },
            {
              title: 'Full-Stack Projects',
              icon: '⚙️',
              color: 'pink'
            }
          ].map((category, idx) => {
            const colorMap = {
              sky: { 
                dark: { bg: 'from-slate-900/50 to-slate-800/50', border: 'border-sky-400/50', hover: 'hover:border-sky-300 hover:bg-sky-500/10' },
                light: { bg: 'from-white/80 to-gray-100/80', border: 'border-indigo-300', hover: 'hover:border-indigo-400 hover:bg-indigo-50/80' }
              },
              purple: { 
                dark: { bg: 'from-slate-900/50 to-slate-800/50', border: 'border-purple-400/50', hover: 'hover:border-purple-300 hover:bg-purple-500/10' },
                light: { bg: 'from-white/80 to-gray-100/80', border: 'border-purple-300', hover: 'hover:border-purple-400 hover:bg-purple-50/80' }
              },
              pink: { 
                dark: { bg: 'from-slate-900/50 to-slate-800/50', border: 'border-pink-400/50', hover: 'hover:border-pink-300 hover:bg-pink-500/10' },
                light: { bg: 'from-white/80 to-gray-100/80', border: 'border-pink-300', hover: 'hover:border-pink-400 hover:bg-pink-50/80' }
              }
            };
            const colors = isDark ? colorMap[category.color].dark : colorMap[category.color].light;

            return (
              <div
                key={idx}
                className={`group transition-all duration-700 ${
                  isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'
                }`}
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <div className={`p-6 rounded-xl border backdrop-blur-sm ${colors.border} ${colors.hover} bg-gradient-to-br ${colors.bg} hover:shadow-lg transition-all duration-300 h-full ${
                  isDark ? 'shadow-lg' : 'shadow-md'
                }`}>
                  <div className="text-4xl mb-3">{category.icon}</div>
                  <h3 className={`text-lg font-bold mb-2 transition-colors duration-300 ${
                    isDark ? 'text-slate-200' : 'text-gray-800'
                  }`}>
                    {category.title}
                  </h3>
                  <p className={`text-sm transition-colors duration-300 ${
                    isDark ? 'text-slate-400' : 'text-gray-600'
                  }`}>
                    Explore a collection of {category.title.toLowerCase()} built with modern technologies
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Button */}
        <div className={`flex justify-center transition-all duration-700 ${
          isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'
        }`} style={{ animationDelay: '300ms' }}>
          <Link
            to="/projects-page"
            className={`group relative px-6 py-3 rounded-lg bg-gradient-to-r text-white font-semibold hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 transform overflow-hidden ${
              isDark 
                ? 'from-sky-500 to-purple-500 hover:shadow-purple-500/50' 
                : 'from-indigo-600 to-purple-600 hover:shadow-purple-500/40'
            }`}
          >
            <div className={`absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity ${
              isDark ? 'from-purple-600 to-pink-600' : 'from-purple-700 to-pink-600'
            }`} />
            <span className="relative flex items-center justify-center gap-2 text-sm">
              {t('project.cta')}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </span>
          </Link>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in { 
          from { opacity: 0; transform: translateY(30px); } 
          to { opacity: 1; transform: translateY(0); } 
        }
        @keyframes fade-in-up { 
          from { opacity: 0; transform: translateY(20px); } 
          to { opacity: 1; transform: translateY(0); } 
        }
        
        .animate-fade-in { 
          animation: fade-in 0.8s ease-out forwards; 
        }
        .animate-fade-in-up { 
          animation: fade-in-up 0.6s ease-out forwards; 
        }
      `}</style>
    </section>
  );
}