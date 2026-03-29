import Link from 'next/link'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer
      style={{
        borderTop: '1px solid var(--border)',
        background: 'var(--surface)',
        padding: '2.5rem 2rem',
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
          gap: '1rem',
        }}
      >
        <div>
          <span
            style={{
              fontFamily: 'JetBrains Mono, monospace',
              fontSize: '0.72rem',
              color: 'var(--text-muted)',
            }}
          >
            © {year}{' '}
            <span style={{ color: 'var(--text-secondary)' }}>Martin Mbithi</span>
            {' '}· Built with Next.js
          </span>
        </div>

        <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
          <a
            href="https://github.com/MartMbithi"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontFamily: 'JetBrains Mono, monospace',
              fontSize: '0.72rem',
              color: 'var(--text-muted)',
              textDecoration: 'none',
              transition: 'color 0.2s',
            }}
          >
            github
          </a>
          <a
            href="https://www.linkedin.com/in/martin-mbithi-6626b617a/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontFamily: 'JetBrains Mono, monospace',
              fontSize: '0.72rem',
              color: 'var(--text-muted)',
              textDecoration: 'none',
              transition: 'color 0.2s',
            }}
          >
            linkedin
          </a>
          <a
            href="mailto:martinezmbithi@gmail.com"
            style={{
              fontFamily: 'JetBrains Mono, monospace',
              fontSize: '0.72rem',
              color: 'var(--text-muted)',
              textDecoration: 'none',
              transition: 'color 0.2s',
            }}
          >
            email
          </a>
        </div>
      </div>
    </footer>
  )
}
