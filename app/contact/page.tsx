'use client'

import { useState } from 'react'

const contactMethods = [
  {
    icon: '📞',
    label: 'phone',
    value: '+254 740 847 563',
    href: 'tel:+254740847563',
    mono: true,
  },
  {
    icon: '✉️',
    label: 'email',
    value: 'martinezmbithi@gmail.com',
    href: 'mailto:martinezmbithi@gmail.com',
    mono: true,
  },
  {
    icon: '💼',
    label: 'linkedin',
    value: 'linkedin.com/in/martin-mbithi',
    href: 'https://www.linkedin.com/in/martin-mbithi-6626b617a/',
    mono: true,
  },
  {
    icon: '🐙',
    label: 'github',
    value: 'github.com/MartMbithi',
    href: 'https://github.com/MartMbithi',
    mono: true,
  },
]

const engagements = [
  { icon: '🛠️', title: 'Software Development', desc: 'Full-stack web & mobile application development' },
  { icon: '🔄', title: 'Systems Integration', desc: 'API design, third-party integrations, ERP support' },
  { icon: '☁️', title: 'Cloud & DevOps', desc: 'Infrastructure setup, CI/CD pipelines, cloud deployments' },
  { icon: '🏛️', title: 'Government ICT', desc: 'Public-sector systems, compliance, technical advisory' },
  { icon: '🧑‍🏫', title: 'Consulting & Mentorship', desc: 'Technical consulting and team mentoring' },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e: React.MouseEvent) => {
    e.preventDefault()
    const mailto = `mailto:martinezmbithi@gmail.com?subject=${encodeURIComponent(form.subject || 'Portfolio Enquiry')}&body=${encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`)}`
    window.location.href = mailto
    setSent(true)
  }

  const inputStyle = {
    width: '100%',
    background: 'var(--bg)',
    border: '1px solid var(--border)',
    borderRadius: '6px',
    padding: '0.85rem 1rem',
    color: 'var(--text-primary)',
    fontFamily: 'JetBrains Mono, monospace',
    fontSize: '0.82rem',
    outline: 'none',
    transition: 'border-color 0.2s',
  }

  const labelStyle = {
    display: 'block',
    fontFamily: 'JetBrains Mono, monospace',
    fontSize: '0.68rem',
    color: 'var(--text-muted)',
    letterSpacing: '0.1em',
    textTransform: 'uppercase' as const,
    marginBottom: '0.5rem',
  }

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
            background: 'radial-gradient(ellipse at 50% 60%, rgba(0, 229, 160, 0.05) 0%, transparent 70%)',
            pointerEvents: 'none',
          }}
        />
        <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative' }}>
          <p className="section-label" style={{ marginBottom: '1rem' }}>// contact.init()</p>
          <h1
            style={{
              fontFamily: 'Sora, sans-serif',
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: 800,
              color: 'var(--text-primary)',
              lineHeight: 1.15,
              marginBottom: '1rem',
            }}
          >
            Let&apos;s <span className="gradient-text">work together</span>
          </h1>
          <p
            style={{
              color: 'var(--text-secondary)',
              fontSize: '0.95rem',
              maxWidth: '540px',
              lineHeight: 1.75,
            }}
          >
            Available for software engineering contracts, information systems development,
            ICT consultancy, and technical support initiatives across Kenya and remotely.
          </p>
        </div>
      </section>

      {/* Main */}
      <section style={{ padding: '5rem 2rem', maxWidth: '1200px', margin: '0 auto' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1.4fr',
            gap: '4rem',
            alignItems: 'start',
          }}
        >
          {/* Left: Info */}
          <div>
            {/* Engagement types */}
            <div style={{ marginBottom: '3rem' }}>
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
                // open_for
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {engagements.map((e) => (
                  <div
                    key={e.title}
                    style={{
                      display: 'flex',
                      gap: '1rem',
                      alignItems: 'flex-start',
                      padding: '0.9rem 1.1rem',
                      background: 'var(--surface)',
                      border: '1px solid var(--border)',
                      borderRadius: '8px',
                      transition: 'border-color 0.2s',
                    }}
                  >
                    <span style={{ fontSize: '1rem', flexShrink: 0, marginTop: '1px' }}>{e.icon}</span>
                    <div>
                      <p
                        style={{
                          fontFamily: 'Sora, sans-serif',
                          fontSize: '0.85rem',
                          fontWeight: 600,
                          color: 'var(--text-primary)',
                          marginBottom: '0.15rem',
                        }}
                      >
                        {e.title}
                      </p>
                      <p
                        style={{
                          fontFamily: 'JetBrains Mono, monospace',
                          fontSize: '0.7rem',
                          color: 'var(--text-muted)',
                        }}
                      >
                        {e.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact methods */}
            <div>
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
                // reach_me_at
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                {contactMethods.map((c) => (
                  <a
                    key={c.label}
                    href={c.href}
                    target={c.href.startsWith('http') ? '_blank' : undefined}
                    rel="noopener noreferrer"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.9rem',
                      padding: '0.8rem 1rem',
                      background: 'var(--surface)',
                      border: '1px solid var(--border)',
                      borderRadius: '7px',
                      textDecoration: 'none',
                      transition: 'all 0.2s',
                    }}
                  >
                    <span style={{ fontSize: '0.95rem' }}>{c.icon}</span>
                    <div>
                      <span
                        style={{
                          display: 'block',
                          fontFamily: 'JetBrains Mono, monospace',
                          fontSize: '0.62rem',
                          color: 'var(--text-muted)',
                          letterSpacing: '0.08em',
                          marginBottom: '1px',
                        }}
                      >
                        {c.label}
                      </span>
                      <span
                        style={{
                          fontFamily: 'JetBrains Mono, monospace',
                          fontSize: '0.78rem',
                          color: 'var(--accent)',
                        }}
                      >
                        {c.value}
                      </span>
                    </div>
                    <span style={{ marginLeft: 'auto', color: 'var(--text-muted)', fontSize: '0.8rem' }}>↗</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Message form */}
          <div>
            <div
              style={{
                background: 'var(--surface)',
                border: '1px solid var(--border)',
                borderRadius: '12px',
                overflow: 'hidden',
              }}
            >
              {/* Window bar */}
              <div
                style={{
                  background: 'var(--surface-2, #131a22)',
                  padding: '0.75rem 1.25rem',
                  borderBottom: '1px solid var(--border)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                }}
              >
                <div style={{ display: 'flex', gap: '6px' }}>
                  <span style={{ width: 9, height: 9, borderRadius: '50%', background: '#ff5f56', display: 'block' }} />
                  <span style={{ width: 9, height: 9, borderRadius: '50%', background: '#ffbd2e', display: 'block' }} />
                  <span style={{ width: 9, height: 9, borderRadius: '50%', background: '#27c93f', display: 'block' }} />
                </div>
                <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.68rem', color: 'var(--text-muted)' }}>
                  new_message.ts
                </span>
              </div>

              <div style={{ padding: '2rem' }}>
                {sent ? (
                  <div
                    style={{
                      textAlign: 'center',
                      padding: '3rem 1rem',
                    }}
                  >
                    <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>✅</div>
                    <h3
                      style={{
                        fontFamily: 'Sora, sans-serif',
                        fontSize: '1.2rem',
                        fontWeight: 700,
                        color: 'var(--accent)',
                        marginBottom: '0.5rem',
                      }}
                    >
                      Message composed!
                    </h3>
                    <p style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.78rem', color: 'var(--text-muted)' }}>
                      Your email client should have opened. Looking forward to connecting.
                    </p>
                  </div>
                ) : (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                    {/* Name + Email row */}
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                      <div>
                        <label style={labelStyle}>name</label>
                        <input
                          name="name"
                          value={form.name}
                          onChange={handleChange}
                          placeholder="Your name"
                          style={inputStyle}
                        />
                      </div>
                      <div>
                        <label style={labelStyle}>email</label>
                        <input
                          name="email"
                          type="email"
                          value={form.email}
                          onChange={handleChange}
                          placeholder="you@example.com"
                          style={inputStyle}
                        />
                      </div>
                    </div>

                    {/* Subject */}
                    <div>
                      <label style={labelStyle}>subject</label>
                      <select
                        name="subject"
                        value={form.subject}
                        onChange={handleChange}
                        style={{ ...inputStyle, cursor: 'pointer' }}
                      >
                        <option value="">Select engagement type...</option>
                        <option>Software Development</option>
                        <option>Systems Integration</option>
                        <option>Cloud & DevOps</option>
                        <option>Government ICT</option>
                        <option>Consulting & Mentorship</option>
                        <option>Other</option>
                      </select>
                    </div>

                    {/* Message */}
                    <div>
                      <label style={labelStyle}>message</label>
                      <textarea
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        placeholder="Describe your project or requirement..."
                        rows={6}
                        style={{ ...inputStyle, resize: 'vertical', lineHeight: 1.7 }}
                      />
                    </div>

                    {/* Line count hint */}
                    <div
                      style={{
                        fontFamily: 'JetBrains Mono, monospace',
                        fontSize: '0.65rem',
                        color: 'var(--text-muted)',
                        display: 'flex',
                        justifyContent: 'space-between',
                      }}
                    >
                      <span>// fields filled: {Object.values(form).filter(Boolean).length} / 4</span>
                      <span>{form.message.length} chars</span>
                    </div>

                    {/* Submit */}
                    <button
                      onClick={handleSubmit}
                      style={{
                        fontFamily: 'JetBrains Mono, monospace',
                        fontSize: '0.85rem',
                        fontWeight: 700,
                        color: 'var(--bg)',
                        background: 'var(--accent)',
                        border: 'none',
                        borderRadius: '7px',
                        padding: '0.9rem 2rem',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '0.5rem',
                        transition: 'all 0.2s',
                        width: '100%',
                      }}
                    >
                      send_message()
                      <span style={{ fontSize: '1rem' }}>→</span>
                    </button>

                    <p
                      style={{
                        fontFamily: 'JetBrains Mono, monospace',
                        fontSize: '0.65rem',
                        color: 'var(--text-muted)',
                        textAlign: 'center',
                      }}
                    >
                      Opens your email client · martinezmbithi@gmail.com
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA strip */}
      <section
        style={{
          background: 'var(--surface)',
          borderTop: '1px solid var(--border)',
          padding: '3rem 2rem',
        }}
      >
        <div
          style={{
            maxWidth: '1200px',
            margin: '0 auto',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1.5rem',
          }}
        >
          <div>
            <p
              style={{
                fontFamily: 'JetBrains Mono, monospace',
                fontSize: '0.75rem',
                color: 'var(--text-muted)',
                marginBottom: '0.3rem',
              }}
            >
              // based in Kenya · open to remote
            </p>
            <p
              style={{
                fontFamily: 'Sora, sans-serif',
                fontSize: '1.1rem',
                fontWeight: 600,
                color: 'var(--text-primary)',
              }}
            >
              Let&apos;s build something that matters.
            </p>
          </div>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <a
              href="mailto:martinezmbithi@gmail.com"
              style={{
                fontFamily: 'JetBrains Mono, monospace',
                fontSize: '0.8rem',
                fontWeight: 600,
                color: 'var(--bg)',
                background: 'var(--accent)',
                padding: '0.65rem 1.4rem',
                borderRadius: '6px',
                textDecoration: 'none',
              }}
            >
              email_me()
            </a>
            <a
              href="https://martmbithi.github.io/assets/resume/martin_mbithi_resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontFamily: 'JetBrains Mono, monospace',
                fontSize: '0.8rem',
                color: 'var(--text-secondary)',
                border: '1px solid var(--border)',
                padding: '0.65rem 1.4rem',
                borderRadius: '6px',
                textDecoration: 'none',
              }}
            >
              ↓ resume
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
