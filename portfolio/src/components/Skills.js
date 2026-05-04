import React from 'react';

const skillGroups = [
  {
    icon: '💻',
    name: 'Development',
    skills: ['HTML', 'CSS', 'JavaScript', 'React.js', 'PHP', 'API Integration'],
    level: 90,
  },
  {
    icon: '🎨',
    name: 'UI/UX Design',
    skills: ['Figma', 'Wireframing', 'Prototyping', 'User Research'],
    level: 85,
  },
  {
    icon: '🗄️',
    name: 'Database & Backend',
    skills: ['MySQL', 'ERD Design', 'PHP Backend', 'Query Optimization'],
    level: 78,
  },
  {
    icon: '🚀',
    name: 'Deployment',
    skills: ['HelioHost', 'GoDaddy', 'Vercel', 'Hosting Setup'],
    level: 80,
  },
  {
    icon: '📊',
    name: 'Systems & Analysis',
    skills: ['Flowcharts', 'Process Mapping', 'System Design', 'Documentation'],
    level: 82,
  },
  {
    icon: '✏️',
    name: 'Design & Content',
    skills: ['Canva', 'Adobe Photoshop', 'Written Communication', 'Reports'],
    level: 88,
  },
];

export default function Skills() {
  return (
    <section id="skills" style={{ padding: '6rem var(--pad)', background: 'var(--bg-2)' }}>
      <div style={{ maxWidth: 'var(--max-w)', margin: '0 auto' }}>
        <Label>Skills</Label>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '3rem' }}>
          <h2 style={{ fontFamily: 'var(--serif)', fontSize: 36, letterSpacing: '-0.5px', lineHeight: 1.2 }}>
            What I work with
          </h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 16 }}>
          {skillGroups.map((g, i) => (
            <SkillCard key={i} group={g} />
          ))}
        </div>

        {/* Bottom bar: soft skills */}
        <div style={{
          marginTop: '2.5rem', background: 'var(--bg)', border: '1px solid var(--line)',
          borderRadius: 'var(--radius-lg)', padding: '1.5rem 2rem',
          display: 'flex', alignItems: 'center', gap: '2rem', flexWrap: 'wrap',
        }}>
          <p style={{ fontSize: 12, fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--ink-3)', whiteSpace: 'nowrap' }}>
            Soft skills
          </p>
          {['Team Collaboration', 'Research & Data Gathering', 'Written Communication', 'Adaptability', 'Problem Solving'].map(s => (
            <span key={s} style={{
              fontSize: 13, color: 'var(--ink-2)', display: 'flex', alignItems: 'center', gap: 6,
            }}>
              <span style={{ width: 5, height: 5, borderRadius: '50%', background: 'var(--accent)', display: 'inline-block' }} />
              {s}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

function SkillCard({ group }) {
  return (
    <div style={{
      background: 'var(--bg)', border: '1px solid var(--line)',
      borderRadius: 'var(--radius-lg)', padding: '1.5rem',
      boxShadow: 'var(--shadow-sm)',
      transition: 'box-shadow 0.2s',
    }}
    onMouseEnter={e => e.currentTarget.style.boxShadow = 'var(--shadow-md)'}
    onMouseLeave={e => e.currentTarget.style.boxShadow = 'var(--shadow-sm)'}
    >
      <div style={{ fontSize: 24, marginBottom: '0.75rem' }}>{group.icon}</div>
      <p style={{ fontSize: 13, fontWeight: 500, marginBottom: '0.75rem' }}>{group.name}</p>

      {/* Progress bar */}
      <div style={{
        height: 3, background: 'var(--bg-3)', borderRadius: 99,
        marginBottom: '1rem', overflow: 'hidden',
      }}>
        <div style={{
          height: '100%', width: `${group.level}%`,
          background: 'var(--accent)', borderRadius: 99,
          transition: 'width 0.6s ease',
        }} />
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
        {group.skills.map(s => (
          <p key={s} style={{ fontSize: 12, color: 'var(--ink-2)', lineHeight: 1.6 }}>· {s}</p>
        ))}
      </div>
    </div>
  );
}

function Label({ children }) {
  return (
    <p style={{
      fontSize: 11, fontWeight: 500, letterSpacing: '0.1em',
      textTransform: 'uppercase', color: 'var(--accent)',
      marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: 10,
    }}>
      <span style={{ display: 'block', width: 24, height: 1, background: 'var(--accent)' }} />
      {children}
    </p>
  );
}
