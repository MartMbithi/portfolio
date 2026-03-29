import Link from 'next/link'

const skills = {
  'Languages': ['JavaScript', 'TypeScript', 'PHP', 'Java', 'Python', 'SQL', 'Bash'],
  'Frameworks & Libraries': ['React', 'Next.js', 'Node.js', 'Laravel', 'Express', 'Spring Boot'],
  'Databases': ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'SQLite'],
  'Cloud & DevOps': ['AWS', 'Docker', 'Linux', 'Nginx', 'Git', 'CI/CD'],
  'Specializations': ['REST APIs', 'GraphQL', 'Systems Automation', 'ERP Systems', 'ICT Infrastructure'],
}

const highlights = [
  {
    icon: '⚡',
    title: 'Systems Automation',
    desc: 'Reducing manual workflows through intelligent automation across government and enterprise systems.',
  },
  {
    icon: '🔗',
    title: 'API & Integration',
    desc: 'Designing and building robust RESTful APIs and seamless third-party integrations.',
  },
  {
    icon: '☁️',
    title: 'Cloud Infrastructure',
    desc: 'Deploying and managing high-availability systems on cloud and on-prem infrastructure.',
  },
  {
    icon: '🛡️',
    title: 'Security & Compliance',
    desc: 'Building secure systems aligned with public-sector ICT standards and best practices.',
  },
]

export default function About() {
  return (
    <div style={{ paddingTop: '64px' }}>
      {/* Header */}
      <section
        className="grid-bg"
        style={{
          padding: '5rem 2rem 3rem',
          borderBottom: '1px solid var(--border)',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'radial-gradient(ellipse at 60% 50%, rgba(0, 229, 160, 0.04) 0%, transparent 70%)',
            pointerEvents: 'none',
          }}
        />
        <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative' }}>
          <p className="section-label" style={{ marginBottom: '1rem' }}>// about.md</p>
          <h1
            style={{
              fontFamily: 'Sora, sans-serif',
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: 800,
              color: 'var(--text-primary)',
              lineHeight: 1.15,
              maxWidth: '700px',
            }}
          >
            Full-stack engineer with a bias for{' '}
            <span className="gradient-text">shipping</span>
          </h1>
        </div>
      </section>

      {/* Main Content */}
      <section style={{ padding: '5rem 2rem', maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '5rem' }}>
          {/* Bio */}
          <div>
            <div
              style={{
                background: 'var(--surface)',
                border: '1px solid var(--border)',
                borderRadius: '10px',
                padding: '2rem',
                marginBottom: '3rem',
                fontFamily: 'JetBrains Mono, monospace',
                fontSize: '0.8rem',
                lineHeight: 1.9,
              }}
            >
              <div style={{ color: 'var(--text-muted)', marginBottom: '0.5rem' }}>
                <span style={{ color: '#6a9955' }}>/**</span>
              </div>
              <div style={{ color: '#6a9955', paddingLeft: '1rem' }}>
                * Results-driven Software Engineer with 7+ years of hands-on
              </div>
              <div style={{ color: '#6a9955', paddingLeft: '1rem' }}>
                * experience designing, building, and maintaining scalable web,
              </div>
              <div style={{ color: '#6a9955', paddingLeft: '1rem' }}>
                * mobile, and cloud-based systems.
              </div>
              <div style={{ color: '#6a9955', paddingLeft: '1rem' }}>
                *
              </div>
              <div style={{ color: '#6a9955', paddingLeft: '1rem' }}>
                * @domain Government · NGO · Private Sector
              </div>
              <div style={{ color: '#6a9955', paddingLeft: '1rem' }}>
                * @focus Full-Stack · DevOps · API Design · Systems Automation
              </div>
              <div style={{ color: '#6a9955', paddingLeft: '1rem' }}>
                * @location Nairobi, Kenya 🇰🇪
              </div>
              <div style={{ color: '#6a9955' }}>*/</div>
            </div>

            <p
              style={{
                color: 'var(--text-secondary)',
                lineHeight: 1.85,
                marginBottom: '1.5rem',
                fontSize: '0.97rem',
              }}
            >
              Proven expertise in full-stack development, Linux/Unix systems, cloud infrastructure,
              and API integrations — with a strong record of automating processes, improving system
              performance, and delivering secure, high-availability solutions.
            </p>
            <p
              style={{
                color: 'var(--text-secondary)',
                lineHeight: 1.85,
                marginBottom: '2.5rem',
                fontSize: '0.97rem',
              }}
            >
              Experienced across government, NGOs, and private-sector environments, with a strong
              ability to translate business requirements into robust technical solutions. Adept at
              Agile delivery, DevOps practices, and mentoring junior engineers. Passionate about
              building reliable systems that deliver measurable impact.
            </p>

            <a
              href="https://martmbithi.github.io/assets/resume/martin_mbithi_resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontFamily: 'JetBrains Mono, monospace',
                fontSize: '0.82rem',
                fontWeight: 600,
                color: 'var(--bg)',
                background: 'var(--accent)',
                padding: '0.75rem 1.75rem',
                borderRadius: '6px',
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
              }}
            >
              ↓ download_resume.pdf
            </a>
          </div>

          {/* Sidebar: Quick info */}
          <div>
            {/* Profile photo */}
            <div
              style={{
                borderRadius: '10px',
                overflow: 'hidden',
                border: '1px solid var(--border)',
                marginBottom: '1.5rem',
                position: 'relative',
              }}
            >
              <div style={{ height: '3px', background: 'linear-gradient(90deg, var(--accent), #00b4d8)' }} />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/martin_profile.webp"
                alt="Martin Mbithi"
                style={{
                  width: '100%',
                  height: '260px',
                  objectFit: 'cover',
                  objectPosition: 'center top',
                  display: 'block',
                }}
              />
              <div
                style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  padding: '0.75rem 1rem',
                  background: 'linear-gradient(to top, rgba(8,12,16,0.95) 0%, transparent 100%)',
                  fontFamily: 'JetBrains Mono, monospace',
                  fontSize: '0.65rem',
                  color: 'var(--accent)',
                }}
              >
                ● available for hire
              </div>
            </div>

            <div
              style={{
                background: 'var(--surface)',
                border: '1px solid var(--border)',
                borderRadius: '10px',
                padding: '1.75rem',
                marginBottom: '1.5rem',
              }}
            >
              <p
                style={{
                  fontFamily: 'JetBrains Mono, monospace',
                  fontSize: '0.68rem',
                  color: 'var(--accent)',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  marginBottom: '1.25rem',
                }}
              >
                // quick.info
              </p>
              {[
                { label: 'name', value: 'Martin Mbithi Nzilani' },
                { label: 'title', value: 'Senior Software Engineer' },
                { label: 'location', value: 'Kenya 🇰🇪' },
                { label: 'experience', value: '7+ years' },
                { label: 'status', value: 'available' },
                { label: 'email', value: 'martinezmbithi@gmail.com' },
                { label: 'phone', value: '+254 740 847 563' },
              ].map((item) => (
                <div
                  key={item.label}
                  style={{
                    display: 'flex',
                    gap: '0.5rem',
                    marginBottom: '0.6rem',
                    fontFamily: 'JetBrains Mono, monospace',
                    fontSize: '0.72rem',
                  }}
                >
                  <span style={{ color: 'var(--text-muted)', minWidth: '80px' }}>{item.label}:</span>
                  <span
                    style={{
                      color: item.label === 'status' ? 'var(--accent)' : 'var(--text-secondary)',
                    }}
                  >
                    {item.label === 'email' ? (
                      <a
                        href={`mailto:${item.value}`}
                        style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}
                      >
                        {item.value}
                      </a>
                    ) : item.value}
                  </span>
                </div>
              ))}
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {[
                { href: 'https://github.com/MartMbithi', label: '→ github.com/MartMbithi' },
                {
                  href: 'https://www.linkedin.com/in/martin-mbithi-6626b617a/',
                  label: '→ linkedin.com/in/martin-mbithi',
                },
              ].map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    fontFamily: 'JetBrains Mono, monospace',
                    fontSize: '0.72rem',
                    color: 'var(--accent-dim)',
                    textDecoration: 'none',
                    display: 'block',
                    padding: '0.75rem 1rem',
                    background: 'rgba(0, 229, 160, 0.05)',
                    border: '1px solid rgba(0, 229, 160, 0.15)',
                    borderRadius: '6px',
                  }}
                >
                  {l.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section
        style={{
          background: 'var(--surface)',
          borderTop: '1px solid var(--border)',
          borderBottom: '1px solid var(--border)',
          padding: '5rem 2rem',
        }}
      >
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <p className="section-label" style={{ marginBottom: '0.75rem' }}>// core_strengths</p>
          <h2
            style={{
              fontFamily: 'Sora, sans-serif',
              fontSize: '1.75rem',
              fontWeight: 700,
              color: 'var(--text-primary)',
              marginBottom: '3rem',
            }}
          >
            What I do best
          </h2>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '1.5rem',
            }}
          >
            {highlights.map((h) => (
              <div
                key={h.title}
                className="card-hover"
                style={{
                  background: 'var(--bg)',
                  borderRadius: '10px',
                  padding: '1.75rem',
                }}
              >
                <div style={{ fontSize: '1.5rem', marginBottom: '0.75rem' }}>{h.icon}</div>
                <h3
                  style={{
                    fontFamily: 'Sora, sans-serif',
                    fontSize: '1rem',
                    fontWeight: 600,
                    color: 'var(--text-primary)',
                    marginBottom: '0.5rem',
                  }}
                >
                  {h.title}
                </h3>
                <p
                  style={{
                    fontFamily: 'JetBrains Mono, monospace',
                    fontSize: '0.75rem',
                    color: 'var(--text-muted)',
                    lineHeight: 1.7,
                  }}
                >
                  {h.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section style={{ padding: '5rem 2rem', maxWidth: '1200px', margin: '0 auto' }}>
        <p className="section-label" style={{ marginBottom: '0.75rem' }}>// technical_skills</p>
        <h2
          style={{
            fontFamily: 'Sora, sans-serif',
            fontSize: '1.75rem',
            fontWeight: 700,
            color: 'var(--text-primary)',
            marginBottom: '3rem',
          }}
        >
          Tools & Technologies
        </h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          {Object.entries(skills).map(([category, items]) => (
            <div key={category}>
              <p
                style={{
                  fontFamily: 'JetBrains Mono, monospace',
                  fontSize: '0.72rem',
                  color: 'var(--text-muted)',
                  marginBottom: '0.75rem',
                  letterSpacing: '0.08em',
                }}
              >
                {category}
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {items.map((item) => (
                  <span key={item} className="tech-tag">{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
