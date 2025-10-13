import React, { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import Navbar from "../components/Navbar";
import { Github, ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

export default function ProjectsPage() {
  const { t, i18n } = useTranslation();
  const { isDark } = useTheme();
  const projectsList = t("projects.list", { returnObjects: true });
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(0);
  const [currentImage, setCurrentImage] = useState(0);
  
  // Référence pour suivre le nom du projet sélectionné
  const selectedProjectNameRef = useRef("");

  // Utiliser l'index pour sélectionner le projet
  const selectedProject = projectsList[selectedProjectIndex] || projectsList[0];

  // Mettre à jour la référence du nom du projet quand la sélection change
  useEffect(() => {
    if (selectedProject && selectedProject.name) {
      selectedProjectNameRef.current = selectedProject.name;
    }
  }, [selectedProject]);

  // Gérer le changement de langue en conservant le projet sélectionné
  useEffect(() => {
    if (projectsList.length > 0 && selectedProjectNameRef.current) {
      // Trouver l'index du projet avec le même nom dans la nouvelle langue
      const newIndex = projectsList.findIndex(
        project => project.name === selectedProjectNameRef.current
      );
      
      if (newIndex !== -1) {
        setSelectedProjectIndex(newIndex);
      } else {
        // Si le projet n'est pas trouvé (peut arriver si les projets diffèrent entre langues)
        // On garde le même index si possible, sinon on revient à 0
        setSelectedProjectIndex(selectedProjectIndex < projectsList.length ? selectedProjectIndex : 0);
      }
    }
  }, [i18n.language, projectsList]);

  // Alternative plus simple : garder le même index si possible
  useEffect(() => {
    // Si l'index actuel est hors limites après changement de langue, revenir à 0
    if (selectedProjectIndex >= projectsList.length) {
      setSelectedProjectIndex(0);
      setCurrentImage(0);
    }
  }, [projectsList.length, selectedProjectIndex]);

  useEffect(() => {
    if (selectedProject.mediaType === "images" && selectedProject.mediaUrls) {
      const interval = setInterval(() => {
        setCurrentImage((prev) => (prev + 1) % selectedProject.mediaUrls.length);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [selectedProject]);

  const colorMap = {
    0: 'sky',
    1: 'purple',
    2: 'pink',
    3: 'cyan',
    4: 'blue',
    5: 'rose'
  };

  const colors = {
    sky: { 
      dark: { bg: 'from-slate-900/50 to-slate-800/50', border: 'border-sky-400/50', icon: 'text-sky-400', hover: 'hover:bg-sky-500/20', text: 'text-slate-100' },
      light: { bg: 'from-white/80 to-gray-100/80', border: 'border-indigo-300', icon: 'text-indigo-600', hover: 'hover:bg-indigo-50/80', text: 'text-gray-800' }
    },
    purple: { 
      dark: { bg: 'from-slate-900/50 to-slate-800/50', border: 'border-purple-400/50', icon: 'text-purple-400', hover: 'hover:bg-purple-500/20', text: 'text-slate-100' },
      light: { bg: 'from-white/80 to-gray-100/80', border: 'border-purple-300', icon: 'text-purple-600', hover: 'hover:bg-purple-50/80', text: 'text-gray-800' }
    },
    pink: { 
      dark: { bg: 'from-slate-900/50 to-slate-800/50', border: 'border-pink-400/50', icon: 'text-pink-400', hover: 'hover:bg-pink-500/20', text: 'text-slate-100' },
      light: { bg: 'from-white/80 to-gray-100/80', border: 'border-pink-300', icon: 'text-pink-600', hover: 'hover:bg-pink-50/80', text: 'text-gray-800' }
    },
    cyan: { 
      dark: { bg: 'from-slate-900/50 to-slate-800/50', border: 'border-cyan-400/50', icon: 'text-cyan-400', hover: 'hover:bg-cyan-500/20', text: 'text-slate-100' },
      light: { bg: 'from-white/80 to-gray-100/80', border: 'border-cyan-400', icon: 'text-cyan-600', hover: 'hover:bg-cyan-50/80', text: 'text-gray-800' }
    },
    blue: { 
      dark: { bg: 'from-slate-900/50 to-slate-800/50', border: 'border-blue-400/50', icon: 'text-blue-400', hover: 'hover:bg-blue-500/20', text: 'text-slate-100' },
      light: { bg: 'from-white/80 to-gray-100/80', border: 'border-blue-400', icon: 'text-blue-600', hover: 'hover:bg-blue-50/80', text: 'text-gray-800' }
    },
    rose: { 
      dark: { bg: 'from-slate-900/50 to-slate-800/50', border: 'border-rose-400/50', icon: 'text-rose-400', hover: 'hover:bg-rose-500/20', text: 'text-slate-100' },
      light: { bg: 'from-white/80 to-gray-100/80', border: 'border-rose-400', icon: 'text-rose-600', hover: 'hover:bg-rose-50/80', text: 'text-gray-800' }
    }
  };

  return (
    <div className={`min-h-screen relative overflow-hidden transition-colors duration-300 ${
      isDark 
        ? 'bg-gradient-to-b from-slate-950 via-slate-900 to-slate-800' 
        : 'bg-gradient-to-b from-slate-100 via-slate-50 to-slate-200'
    }`}>
      {/* Decorative elements */}
      <div className={`absolute top-20 right-20 w-96 h-96 rounded-full blur-3xl pointer-events-none transition-all duration-300 ${
        isDark ? 'bg-purple-500/10' : 'bg-purple-500/5'
      }`} />
      <div className={`absolute bottom-20 left-20 w-96 h-96 rounded-full blur-3xl pointer-events-none transition-all duration-300 ${
        isDark ? 'bg-sky-500/10' : 'bg-indigo-500/5'
      }`} />

      <Navbar />

      <div className="flex pt-32 px-6 max-w-7xl mx-auto gap-6 pb-20">
        {/* Sidebar - Fixed */}
        <aside className={`fixed left-6 top-32 w-80 backdrop-blur-xl border shadow-lg p-6 h-[calc(100vh-8rem)] rounded-2xl overflow-y-auto z-40 transition-all duration-300 ${
          isDark 
            ? 'bg-slate-900/50 border-purple-500/30' 
            : 'bg-white/80 border-indigo-200/50'
        }`}>
          <h2 className={`text-xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r ${
            isDark 
              ? 'from-sky-300 via-purple-300 to-pink-300' 
              : 'from-indigo-600 via-purple-600 to-pink-600'
          }`}>
            {t("projects.title")}
          </h2>
          <ul className="space-y-3">
            {projectsList.map((project, idx) => {
              const color = isDark ? colors[colorMap[idx] || 'sky'].dark : colors[colorMap[idx] || 'sky'].light;
              const isSelected = selectedProjectIndex === idx;

              return (
                <li key={idx}>
                  <button
                    onClick={() => {
                      setSelectedProjectIndex(idx);
                      setCurrentImage(0);
                      selectedProjectNameRef.current = project.name;
                    }}
                    className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-300 ${
                      isSelected
                        ? `bg-gradient-to-br ${color.bg} border ${color.border} font-semibold ${color.text}`
                        : `${isDark ? 'text-slate-400 hover:text-slate-200' : 'text-gray-600 hover:text-gray-800'} ${color.hover}`
                    }`}
                  >
                    <div className="font-semibold text-sm">{project.name}</div>
                    <div className={`text-xs mt-1 transition-colors duration-300 ${
                      isSelected 
                        ? isDark ? 'text-slate-300' : 'text-gray-600'
                        : isDark ? 'text-slate-500' : 'text-gray-500'
                    }`}>
                      {project.technologies}
                    </div>
                  </button>
                </li>
              );
            })}
          </ul>
        </aside>

        <main className="flex-1 flex justify-center ml-96">
          <div className={`backdrop-blur-xl border rounded-3xl shadow-2xl p-10 w-full max-w-4xl flex flex-col gap-8 relative transition-all duration-300 ${
            isDark 
              ? 'bg-slate-900/50 border-purple-500/30' 
              : 'bg-white/80 border-indigo-200/50'
          }`}>
            {/* GitHub Link */}
            {selectedProject.github && (
              <a
                href={selectedProject.github}
                target="_blank"
                rel="noopener noreferrer"
                className={`absolute top-6 right-6 flex items-center gap-2 font-semibold transition-colors group ${
                  isDark 
                    ? 'text-slate-300 hover:text-sky-300' 
                    : 'text-gray-700 hover:text-indigo-600'
                }`}
              >
                <Github className={`w-5 h-5 group-hover:scale-110 transition-transform ${
                  isDark ? 'group-hover:text-sky-400' : 'group-hover:text-indigo-600'
                }`} />
                <span className="text-sm">View Project on GitHub</span>
              </a>
            )}

            {/* Title */}
            <div>
              <h3 className={`text-2xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r mb-4 ${
                isDark 
                  ? 'from-sky-300 via-purple-300 to-pink-300' 
                  : 'from-indigo-600 via-purple-600 to-pink-600'
              }`}>
                {selectedProject.name}
              </h3>
              <p className={`font-medium transition-colors duration-300 text-sm ${
                isDark ? 'text-slate-300' : 'text-gray-700'
              }`}>
                <span className={`transition-colors duration-300 ${
                  isDark ? 'text-purple-300' : 'text-purple-600'
                }`}>
                  {t("projects.technologies")}:
                </span>{" "}
                <span className={`transition-colors duration-300 ${
                  isDark ? 'text-slate-400' : 'text-gray-600'
                }`}>
                  {selectedProject.technologies}
                </span>
              </p>
            </div>

            {/* Description */}
            <p className={`text-sm md:text-base leading-relaxed transition-colors duration-300 ${
              isDark ? 'text-slate-300' : 'text-gray-700'
            }`}>
              {selectedProject.description}
            </p>

            {/* Media Section */}
            <div className={`w-full rounded-2xl overflow-hidden flex items-center justify-center relative min-h-[400px] border transition-all duration-300 ${
              isDark 
                ? 'bg-slate-800/50 border-purple-500/20' 
                : 'bg-gray-100/50 border-indigo-200/30'
            }`}>
              {selectedProject.mediaType === "images" && selectedProject.mediaUrls && selectedProject.mediaUrls.length > 0 ? (
                <>
                  <img
                    src={process.env.PUBLIC_URL + '/' + selectedProject.mediaUrls[currentImage]}
                    alt={selectedProject.name}
                    className="w-full h-full object-cover transition-all duration-500"
                  />
                  {/* Navigation Buttons */}
                  <button
                    onClick={() => setCurrentImage((currentImage - 1 + selectedProject.mediaUrls.length) % selectedProject.mediaUrls.length)}
                    className={`absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full transition-all group ${
                      isDark 
                        ? 'bg-slate-900/70 hover:bg-slate-900/90 text-white' 
                        : 'bg-white/80 hover:bg-white text-gray-700 shadow-md'
                    }`}
                  >
                    <ChevronLeft className="w-6 h-6 group-hover:scale-110 transition-transform" />
                  </button>
                  <button
                    onClick={() => setCurrentImage((currentImage + 1) % selectedProject.mediaUrls.length)}
                    className={`absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full transition-all group ${
                      isDark 
                        ? 'bg-slate-900/70 hover:bg-slate-900/90 text-white' 
                        : 'bg-white/80 hover:bg-white text-gray-700 shadow-md'
                    }`}
                  >
                    <ChevronRight className="w-6 h-6 group-hover:scale-110 transition-transform" />
                  </button>
                  {/* Indicators */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                    {selectedProject.mediaUrls.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setCurrentImage(i)}
                        className={`w-2 h-2 rounded-full transition-all ${
                          i === currentImage 
                            ? isDark ? 'bg-sky-400 w-6' : 'bg-indigo-600 w-6'
                            : isDark ? 'bg-slate-500' : 'bg-gray-400'
                        }`}
                      />
                    ))}
                  </div>
                </>
              ) : selectedProject.mediaType === "video" && selectedProject.mediaUrl ? (
<video
  src={`/videos/${selectedProject.mediaUrl}`}
  controls
  className="rounded-xl max-w-full max-h-[500px] w-auto h-auto"
>
  Your browser does not support video playback.
</video>

                 
              ) : (
                <p className={`font-medium text-sm transition-colors duration-300 ${
                  isDark ? 'text-slate-500' : 'text-gray-500'
                }`}>
                  Demo unavailable
                </p>
              )}
            </div>
          </div>
        </main>
      </div>

      <style jsx>{`
        @keyframes fade-in { from { opacity: 0; } to { opacity: 1; } }
        .animate-fade-in { animation: fade-in 0.8s ease-out; }
      `}</style>
    </div>
  );
}