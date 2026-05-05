import React, { useEffect, useState } from 'react'

const roles = ['Front-End Developer','UI/UX Designer','React Developer','Web Developer']

export default function Hero() {
  const [idx, setIdx] = useState(0)
  const [vis, setVis] = useState(true)
  useEffect(() => {
    const t = setInterval(() => {
      setVis(false)
      setTimeout(() => { setIdx(i => (i+1) % roles.length); setVis(true) }, 400)
    }, 2800)
    return () => clearInterval(t)
  }, [])
  const go = id => document.getElementById(id)?.scrollIntoView({ behavior:'smooth' })

  return (
    <section style={{
      minHeight:'100vh',display:'flex',alignItems:'center',
      padding:'100px var(--pad) 60px',maxWidth:'var(--max-w)',margin:'0 auto',
    }}>
      <div style={{width:'100%',animation:'fadeSlideIn 0.8s ease both'}}>
        <div style={{
          display:'inline-flex',alignItems:'center',gap:8,
          background:'var(--accent-light)',color:'var(--accent)',
          borderRadius:99,padding:'5px 14px',fontSize:12,fontWeight:500,
          marginBottom:'1.75rem',border:'1px solid rgba(42,106,74,0.2)',
        }}>
          <span style={{width:7,height:7,borderRadius:'50%',background:'var(--accent)',animation:'pulse 2s ease-in-out infinite'}} />
          Available for opportunities
        </div>

        <h1 style={{
          fontFamily:'var(--serif)',fontSize:'clamp(42px,8vw,68px)',
          lineHeight:1.05,letterSpacing:'-1.5px',marginBottom:'1rem',
        }}>
          Joannah Nicole<br/>
          <em style={{fontStyle:'italic',color:'var(--ink-2)'}}>T. Hofileña</em>
        </h1>

        <div style={{fontSize:'clamp(16px,2.5vw,22px)',fontWeight:300,color:'var(--ink-2)',marginBottom:'1.5rem',minHeight:36,display:'flex',alignItems:'center',gap:10}}>
          <span style={{
            opacity:vis?1:0,transform:vis?'translateY(0)':'translateY(-8px)',
            transition:'all 0.35s ease',color:'var(--accent)',fontWeight:500,
          }}>{roles[idx]}</span>
          <span style={{color:'var(--line-strong)'}}>· Philippines</span>
        </div>

        <p style={{fontSize:15,lineHeight:1.85,color:'var(--ink-2)',maxWidth:560,marginBottom:'2.5rem'}}>
          I build responsive, user-centered web applications with a sharp eye for clean interface design.
          Bridging design thinking and technical execution — from Figma wireframes to production React apps —
          with experience in PHP, MySQL, and full deployment workflows.
        </p>

        <div style={{display:'flex',gap:12,flexWrap:'wrap',marginBottom:'3rem'}}>
          <button onClick={() => go('projects')} style={{
            background:'var(--ink)',color:'var(--bg)',border:'none',
            borderRadius:'var(--radius-sm)',padding:'12px 24px',
            fontSize:14,fontWeight:500,cursor:'pointer',fontFamily:'var(--sans)',transition:'opacity 0.15s',
          }}
          onMouseEnter={e=>e.currentTarget.style.opacity='0.8'}
          onMouseLeave={e=>e.currentTarget.style.opacity='1'}
          >View my work →</button>
          <a href="mailto:hofilenanicole1@gmail.com" style={{
            background:'transparent',color:'var(--ink)',
            border:'1px solid var(--line-strong)',borderRadius:'var(--radius-sm)',
            padding:'12px 24px',fontSize:14,fontWeight:500,fontFamily:'var(--sans)',
            transition:'background 0.15s',display:'inline-block',
          }}
          onMouseEnter={e=>e.currentTarget.style.background='var(--bg-2)'}
          onMouseLeave={e=>e.currentTarget.style.background='transparent'}
          >Get in touch</a>
        </div>

        <div style={{display:'flex',gap:8,flexWrap:'wrap'}}>
          {['HTML','CSS','JavaScript','React.js','PHP','MySQL','Figma','UI/UX'].map(t=>(
            <span key={t} style={{
              fontSize:12,padding:'4px 12px',borderRadius:99,
              background:'var(--bg-2)',color:'var(--ink-2)',border:'1px solid var(--line)',
            }}>{t}</span>
          ))}
        </div>

        <div style={{marginTop:'4rem',display:'flex',alignItems:'center',gap:10,color:'var(--ink-3)',fontSize:12}}>
          <span style={{animation:'bounce 2s ease-in-out infinite'}}>↓</span>
          Scroll to explore
        </div>
      </div>
    </section>
  )
}
