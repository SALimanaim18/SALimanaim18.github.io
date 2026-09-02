import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { HashLink } from 'react-router-hash-link';
import { Link, useLocation } from 'react-router-dom';
import { Home, Users, Code2, Briefcase, Mail, Menu, X, Moon, Sun } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export default function Navbar() {
  const { t, i18n } = useTranslation();
  const { isDark, toggleTheme } = useTheme();
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { label: 'navbar.home', href: '/#home', icon: Home },
    { label: 'navbar.about', href: '/#about', icon: Users },
    { label: 'navbar.skills', href: '/#skills', icon: Code2 },
    { label: 'navbar.projects', href: '/projects-page', icon: Briefcase },
    { label: 'navbar.certifications', href: '/certifications', icon: Briefcase },
    { label: 'navbar.contact', href: '/#contact', icon: Mail },
  ];

  // Fonction pour gérer les clics sur les liens de section
  const handleSectionClick = (href, isHashLink) => {
    if (!isHashLink) return;
    
    const sectionId = href.split('#')[1];
    
    // Si on est déjà sur la page d'accueil, on scroll vers la section
    if (location.pathname === '/') {
      const element = document.getElementById(sectionId);
      if (element) {
        const yOffset = -80; // Compensation pour la navbar
        const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    }
    // Si on est sur une autre page, on laisse HashLink gérer la redirection
  };

  return (
    <header className="fixed w-full z-50">
      <nav className={`w-full px-6 py-4 flex items-center justify-between backdrop-blur-xl border-b shadow-lg transition-all duration-300 ${
        isDark 
          ? 'bg-slate-950/80 border-purple-500/20' 
          : 'bg-white/70 border-indigo-200/50'
      }`}>
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <div className={`w-12 h-12 rounded-lg bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 flex items-center justify-center text-white font-bold text-lg shadow-lg transition-all duration-300 ${
            isDark 
              ? 'shadow-purple-500/30 hover:shadow-purple-500/60' 
              : 'shadow-purple-400/40 hover:shadow-purple-500/60'
          }`}>
            SN
          </div>
          <div className={`text-lg font-bold bg-gradient-to-r ${
            isDark 
              ? 'from-sky-300 via-purple-300 to-pink-300'
              : 'from-indigo-600 via-purple-600 to-pink-600'
          } bg-clip-text text-transparent`}>
            Salima Naim
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link, idx) => {
            const IconComponent = link.icon;
            const isHashLink = link.href.includes('#');
            
            return (
              <div key={idx}>
                {isHashLink ? (
                  <HashLink
                    smooth
                    to={link.href}
                    scroll={(el) => {
                      const yOffset = -80;
                      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
                      window.scrollTo({ top: y, behavior: 'smooth' });
                    }}
                    className={`group flex items-center gap-2 font-medium transition-all duration-300 ${
                      isDark 
                        ? 'text-slate-300 hover:text-transparent hover:bg-gradient-to-r hover:from-sky-300 hover:via-purple-300 hover:to-pink-300 hover:bg-clip-text' 
                        : 'text-gray-700 hover:text-transparent hover:bg-gradient-to-r hover:from-indigo-600 hover:via-purple-600 hover:to-pink-600 hover:bg-clip-text'
                    }`}
                  >
                    <IconComponent className={`w-4 h-4 transition-colors duration-300 ${
                      isDark ? 'group-hover:text-sky-400' : 'group-hover:text-indigo-600'
                    }`} />
                    <span>{t(link.label)}</span>
                  </HashLink>
                ) : (
                  <Link
                    to={link.href}
                    className={`group flex items-center gap-2 font-medium transition-all duration-300 ${
                      isDark 
                        ? 'text-slate-300 hover:text-transparent hover:bg-gradient-to-r hover:from-sky-300 hover:via-purple-300 hover:to-pink-300 hover:bg-clip-text' 
                        : 'text-gray-700 hover:text-transparent hover:bg-gradient-to-r hover:from-indigo-600 hover:via-purple-600 hover:to-pink-600 hover:bg-clip-text'
                    }`}
                  >
                    <IconComponent className={`w-4 h-4 transition-colors duration-300 ${
                      isDark ? 'group-hover:text-sky-400' : 'group-hover:text-indigo-600'
                    }`} />
                    <span>{t(link.label)}</span>
                  </Link>
                )}
              </div>
            );
          })}
        </div>

        {/* Controls */}
        <div className="flex items-center gap-4">
          {/* Language Selector */}
          <div className={`flex items-center gap-2 rounded-lg p-1 border transition-all duration-300 ${
            isDark 
              ? 'bg-slate-800/50 border-purple-500/20' 
              : 'bg-indigo-50/50 border-indigo-200/50 hover:bg-indigo-100/50'
          }`}>
            <button 
              onClick={() => i18n.changeLanguage('en')} 
              className={`px-3 py-1.5 rounded-md text-sm font-medium transition-all duration-300 ${
                isDark
                  ? 'text-slate-300 hover:bg-sky-500/20 hover:text-sky-300'
                  : 'text-gray-700 hover:bg-indigo-200/60 hover:text-indigo-700'
              }`}
            >
              EN
            </button>
            <button 
              onClick={() => i18n.changeLanguage('fr')} 
              className={`px-3 py-1.5 rounded-md text-sm font-medium transition-all duration-300 ${
                isDark
                  ? 'text-slate-300 hover:bg-purple-500/20 hover:text-purple-300'
                  : 'text-gray-700 hover:bg-purple-200/60 hover:text-purple-700'
              }`}
            >
              FR
            </button>
          </div>

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className={`p-2 rounded-lg transition-all duration-300 ${
              isDark
                ? 'bg-slate-800/50 text-yellow-400 hover:bg-slate-700/50 hover:text-yellow-300'
                : 'bg-indigo-100/60 text-indigo-700 hover:bg-indigo-200/70 hover:text-indigo-800'
            }`}
            aria-label="Toggle theme"
          >
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setOpen(!open)} 
            className={`md:hidden transition-colors ${
              isDark 
                ? 'text-slate-300 hover:text-sky-400' 
                : 'text-gray-700 hover:text-indigo-600'
            }`}
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {open && (
        <div className={`md:hidden backdrop-blur-xl border-b shadow-lg transition-all duration-300 ${
          isDark
            ? 'bg-slate-950/95 border-purple-500/20'
            : 'bg-white/95 border-indigo-200/50'
        }`}>
          <div className="flex flex-col gap-4 p-6">
            {navLinks.map((link, idx) => {
              const IconComponent = link.icon;
              const isHashLink = link.href.includes('#');
              
              return (
                <div key={idx}>
                  {isHashLink ? (
                    <HashLink
                      smooth
                      to={link.href}
                      scroll={(el) => {
                        const yOffset = -80;
                        const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
                        window.scrollTo({ top: y, behavior: 'smooth' });
                      }}
                      onClick={() => setOpen(false)}
                      className={`flex items-center gap-3 font-medium transition-all ${
                        isDark
                          ? 'text-slate-300 hover:text-transparent hover:bg-gradient-to-r hover:from-sky-300 hover:via-purple-300 hover:to-pink-300 hover:bg-clip-text'
                          : 'text-gray-700 hover:text-transparent hover:bg-gradient-to-r hover:from-indigo-600 hover:via-purple-600 hover:to-pink-600 hover:bg-clip-text'
                      }`}
                    >
                      <IconComponent className="w-5 h-5" />
                      <span>{t(link.label)}</span>
                    </HashLink>
                  ) : (
                    <Link
                      to={link.href}
                      onClick={() => setOpen(false)}
                      className={`flex items-center gap-3 font-medium transition-all ${
                        isDark
                          ? 'text-slate-300 hover:text-transparent hover:bg-gradient-to-r hover:from-sky-300 hover:via-purple-300 hover:to-pink-300 hover:bg-clip-text'
                          : 'text-gray-700 hover:text-transparent hover:bg-gradient-to-r hover:from-indigo-600 hover:via-purple-600 hover:to-pink-600 hover:bg-clip-text'
                      }`}
                    >
                      <IconComponent className="w-5 h-5" />
                      <span>{t(link.label)}</span>
                    </Link>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
}