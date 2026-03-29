'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

const links = [
  { href: '/', label: 'home' },
  { href: '/about', label: 'about' },
  { href: '/experience', label: 'experience' },
  { href: '/portfolio', label: 'portfolio' },
  { href: '/contact', label: 'contact' },
]

export default function Navbar() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        background: 'rgba(8, 12, 16, 0.85)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        borderBottom: '1px solid rgba(30, 40, 48, 0.8)',
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 2rem',
          height: '64px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        {/* Logo */}
        <Link href="/" style={{ textDecoration: 'none' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span
              style={{
                fontFamily: 'JetBrains Mono, monospace',
                fontSize: '0.95rem',
                fontWeight: 700,
                color: 'var(--accent)',
              }}
            >
              mm
            </span>
            <span
              style={{
                fontFamily: 'JetBrains Mono, monospace',
                fontSize: '0.7rem',
                color: 'var(--text-muted)',
              }}
            >
              /
            </span>
            <span
              style={{
                fontFamily: 'JetBrains Mono, monospace',
                fontSize: '0.72rem',
                color: 'var(--text-secondary)',
              }}
            >
              software-engineer
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav
          style={{
            display: 'flex',
            gap: '2rem',
            alignItems: 'center',
          }}
          className="hidden md:flex"
        >
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="nav-link"
              style={{
                color: pathname === link.href ? 'var(--accent)' : 'var(--text-secondary)',
                fontFamily: 'JetBrains Mono, monospace',
                fontSize: '0.78rem',
                textDecoration: 'none',
                transition: 'color 0.2s',
                position: 'relative',
              }}
            >
              {pathname === link.href && (
                <span style={{ color: 'var(--accent-dim)', marginRight: '2px' }}>./</span>
              )}
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            style={{
              fontFamily: 'JetBrains Mono, monospace',
              fontSize: '0.75rem',
              color: 'var(--bg)',
              background: 'var(--accent)',
              padding: '0.4rem 1rem',
              borderRadius: '4px',
              textDecoration: 'none',
              fontWeight: 600,
              transition: 'all 0.2s',
            }}
          >
            hire_me()
          </Link>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setOpen(!open)}
          style={{
            display: 'none',
            background: 'none',
            border: 'none',
            color: 'var(--text-secondary)',
            cursor: 'pointer',
            padding: '0.5rem',
          }}
          className="flex md:hidden"
          aria-label="Toggle menu"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? (
              <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round" />
            ) : (
              <>
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div
          style={{
            padding: '1rem 2rem 1.5rem',
            borderTop: '1px solid var(--border)',
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
          }}
          className="md:hidden"
        >
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              style={{
                fontFamily: 'JetBrains Mono, monospace',
                fontSize: '0.85rem',
                color: pathname === link.href ? 'var(--accent)' : 'var(--text-secondary)',
                textDecoration: 'none',
              }}
            >
              {pathname === link.href && '→ '}{link.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  )
}
