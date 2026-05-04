import React, { useState, useEffect } from 'react';

const links = ['About', 'Experience', 'Projects', 'Skills', 'Blog', 'Contact'];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id) => {
    setMenuOpen(false);
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      background: scrolled ? 'rgba(250,250,248,0.92)' : 'transparent',
      backdropFilter: scrolled ? 'blur(12px)' : 'none',
      borderBottom: scrolled ? '1px solid var(--line)' : '1px solid transparent',
      transition: 'all 0.3s ease',
    }}>
      <div style={{
        maxWidth: 'var(--max-w)', margin: '0 auto', padding: '0 var(--pad)',
        height: 64, display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      }}>
        <span style={{ fontFamily: 'var(--serif)', fontSize: 18, letterSpacing: '-0.3px' }}>
          JN<span style={{ color: 'var(--accent)' }}>.</span>
        </span>

        {/* Desktop links */}
        <div style={{ display: 'flex', gap: '2rem' }} className="nav-desktop">
          {links.map(l => (
            <button key={l} onClick={() => scrollTo(l)} style={{
              background: 'none', border: 'none', cursor: 'pointer',
              fontSize: 13, color: 'var(--ink-2)', fontFamily: 'var(--sans)',
              fontWeight: 400, padding: '4px 0', transition: 'color 0.15s',
            }}
            onMouseEnter={e => e.target.style.color = 'var(--ink)'}
            onMouseLeave={e => e.target.style.color = 'var(--ink-2)'}
            >{l}</button>
          ))}
        </div>

        <a href="mailto:hofilenanicole1@gmail.com" style={{
          fontSize: 13, fontWeight: 500, padding: '8px 18px',
          background: 'var(--ink)', color: 'var(--bg)', borderRadius: 'var(--radius-sm)',
          transition: 'opacity 0.15s',
        }}
        onMouseEnter={e => e.currentTarget.style.opacity = '0.8'}
        onMouseLeave={e => e.currentTarget.style.opacity = '1'}
        >Hire me</a>
      </div>

      <style>{`
        @media (max-width: 600px) {
          .nav-desktop { display: none !important; }
        }
      `}</style>
    </nav>
  );
}
