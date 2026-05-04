import React, { useEffect, useState } from 'react';

const roles = ['Front-End Developer', 'UI/UX Designer', 'React Developer', 'Web Developer'];

export default function Hero() {
  const [roleIdx, setRoleIdx] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setRoleIdx(i => (i + 1) % roles.length);
        setVisible(true);
      }, 400);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section style={{
      minHeight: '100vh', display: 'flex', alignItems: 'center',
      padding: '100px var(--pad) 60px',
      maxWidth: 'var(--max-w)', margin: '0 auto',
    }}>
      <div style={{ width: '100%' }}>

        {/* Availability badge */}
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: 8,
          background: 'var(--accent-light)', color: 'var(--accent)',
          borderRadius: 99, padding: '5px 14px', fontSize: 12, fontWeight: 500,
          marginBottom: '1.75rem', border: '1px solid rgba(42,106,74,0.2)',
        }}>
          <span style={{
            width: 7, height: 7, borderRadius: '50%', background: 'var(--accent)',
            boxShadow: '0 0 0 3px rgba(42,106,74,0.25)',
            animation: 'pulse 2s ease-in-out infinite',
          }} />
          Available for opportunities
        </div>

        {/* Name */}
        <h1 style={{
          fontFamily: 'var(--serif)', fontSize: 'clamp(42px, 8vw, 68px)',
          lineHeight: 1.05, letterSpacing: '-1.5px', marginBottom: '1rem',
          color: 'var(--ink)',
        }}>
          Joannah Nicole<br />
          <em style={{ fontStyle: 'italic', color: 'var(--ink-2)' }}>T. Hofileña</em>
        </h1>

        {/* Animated role */}
        <div style={{
          fontSize: 'clamp(18px, 3vw, 24px)', fontWeight: 300,
          color: 'var(--ink-2)', marginBottom: '1.5rem',
          minHeight: 36, display: 'flex', alignItems: 'center', gap: 10,
        }}>
          <span style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(-8px)',
            transition: 'all 0.35s ease',
            color: 'var(--accent)', fontWeight: 500,
          }}>{roles[roleIdx]}</span>
          <span style={{ color: 'var(--line-strong)' }}>based in the Philippines</span>
        </div>

        {/* Bio */}
        <p style={{
          fontSize: 15, lineHeight: 1.85, color: 'var(--ink-2)',
          maxWidth: 560, marginBottom: '2.5rem',
        }}>
          I build responsive, user-centered web applications with a sharp eye for clean interface design.
          Bridging design thinking and technical execution — from Figma wireframes to production React apps —
          with experience in PHP, MySQL, and full deployment workflows.
        </p>

        {/* CTA buttons */}
        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: '3rem' }}>
          <button onClick={() => scrollTo('projects')} style={{
            background: 'var(--ink)', color: 'var(--bg)', border: 'none',
            borderRadius: 'var(--radius-sm)', padding: '12px 24px',
            fontSize: 14, fontWeight: 500, cursor: 'pointer',
            fontFamily: 'var(--sans)', transition: 'opacity 0.15s',
          }}
          onMouseEnter={e => e.currentTarget.style.opacity = '0.8'}
          onMouseLeave={e => e.currentTarget.style.opacity = '1'}
          >View my work →</button>

          <a href="mailto:hofilenanicole1@gmail.com" style={{
            background: 'transparent', color: 'var(--ink)',
            border: '1px solid var(--line-strong)',
            borderRadius: 'var(--radius-sm)', padding: '12px 24px',
            fontSize: 14, fontWeight: 500, cursor: 'pointer',
            fontFamily: 'var(--sans)', transition: 'background 0.15s',
          }}
          onMouseEnter={e => e.currentTarget.style.background = 'var(--bg-2)'}
          onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
          >Get in touch</a>
        </div>

        {/* Tech chips */}
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
          {['HTML', 'CSS', 'JavaScript', 'React.js', 'PHP', 'MySQL', 'Figma', 'UI/UX'].map(t => (
            <span key={t} style={{
              fontSize: 12, padding: '4px 12px', borderRadius: 99,
              background: 'var(--bg-2)', color: 'var(--ink-2)',
              border: '1px solid var(--line)',
            }}>{t}</span>
          ))}
        </div>

        {/* Scroll hint */}
        <div style={{
          marginTop: '4rem', display: 'flex', alignItems: 'center', gap: 10,
          color: 'var(--ink-3)', fontSize: 12,
        }}>
          <span style={{ animation: 'bounce 2s ease-in-out infinite' }}>↓</span>
          Scroll to explore
        </div>
      </div>

      <style>{`
        @keyframes pulse {
          0%, 100% { box-shadow: 0 0 0 3px rgba(42,106,74,0.25); }
          50% { box-shadow: 0 0 0 6px rgba(42,106,74,0.1); }
        }
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(5px); }
        }
      `}</style>
    </section>
  );
}
