/**
 * Navbar — top bar with hamburger and logo
 */
import { Menu } from 'lucide-react';
import { useApp } from '../context/AppContext';
import appLogo from '../assets/images/applogo.jpeg';

export default function Navbar() {
  const { setIsDrawerOpen, isDarkMode } = useApp();

  return (
    <header
      className="sticky top-0 z-30 w-full"
      style={{
        background: isDarkMode ? '#12151f' : '#ffffff',
        borderBottom: `1px solid ${isDarkMode ? '#2a2d3e' : '#e5e7eb'}`,
        boxShadow: '0 2px 12px rgba(0,0,0,0.2)',
      }}
    >
      <div className="flex items-center justify-between px-4 py-3 max-w-screen-xl mx-auto">
        {/* Hamburger */}
        <button
          onClick={() => setIsDrawerOpen(true)}
          className="p-2 rounded-lg transition-colors"
          style={{ color: isDarkMode ? '#9ca3af' : '#374151' }}
          aria-label="Open menu"
        >
          <Menu size={22} />
        </button>

        {/* Logo + Name */}
        <div className="flex items-center gap-3">
          <img
            src={appLogo}
            alt="Plynity Logo"
            className="w-9 h-9 rounded-2xl object-cover"
          />
          <div>
            <div
              className="text-lg font-bold tracking-tight"
              style={{ color: isDarkMode ? '#ffffff' : '#111827' }}
            >
              PLYNITY ESPORTS
            </div>
            <div className="text-xs" style={{ color: isDarkMode ? '#9ca3af' : '#6b7280' }}>
              Beyond limits. Beyond ordinary.
            </div>
          </div>
        </div>

      </div>
    </header>
  );
}