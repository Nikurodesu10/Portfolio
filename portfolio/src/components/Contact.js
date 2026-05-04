import React, { useState } from 'react';

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copy = () => {
    navigator.clipboard.writeText('hofilenanicole1@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" style={{ padding: '6rem var(--pad)', background: 'var(--ink)' }}>
      <div style={{ maxWidth: 'var(--max-w)', margin: '0 auto' }}>

        {/* Big CTA */}
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <p style={{
            fontSize: 11, fontWeight: 500, letterSpacing: '0.1em',
            textTransform: 'uppercase', color: 'rgba(255,255,255,0.45)',
            marginBottom: '1.5rem', display: 'flex', alignItems: 'center',
            justifyContent: 'center', gap: 10,
          }}>
            <span style={{ display: 'block', width: 24, height: 1, background: 'rgba(255,255,255,0.3)' }} />
            Get in touch
          </p>

          <h2 style={{
            fontFamily: 'var(--serif)', fontSize: 'clamp(36px, 7vw, 60px)',
            color: '#fff', lineHeight: 1.1, letterSpacing: '-1px',
            marginBottom: '1.5rem',
          }}>
            Let's build something<br />
            <em style={{ fontStyle: 'italic', color: 'rgba(255,255,255,0.55)' }}>great together</em>
          </h2>

          <p style={{
            fontSize: 15, color: 'rgba(255,255,255,0.6)', maxWidth: 480,
            margin: '0 auto 2.5rem', lineHeight: 1.8,
          }}>
            I'm open to front-end development roles, UI/UX design opportunities, and collaborative
            project work. Let's make something meaningful.
          </p>

          <a href="mailto:hofilenanicole1@gmail.com" style={{
            display: 'inline-block', background: '#fff', color: 'var(--ink)',
            borderRadius: 'var(--radius-sm)', padding: '14px 32px',
            fontSize: 14, fontWeight: 500, transition: 'opacity 0.15s',
          }}
          onMouseEnter={e => e.currentTarget.style.opacity = '0.85'}
          onMouseLeave={e => e.currentTarget.style.opacity = '1'}
          >Send me an email →</a>
        </div>

        {/* Contact cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16, marginBottom: '4rem' }}>
          {[
            { icon: '✉', label: 'Email', value: 'hofilenanicole1@gmail.com', action: copy, actionLabel: copied ? 'Copied!' : 'Copy' },
            { icon: '📱', label: 'Mobile', value: '+63 999 867 2197', href: 'tel:+639998672197' },
            { icon: '📍', label: 'Location', value: 'Victorias City, Negros Occidental, PH' },
          ].map((c, i) => (
            <div key={i} style={{
              background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.12)',
              borderRadius: 'var(--radius-lg)', padding: '1.5rem',
            }}>
              <p style={{ fontSize: 20, marginBottom: 12 }}>{c.icon}</p>
              <p style={{ fontSize: 11, color: 'rgba(255,255,255,0.45)', marginBottom: 4, textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 500 }}>{c.label}</p>
              <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.85)', lineHeight: 1.6, marginBottom: c.action ? 12 : 0 }}>{c.value}</p>
              {c.action && (
                <button onClick={c.action} style={{
                  fontSize: 11, padding: '4px 12px', borderRadius: 99,
                  background: 'rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.7)',
                  border: '1px solid rgba(255,255,255,0.15)', cursor: 'pointer',
                  fontFamily: 'var(--sans)',
                }}>{c.actionLabel}</button>
              )}
            </div>
          ))}
        </div>

        {/* References */}
        <div style={{
          borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '2.5rem',
        }}>
          <p style={{ fontSize: 11, color: 'rgba(255,255,255,0.35)', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 500, marginBottom: '1.5rem' }}>
            Character References
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}>
            {[
              { name: 'Jona P. Castro', title: 'Assistant Principal', org: 'Don Bosco Technical Institute – Victorias', contact: '+63946 969 0310' },
              { name: 'Dave Marcellana', title: 'Software QA Engineer', org: 'IReply Back Office Inc.', contact: '+63991 893 8183' },
              { name: 'Ma. Celsa Gregoria Paula Pascual', title: 'IT Faculty Member', org: 'University of St. La Salle', contact: 'c.pascual@usls.edu.ph' },
            ].map((r, i) => (
              <div key={i} style={{ padding: '1rem' }}>
                <p style={{ fontSize: 13, fontWeight: 500, color: 'rgba(255,255,255,0.85)', marginBottom: 2 }}>{r.name}</p>
                <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.5)', marginBottom: 2 }}>{r.title}</p>
                <p style={{ fontSize: 11, color: 'rgba(255,255,255,0.35)', marginBottom: 4 }}>{r.org}</p>
                <p style={{ fontSize: 11, color: 'rgba(255,255,255,0.45)' }}>{r.contact}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div style={{
          borderTop: '1px solid rgba(255,255,255,0.08)', marginTop: '3rem', paddingTop: '1.5rem',
          display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12,
        }}>
          <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.3)' }}>
            © 2025 Joannah Nicole T. Hofileña. All rights reserved.
          </p>
          <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.3)' }}>
            Front-End Developer & UI/UX Designer · Philippines
          </p>
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          #contact .contact-cards { grid-template-columns: 1fr !important; }
          #contact .ref-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
