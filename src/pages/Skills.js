import React, { useRef, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Code2, Database, Wrench, Layout, Zap, Package } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export default function Skills() {
  const { t } = useTranslation();
  const { isDark } = useTheme();
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  const skillsData = [
    {
      category: t('skills.programmingLanguages.title'),
      items: ['Java', 'Python', 'PHP', 'C#', 'C++', 'JavaScript (ES6)'],
      icon: Code2,
      color: 'sky'
    },
    {
      category: t('skills.frameworks.title'),
      backendItems: ['Spring', 'Django', 'ASP.NET', 'Symfony', 'Laravel', 'Flask'],
      frontendItems: ['ReactJS', 'HTML', 'CSS', 'Bootstrap', 'TailwindCSS'],
      icon: Package,
      color: 'purple'
    },
    {
      category: t('skills.databases.title'),
      items: ['MySQL', 'SQL Server', 'Oracle (PL/SQL)', 'MongoDB (NoSQL)'],
      icon: Database,
      color: 'pink'
    },
    {
      category: t('skills.tools.title'),
      leftItems: ['IntelliJ IDEA', 'Android Studio', 'Visual Studio', 'VS Code'],
      rightItems: ['Git', 'GitHub', 'GitLab', 'SonarQube'],
      icon: Wrench,
      color: 'cyan'
    },
    {
      category: t('skills.modeling.title'),
      items: ['UML', 'GanttProject', 'Jira', 'Agile (Scrum)'],
      icon: Layout,
      color: 'blue'
    },
    {
      category: t('skills.os.title'),
      items: ['Windows Server', 'Linux/Unix', 'macOS'],
      icon: Zap,
      color: 'rose'
    }
  ];

  const colorMap = {
    sky: { 
      dark: { bg: 'from-slate-900/50 to-slate-800/50', border: 'border-sky-400/50', icon: 'text-sky-400', hover: 'hover:border-sky-300 hover:bg-sky-500/10', shadow: 'shadow-sky-500/20' },
      light: { bg: 'from-white/80 to-gray-100/80', border: 'border-indigo-300', icon: 'text-indigo-600', hover: 'hover:border-indigo-400 hover:bg-indigo-50/80', shadow: 'shadow-indigo-500/20' }
    },
    purple: { 
      dark: { bg: 'from-slate-900/50 to-slate-800/50', border: 'border-purple-400/50', icon: 'text-purple-400', hover: 'hover:border-purple-300 hover:bg-purple-500/10', shadow: 'shadow-purple-500/20' },
      light: { bg: 'from-white/80 to-gray-100/80', border: 'border-purple-300', icon: 'text-purple-600', hover: 'hover:border-purple-400 hover:bg-purple-50/80', shadow: 'shadow-purple-500/20' }
    },
    pink: { 
      dark: { bg: 'from-slate-900/50 to-slate-800/50', border: 'border-pink-400/50', icon: 'text-pink-400', hover: 'hover:border-pink-300 hover:bg-pink-500/10', shadow: 'shadow-pink-500/20' },
      light: { bg: 'from-white/80 to-gray-100/80', border: 'border-pink-300', icon: 'text-pink-600', hover: 'hover:border-pink-400 hover:bg-pink-50/80', shadow: 'shadow-pink-500/20' }
    },
    cyan: { 
      dark: { bg: 'from-slate-900/50 to-slate-800/50', border: 'border-cyan-400/50', icon: 'text-cyan-400', hover: 'hover:border-cyan-300 hover:bg-cyan-500/10', shadow: 'shadow-cyan-500/20' },
      light: { bg: 'from-white/80 to-gray-100/80', border: 'border-cyan-400', icon: 'text-cyan-600', hover: 'hover:border-cyan-500 hover:bg-cyan-50/80', shadow: 'shadow-cyan-500/20' }
    },
    blue: { 
      dark: { bg: 'from-slate-900/50 to-slate-800/50', border: 'border-blue-400/50', icon: 'text-blue-400', hover: 'hover:border-blue-300 hover:bg-blue-500/10', shadow: 'shadow-blue-500/20' },
      light: { bg: 'from-white/80 to-gray-100/80', border: 'border-blue-400', icon: 'text-blue-600', hover: 'hover:border-blue-500 hover:bg-blue-50/80', shadow: 'shadow-blue-500/20' }
    },
    rose: { 
      dark: { bg: 'from-slate-900/50 to-slate-800/50', border: 'border-rose-400/50', icon: 'text-rose-400', hover: 'hover:border-rose-300 hover:bg-rose-500/10', shadow: 'shadow-rose-500/20' },
      light: { bg: 'from-white/80 to-gray-100/80', border: 'border-rose-400', icon: 'text-rose-600', hover: 'hover:border-rose-500 hover:bg-rose-50/80', shadow: 'shadow-rose-500/20' }
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
    <section 
      ref={sectionRef}
      id="skills" 
      className={`py-16 px-6 flex flex-col items-center justify-center relative overflow-hidden transition-colors duration-300 ${
        isDark 
          ? 'bg-gradient-to-b from-slate-950 via-slate-900 to-slate-800' 
          : 'bg-gradient-to-b from-slate-100 via-slate-50 to-slate-200'
      }`}
    >
      {/* Decorative elements */}
      <div className={`absolute top-10 right-20 w-80 h-80 rounded-full blur-3xl pointer-events-none transition-all duration-300 ${
        isDark ? 'bg-purple-500/10' : 'bg-purple-500/10'
      }`} />
      <div className={`absolute bottom-10 left-20 w-80 h-80 rounded-full blur-3xl pointer-events-none transition-all duration-300 ${
        isDark ? 'bg-sky-500/10' : 'bg-indigo-500/10'
      }`} />
      <div className={`absolute top-1/3 right-1/3 w-64 h-64 rounded-full blur-3xl pointer-events-none transition-all duration-300 ${
        isDark ? 'bg-pink-500/10' : 'bg-pink-500/10'
      }`} />

      <div className="max-w-6xl w-full relative z-10">
        {/* Header */}
        <div className={`text-center mb-12 transition-all duration-700 ${
          isVisible ? 'animate-fade-in' : 'opacity-0 translate-y-8'
        }`}>
          <h2 className={`text-4xl md:text-5xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r ${
            isDark 
              ? 'from-sky-300 via-purple-300 to-pink-300' 
              : 'from-indigo-600 via-purple-600 to-pink-600'
          }`}>
            {t('skills.title')}
          </h2>
          <div className={`w-24 h-1 bg-gradient-to-r rounded-full mx-auto ${
            isDark 
              ? 'from-sky-400 via-purple-400 to-pink-400' 
              : 'from-indigo-500 via-purple-500 to-pink-500'
          }`} />
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {skillsData.map((skill, idx) => {
            const IconComponent = skill.icon;
            const colors = isDark ? colorMap[skill.color].dark : colorMap[skill.color].light;
            const hasTwoColumns = skill.backendItems || skill.leftItems;

            return (
              <div
                key={idx}
                className={`group transition-all duration-700 h-full ${
                  isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'
                }`}
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <div className={`relative p-4 rounded-xl border backdrop-blur-sm ${colors.border} ${colors.hover} bg-gradient-to-br ${colors.bg} hover:shadow-lg transition-all duration-300 overflow-hidden h-full flex flex-col ${
                  isDark ? 'shadow-lg' : 'shadow-md'
                }`}>
                  {/* Icon and Title */}
                  <div className="flex items-center gap-3 mb-4 relative z-10">
                    <div className={`p-2 rounded-lg transition-colors duration-300 ${
                      isDark ? 'bg-slate-800/70' : 'bg-white/50'
                    } ${colors.icon}`}>
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <h3 className={`text-base font-bold transition-colors duration-300 ${
                      isDark ? 'text-slate-200' : 'text-gray-800'
                    }`}>
                      {skill.category}
                    </h3>
                  </div>

                  {/* Items - Layout conditionnel pour les cartes avec deux colonnes */}
                  {hasTwoColumns ? (
                    <div className="relative z-10 flex-grow">
                      {/* Pour Frameworks */}
                      {skill.backendItems && (
                        <div className="grid grid-cols-2 gap-4">
                          {/* Colonne Back-end */}
                          <div>
                            <h4 className={`text-xs font-semibold mb-2 transition-colors duration-300 ${
                              isDark ? 'text-slate-400' : 'text-gray-500'
                            }`}>
                              Back-end
                            </h4>
                            <div className="space-y-1">
                              {skill.backendItems.map((item, i) => (
                                <div key={i} className="flex items-start gap-2">
                                  <div className={`w-1.5 h-1.5 rounded-full flex-shrink-0 mt-1.5 ${colors.icon}`} />
                                  <p className={`text-xs leading-relaxed transition-colors duration-300 ${
                                    isDark ? 'text-slate-300' : 'text-gray-600'
                                  }`}>
                                    {item}
                                  </p>
                                </div>
                              ))}
                            </div>
                          </div>
                          
                          {/* Colonne Front-end */}
                          <div>
                            <h4 className={`text-xs font-semibold mb-2 transition-colors duration-300 ${
                              isDark ? 'text-slate-400' : 'text-gray-500'
                            }`}>
                              Front-end
                            </h4>
                            <div className="space-y-1">
                              {skill.frontendItems.map((item, i) => (
                                <div key={i} className="flex items-start gap-2">
                                  <div className={`w-1.5 h-1.5 rounded-full flex-shrink-0 mt-1.5 ${colors.icon}`} />
                                  <p className={`text-xs leading-relaxed transition-colors duration-300 ${
                                    isDark ? 'text-slate-300' : 'text-gray-600'
                                  }`}>
                                    {item}
                                  </p>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      )}

                      {/* Pour Tools */}
                      {skill.leftItems && (
                        <div className="grid grid-cols-2 gap-4">
                          {/* Colonne gauche */}
                          <div className="space-y-1">
                            {skill.leftItems.map((item, i) => (
                              <div key={i} className="flex items-start gap-2">
                                <div className={`w-1.5 h-1.5 rounded-full flex-shrink-0 mt-1.5 ${colors.icon}`} />
                                <p className={`text-xs leading-relaxed transition-colors duration-300 ${
                                  isDark ? 'text-slate-300' : 'text-gray-600'
                                }`}>
                                  {item}
                                </p>
                              </div>
                            ))}
                          </div>
                          
                          {/* Colonne droite */}
                          <div className="space-y-1">
                            {skill.rightItems.map((item, i) => (
                              <div key={i} className="flex items-start gap-2">
                                <div className={`w-1.5 h-1.5 rounded-full flex-shrink-0 mt-1.5 ${colors.icon}`} />
                                <p className={`text-xs leading-relaxed transition-colors duration-300 ${
                                  isDark ? 'text-slate-300' : 'text-gray-600'
                                }`}>
                                  {item}
                                </p>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  ) : (
                    /* Layout normal pour les autres cartes */
                    <div className="space-y-2 relative z-10 flex-grow">
                      {skill.items.map((item, i) => (
                        <div key={i} className="flex items-start gap-2">
                          <div className={`w-1.5 h-1.5 rounded-full flex-shrink-0 mt-1.5 ${colors.icon}`} />
                          <p className={`text-xs leading-relaxed transition-colors duration-300 ${
                            isDark ? 'text-slate-300' : 'text-gray-600'
                          }`}>
                            {item}
                          </p>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Hover effect line */}
                  <div className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-transparent ${isDark ? 
                    skill.color === 'sky' ? 'via-sky-400' :
                    skill.color === 'purple' ? 'via-purple-400' :
                    skill.color === 'pink' ? 'via-pink-400' :
                    skill.color === 'cyan' ? 'via-cyan-400' :
                    skill.color === 'blue' ? 'via-blue-400' : 'via-rose-400'
                  : 
                    skill.color === 'sky' ? 'via-indigo-500' :
                    skill.color === 'purple' ? 'via-purple-500' :
                    skill.color === 'pink' ? 'via-pink-500' :
                    skill.color === 'cyan' ? 'via-cyan-500' :
                    skill.color === 'blue' ? 'via-blue-500' : 'via-rose-500'
                  } to-transparent rounded-full w-0 group-hover:w-full transition-all duration-500 mt-4`} />
                </div>
              </div>
            );
          })}
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