// src/Pagelayout/Homepage/Navbar.jsx
import React, { useState } from 'react';

const Navbar = ({ sidebarOpen, setSidebarOpen }) => {
  const [language, setLanguage] = useState('english');
  const [showLanguageMenu, setShowLanguageMenu] = useState(false);

  const languages = [
    { code: 'en', name: 'English', nativeName: 'English' },
    { code: 'hi', name: 'Hindi', nativeName: 'हिन्दी' }
  ];

  const currentLanguage = languages.find(lang => lang.name.toLowerCase() === language);

  return (
    <header className="bg-gray-800 border-b border-gray-700 shadow-lg">
      <div className="flex items-center justify-between px-6 py-4">
        {/* Left Section */}
        <div className="flex items-center space-x-4">
          {/* Mobile menu button */}
          <button
            className="lg:hidden text-gray-300 hover:text-white transition-colors duration-200 p-2 hover:bg-gray-700 rounded-lg"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          
          {/* Logo and Title */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <div>
              <h1 className="text-xl font-bold text-white">
                EHV 400/220 kV Substation Digital Twin
              </h1>
              <p className="text-sm text-gray-300">Real-time Monitoring & Analytics Platform</p>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex items-center space-x-4">
          {/* Language Selector */}
          <div className="relative">
            <button
              className="flex items-center space-x-2 px-3 py-2 text-gray-300 hover:text-white hover:bg-gray-700 rounded-lg transition-colors duration-200"
              onClick={() => setShowLanguageMenu(!showLanguageMenu)}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
              </svg>
              <span className="text-sm font-medium">{currentLanguage?.nativeName}</span>
              <svg className={`w-4 h-4 transition-transform duration-200 ${showLanguageMenu ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {/* Language Dropdown */}
            {showLanguageMenu && (
              <div className="absolute right-0 mt-2 w-48 bg-gray-700 border border-gray-600 rounded-xl shadow-xl z-50">
                <div className="py-2">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      className={`w-full flex items-center justify-between px-4 py-2 text-sm transition-colors duration-200 ${
                        language === lang.name.toLowerCase()
                          ? 'bg-blue-600 text-white'
                          : 'text-gray-300 hover:bg-gray-600 hover:text-white'
                      }`}
                      onClick={() => {
                        setLanguage(lang.name.toLowerCase());
                        setShowLanguageMenu(false);
                      }}
                    >
                      <span>{lang.nativeName}</span>
                      <span className="text-xs text-gray-400">{lang.name}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Status Indicator */}
          <div className="flex items-center space-x-2 px-3 py-2 bg-green-500/20 border border-green-500/30 rounded-lg">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-green-400">Live</span>
          </div>

          {/* Notifications */}
          <button className="relative p-2 text-gray-300 hover:text-white hover:bg-gray-700 rounded-lg transition-colors duration-200">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-5 5v-5zM10.5 3.75a6 6 0 010 11.25" />
            </svg>
            <span className="absolute top-1 right-1 w-3 h-3 bg-red-500 rounded-full border-2 border-gray-800"></span>
          </button>

          {/* User Profile */}
          <div className="flex items-center space-x-3 pl-3 border-l border-gray-600">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center shadow-lg">
              <span className="text-sm font-bold text-white">OP</span>
            </div>
            <div className="hidden md:block text-right">
              <div className="text-sm font-medium text-white">Operator</div>
              <div className="text-xs text-gray-300">Administrator</div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;