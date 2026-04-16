'use client'

import Link from 'next/link'
import { useState } from 'react'
import { siteData } from '../data/site'

const navItems = [
  { href: '#profil', label: 'Profil' },
  { href: '#kriterien', label: 'Kriterien' },
  { href: '#ansatz', label: 'Ansatz' },
  { href: '#kontakt', label: 'Kontakt' },
  { href: '/impressum', label: 'Impressum' },
]

export function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 30,
        backdropFilter: 'blur(18px)',
        background: 'rgba(9, 26, 45, 0.88)',
        borderBottom: '1px solid rgba(229, 235, 240, 0.1)',
      }}
    >
      <div
        className="section"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '1rem',
          minHeight: '5rem',
        }}
      >
        <Link href="/" style={{ color: 'var(--text-inverse)' }}>
          <span className="footer-label">Acquisition Advisory</span>
          <strong style={{ display: 'block', marginTop: '0.35rem', letterSpacing: '-0.02em' }}>{siteData.name}</strong>
        </Link>

        <nav className="desktop-nav" style={{ display: 'flex', gap: '1.45rem', alignItems: 'center' }}>
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              style={{
                color: 'rgba(245, 247, 250, 0.82)',
                fontSize: '0.92rem',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
              }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-label="Menue oeffnen"
          className="mobile-toggle"
          style={{
            display: 'none',
            border: '1px solid rgba(229, 235, 240, 0.15)',
            background: 'transparent',
            color: 'var(--text-inverse)',
            padding: '0.7rem 1rem',
            textTransform: 'uppercase',
            letterSpacing: '0.08em',
            fontSize: '0.8rem',
          }}
        >
          Menue
        </button>
      </div>

      {open ? (
        <div
          style={{
            borderTop: '1px solid rgba(229, 235, 240, 0.08)',
            background: 'rgba(9, 26, 45, 0.98)',
          }}
        >
          <div className="section" style={{ display: 'grid', gap: '1rem', padding: '1rem 0 1.25rem' }}>
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                style={{
                  color: 'var(--text-inverse)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  fontSize: '0.84rem',
                }}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      ) : null}
    </header>
  )
}
