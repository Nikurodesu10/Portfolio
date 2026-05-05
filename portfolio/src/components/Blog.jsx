import React from 'react'

const events = [
  { title:'GDG DevFest Bacolod 2025', org:'University of St. La Salle – Bacolod City', date:'November 2025', desc:'Attended Google Developer Group DevFest, exploring the latest in web, mobile, and AI development technologies.', tag:'Tech Conference' },
  { title:'TechTrack: Mapping Your Future Tech', org:'University of St. La Salle – Bacolod City', date:'November 2025', desc:'Career guidance seminar focused on navigating tech career pathways and emerging opportunities in the industry.', tag:'Career Development' },
  { title:'Cybersecurity for National Security', org:'University of St. La Salle – Bacolod City', date:'August 2025', desc:'Seminar exploring the role of cybersecurity in protecting national infrastructure and digital governance.', tag:'Cybersecurity' },
  { title:'CS Expo 3.0 Pitching Competition', org:'University of St. La Salle – Bacolod City', date:'April 2025', desc:"Participated in the college's annual computing expo, presenting and pitching innovative tech projects.", tag:'Competition' },
]

const tagStyle = {
  'Tech Conference':   { bg:'#e8f3ed', color:'#2a6a4a' },
  'Career Development':{ bg:'#eef2ff', color:'#4f46e5' },
  'Cybersecurity':     { bg:'#fef3e2', color:'#c07020' },
  'Competition':       { bg:'#fce7f3', color:'#be185d' },
}

export default function Blog() {
  return (
    <section id="blog" style={{padding:'6rem var(--pad)',maxWidth:'var(--max-w)',margin:'0 auto'}}>
      <p className="section-label">Seminars & Events</p>
      <div style={{display:'flex',justifyContent:'space-between',alignItems:'flex-end',marginBottom:'3rem'}}>
        <h2 style={{fontFamily:'var(--serif)',fontSize:36,letterSpacing:'-0.5px',lineHeight:1.2}}>
          Learning &amp;<br/><em style={{fontStyle:'italic',color:'var(--ink-2)'}}>growing</em>
        </h2>
        <p style={{fontSize:13,color:'var(--ink-3)',maxWidth:200,textAlign:'right',lineHeight:1.6}}>Conferences, workshops & events</p>
      </div>
      <div style={{display:'flex',flexDirection:'column',gap:16}}>
        {events.map((e,i)=>(
          <div key={i} style={{
            display:'grid',gridTemplateColumns:'1fr auto',background:'var(--bg)',
            border:'1px solid var(--line)',borderRadius:'var(--radius-lg)',padding:'1.5rem 1.75rem',
            boxShadow:'var(--shadow-sm)',gap:'1rem',alignItems:'center',transition:'all 0.2s',
          }}
          onMouseEnter={e2=>{e2.currentTarget.style.borderColor='var(--line-strong)';e2.currentTarget.style.boxShadow='var(--shadow-md)'}}
          onMouseLeave={e2=>{e2.currentTarget.style.borderColor='var(--line)';e2.currentTarget.style.boxShadow='var(--shadow-sm)'}}
          >
            <div>
              <div style={{display:'flex',alignItems:'center',gap:10,marginBottom:6}}>
                <h3 style={{fontSize:15,fontWeight:500}}>{e.title}</h3>
                <span style={{fontSize:10,fontWeight:500,padding:'2px 8px',borderRadius:99,background:tagStyle[e.tag]?.bg,color:tagStyle[e.tag]?.color}}>{e.tag}</span>
              </div>
              <p style={{fontSize:13,color:'var(--ink-2)',lineHeight:1.7}}>{e.desc}</p>
              <p style={{fontSize:11,color:'var(--ink-3)',marginTop:8}}>{e.org} · {e.date}</p>
            </div>
            <span style={{fontSize:18,color:'var(--ink-3)'}}>↗</span>
          </div>
        ))}
      </div>
    </section>
  )
}
