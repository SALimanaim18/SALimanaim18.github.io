import React, { useRef, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Code2, Database, Wrench, Layout, Zap, Package } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { Brain, ServerCog } from "lucide-react";

export default function Skills() {
  const { t } = useTranslation();
  const { isDark } = useTheme();
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
const mode = isDark ? "dark" : "light";
  const skillsData = [
  {
    category: t('skills.programmingLanguages.title'),
    items: ['Java', 'Python', 'PHP', 'C#', 'C++', 'JavaScript'],
    icon: Code2,
    color: 'sky'
  },
  {
    category: t('skills.frameworks.title'),
    backendItems: ['Spring Boot', 'Django', 'Symfony', 'Laravel', 'Flask', 'Node.js', 'ASP.NET'],
    frontendItems: ['React.js', 'HTML', 'CSS', 'Bootstrap', 'TailwindCSS'],
    icon: Package,
    color: 'purple'
  },
  {
    category: t('skills.databases.title'),
    items: ['MySQL', 'SQL Server', 'Oracle (PL/SQL)', 'MongoDB (NoSQL)', 'PostgreSQL', 'Firebase'],
    icon: Database,
    color: 'pink'
  },
  {
    category: t('skills.tools.title'),
    leftItems: ['IntelliJ IDEA', 'Android Studio', 'Visual Studio', 'VS Code','Eclipse','PytCharm' ],
    rightItems: ['Git', 'GitHub', 'GitLab'],
    icon: Wrench,
    color: 'cyan'
  },
  {
 category: t('Intelligence Artificielle'),
      leftItems: [
      'Machine Learning',
      'Deep Learning',
      'Data mining',
      'TensorFlow',
      'Keras',
      'NumPy'
    
    ],
     rightItems:[  
      'Pandas',
      'Matplotlib',
      'Jupyter Notebook',
      'Google Colab',
      'Scikit-learn'],
    icon: Brain,
    color: 'rose'
  },
  {
    category: t("DevOps"),
     leftItems:[
      'Docker / Docker Compose',
      'Kubernetes',
      'Jenkins',
      'GitLab CI/CD'
    ],
    rightItems:[ 'SonarQube',
      'Grafana',
      'Kibana',
      'CI/CD Pipelines'],
    icon: ServerCog,
    color: 'yellow'
  },
  {
    category: t('skills.modeling.title'),
    items: ['UML', 'GanttProject', 'Jira', 'Agile (Scrum)', 'kaizen'],
    icon: Layout,
    color: 'blue'
  },
  {
    category: t('skills.os.title'),
    items: ['Linux/Unix', 'Windows Server'],
    icon: Zap,
    color: 'green'
  }
];


  const colorMap = {
     sky: {
    light: {
      border: "border-sky-300",
      hover: "hover:bg-sky-100/40",
      bg: "from-sky-50 to-white",
      icon: "text-sky-500"
    },
    dark: {
      border: "border-sky-700/50",
      hover: "hover:bg-sky-800/40",
      bg: "from-slate-900 to-slate-800",
      icon: "text-sky-300"
    }
  },

  purple: {
    light: {
      border: "border-purple-300",
      hover: "hover:bg-purple-100/40",
      bg: "from-purple-50 to-white",
      icon: "text-purple-500"
    },
    dark: {
      border: "border-purple-700/50",
      hover: "hover:bg-purple-800/40",
      bg: "from-slate-900 to-slate-800",
      icon: "text-purple-300"
    }
  },

  pink: {
    light: {
      border: "border-pink-300",
      hover: "hover:bg-pink-100/40",
      bg: "from-pink-50 to-white",
      icon: "text-pink-500"
    },
    dark: {
      border: "border-pink-700/50",
      hover: "hover:bg-pink-800/40",
      bg: "from-slate-900 to-slate-800",
      icon: "text-pink-300"
    }
  },

  cyan: {
    light: {
      border: "border-cyan-300",
      hover: "hover:bg-cyan-100/40",
      bg: "from-cyan-50 to-white",
      icon: "text-cyan-500"
    },
    dark: {
      border: "border-cyan-700/50",
      hover: "hover:bg-cyan-800/40",
      bg: "from-slate-900 to-slate-800",
      icon: "text-cyan-300"
    }
  },

  blue: {
    light: {
      border: "border-blue-300",
      hover: "hover:bg-blue-100/40",
      bg: "from-blue-50 to-white",
      icon: "text-blue-500"
    },
    dark: {
      border: "border-blue-700/50",
      hover: "hover:bg-blue-800/40",
      bg: "from-slate-900 to-slate-800",
      icon: "text-blue-300"
    }
  },

  // ✅ NEW COLORS YOU ADDED
  rose: {
    light: {
      border: "border-rose-300",
      hover: "hover:bg-rose-100/40",
      bg: "from-rose-50 to-white",
      icon: "text-rose-500"
    },
    dark: {
      border: "border-rose-700/50",
      hover: "hover:bg-rose-800/40",
      bg: "from-slate-900 to-slate-800",
      icon: "text-rose-300"
    }
  },

  yellow: {
    light: {
      border: "border-yellow-300",
      hover: "hover:bg-yellow-100/40",
      bg: "from-yellow-50 to-white",
      icon: "text-yellow-500"
    },
    dark: {
      border: "border-yellow-700/50",
      hover: "hover:bg-yellow-800/40",
      bg: "from-slate-900 to-slate-800",
      icon: "text-yellow-300"
    }
  },

  green: {
    light: {
      border: "border-green-300",
      hover: "hover:bg-green-100/40",
      bg: "from-green-50 to-white",
      icon: "text-green-500"
    },
    dark: {
      border: "border-green-700/50",
      hover: "hover:bg-green-800/40",
      bg: "from-slate-900 to-slate-800",
      icon: "text-green-300"
    }
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
        {/* ===== HEADER ===== */}
<div className={`text-center mb-12 transition-all duration-700 ${
  isVisible ? 'animate-fade-in' : 'opacity-0 translate-y-8'
}`}>

  {/* Badge (comme Contact / Projects) */}
  <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full backdrop-blur-sm border mb-4 transition-all duration-300 ${
    isDark 
      ? 'bg-purple-500/20 border-purple-400/50' 
      : 'bg-purple-100/80 border-purple-300'
  }`}>
    <span className={`text-xs font-medium ${
      isDark ? 'text-purple-200' : 'text-purple-700'
    }`}>
      My Expertise
    </span>
  </div>

  {/* Titre Skills */}
  <h2
    className={`text-3xl md:text-4xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r ${
      isDark 
        ? 'from-sky-300 via-purple-300 to-pink-300' 
        : 'from-indigo-600 via-purple-600 to-pink-600'
    }`}
  >
    {t('skills.title')}
  </h2>

  {/* Trait de séparation */}
  <div
    className={`w-28 h-1 bg-gradient-to-r rounded-full mx-auto mb-6 ${
      isDark
        ? 'from-sky-400 via-purple-400 to-pink-400'
        : 'from-indigo-500 via-purple-500 to-pink-500'
    }`}
  />
</div>


        {/* Skills Grid */}
<div className="grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5">
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