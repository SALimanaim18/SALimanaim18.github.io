import React, { useRef, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Mail, Phone, Linkedin, Github, MessageCircle } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export default function Footer() {
  const { t } = useTranslation();
  const { isDark } = useTheme();
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  const contactLinks = [
    {
      icon: Mail,
      label: 'Email',
      value: 'salimanaim18@gmail.com',
      href: 'mailto:salimanaim18@gmail.com',
      color: 'sky'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+212 637-845874',
      href: 'tel:+212637845874',
      color: 'purple'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'Salima Naim',
      href: 'https://www.linkedin.com/in/salima-naim-a9ab24317/',
      color: 'pink',
      isExternal: true
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'SALimanaim18',
      href: 'https://github.com/SALimanaim18',
      color: 'cyan',
      isExternal: true
    }
  ];

  const colorMap = {
    sky: { 
      dark: { bg: 'from-slate-900/50 to-slate-800/50', border: 'border-sky-400/50', icon: 'text-sky-400', hover: 'hover:border-sky-300 hover:bg-sky-500/10', gradient: 'from-sky-400 to-sky-600' },
      light: { bg: 'from-white/80 to-gray-100/80', border: 'border-indigo-300', icon: 'text-indigo-600', hover: 'hover:border-indigo-400 hover:bg-indigo-50/80', gradient: 'from-indigo-500 to-indigo-600' }
    },
    purple: { 
      dark: { bg: 'from-slate-900/50 to-slate-800/50', border: 'border-purple-400/50', icon: 'text-purple-400', hover: 'hover:border-purple-300 hover:bg-purple-500/10', gradient: 'from-purple-400 to-purple-600' },
      light: { bg: 'from-white/80 to-gray-100/80', border: 'border-purple-300', icon: 'text-purple-600', hover: 'hover:border-purple-400 hover:bg-purple-50/80', gradient: 'from-purple-500 to-purple-600' }
    },
    pink: { 
      dark: { bg: 'from-slate-900/50 to-slate-800/50', border: 'border-pink-400/50', icon: 'text-pink-400', hover: 'hover:border-pink-300 hover:bg-pink-500/10', gradient: 'from-pink-400 to-pink-600' },
      light: { bg: 'from-white/80 to-gray-100/80', border: 'border-pink-300', icon: 'text-pink-600', hover: 'hover:border-pink-400 hover:bg-pink-50/80', gradient: 'from-pink-500 to-pink-600' }
    },
    cyan: { 
      dark: { bg: 'from-slate-900/50 to-slate-800/50', border: 'border-cyan-400/50', icon: 'text-cyan-400', hover: 'hover:border-cyan-300 hover:bg-cyan-500/10', gradient: 'from-cyan-400 to-cyan-600' },
      light: { bg: 'from-white/80 to-gray-100/80', border: 'border-cyan-400', icon: 'text-cyan-600', hover: 'hover:border-cyan-500 hover:bg-cyan-50/80', gradient: 'from-cyan-500 to-cyan-600' }
    }
  };

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
    <footer 
      ref={sectionRef}
      id="contact" 
      className={`relative overflow-hidden transition-colors duration-300 ${
        isDark 
          ? 'bg-gradient-to-b from-slate-950 via-slate-900 to-slate-800' 
          : 'bg-gradient-to-b from-slate-100 via-slate-50 to-slate-200'
      }`}
    >
      {/* Decorative elements */}
      <div className={`absolute top-0 right-0 w-80 h-80 rounded-full blur-3xl pointer-events-none transition-all duration-300 ${
        isDark ? 'bg-purple-500/10' : 'bg-purple-500/5'
      }`} />
      <div className={`absolute bottom-0 left-0 w-80 h-80 rounded-full blur-3xl pointer-events-none transition-all duration-300 ${
        isDark ? 'bg-sky-500/10' : 'bg-indigo-500/5'
      }`} />

      <div className="max-w-4xl mx-auto relative z-10 py-12 px-6">
        {/* Header ajusté */}
        <div className={`text-center mb-8 transition-all duration-700 ${
          isVisible ? 'animate-fade-in' : 'opacity-0 translate-y-8'
        }`}>
          <div className="flex items-center justify-center gap-3 mb-3">
            <MessageCircle className={`w-5 h-5 transition-colors duration-300 ${
              isDark ? 'text-purple-400' : 'text-purple-600'
            }`} />
            <h2 className={`text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r ${
              isDark 
                ? 'from-sky-300 via-purple-300 to-pink-300' 
                : 'from-indigo-600 via-purple-600 to-pink-600'
            }`}>
              {t('contact.title', 'Get In Touch')}
            </h2>
          </div>
          <p className={`text-sm transition-colors duration-300 max-w-md mx-auto ${
            isDark ? 'text-slate-400' : 'text-gray-600'
          }`}>
            Let's work together to bring your ideas to life
          </p>
          <div className={`w-20 h-0.5 bg-gradient-to-r rounded-full mx-auto mt-4 ${
            isDark 
              ? 'from-sky-400 via-purple-400 to-pink-400' 
              : 'from-indigo-500 via-purple-500 to-pink-500'
          }`} />
        </div>

        {/* Contact Cards Grid amélioré */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {contactLinks.map((contact, idx) => {
            const IconComponent = contact.icon;
            const colors = isDark ? colorMap[contact.color].dark : colorMap[contact.color].light;

            return (
              <a
                key={idx}
                href={contact.href}
                target={contact.isExternal ? '_blank' : undefined}
                rel={contact.isExternal ? 'noopener noreferrer' : undefined}
                className={`group transition-all duration-700 ${
                  isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'
                }`}
                style={{ animationDelay: `${idx * 100 + 200}ms` }}
              >
                <div className={`relative p-4 rounded-xl border backdrop-blur-sm ${colors.border} ${colors.hover} bg-gradient-to-br ${colors.bg} hover:shadow-lg transition-all duration-300 overflow-hidden h-full ${
                  isDark ? 'shadow-lg' : 'shadow-md'
                }`}>
                  {/* Background gradient on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${colors.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300 -z-10`} />

                  {/* Icon and Content */}
                  <div className="flex items-center gap-3 relative z-10">
                    <div className={`p-2 rounded-lg transition-colors duration-300 ${
                      isDark ? 'bg-slate-800/70' : 'bg-white/50'
                    } ${colors.icon}`}>
                      <IconComponent className="w-4 h-4" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className={`text-xs font-semibold uppercase tracking-wide mb-1 transition-colors duration-300 ${
                        isDark ? 'text-slate-400' : 'text-gray-500'
                      }`}>
                        {contact.label}
                      </h3>
                      <p className={`text-sm font-medium transition-colors duration-300 truncate ${
                        isDark ? 'text-slate-200' : 'text-gray-800'
                      }`}>
                        {contact.value}
                      </p>
                    </div>
                  </div>

                  {/* Hover effect line */}
                  <div className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r ${colors.gradient} rounded-full w-0 group-hover:w-full transition-all duration-500`} />
                </div>
              </a>
            );
          })}
        </div>

        {/* Divider stylisé */}
        <div className={`w-full h-px bg-gradient-to-r from-transparent ${
          isDark ? 'via-slate-600/50' : 'via-gray-300/50'
        } to-transparent mb-6`} />

        {/* Footer Bottom amélioré */}
        <div className={`text-center transition-all duration-700 ${
          isVisible ? 'animate-fade-in' : 'opacity-0 translate-y-8'
        }`} style={{ animationDelay: '600ms' }}>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-4">
            <div className="flex items-center gap-3">
              <div className={`w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 flex items-center justify-center text-white font-bold text-sm shadow-lg transition-all duration-300 ${
                isDark 
                  ? 'shadow-purple-500/30' 
                  : 'shadow-purple-400/40'
              }`}>
                S
              </div>
              <span className={`font-semibold transition-colors duration-300 ${
                isDark ? 'text-slate-300' : 'text-gray-700'
              }`}>
                Salima Naim
              </span>
            </div>
            
            <p className={`text-sm transition-colors duration-300 ${
              isDark ? 'text-slate-400' : 'text-gray-500'
            }`}>
              Full-Stack Developer & UI/UX Enthusiast
            </p>
          </div>

          <div className={`text-xs transition-colors duration-300 ${
            isDark ? 'text-slate-500' : 'text-gray-400'
          }`}>
            <p>&copy; {new Date().getFullYear()} Salima Naim. All rights reserved.</p>
            <p className="mt-1">Crafted with passion and modern web technologies</p>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in { 
          from { opacity: 0; transform: translateY(20px); } 
          to { opacity: 1; transform: translateY(0); } 
        }
        @keyframes fade-in-up { 
          from { opacity: 0; transform: translateY(25px); } 
          to { opacity: 1; transform: translateY(0); } 
        }
        
        .animate-fade-in { 
          animation: fade-in 0.8s ease-out forwards; 
        }
        .animate-fade-in-up { 
          animation: fade-in-up 0.6s ease-out forwards; 
        }
      `}</style>
    </footer>
  );
}