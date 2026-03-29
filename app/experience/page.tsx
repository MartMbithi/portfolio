const experiences = [
  {
    role: 'Software Engineer',
    company: 'Government of Makueni County',
    period: '2023 — Present',
    type: 'Government',
    color: '#00e5a0',
    bullets: [
      'Contributed to automation of key service delivery processes, reducing manual workflows and turnaround times for internal users and citizens.',
      'Delivered and supported county government information systems improving efficiency and accessibility of public services.',
      'Designed, developed, and maintained secure web-based applications; managed databases and system integrations across multiple departments.',
      'Active role in system deployment, documentation, and ongoing technical support in compliance with public-sector ICT standards.',
    ],
    stack: ['PHP', 'Laravel', 'JavaScript', 'MySQL', 'Linux', 'REST APIs'],
  },
  {
    role: 'ICT Officer',
    company: 'ICT Authority — Machakos County HQ',
    period: '2022 — 2023',
    type: 'Government',
    color: '#00b4d8',
    bullets: [
      'Supported national and county government ICT operations ensuring availability, security, and reliability of ICT infrastructure.',
      'Provided technical support to government staff; resolved system and network issues and maintained secure computing environments.',
      'Contributed to implementation of ICT policies, cybersecurity best practices, and infrastructure modernization improving system uptime and user productivity.',
    ],
    stack: ['Network Admin', 'Linux', 'Cybersecurity', 'ICT Infrastructure', 'Helpdesk'],
  },
  {
    role: 'Senior Web Application Developer',
    company: 'Ezana Group',
    period: '2020 — 2021',
    type: 'Private Sector',
    color: '#7c3aed',
    bullets: [
      'Developed and enhanced web-based business applications supporting client operations and growth.',
      'Designed scalable backend services and RESTful APIs; optimized application performance and improved UX across platforms.',
      'Collaborated with cross-functional teams to deliver reliable solutions, contributing to improved system responsiveness and maintainability.',
    ],
    stack: ['JavaScript', 'React', 'Node.js', 'PHP', 'PostgreSQL', 'REST APIs'],
  },
  {
    role: 'Web Developer & ERP Support',
    company: 'Ukamba Bible College',
    period: '2020 — 2021',
    type: 'Education / NGO',
    color: '#f59e0b',
    bullets: [
      'Supported institutional digital platforms by maintaining and improving web applications and ERP systems.',
      'Assisted in system optimization, resolved user issues, and enhanced interface usability contributing to smoother administrative operations.',
    ],
    stack: ['PHP', 'JavaScript', 'MySQL', 'ERP Systems', 'HTML/CSS'],
  },
  {
    role: 'Graphic Designer',
    company: 'Lauh Print Co. LTD',
    period: '2016 — 2018',
    type: 'Creative',
    color: '#ec4899',
    bullets: [
      'Delivered visual design solutions for print and digital media, supporting marketing and branding initiatives for diverse clients.',
      'Produced high-quality layouts and promotional materials under tight deadlines, building a strong foundation in visual communication and attention to detail.',
    ],
    stack: ['Adobe Photoshop', 'Illustrator', 'InDesign', 'Print Design'],
  },
]

export default function Experience() {
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
            inset: 0,
            background: 'radial-gradient(ellipse at 30% 50%, rgba(0, 229, 160, 0.04) 0%, transparent 70%)',
            pointerEvents: 'none',
          }}
        />
        <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative' }}>
          <p className="section-label" style={{ marginBottom: '1rem' }}>// experience.json</p>
          <h1
            style={{
              fontFamily: 'Sora, sans-serif',
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: 800,
              color: 'var(--text-primary)',
              lineHeight: 1.15,
            }}
          >
            Professional{' '}
            <span className="gradient-text">Experience</span>
          </h1>
          <p
            style={{
              color: 'var(--text-secondary)',
              marginTop: '1rem',
              fontSize: '0.95rem',
              maxWidth: '560px',
            }}
          >
            7+ years delivering ICT systems, software applications, and digital solutions
            across government and private-sector environments in Kenya.
          </p>
        </div>
      </section>

      {/* Timeline */}
      <section style={{ padding: '5rem 2rem', maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ position: 'relative' }}>
          {/* Vertical line */}
          <div
            style={{
              position: 'absolute',
              left: '14px',
              top: '8px',
              bottom: '8px',
              width: '1px',
              background: 'linear-gradient(to bottom, var(--accent), var(--border) 80%, transparent)',
            }}
          />

          <div style={{ display: 'flex', flexDirection: 'column', gap: '3.5rem' }}>
            {experiences.map((exp, idx) => (
              <div key={idx} style={{ display: 'flex', gap: '2.5rem' }}>
                {/* Dot */}
                <div
                  style={{
                    position: 'relative',
                    flexShrink: 0,
                    width: '28px',
                    display: 'flex',
                    justifyContent: 'center',
                    paddingTop: '4px',
                  }}
                >
                  <div
                    style={{
                      width: '10px',
                      height: '10px',
                      borderRadius: '50%',
                      background: exp.color,
                      border: '2px solid var(--bg)',
                      boxShadow: `0 0 12px ${exp.color}60`,
                      flexShrink: 0,
                    }}
                  />
                </div>

                {/* Card */}
                <div
                  className="card-hover"
                  style={{
                    flex: 1,
                    background: 'var(--surface)',
                    borderRadius: '10px',
                    padding: '2rem',
                  }}
                >
                  {/* Header */}
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'flex-start',
                      flexWrap: 'wrap',
                      gap: '0.75rem',
                      marginBottom: '1rem',
                    }}
                  >
                    <div>
                      <h3
                        style={{
                          fontFamily: 'Sora, sans-serif',
                          fontSize: '1.1rem',
                          fontWeight: 700,
                          color: 'var(--text-primary)',
                          marginBottom: '0.2rem',
                        }}
                      >
                        {exp.role}
                      </h3>
                      <p
                        style={{
                          fontFamily: 'JetBrains Mono, monospace',
                          fontSize: '0.78rem',
                          color: exp.color,
                          fontWeight: 500,
                        }}
                      >
                        {exp.company}
                      </p>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '0.4rem' }}>
                      <span
                        style={{
                          fontFamily: 'JetBrains Mono, monospace',
                          fontSize: '0.72rem',
                          color: 'var(--text-muted)',
                          background: 'var(--bg)',
                          padding: '0.25rem 0.7rem',
                          borderRadius: '4px',
                          border: '1px solid var(--border)',
                        }}
                      >
                        {exp.period}
                      </span>
                      <span
                        style={{
                          fontFamily: 'JetBrains Mono, monospace',
                          fontSize: '0.65rem',
                          color: 'var(--text-muted)',
                          padding: '0.2rem 0.5rem',
                          background: 'rgba(255,255,255,0.03)',
                          borderRadius: '3px',
                          border: '1px solid var(--border)',
                        }}
                      >
                        {exp.type}
                      </span>
                    </div>
                  </div>

                  {/* Bullets */}
                  <ul
                    style={{
                      listStyle: 'none',
                      padding: 0,
                      margin: '0 0 1.5rem',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '0.6rem',
                    }}
                  >
                    {exp.bullets.map((b, i) => (
                      <li
                        key={i}
                        style={{
                          display: 'flex',
                          gap: '0.75rem',
                          fontSize: '0.88rem',
                          color: 'var(--text-secondary)',
                          lineHeight: 1.65,
                        }}
                      >
                        <span
                          style={{
                            color: exp.color,
                            fontFamily: 'JetBrains Mono, monospace',
                            fontSize: '0.7rem',
                            marginTop: '4px',
                            flexShrink: 0,
                          }}
                        >
                          →
                        </span>
                        {b}
                      </li>
                    ))}
                  </ul>

                  {/* Stack */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                    {exp.stack.map((t) => (
                      <span
                        key={t}
                        style={{
                          fontFamily: 'JetBrains Mono, monospace',
                          fontSize: '0.67rem',
                          color: 'var(--text-muted)',
                          background: 'var(--bg)',
                          border: '1px solid var(--border)',
                          borderRadius: '3px',
                          padding: '0.15rem 0.5rem',
                        }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
