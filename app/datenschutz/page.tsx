import Link from 'next/link'
import { Footer } from '../../components/Footer'
import { Header } from '../../components/Header'

export const metadata = {
  title: 'Datenschutz | Mohsen Abyari',
}

export default function DatenschutzPage() {
  return (
    <div className="page-shell">
      <Header />

      <section className="legal-hero">
        <div className="section legal-top">
          <div>
            <span className="section-kicker">Rechtliches</span>
            <h1 className="section-title" style={{ color: 'var(--text-inverse)' }}>
              Datenschutz
            </h1>
          </div>
          <p className="section-copy" style={{ marginTop: 0 }}>
            Diese Datenschutzerklaerung ist eine vorsichtige Platzhalterversion. Sie muss auf die tatsaechliche
            technische Umsetzung, das Hosting, moegliche Formulardienste, Analysewerkzeuge und Kommunikationskanaele
            abgestimmt werden, bevor die Seite live geht.
          </p>
        </div>
      </section>

      <main className="section legal-shell">
        <div className="legal-card panel">
          <div className="legal-card-grid">
            <div className="legal-copy">
              <p>
                <strong>1. Verantwortlicher</strong>
              </p>
              <p>Platzhalter fuer vollstaendige Kontaktdaten des Verantwortlichen.</p>

              <p>
                <strong>2. Hosting und HTTPS</strong>
              </p>
              <p>
                Fuer den Livebetrieb ist eine ausschliessliche Auslieferung ueber HTTPS vorgesehen. Der konkrete
                Hosting- und Zertifikatsanbieter ist in dieser Projektphase noch nicht final dokumentiert und muss
                nachgetragen werden.
              </p>

              <p>
                <strong>3. Kontaktaufnahme</strong>
              </p>
              <p>
                Bei einer Kontaktaufnahme per E-Mail oder ueber ein spaeter technisch angebundenes Formular werden nur
                die Daten verarbeitet, die fuer die Bearbeitung der Anfrage erforderlich sind. Die endgueltige
                Beschreibung haengt von der finalen Formularlogik und der Aufbewahrungspraxis ab.
              </p>

              <p>
                <strong>4. Server-Logfiles</strong>
              </p>
              <p>
                Je nach Hosting-Anbieter koennen Zugriffsdaten verarbeitet werden. Umfang, Speicherfristen und
                Rechtsgrundlagen muessen hosting-spezifisch ergaenzt werden.
              </p>

              <p>
                <strong>5. Externe Links</strong>
              </p>
              <p>
                Diese Website verlinkt auf externe Dienste wie LinkedIn. Fuer deren Datenverarbeitung gelten die
                Hinweise der jeweiligen Anbieter.
              </p>

              <p>
                <strong>6. Betroffenenrechte</strong>
              </p>
              <p>
                Informationen zu Auskunft, Berichtigung, Loeschung, Einschraenkung, Datenuebertragbarkeit und
                Beschwerderecht sollten in der finalen Fassung vollstaendig aufgenommen werden.
              </p>
            </div>

            <aside className="legal-aside">
              <p className="legal-aside-label">Hinweis</p>
              <p className="muted-note" style={{ marginTop: '0.8rem' }}>
                Die Datenschutzseite muss vor dem Livegang an das finale Hosting, die echte Formularlogik und moegliche
                Drittanbieter angepasst werden.
              </p>
            </aside>
          </div>
        </div>

        <p className="muted-note" style={{ marginTop: '1.25rem' }}>
          Datenschutz-Hinweis: Diese Seite ist fuer die erste Implementierungsphase ausreichend, aber nicht als finale
          juristische Fassung zu verstehen.
        </p>

        <div className="legal-actions">
          <Link href="/impressum" style={{ color: 'var(--accent)', fontWeight: 700 }}>
            Zum Impressum
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
