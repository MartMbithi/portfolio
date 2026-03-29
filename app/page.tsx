import Link from 'next/link'
import TypewriterText from '@/components/TypewriterText'

const techStack = [
  'JavaScript', 'TypeScript', 'PHP', 'Java', 'Python',
  'React', 'Next.js', 'Node.js', 'Laravel',
  'PostgreSQL', 'MySQL', 'MongoDB', 'Redis',
  'Linux', 'Docker', 'AWS', 'REST APIs', 'GraphQL',
]

const stats = [
  { value: '7+', label: 'years experience' },
  { value: '30+', label: 'projects delivered' },
  { value: '3', label: 'sectors served' },
]

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section
        className="grid-bg"
        style={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          paddingTop: '64px',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div style={{ position: 'absolute', top: '30%', right: '-10%', width: '600px', height: '600px', background: 'radial-gradient(circle, rgba(0, 229, 160, 0.06) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', bottom: '10%', left: '-5%', width: '400px', height: '400px', background: 'radial-gradient(circle, rgba(0, 180, 216, 0.04) 0%, transparent 70%)', pointerEvents: 'none' }} />

        <div
          style={{
            maxWidth: '1200px',
            margin: '0 auto',
            padding: '5rem 2rem',
            width: '100%',
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '4rem',
            alignItems: 'center',
            position: 'relative',
            zIndex: 1,
          }}
        >
          {/* Left: Text */}
          <div>
            {/* Status badge */}
            <div
              className="animate-fade-up"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                background: 'rgba(0, 229, 160, 0.08)',
                border: '1px solid rgba(0, 229, 160, 0.2)',
                borderRadius: '100px',
                padding: '0.3rem 0.9rem',
                marginBottom: '2rem',
              }}
            >
              <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--accent)', animation: 'blink 2s ease infinite', boxShadow: '0 0 6px var(--accent)' }} />
              <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.7rem', color: 'var(--accent)', fontWeight: 500 }}>
                available for opportunities
              </span>
            </div>

            {/* Name */}
            <div className="animate-fade-up delay-100">
              <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.78rem', color: 'var(--text-muted)', marginBottom: '0.75rem', letterSpacing: '0.1em' }}>
                // martin mbithi nzilani
              </div>
              <h1
                style={{
                  fontFamily: 'Sora, sans-serif',
                  fontSize: 'clamp(2.4rem, 5vw, 3.8rem)',
                  fontWeight: 800,
                  lineHeight: 1.1,
                  color: 'var(--text-primary)',
                  marginBottom: '1rem',
                }}
              >
                Martin
                <br />
                <span className="gradient-text">Mbithi</span>
              </h1>

              {/* Typewriter */}
              <div style={{ marginBottom: '1.75rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.82rem', color: 'var(--text-muted)' }}>$&gt;</span>
                <TypewriterText />
              </div>
            </div>

            <p
              className="animate-fade-up delay-200"
              style={{ color: 'var(--text-secondary)', fontSize: '0.97rem', lineHeight: 1.8, maxWidth: '500px', marginBottom: '2.5rem' }}
            >
              7+ years building scalable web, mobile &amp; cloud systems across
              government and private sectors. Specializing in systems automation,
              RESTful APIs, DevOps, and ICT infrastructure.
            </p>

            {/* CTAs */}
            <div className="animate-fade-up delay-300" style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '3rem' }}>
              <Link
                href="/portfolio"
                style={{
                  fontFamily: 'JetBrains Mono, monospace',
                  fontSize: '0.82rem',
                  fontWeight: 600,
                  color: 'var(--bg)',
                  background: 'var(--accent)',
                  padding: '0.7rem 1.6rem',
                  borderRadius: '6px',
                  textDecoration: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                }}
              >
                view_projects() →
              </Link>
              <a
                href="https://martmbithi.github.io/assets/resume/martin_mbithi_resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontFamily: 'JetBrains Mono, monospace',
                  fontSize: '0.82rem',
                  fontWeight: 500,
                  color: 'var(--text-secondary)',
                  border: '1px solid var(--border)',
                  padding: '0.7rem 1.6rem',
                  borderRadius: '6px',
                  textDecoration: 'none',
                }}
              >
                ↓ resume.pdf
              </a>
            </div>

            {/* Stats */}
            <div
              className="animate-fade-up delay-400"
              style={{ display: 'flex', gap: '2.5rem', paddingTop: '2rem', borderTop: '1px solid var(--border)' }}
            >
              {stats.map((s) => (
                <div key={s.label}>
                  <div style={{ fontFamily: 'Sora, sans-serif', fontSize: '1.8rem', fontWeight: 800, color: 'var(--accent)', lineHeight: 1, marginBottom: '0.25rem' }}>{s.value}</div>
                  <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.68rem', color: 'var(--text-muted)', letterSpacing: '0.08em' }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Photo + Code block */}
          <div className="animate-fade-up delay-200 hidden md:block" style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>

            {/* Profile photo card */}
            <div
              style={{
                position: 'relative',
                borderRadius: '14px',
                overflow: 'hidden',
                border: '1px solid var(--border)',
                boxShadow: '0 32px 64px rgba(0,0,0,0.5), 0 0 0 1px rgba(0,229,160,0.06)',
                background: 'var(--surface)',
              }}
            >
              <div style={{ height: '3px', background: 'linear-gradient(90deg, var(--accent) 0%, #00b4d8 100%)' }} />
              <div
                style={{
                  background: 'var(--surface-2, #131a22)',
                  padding: '0.65rem 1.1rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  borderBottom: '1px solid var(--border)',
                }}
              >
                <div style={{ display: 'flex', gap: '6px' }}>
                  <span style={{ width: 9, height: 9, borderRadius: '50%', background: '#ff5f56', display: 'block' }} />
                  <span style={{ width: 9, height: 9, borderRadius: '50%', background: '#ffbd2e', display: 'block' }} />
                  <span style={{ width: 9, height: 9, borderRadius: '50%', background: '#27c93f', display: 'block' }} />
                </div>
                <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.65rem', color: 'var(--text-muted)' }}>martin_mbithi.webp</span>
                <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.65rem', color: 'var(--accent)' }}>● live</span>
              </div>

              <div style={{ position: 'relative', height: '340px', overflow: 'hidden' }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/martin_profile.webp"
                  alt="Martin Mbithi — Senior Software Engineer"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top', display: 'block' }}
                />
                <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '80px', background: 'linear-gradient(to top, var(--surface) 0%, transparent 100%)' }} />
              </div>

              <div style={{ padding: '0.9rem 1.25rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div>
                  <p style={{ fontFamily: 'Sora, sans-serif', fontSize: '0.9rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '1px' }}>Martin Mbithi</p>
                  <p style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.65rem', color: 'var(--accent)' }}>Senior Software Engineer · Kenya 🇰🇪</p>
                </div>
                <div style={{ display: 'flex', gap: '1.25rem' }}>
                  <a href="https://github.com/MartMbithi" target="_blank" rel="noopener noreferrer"
                    style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.68rem', color: 'var(--text-muted)', textDecoration: 'none' }}>
                    github
                  </a>
                  <a href="https://www.linkedin.com/in/martin-mbithi-6626b617a/" target="_blank" rel="noopener noreferrer"
                    style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.68rem', color: 'var(--text-muted)', textDecoration: 'none' }}>
                    linkedin
                  </a>
                </div>
              </div>
            </div>

            {/* Code block */}
            <div
              style={{
                background: 'var(--surface)',
                border: '1px solid var(--border)',
                borderRadius: '12px',
                overflow: 'hidden',
                fontFamily: 'JetBrains Mono, monospace',
                fontSize: '0.78rem',
                boxShadow: '0 8px 32px rgba(0,0,0,0.3)',
              }}
            >
              <div style={{ background: 'var(--surface-2, #131a22)', padding: '0.6rem 1.1rem', display: 'flex', alignItems: 'center', gap: '0.75rem', borderBottom: '1px solid var(--border)' }}>
                <div style={{ display: 'flex', gap: '5px' }}>
                  <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#ff5f56', display: 'block' }} />
                  <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#ffbd2e', display: 'block' }} />
                  <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#27c93f', display: 'block' }} />
                </div>
                <span style={{ color: 'var(--text-muted)', fontSize: '0.65rem' }}>martin.profile.ts</span>
              </div>
              <div style={{ padding: '1.25rem', lineHeight: 1.75 }}>
                <div><span style={{ color: '#569cd6' }}>const</span> <span style={{ color: '#9cdcfe' }}>engineer</span> <span style={{ color: 'var(--text-secondary)' }}>=</span> {'{'}</div>
                <div style={{ paddingLeft: '1.25rem' }}>
                  <div><span style={{ color: '#9cdcfe' }}>name</span><span style={{ color: 'var(--text-secondary)' }}>:</span> <span style={{ color: '#ce9178' }}>&quot;Martin Mbithi&quot;</span><span style={{ color: 'var(--text-secondary)' }}>,</span></div>
                  <div><span style={{ color: '#9cdcfe' }}>role</span><span style={{ color: 'var(--text-secondary)' }}>:</span> <span style={{ color: '#ce9178' }}>&quot;Senior Software Engineer&quot;</span><span style={{ color: 'var(--text-secondary)' }}>,</span></div>
                  <div><span style={{ color: '#9cdcfe' }}>yrs</span><span style={{ color: 'var(--text-secondary)' }}>:</span> <span style={{ color: '#b5cea8' }}>7</span><span style={{ color: 'var(--text-secondary)' }}>,</span></div>
                  <div><span style={{ color: '#9cdcfe' }}>stack</span><span style={{ color: 'var(--text-secondary)' }}>:</span> <span style={{ color: '#ce9178' }}>&quot;JS · PHP · Java · React · Linux&quot;</span><span style={{ color: 'var(--text-secondary)' }}>,</span></div>
                  <div><span style={{ color: '#9cdcfe' }}>available</span><span style={{ color: 'var(--text-secondary)' }}>:</span> <span style={{ color: '#569cd6' }}>true</span></div>
                </div>
                <div><span style={{ color: 'var(--text-secondary)' }}>{'};'}</span></div>
                <div style={{ marginTop: '0.5rem' }}>
                  <span style={{ color: '#dcdcaa' }}>export default</span>{' '}
                  <span style={{ color: '#4ec9b0' }}>engineer</span>
                  <span className="cursor" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tech stack strip */}
      <section style={{ borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)', background: 'var(--surface)', padding: '2rem' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <p style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.68rem', color: 'var(--text-muted)', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '1rem' }}>
            // tech stack
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
            {techStack.map((tech) => (
              <span key={tech} className="tech-tag">{tech}</span>
            ))}
          </div>
        </div>
      </section>

      {/* About snippet */}
      <section style={{ padding: '6rem 2rem', maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '4rem', alignItems: 'start' }}>
          <div>
            <p className="section-label" style={{ marginBottom: '1rem' }}>// who I am</p>
            <h2 style={{ fontFamily: 'Sora, sans-serif', fontSize: '2rem', fontWeight: 700, color: 'var(--text-primary)', lineHeight: 1.2 }}>
              Building systems<br />that <span className="gradient-text">actually work</span>
            </h2>
          </div>
          <div>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', lineHeight: 1.8, marginBottom: '1.5rem' }}>
              Results-driven Software Engineer with 7+ years of hands-on experience designing,
              building, and maintaining scalable web, mobile, and cloud-based systems. Proven expertise
              in full-stack development, Linux/Unix systems, cloud infrastructure, and API integrations —
              with a strong record of automating processes, improving system performance, and delivering
              secure, high-availability solutions.
            </p>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', lineHeight: 1.8, marginBottom: '2rem' }}>
              Experienced across government, NGOs, and private-sector environments, with a strong
              ability to translate business requirements into robust technical solutions. Adept at
              Agile delivery, DevOps practices, and mentoring junior engineers.
            </p>
            <Link href="/about" style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.8rem', color: 'var(--accent)', textDecoration: 'none' }}>
              read_more() →
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
