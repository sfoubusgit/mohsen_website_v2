import Link from 'next/link'
import { Footer } from '../../components/Footer'
import { Header } from '../../components/Header'

export const metadata = {
  title: 'Impressum | Mohsen Abyari',
}

export default function ImpressumPage() {
  return (
    <div className="page-shell">
      <Header />

      <section className="legal-hero">
        <div className="section legal-top">
          <div>
            <span className="section-kicker">Rechtliches</span>
            <h1 className="section-title" style={{ color: 'var(--text-inverse)' }}>
              Impressum
            </h1>
          </div>
          <p className="section-copy" style={{ marginTop: 0 }}>
            Diese Seite ist bewusst als rechtlicher Platzhalter gekennzeichnet. Fuer einen Livegang in Deutschland
            muessen die folgenden Angaben mit den tatsaechlich zutreffenden Unternehmens- und Kontaktdaten
            vervollstaendigt und juristisch geprueft werden.
          </p>
        </div>
      </section>

      <main className="section legal-shell">
        <div className="legal-card panel">
          <div className="legal-card-grid">
            <div className="legal-copy">
              <p>
                <strong>Angaben gemaess Paragraf 5 TMG</strong>
              </p>
              <p>
                Mohsen Abyari
                <br />
                Platzhalter fuer Rechtsform / geschuetzte Berufsbezeichnung
                <br />
                Platzhalter fuer vollstaendige ladungsfaehige Anschrift
                <br />
                Platzhalter fuer Postleitzahl und Ort
              </p>
              <p>
                <strong>Kontakt</strong>
              </p>
              <p>
                Telefon: Platzhalter
                <br />
                E-Mail: Platzhalter
              </p>
              <p>
                <strong>Vertretungsberechtigte Person</strong>
              </p>
              <p>Platzhalter falls zutreffend</p>
              <p>
                <strong>Umsatzsteuer / Registereintrag</strong>
              </p>
              <p>Nur ergaenzen, wenn rechtlich erforderlich und verifiziert.</p>
              <p>
                <strong>Inhaltlich verantwortlich</strong>
              </p>
              <p>Platzhalter fuer verantwortliche Person nach finaler Abstimmung.</p>
            </div>

            <aside className="legal-aside">
              <p className="legal-aside-label">Status</p>
              <p className="muted-note" style={{ marginTop: '0.8rem' }}>
                Vorlaeufige Platzhalterfassung fuer die Design- und Strukturphase. Vor Livegang muessen reale
                Unternehmens- und Kontaktdaten eingetragen werden.
              </p>
            </aside>
          </div>
        </div>

        <p className="muted-note" style={{ marginTop: '1.25rem' }}>
          Rechtlicher Hinweis: Dieses Impressum ist nicht fertig und darf in dieser Form nicht als finale Fassung
          veroeffentlicht werden.
        </p>

        <div className="legal-actions">
          <Link href="/datenschutz" style={{ color: 'var(--accent)', fontWeight: 700 }}>
            Zur Datenschutzerklaerung
          </Link>
          <Link href="/" style={{ color: 'var(--accent)', fontWeight: 700 }}>
            Zur Startseite
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  )
}
