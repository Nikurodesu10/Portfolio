import React from 'react'

const stats = [
  { num:'2+', label:'Years of hands-on experience' },
  { num:'2',  label:'Full-stack projects shipped' },
  { num:'4th',label:'Year BSIT student, USLS' },
  { num:'5+', label:'Seminars & tech events attended' },
]

export default function About() {
  return (
    <section id="about" style={{padding:'6rem var(--pad)',maxWidth:'var(--max-w)',margin:'0 auto'}}>
      <p className="section-label">About me</p>
      <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'3rem',alignItems:'start'}}>
        <div>
          <h2 style={{fontFamily:'var(--serif)',fontSize:36,lineHeight:1.15,letterSpacing:'-0.5px',marginBottom:'1.5rem'}}>
            Designing with purpose,<br/>
            <em style={{fontStyle:'italic',color:'var(--ink-2)'}}>building with precision.</em>
          </h2>
          <p style={{fontSize:15,lineHeight:1.85,color:'var(--ink-2)',marginBottom:'1rem'}}>
            I'm a Front-End Developer and UI/UX Designer from Victorias City, Philippines, passionate
            about crafting interfaces that feel as good as they look. My work sits at the intersection
            of design thinking and technical execution.
          </p>
          <p style={{fontSize:15,lineHeight:1.85,color:'var(--ink-2)',marginBottom:'1.5rem'}}>
            Beyond building, I'm an active student leader serving as 4th Year Batch Deputy
            at the USLS CCS Student Council, and currently working as Project Manager at IReply Back Office Inc.
          </p>
          <div style={{background:'var(--bg-2)',borderRadius:'var(--radius-md)',padding:'1rem 1.25rem',borderLeft:'3px solid var(--accent)'}}>
            <p style={{fontSize:12,color:'var(--accent)',fontWeight:500,marginBottom:4}}>Currently studying</p>
            <p style={{fontSize:14,fontWeight:500}}>BS Information Technology</p>
            <p style={{fontSize:13,color:'var(--ink-2)'}}>University of St. La Salle · 2022 – Present</p>
          </div>
        </div>
        <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:12}}>
          {stats.map(s=>(
            <div key={s.num} style={{background:'var(--bg)',border:'1px solid var(--line)',borderRadius:'var(--radius-md)',padding:'1.25rem',boxShadow:'var(--shadow-sm)'}}>
              <p style={{fontFamily:'var(--serif)',fontSize:36,letterSpacing:'-1px',lineHeight:1,marginBottom:6}}>{s.num}</p>
              <p style={{fontSize:12,color:'var(--ink-3)',lineHeight:1.5}}>{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
