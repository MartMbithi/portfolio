import Link from 'next/link'

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
        {/* Radial glow */}
        <div
          style={{
            position: 'absolute',
            top: '30%',
            right: '-10%',
            width: '600px',
            height: '600px',
            background: 'radial-gradient(circle, rgba(0, 229, 160, 0.06) 0%, transparent 70%)',
            pointerEvents: 'none',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: '10%',
            left: '-5%',
            width: '400px',
            height: '400px',
            background: 'radial-gradient(circle, rgba(0, 180, 216, 0.04) 0%, transparent 70%)',
            pointerEvents: 'none',
          }}
        />

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
              <span
                style={{
                  width: '6px',
                  height: '6px',
                  borderRadius: '50%',
                  background: 'var(--accent)',
                  animation: 'blink 2s ease infinite',
                  boxShadow: '0 0 6px var(--accent)',
                }}
              />
              <span
                style={{
                  fontFamily: 'JetBrains Mono, monospace',
                  fontSize: '0.7rem',
                  color: 'var(--accent)',
                  fontWeight: 500,
                }}
              >
                available for opportunities
              </span>
            </div>

            {/* Name & Title */}
            <div className="animate-fade-up delay-100">
              <div
                style={{
                  fontFamily: 'JetBrains Mono, monospace',
                  fontSize: '0.78rem',
                  color: 'var(--text-muted)',
                  marginBottom: '0.75rem',
                  letterSpacing: '0.1em',
                }}
              >
                // senior software engineer
              </div>
              <h1
                style={{
                  fontFamily: 'Sora, sans-serif',
                  fontSize: 'clamp(2.4rem, 5vw, 3.8rem)',
                  fontWeight: 800,
                  lineHeight: 1.1,
                  color: 'var(--text-primary)',
                  marginBottom: '0.5rem',
                }}
              >
                Martin
                <br />
                <span className="gradient-text">Mbithi</span>
              </h1>
            </div>

            <p
              className="animate-fade-up delay-200"
              style={{
                color: 'var(--text-secondary)',
                fontSize: '1rem',
                lineHeight: 1.75,
                maxWidth: '500px',
                marginBottom: '2.5rem',
              }}
            >
              7+ years building scalable web, mobile & cloud systems across
              government and private sectors. Specializing in systems automation,
              RESTful APIs, DevOps, and ICT infrastructure.
            </p>

            {/* CTAs */}
            <div
              className="animate-fade-up delay-300"
              style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '3rem' }}
            >
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
                  transition: 'all 0.2s',
                }}
              >
                view_projects()
                <span style={{ fontSize: '0.9rem' }}>→</span>
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
                  background: 'transparent',
                  border: '1px solid var(--border)',
                  padding: '0.7rem 1.6rem',
                  borderRadius: '6px',
                  textDecoration: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  transition: 'all 0.2s',
                }}
              >
                ↓ resume.pdf
              </a>
            </div>

            {/* Stats */}
            <div
              className="animate-fade-up delay-400"
              style={{
                display: 'flex',
                gap: '2.5rem',
                paddingTop: '2rem',
                borderTop: '1px solid var(--border)',
              }}
            >
              {stats.map((s) => (
                <div key={s.label}>
                  <div
                    style={{
                      fontFamily: 'Sora, sans-serif',
                      fontSize: '1.8rem',
                      fontWeight: 800,
                      color: 'var(--accent)',
                      lineHeight: 1,
                      marginBottom: '0.25rem',
                    }}
                  >
                    {s.value}
                  </div>
                  <div
                    style={{
                      fontFamily: 'JetBrains Mono, monospace',
                      fontSize: '0.68rem',
                      color: 'var(--text-muted)',
                      letterSpacing: '0.08em',
                    }}
                  >
                    {s.label}
                  </div>
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
              {/* Accent top bar */}
              <div
                style={{
                  height: '3px',
                  background: 'linear-gradient(90deg, var(--accent) 0%, #00b4d8 100%)',
                }}
              />
              {/* Window chrome */}
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
                <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.65rem', color: 'var(--text-muted)' }}>
                  martin_mbithi.webp
                </span>
                <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.65rem', color: 'var(--accent)' }}>
                  ● live
                </span>
              </div>

              {/* Photo */}
              <div style={{ position: 'relative', height: '340px', overflow: 'hidden' }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://martmbithi.github.io/assets/img/slider/martin_profile.webp"
                  alt="Martin Mbithi — Senior Software Engineer"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'center top',
                    display: 'block',
                  }}
                />
                {/* Subtle gradient at bottom */}
                <div
                  style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: '80px',
                    background: 'linear-gradient(to top, var(--surface) 0%, transparent 100%)',
                  }}
                />
              </div>

              {/* Name strip inside card */}
              <div
                style={{
                  padding: '0.9rem 1.25rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}
              >
                <div>
                  <p style={{ fontFamily: 'Sora, sans-serif', fontSize: '0.9rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '1px' }}>
                    Martin Mbithi
                  </p>
                  <p style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.65rem', color: 'var(--accent)' }}>
                    Senior Software Engineer · Kenya 🇰🇪
                  </p>
                </div>
                <div style={{ display: 'flex', gap: '0.5rem' }}>
                  {[
                    { href: 'https://github.com/MartMbithi', title: 'GitHub', svg: <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12"/></svg> },
                    { href: 'https://www.linkedin.com/in/martin-mbithi-6626b617a/', title: 'LinkedIn', svg: <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg> },
                  ].map((s) => (
                    <a
                      key={s.title}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      title={s.title}
                      style={{
                        width: '30px',
                        height: '30px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderRadius: '6px',
                        background: 'var(--bg)',
                        border: '1px solid var(--border)',
                        color: 'var(--text-muted)',
                        textDecoration: 'none',
                        transition: 'all 0.2s',
                      }}
                    >
                      {s.svg}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Code block below photo */}
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
              <div
                style={{
                  background: 'var(--surface-2, #131a22)',
                  padding: '0.6rem 1.1rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  borderBottom: '1px solid var(--border)',
                }}
              >
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
      <section
        style={{
          borderTop: '1px solid var(--border)',
          borderBottom: '1px solid var(--border)',
          background: 'var(--surface)',
          padding: '2rem',
          overflow: 'hidden',
        }}
      >
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <p
            style={{
              fontFamily: 'JetBrains Mono, monospace',
              fontSize: '0.68rem',
              color: 'var(--text-muted)',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              marginBottom: '1rem',
            }}
          >
            // tech stack
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
            {techStack.map((tech) => (
              <span key={tech} className="tech-tag">{tech}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Quick about snippet */}
      <section style={{ padding: '6rem 2rem', maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '4rem', alignItems: 'start' }}>
          <div>
            <p className="section-label" style={{ marginBottom: '1rem' }}>// who I am</p>
            <h2
              style={{
                fontFamily: 'Sora, sans-serif',
                fontSize: '2rem',
                fontWeight: 700,
                color: 'var(--text-primary)',
                lineHeight: 1.2,
              }}
            >
              Building systems
              <br />
              that <span className="gradient-text">actually work</span>
            </h2>
          </div>
          <div>
            <p
              style={{
                color: 'var(--text-secondary)',
                fontSize: '1rem',
                lineHeight: 1.8,
                marginBottom: '1.5rem',
              }}
            >
              Results-driven Software Engineer with 7+ years of hands-on experience designing,
              building, and maintaining scalable web, mobile, and cloud-based systems. Proven expertise
              in full-stack development, Linux/Unix systems, cloud infrastructure, and API integrations —
              with a strong record of automating processes, improving system performance, and delivering
              secure, high-availability solutions.
            </p>
            <p
              style={{
                color: 'var(--text-secondary)',
                fontSize: '1rem',
                lineHeight: 1.8,
                marginBottom: '2rem',
              }}
            >
              Experienced across government, NGOs, and private-sector environments, with a strong
              ability to translate business requirements into robust technical solutions. Adept at
              Agile delivery, DevOps practices, and mentoring junior engineers.
            </p>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <Link
                href="/about"
                style={{
                  fontFamily: 'JetBrains Mono, monospace',
                  fontSize: '0.8rem',
                  color: 'var(--accent)',
                  textDecoration: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  transition: 'gap 0.2s',
                }}
              >
                read_more() →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
