import React from 'react'

const groups = [
  { icon:'💻', name:'Development', level:90, skills:['HTML','CSS','JavaScript','React.js','PHP','API Integration'] },
  { icon:'🎨', name:'UI/UX Design', level:85, skills:['Figma','Wireframing','Prototyping','User Research'] },
  { icon:'🗄️', name:'Database & Backend', level:78, skills:['MySQL','ERD Design','PHP Backend','Query Optimization'] },
  { icon:'🚀', name:'Deployment', level:80, skills:['HelioHost','GoDaddy','Vercel','Hosting Setup'] },
  { icon:'📊', name:'Systems & Analysis', level:82, skills:['Flowcharts','Process Mapping','System Design','Documentation'] },
  { icon:'✏️', name:'Design & Content', level:88, skills:['Canva','Adobe Photoshop','Written Communication','Reports'] },
]

export default function Skills() {
  return (
    <section id="skills" style={{padding:'6rem var(--pad)',background:'var(--bg-2)'}}>
      <div style={{maxWidth:'var(--max-w)',margin:'0 auto'}}>
        <p className="section-label">Skills</p>
        <h2 style={{fontFamily:'var(--serif)',fontSize:36,letterSpacing:'-0.5px',marginBottom:'3rem'}}>What I work with</h2>
        <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(210px,1fr))',gap:16}}>
          {groups.map(g=>(
            <div key={g.name} style={{background:'var(--bg)',border:'1px solid var(--line)',borderRadius:'var(--radius-lg)',padding:'1.5rem',boxShadow:'var(--shadow-sm)',transition:'box-shadow 0.2s'}}
              onMouseEnter={e=>e.currentTarget.style.boxShadow='var(--shadow-md)'}
              onMouseLeave={e=>e.currentTarget.style.boxShadow='var(--shadow-sm)'}
            >
              <div style={{fontSize:24,marginBottom:'0.75rem'}}>{g.icon}</div>
              <p style={{fontSize:13,fontWeight:500,marginBottom:'0.75rem'}}>{g.name}</p>
              <div style={{height:3,background:'var(--bg-3)',borderRadius:99,marginBottom:'1rem',overflow:'hidden'}}>
                <div style={{height:'100%',width:`${g.level}%`,background:'var(--accent)',borderRadius:99}} />
              </div>
              <div style={{display:'flex',flexDirection:'column',gap:4}}>
                {g.skills.map(s=><p key={s} style={{fontSize:12,color:'var(--ink-2)',lineHeight:1.6}}>· {s}</p>)}
              </div>
            </div>
          ))}
        </div>
        <div style={{marginTop:'2.5rem',background:'var(--bg)',border:'1px solid var(--line)',borderRadius:'var(--radius-lg)',padding:'1.5rem 2rem',display:'flex',alignItems:'center',gap:'2rem',flexWrap:'wrap'}}>
          <p style={{fontSize:12,fontWeight:500,textTransform:'uppercase',letterSpacing:'0.08em',color:'var(--ink-3)',whiteSpace:'nowrap'}}>Soft skills</p>
          {['Team Collaboration','Research & Data Gathering','Written Communication','Adaptability','Problem Solving'].map(s=>(
            <span key={s} style={{fontSize:13,color:'var(--ink-2)',display:'flex',alignItems:'center',gap:6}}>
              <span style={{width:5,height:5,borderRadius:'50%',background:'var(--accent)',display:'inline-block'}} />{s}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
