import Link from 'next/link'
import { siteData } from '../data/site'

export function Footer() {
  return (
    <footer className="footer-shell">
      <div className="section">
        <div className="footer-topline">
          <p className="footer-label">Diskrete Unternehmergespraeche im industriellen Sektor</p>
          <div className="footer-tagline">
            Die Website ist auf qualifizierte Erstkontakte ausgerichtet, nicht auf moeglichst breite Selbstdarstellung.
          </div>
        </div>

        <div className="footer-grid">
          <div>
            <p className="footer-label">Mohsen Abyari</p>
            <p
              style={{
                margin: '0.55rem 0 0',
                fontFamily: 'var(--font-display)',
                fontSize: '1.8rem',
                lineHeight: 1.05,
              }}
            >
              Business Broker & Akquisitionsspezialist
            </p>
            <p style={{ margin: '1rem 0 0', color: 'rgba(245, 247, 250, 0.72)', lineHeight: 1.75, maxWidth: '34rem' }}>
              Diskrete Positionierung fuer strategische Akquisition, Nachfolgegespraeche und industrielle Kontexte mit
              technischer Substanz.
            </p>
          </div>

          <div>
            <p className="footer-label">Rechtliches</p>
            <div className="footer-links">
              <Link href="/impressum">Impressum</Link>
              <Link href="/datenschutz">Datenschutz</Link>
            </div>
          </div>

          <div>
            <p className="footer-label">Kontakt & Social</p>
            <div className="footer-links">
              <a href={`mailto:${siteData.contact.email}`}>{siteData.contact.email}</a>
              <a href={siteData.contact.linkedin} target="_blank" rel="noreferrer">
                LinkedIn
              </a>
              <span>{siteData.contact.location}</span>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          Erste Aufbauversion fuer die Neupositionierung. Impressum und Datenschutz vor Livegang rechtlich pruefen.
        </div>
      </div>
    </footer>
  )
}
