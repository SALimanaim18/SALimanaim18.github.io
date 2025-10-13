import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import '../index.css';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import { Link } from 'react-router-dom';
import Contact from './Contact';
import { Terminal, Briefcase, Mail } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export default function Home() {
  const { t } = useTranslation();
  const { isDark } = useTheme();
  const [typeIndex, setTypeIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const commands = [
    'npm install awesome-portfolio',
    'yarn add creativity && passion',
    'git commit -m "ship amazing projects"',
    'npm run build:dreams'
  ];

  const currentCommand = commands[typeIndex];

  useEffect(() => {
    let timeout;
    
    if (!isDeleting && displayedText.length < currentCommand.length) {
      timeout = setTimeout(() => {
        setDisplayedText(currentCommand.slice(0, displayedText.length + 1));
      }, 50);
    } else if (displayedText.length === currentCommand.length) {
      timeout = setTimeout(() => {
        setIsDeleting(true);
      }, 1500);
    } else if (isDeleting && displayedText.length > 0) {
      timeout = setTimeout(() => {
        setDisplayedText(currentCommand.slice(0, displayedText.length - 1));
      }, 30);
    } else if (isDeleting && displayedText.length === 0) {
      setIsDeleting(false);
      setTypeIndex((prev) => (prev + 1) % commands.length);
    }

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, currentCommand]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 15,
        y: (e.clientY / window.innerHeight) * 15
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const bubbles = Array.from({ length: 12 }).map(() => ({
    size: 50 + Math.random() * 150,
    left: Math.random() * 90 + '%',
    duration: 6 + Math.random() * 6,
    delay: Math.random() * 5,
  }));

  return (
    <>
      <section
        id="home"
        className={`relative overflow-hidden min-h-screen flex items-center px-4 sm:px-6 transition-all duration-300 ${
          isDark
            ? 'bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800'
            : 'bg-gradient-to-br from-indigo-50 via-white to-pink-50'
        }`}
        style={{ 
          paddingTop: '80px', 
          paddingBottom: '80px',
          minHeight: 'calc(100vh - 80px)'
        }}
      >
        {/* Animated grid background */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <div className={`absolute inset-0 ${isDark ? 'opacity-10' : 'opacity-[0.07]'}`}
            style={{
              backgroundImage: `linear-gradient(0deg, transparent 24%, ${isDark ? 'rgba(148,163,184,.1)' : 'rgba(79,70,229,.15)'} 25%, ${isDark ? 'rgba(148,163,184,.1)' : 'rgba(79,70,229,.15)'} 26%, transparent 27%, transparent 74%, ${isDark ? 'rgba(148,163,184,.1)' : 'rgba(79,70,229,.15)'} 75%, ${isDark ? 'rgba(148,163,184,.1)' : 'rgba(79,70,229,.15)'} 76%, transparent 77%, transparent),
                                linear-gradient(90deg, transparent 24%, ${isDark ? 'rgba(148,163,184,.1)' : 'rgba(79,70,229,.15)'} 25%, ${isDark ? 'rgba(148,163,184,.1)' : 'rgba(79,70,229,.15)'} 26%, transparent 27%, transparent 74%, ${isDark ? 'rgba(148,163,184,.1)' : 'rgba(79,70,229,.15)'} 75%, ${isDark ? 'rgba(148,163,184,.1)' : 'rgba(79,70,229,.15)'} 76%, transparent 77%, transparent)`,
              backgroundSize: '50px 50px'
            }}
          />
        </div>

        {/* Floating blobs with parallax */}
        <div className="absolute inset-0 pointer-events-none z-0">
          {bubbles.map((b, i) => (
            <div
              key={i}
              className="rounded-full blur-3xl"
              style={{
                width: b.size,
                height: b.size,
                left: b.left,
                top: '-150px',
                background: isDark
                  ? (i % 3 === 0 
                    ? `radial-gradient(circle, hsla(200, 100%, 60%, 0.2), hsla(200, 100%, 60%, 0.02))`
                    : i % 3 === 1
                    ? `radial-gradient(circle, hsla(270, 100%, 60%, 0.2), hsla(270, 100%, 60%, 0.02))`
                    : `radial-gradient(circle, hsla(320, 100%, 60%, 0.2), hsla(320, 100%, 60%, 0.02))`)
                  : (i % 3 === 0 
                    ? `radial-gradient(circle, hsla(217, 100%, 63%, 0.25), hsla(217, 100%, 63%, 0.05))`
                    : i % 3 === 1
                    ? `radial-gradient(circle, hsla(280, 100%, 60%, 0.25), hsla(280, 100%, 60%, 0.05))`
                    : `radial-gradient(circle, hsla(340, 82%, 65%, 0.25), hsla(340, 82%, 65%, 0.05))`),
                animation: `floatDown ${b.duration}s linear ${b.delay}s forwards, bobble ${2 + Math.random() * 2}s ease-in-out infinite`,
                transform: `translate(${mousePosition.x * 0.3}px, ${mousePosition.y * 0.3}px)`,
                transition: 'transform 0.3s ease-out'
              }}
            />
          ))}
        </div>

        {/* Gradient overlay */}
        <div className={`absolute inset-0 pointer-events-none z-1 ${
          isDark 
            ? 'bg-gradient-to-t from-slate-950/50 to-transparent' 
            : 'bg-gradient-to-b from-transparent via-transparent to-white/40'
        }`} />

        {/* Content */}
        <div className="relative z-10 max-w-4xl lg:max-w-5xl text-center w-full mx-auto py-8">
          <div className="mb-4 sm:mb-6">
            <h1 className={`text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold
              bg-clip-text text-transparent 
              ${isDark 
                ? 'bg-gradient-to-r from-sky-300 via-purple-300 to-pink-300'
                : 'bg-gradient-to-r from-blue-400 via-purple-900 to-gray-800'
              }
              animate-slide-up leading-tight sm:leading-tight drop-shadow-lg break-words`}>
              {t('home.greeting')}
            </h1>
          </div>

             <div className="mb-6 sm:mb-8">
            <p className={`mx-auto text-base md:text-lg max-w-2xl lg:max-w-3xl leading-relaxed animate-fade-in transition-colors duration-300 ${
              isDark ? 'text-slate-300' : 'text-gray-700'
            }`}>
              {t('home.intro')}
            </p>
          </div>

          {/* Terminal/Command Section */}
          <div className="mb-4 sm:mb-6 animate-fade-in-delayed">
            <div className={`border rounded-xl overflow-hidden backdrop-blur-md shadow-2xl transition-all duration-300 mx-auto max-w-xs xs:max-w-sm sm:max-w-md md:max-w-xl lg:max-w-2xl ${
              isDark
                ? 'bg-slate-900/50 border-purple-500/30 shadow-purple-500/10 hover:shadow-purple-500/20'
                : 'bg-slate-900/90 border-purple-500/30 shadow-purple-500/10 hover:shadow-purple-500/20'
            }`}>
              <div className={`bg-gradient-to-r px-3 sm:px-4 py-2 sm:py-3 flex items-center gap-2 border-b transition-all duration-300 ${
                isDark
                  ? 'from-sky-500/10 via-purple-500/10 to-pink-500/10 border-purple-500/20'
                  : 'from-sky-500/10 via-purple-500/10 to-pink-500/10 border-purple-500/20'
              }`}>
                <Terminal size={14} className={isDark ? 'text-sky-400' : 'text-sky-400'} />
                <span className={`text-xs sm:text-sm font-semibold ${isDark ? 'text-slate-300' : 'text-slate-300'}`}>
                  developer@portfolio:~$
                </span>
              </div>
              <div className="p-3 sm:p-4 font-mono text-left">
                <div className={`text-xs sm:text-sm mb-2 ${isDark ? 'text-slate-400' : 'text-slate-400'}`}>
                  <span className={isDark ? 'text-purple-400' : 'text-purple-400'}>~/projects</span>
                  <span className={isDark ? 'text-slate-500' : 'text-slate-500'}> $</span>
                </div>
                <div className={`text-xs sm:text-sm md:text-base h-6 flex items-center min-h-6`}>
                  <span className={isDark ? 'text-sky-300' : 'text-sky-300'}>$ </span>
                  <span className={isDark ? 'text-pink-300' : 'text-pink-300'}>{displayedText}</span>
                  <span className={`animate-blink ml-1 ${isDark ? 'text-purple-400' : 'text-purple-400'}`}>|</span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-2 xs:gap-3 sm:gap-4 mb-4">
            <Link
              to="/projects-page"
              className={`group px-4 xs:px-5 sm:px-6 py-2 xs:py-2.5 sm:py-3 rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 transform relative overflow-hidden text-xs xs:text-sm sm:text-base ${
                isDark 
                  ? 'hover:shadow-purple-500/50' 
                  : 'hover:shadow-purple-500/40 from-indigo-600 to-purple-600'
              }`}
            >
              <div className={`absolute inset-0 bg-gradient-to-r from-purple-700 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity`} />
              <span className="relative flex items-center justify-center gap-1 xs:gap-2">
                {t('home.cta_projects')}
                <Briefcase size={12} className="xs:size-3 sm:size-4" />
              </span>
            </Link>
            <button
              onClick={() => {
                const contact = document.getElementById('contact');
                if (contact) {
                  const yOffset = -80;
                  const y = contact.getBoundingClientRect().top + window.pageYOffset + yOffset;
                  window.scrollTo({ top: y, behavior: 'smooth' });
                }
              }}
              className={`group px-4 xs:px-5 sm:px-6 py-2 xs:py-2.5 sm:py-3 rounded-lg border-2 font-semibold transition-all duration-300 backdrop-blur-sm text-xs xs:text-sm sm:text-base ${
                isDark
                  ? 'border-purple-500/50 text-white hover:bg-purple-500/10 hover:border-sky-400'
                  : 'border-indigo-400 text-indigo-700 hover:bg-indigo-100/40 hover:border-purple-500 hover:text-purple-700'
              }`}
            >
              <span className="flex items-center justify-center gap-1 xs:gap-2">
                {t('home.cta_contact')}
                <Mail size={12} className="xs:size-3 sm:size-4" />
              </span>
            </button>
          </div>

          {/* Scroll indicator */}
          <div className="flex justify-center animate-bounce">
            <div className={`w-4 h-4 xs:w-5 xs:h-5 border-2 rounded-full flex items-center justify-center transition-all duration-300 ${
              isDark
                ? 'border-purple-500/50'
                : 'border-indigo-500/70'
            }`}>
              <div className={`w-1 h-1 xs:w-1 xs:h-1.5 rounded-full animate-pulse bg-gradient-to-b ${
                isDark
                  ? 'from-sky-400 to-transparent'
                  : 'from-indigo-600 to-transparent'
              }`} />
            </div>
          </div>
        </div>

        <style jsx>{`
          @keyframes floatDown {
            to {
              transform: translateY(100vh);
              opacity: 0;
            }
          }
          
          @keyframes bobble {
            0%, 100% {
              transform: translateY(0px);
            }
            50% {
              transform: translateY(-20px);
            }
          }
          
          @keyframes slide-up {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          
          @keyframes fade-in {
            from {
              opacity: 0;
            }
            to {
              opacity: 1;
            }
          }

          @keyframes fade-in-delayed {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes blink {
            0%, 49%, 100% {
              opacity: 1;
            }
            50%, 99% {
              opacity: 0;
            }
          }
          
          .animate-slide-up {
            animation: slide-up 0.8s ease-out;
          }
          
          .animate-fade-in {
            animation: fade-in 0.8s ease-out 0.2s both;
          }

          .animate-fade-in-delayed {
            animation: fade-in-delayed 0.8s ease-out 0.4s both;
          }

          .animate-blink {
            animation: blink 1s infinite;
          }

          /* Breakpoint personnalisé pour les très petits écrans */
          @media (max-width: 475px) {
            .xs\\:text-3xl {
              font-size: 1.5rem;
              line-height: 2rem;
            }
          }
        `}</style>
      </section>

      {/* sections */}
      <About id="about" />
      <Skills id="skills" />
      <Projects id="projects" />
      <Contact id="contact" />
    </>
  );
}