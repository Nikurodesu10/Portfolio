import React, { useState } from 'react'

const projects = [
  {
    emoji:'🌾', title:'FarmTracker', subtitle:'AI-Based Scheduler for Farming',
    desc:'A dual-platform system featuring a Flutter mobile app for farmers and a React.js/PHP web dashboard for administrative management. Uses GPT/Gemini APIs for automated task scheduling, AI-powered crop analysis, and a QR code system to digitize harvest and inventory tracking.',
    tags:['React.js','Flutter','PHP','GPT API','Gemini API','QR System'],
    highlight:true, role:'Full-Stack Developer & Designer',
    outcome:'Digitized farm operations — replacing manual logs with an intelligent, AI-driven scheduling system.',
  },
  {
    emoji:'🏢', title:'HRIS – IReply Back Office', subtitle:'HR Information System',
    desc:'A web-based HR information system for timekeeping, attendance tracking, team management, and employee records. Built for IReply Back Office Inc. with a clean, admin-friendly dashboard.',
    tags:['ReactJS','PHP','MySQL'],
    highlight:false, role:'Front-End Developer',
    outcome:'Streamlined HR operations across the company with a centralized, easy-to-use management dashboard.',
  },
]

export default function Projects() {
  const [hovered, setHovered] = useState(null)
  return (
    <section id="projects" style={{padding:'6rem var(--pad)',maxWidth:'var(--max-w)',margin:'0 auto'}}>
      <p className="section-label">Projects</p>
      <div style={{display:'flex',justifyContent:'space-between',alignItems:'flex-end',marginBottom:'3rem'}}>
        <h2 style={{fontFamily:'var(--serif)',fontSize:36,letterSpacing:'-0.5px',lineHeight:1.2}}>
          Things I've<br/><em style={{fontStyle:'italic',color:'var(--ink-2)'}}>built & shipped</em>
        </h2>
        <p style={{fontSize:13,color:'var(--ink-3)',maxWidth:200,textAlign:'right',lineHeight:1.6}}>Real projects solving real problems</p>
      </div>
      <div style={{display:'flex',flexDirection:'column',gap:20}}>
        {projects.map((p,i)=>(
          <div key={i}
            onMouseEnter={()=>setHovered(i)} onMouseLeave={()=>setHovered(null)}
            style={{
              background:'var(--bg)',
              border:`1px solid ${hovered===i?'var(--line-strong)':'var(--line)'}`,
              borderRadius:'var(--radius-lg)',padding:'2rem',
              boxShadow:hovered===i?'var(--shadow-md)':'var(--shadow-sm)',
              transition:'all 0.2s ease',
              transform:hovered===i?'translateY(-2px)':'none',
              position:'relative',overflow:'hidden',
            }}>
            {p.highlight && (
              <div style={{position:'absolute',top:20,right:20,fontSize:11,fontWeight:500,padding:'4px 10px',borderRadius:99,background:'var(--accent-light)',color:'var(--accent)',border:'1px solid rgba(42,106,74,0.2)'}}>Featured</div>
            )}
            <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'2rem'}}>
              <div>
                <div style={{display:'flex',alignItems:'center',gap:12,marginBottom:'1rem'}}>
                  <div style={{width:44,height:44,borderRadius:'var(--radius-md)',background:'var(--bg-2)',display:'flex',alignItems:'center',justifyContent:'center',fontSize:22}}>{p.emoji}</div>
                  <div>
                    <h3 style={{fontSize:18,fontFamily:'var(--serif)',fontWeight:400}}>{p.title}</h3>
                    <p style={{fontSize:12,color:'var(--ink-3)'}}>{p.subtitle}</p>
                  </div>
                </div>
                <p style={{fontSize:14,lineHeight:1.8,color:'var(--ink-2)',marginBottom:'1.25rem'}}>{p.desc}</p>
                <div style={{display:'flex',gap:6,flexWrap:'wrap'}}>
                  {p.tags.map(t=>(
                    <span key={t} style={{fontSize:11,padding:'3px 10px',borderRadius:99,background:'var(--bg-2)',color:'var(--ink-2)',border:'1px solid var(--line)'}}>{t}</span>
                  ))}
                </div>
              </div>
              <div style={{display:'flex',flexDirection:'column',gap:16}}>
                <div style={{background:'var(--bg-2)',borderRadius:'var(--radius-md)',padding:'1rem 1.25rem'}}>
                  <p style={{fontSize:11,color:'var(--ink-3)',marginBottom:4,textTransform:'uppercase',letterSpacing:'0.05em',fontWeight:500}}>My role</p>
                  <p style={{fontSize:13,fontWeight:500}}>{p.role}</p>
                </div>
                <div style={{background:'var(--accent-light)',borderRadius:'var(--radius-md)',padding:'1rem 1.25rem',borderLeft:'3px solid var(--accent)'}}>
                  <p style={{fontSize:11,color:'var(--accent)',marginBottom:4,textTransform:'uppercase',letterSpacing:'0.05em',fontWeight:500}}>Impact</p>
                  <p style={{fontSize:13,lineHeight:1.6,color:'var(--ink-2)'}}>{p.outcome}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
