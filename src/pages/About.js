import React, { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { BookOpen, Award, GraduationCap, CheckCircle } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export default function About() {
  const { t } = useTranslation();
  const { isDark } = useTheme();
  const [hoveredCard, setHoveredCard] = useState(null);
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  
  const quickFacts = [
    { 
      label: t('about.quickFactsLabels.engineeringDegree'), 
      value: t('about.quickFacts.engineeringDegree'),
      icon: GraduationCap,
      color: 'sky'
    },
    { 
      label: t('about.quickFactsLabels.diploma'), 
      value: t('about.quickFacts.diploma'),
      icon: Award,
      color: 'purple'
    },
    { 
      label: t('about.quickFactsLabels.baccalaureate'), 
      value: t('about.quickFacts.baccalaureate'),
      icon: BookOpen,
      color: 'pink'
    }
  ];

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
      id="about" 
      className={`py-16 px-6 flex items-center justify-center relative overflow-hidden transition-colors duration-300 ${
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
        isDark ? 'bg-purple-500/10' : 'bg-purple-500/10'
      }`} />
      <div className={`absolute top-1/2 left-1/3 w-48 h-48 rounded-full blur-3xl pointer-events-none transition-all duration-300 ${
        isDark ? 'bg-pink-500/10' : 'bg-pink-500/10'
      }`} />

      <div className="max-w-4xl w-full relative z-10">
        {/* Header avec le même style que Home et Contact */}
        <div className={`mb-12 transition-all duration-700 ${
          isVisible ? 'animate-fade-in' : 'opacity-0 translate-y-8'
        }`}>
          <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r ${
            isDark 
              ? 'from-sky-300 via-purple-300 to-pink-300' 
              : 'from-indigo-600 via-purple-600 to-pink-600'
          }`}>
            {t('about.title')}
          </h2>
          <div className={`w-24 h-1 bg-gradient-to-r rounded-full ${
            isDark 
              ? 'from-sky-400 via-purple-400 to-pink-400' 
              : 'from-indigo-500 via-purple-500 to-pink-500'
          }`} />
        </div>

        {/* Main content grid */}
        <div className="grid md:grid-cols-3 gap-6 items-start">
          {/* Left: Description */}
          <div className={`md:col-span-2 transition-all duration-700 delay-200 ${
            isVisible ? 'animate-fade-in-left' : 'opacity-0 -translate-x-8'
          }`}>
            <div className="space-y-4 pr-0 md:pr-6">
              {/* Paragraphe avec police plus petite comme les quick facts */}
              <p className={`text-sm md:text-base leading-relaxed transition-colors duration-300 ${
                isDark ? 'text-slate-300' : 'text-gray-700'
              }`}>
                {t('about.description')}
              </p>

              {/* Developer trace */}
              <div className="mt-6 space-y-2">
                {['Software Development', 'Artificial Intelligence', 'DevOps & Cloud'].map((skill, i) => (
                  <div
                    key={i}
                    className={`flex items-center gap-3 group transition-colors duration-300 ${
                      isDark ? 'text-slate-300' : 'text-gray-600'
                    }`}
                  >
                    <CheckCircle className={`w-4 h-4 transition-colors duration-300 ${
                      isDark 
                        ? 'text-sky-400 group-hover:text-pink-400' 
                        : 'text-indigo-600 group-hover:text-purple-600'
                    }`} />
                    <span className={`font-medium transition-colors duration-300 text-sm ${
                      isDark 
                        ? 'group-hover:text-slate-100' 
                        : 'group-hover:text-gray-900'
                    }`}>
                      {skill}
                    </span>
                    <div className={`flex-1 h-px bg-gradient-to-r transition-opacity duration-300 ml-2 ${
                      isDark 
                        ? 'from-sky-300 via-purple-300 to-transparent' 
                        : 'from-indigo-400 via-purple-400 to-transparent'
                    } opacity-0 group-hover:opacity-100`} />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Quick Facts - Style unifié */}
          <div className="space-y-3">
            {quickFacts.map((fact, idx) => {
              const IconComponent = fact.icon;
              const colorMap = {
                sky: { 
                  dark: { 
                    bg: 'from-slate-900/50 to-slate-800/50', 
                    border: 'border-sky-400/50', 
                    icon: 'text-sky-400', 
                    line: 'bg-sky-400', 
                    hover: 'hover:border-sky-300 hover:bg-sky-500/10',
                    text: 'text-slate-200'
                  },
                  light: { 
                    bg: 'from-white/80 to-gray-100/80', 
                    border: 'border-indigo-300', 
                    icon: 'text-indigo-600', 
                    line: 'bg-indigo-500', 
                    hover: 'hover:border-indigo-400 hover:bg-indigo-50/80',
                    text: 'text-gray-800'
                  }
                },
                purple: { 
                  dark: { 
                    bg: 'from-slate-900/50 to-slate-800/50', 
                    border: 'border-purple-400/50', 
                    icon: 'text-purple-400', 
                    line: 'bg-purple-400', 
                    hover: 'hover:border-purple-300 hover:bg-purple-500/10',
                    text: 'text-slate-200'
                  },
                  light: { 
                    bg: 'from-white/80 to-gray-100/80', 
                    border: 'border-purple-300', 
                    icon: 'text-purple-600', 
                    line: 'bg-purple-500', 
                    hover: 'hover:border-purple-400 hover:bg-purple-50/80',
                    text: 'text-gray-800'
                  }
                },
                pink: { 
                  dark: { 
                    bg: 'from-slate-900/50 to-slate-800/50', 
                    border: 'border-pink-400/50', 
                    icon: 'text-pink-400', 
                    line: 'bg-pink-400', 
                    hover: 'hover:border-pink-300 hover:bg-pink-500/10',
                    text: 'text-slate-200'
                  },
                  light: { 
                    bg: 'from-white/80 to-gray-100/80', 
                    border: 'border-pink-300', 
                    icon: 'text-pink-600', 
                    line: 'bg-pink-500', 
                    hover: 'hover:border-pink-400 hover:bg-pink-50/80',
                    text: 'text-gray-800'
                  }
                }
              };
              const colors = isDark ? colorMap[fact.color].dark : colorMap[fact.color].light;

              return (
                <div
                  key={idx}
                  onMouseEnter={() => setHoveredCard(idx)}
                  onMouseLeave={() => setHoveredCard(null)}
                  className="group relative transition-all duration-700"
                  style={{ 
                    transitionDelay: `${idx * 100}ms`
                  }}
                >
                  {/* Animated line on hover */}
                  <div className={`absolute -left-3 top-0 w-1 h-full ${colors.line} rounded-full scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-top`} />

                  <div className={`transition-all duration-700 ${
                    isVisible ? 'animate-fade-in-right' : 'opacity-0 translate-x-8'
                  }`}>
                    <div className={`p-4 rounded-lg border backdrop-blur-sm ${colors.border} ${colors.hover} bg-gradient-to-br ${colors.bg} hover:shadow-lg transition-all duration-300 ${
                      isDark ? 'shadow-lg' : 'shadow-md'
                    }`}>
                      <div className="flex items-center gap-2 mb-2">
                        <div className={`p-1.5 rounded-md transition-colors duration-300 ${
                          isDark ? 'bg-slate-800/70' : 'bg-white/50'
                        } ${colors.icon}`}>
                          <IconComponent className="w-4 h-4" />
                        </div>
                        <h4 className={`font-bold transition-colors duration-300 text-sm ${colors.text}`}>
                          {fact.label}
                        </h4>
                      </div>
                      <p className={`text-xs font-medium transition-colors duration-300 ${
                        isDark ? 'text-slate-300' : 'text-gray-600'
                      }`}>
                        {fact.value}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Code snippet styling - TOUJOURS SOMBRE */}
        <div className={`mt-12 p-4 rounded-lg border backdrop-blur-sm transition-all duration-700 ${
          isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'
        } bg-gradient-to-br from-slate-900/90 to-slate-800/90 border-purple-500/30 text-slate-200 shadow-lg`}>
          <div className="flex items-center gap-2 mb-3">
            <div className="w-2 h-2 rounded-full bg-sky-400" />
            <div className="w-2 h-2 rounded-full bg-purple-400" />
            <div className="w-2 h-2 rounded-full bg-pink-400" />
          </div>
          <pre className="font-mono text-xs md:text-sm text-slate-300">
            {`> whoami
developer || designer
> cat interests.txt
Full-stack | IA | DevOps
> echo "Let's build something amazing!" 🚀`}
          </pre>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in { 
          from { opacity: 0; transform: translateY(30px); } 
          to { opacity: 1; transform: translateY(0); } 
        }
        @keyframes fade-in-left { 
          from { opacity: 0; transform: translateX(-30px); } 
          to { opacity: 1; transform: translateX(0); } 
        }
        @keyframes fade-in-right { 
          from { opacity: 0; transform: translateX(30px); } 
          to { opacity: 1; transform: translateX(0); } 
        }
        @keyframes fade-in-up { 
          from { opacity: 0; transform: translateY(20px); } 
          to { opacity: 1; transform: translateY(0); } 
        }
        
        .animate-fade-in { 
          animation: fade-in 0.8s ease-out forwards; 
        }
        .animate-fade-in-left { 
          animation: fade-in-left 0.8s ease-out forwards; 
        }
        .animate-fade-in-right { 
          animation: fade-in-right 0.8s ease-out forwards; 
        }
        .animate-fade-in-up { 
          animation: fade-in-up 0.6s ease-out forwards; 
        }
      `}</style>
    </section>
  );
}