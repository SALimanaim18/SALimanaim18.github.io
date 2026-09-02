import React, { useState, useEffect, useRef } from "react"; 
import { useTranslation } from "react-i18next";
import Navbar from "../components/Navbar";
import { Github, X, Play, Ban } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

// Composant pour tronquer le texte avec View more / View less
function TruncatedText({ text, maxLines = 3, isDark }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="text-sm">
      <p
        className={`${
          !expanded ? `line-clamp-${maxLines} overflow-hidden` : ""
        } ${isDark ? "text-slate-300" : "text-gray-700"} text-justify`}
      >
        {text}
      </p>
      {text.split("\n").length > maxLines && (
        <button
          onClick={() => setExpanded(!expanded)}
          className="mt-1 text-blue-500 underline text-xs"
        >
          {expanded ? "View less" : "View more"}
        </button>
      )}
    </div>
  );
}

export default function ProjectsPage() {
  const { t } = useTranslation();
  const { isDark } = useTheme();

  const projectsList = t("projects.list", { returnObjects: true });
  const [openProject, setOpenProject] = useState(null);
  const [currentImage, setCurrentImage] = useState(0);
  const [maxHeight, setMaxHeight] = useState(0);
  const cardRefs = useRef([]);

  useEffect(() => {
    if (openProject && openProject.mediaType === "images") {
      const interval = setInterval(() => {
        setCurrentImage((prev) => (prev + 1) % openProject.mediaUrls.length);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [openProject]);

  // Ajuster la hauteur maximale après le rendu
  useEffect(() => {
    if (cardRefs.current.length) {
      const heights = cardRefs.current.map(ref => ref?.offsetHeight || 0);
      setMaxHeight(Math.max(...heights));
    }
  }, [projectsList]);

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        isDark
          ? "bg-gradient-to-b from-slate-950 via-slate-900 to-slate-800"
          : "bg-gradient-to-b from-slate-100 via-slate-50 to-slate-200"
      }`}
    >
      <Navbar />

      <div className="pt-32 px-6 max-w-7xl mx-auto pb-20">
        {/* Title */}
        <h1
          className={`text-3xl font-extrabold mb-2 text-center bg-clip-text text-transparent bg-gradient-to-r ${
            isDark
              ? "from-sky-300 via-purple-300 to-pink-300"
              : "from-indigo-600 via-purple-600 to-pink-600"
          }`}
        >
          {t("projects.title")}
        </h1>
        <div
    className={`w-24 h-1 mx-auto my-3 rounded-full bg-gradient-to-r ${
      isDark
        ? 'from-sky-400 via-purple-400 to-pink-400'
        : 'from-indigo-500 via-purple-500 to-pink-500'
    }`}
  />

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsList.map((project, index) => {
            const videoThumbnail = project.thumbnailVideo || "placeholders/no-video.png";
            const imageThumbnail = project.thumbnail || "placeholders/no-image.png";

            return (
              <div
                key={index}
                ref={el => (cardRefs.current[index] = el)}
                style={{ minHeight: maxHeight ? `${maxHeight}px` : "auto" }}
                className={`relative backdrop-blur-xl border rounded-3xl shadow-xl pb-8 p-5 transition-transform hover:scale-105 flex flex-col justify-between ${
                  isDark
                    ? "bg-slate-900/40 border-purple-500/20"
                    : "bg-white/70 border-indigo-200/30"
                }`}
              >
                {/* GITHUB TOP RIGHT BADGE */}
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    className="absolute top-3 right-3 px-3 py-1  flex items-center gap-1 text-sm font-semibold rounded-lg
                               text-white shadow-[0_0_10px_#fff] hover:brightness-110 transition z-10"
                  >
                    <Github className="w-4 h-4" />
                    View on GitHub
                  </a>
                )}
                <br></br>

                {/* Title */}
                <div>
                  <h3
                    className={`text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r ${
                      isDark
                        ? "from-sky-300 via-purple-300 to-pink-300"
                        : "from-indigo-600 via-purple-600 to-pink-600"
                    }`}
                  >
                    {project.name}
                  </h3>

                  {/* Tech */}
                  <p className={`mt-1 text-sm ${isDark ? "text-slate-300" : "text-gray-700"}`}>
                    {project.technologies}
                  </p>

                  {/* Description tronquée */}
                  {project.description && (
                    <TruncatedText text={project.description} maxLines={3} isDark={isDark} />
                  )}
                </div>

                {/* MEDIA PREVIEW */}
                <div className="relative mt-4 flex-1">
                  {project.mediaType === "video" && (
                    <div className="relative">
                      <video
                        src={`${process.env.PUBLIC_URL}/videos/${project.mediaUrl}#t=0.1`}
                        preload="metadata"
                        muted
                        className="w-full h-40 object-cover rounded-xl"
                      />
                      <button
                        onClick={() =>
                          setOpenProject({
                            name: project.name,
                            mediaType: "video",
                            mediaUrl: project.mediaUrl,
                            onlyVideo: true,
                          })
                        }
                        className="absolute inset-0 flex items-center justify-center
                                   bg-black/40 hover:bg-black/60 transition rounded-xl"
                      >
                        <Play className="w-14 h-14 text-white drop-shadow-2xl" />
                      </button>
                    </div>
                  )}

                  {project.mediaType === "images" && (
                    <img
                      src={`${process.env.PUBLIC_URL}/${imageThumbnail}`}
                      alt="image preview"
                      className="w-full h-40 object-cover rounded-xl"
                    />
                  )}

                  {!project.mediaType && (
                    <div className="w-full h-40 flex flex-col items-center justify-center bg-gray-300/40 rounded-xl">
                      <Ban className="w-10 h-10 text-gray-500" />
                      <p className="mt-2 text-gray-600 text-sm">No preview available</p>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* MODAL VIDEO */}
      {openProject && openProject.onlyVideo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">
          <div className="relative w-full max-w-3xl rounded-3xl p-4 bg-black">
            <button
              className="absolute top-3 right-3 p-2 z-50"
              onClick={() => setOpenProject(null)}
            >
              <X className="w-6 h-6 text-white" />
            </button>

            <video
              controls
              autoPlay
              className="rounded-xl max-h-[80vh] w-full relative z-10"
            >
              <source
                src={`${process.env.PUBLIC_URL}/videos/${openProject.mediaUrl}`}
                type="video/mp4"
              />
            </video>
          </div>
        </div>
      )}
    </div>
  );
}
