import React, { useState } from 'react'

const experiences = [
  { date:'Dec 2025 – Present', role:'Project Manager', org:'IReply Back Office Inc.', type:'work',
    desc:'Leading project workflows and coordinating team operations, ensuring timely and quality delivery of client projects.',
    tags:['Project Management','Team Leadership','Client Relations'] },
  { date:'Jan 2025 – Present', role:'4th Year Batch Deputy', org:'USLS CCS Student Council', type:'leadership',
    desc:'Representing the 4th year batch in the College of Computing Studies Student Council. Organizing events and advocating for student interests.',
    tags:['Leadership','Event Management','Student Advocacy'] },
  { date:'2024 – 2025', role:'3rd Year Batch Treasurer', org:'USLS CCS Student Council', type:'leadership',
    desc:'Managed all financial records and budgeting for batch-level student council activities.',
    tags:['Financial Management','Budgeting','Reporting'] },
  { date:'2024 – 2025', role:'Member', org:'Information Technology Society USLS', type:'leadership',
    desc:'Active member contributing to IT-related events, workshops, and community-building activities.',
    tags:['Community','IT Events'] },
  { date:'2022 – Present', role:'BS Information Technology', org:'University of St. La Salle', type:'education',
    desc:'Studying web development, systems analysis, database management, and UI/UX design. Active in academics and extracurriculars.',
    tags:['Web Dev','Systems Analysis','Database','UI/UX'] },
  { date:'2020 – 2022', role:'Senior High – STEM Strand', org:'University of Saint La Salle – Bacolod', type:'education',
    desc:'Completed STEM strand with Academic Achievement recognition.',
    tags:['STEM','Academic Achievement'] },
]

const typeStyle = {
  work:      { bg:'#e8f3ed', color:'#2a6a4a', label:'Work' },
  leadership:{ bg:'#eef2ff', color:'#4f46e5', label:'Leadership' },
  education: { bg:'#fef3e2', color:'#c07020', label:'Education' },
}

export default function Experience() {
  const [active, setActive] = useState(0)
  return (
    <section id="experience" style={{padding:'6rem var(--pad)',background:'var(--bg-2)'}}>
      <div style={{maxWidth:'var(--max-w)',margin:'0 auto'}}>
        <p className="section-label">Experience & Education</p>
        <h2 style={{fontFamily:'var(--serif)',fontSize:36,letterSpacing:'-0.5px',marginBottom:'3rem',lineHeight:1.2}}>The journey so far</h2>
        <div style={{display:'grid',gridTemplateColumns:'260px 1fr',gap:'2rem'}}>
          <div style={{display:'flex',flexDirection:'column',gap:4}}>
            {experiences.map((e,i)=>(
              <button key={i} onClick={()=>setActive(i)} style={{
                textAlign:'left',
                background:active===i?'var(--bg)':'transparent',
                border:active===i?'1px solid var(--line)':'1px solid transparent',
                borderRadius:'var(--radius-md)',padding:'12px 14px',cursor:'pointer',
                transition:'all 0.15s',boxShadow:active===i?'var(--shadow-sm)':'none',
              }}>
                <p style={{fontSize:13,fontWeight:active===i?500:400,color:active===i?'var(--ink)':'var(--ink-2)',marginBottom:2}}>{e.role}</p>
                <p style={{fontSize:11,color:'var(--ink-3)'}}>{e.org}</p>
              </button>
            ))}
          </div>
          <div style={{background:'var(--bg)',border:'1px solid var(--line)',borderRadius:'var(--radius-lg)',padding:'2rem',boxShadow:'var(--shadow-sm)'}}>
            <div style={{display:'flex',justifyContent:'space-between',alignItems:'flex-start',marginBottom:'1rem'}}>
              <div>
                <p style={{fontSize:11,color:'var(--ink-3)',marginBottom:4}}>{experiences[active].date}</p>
                <h3 style={{fontSize:20,fontFamily:'var(--serif)',fontWeight:400,marginBottom:4}}>{experiences[active].role}</h3>
                <p style={{fontSize:14,color:'var(--ink-2)'}}>{experiences[active].org}</p>
              </div>
              <span style={{
                fontSize:11,fontWeight:500,padding:'4px 10px',borderRadius:99,whiteSpace:'nowrap',
                background:typeStyle[experiences[active].type].bg,
                color:typeStyle[experiences[active].type].color,
              }}>{typeStyle[experiences[active].type].label}</span>
            </div>
            <p style={{fontSize:14,lineHeight:1.8,color:'var(--ink-2)',marginBottom:'1.5rem'}}>{experiences[active].desc}</p>
            <div style={{display:'flex',gap:8,flexWrap:'wrap'}}>
              {experiences[active].tags.map(t=>(
                <span key={t} style={{fontSize:11,padding:'3px 10px',borderRadius:99,background:'var(--bg-2)',color:'var(--ink-2)',border:'1px solid var(--line)'}}>{t}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
