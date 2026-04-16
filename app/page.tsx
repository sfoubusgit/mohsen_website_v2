import Image from 'next/image'
import Link from 'next/link'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import { siteData } from '../data/site'

const heroSignals = ['D-A-CH Fokus', 'Diskrete Gespraeche', 'Industrie & MedTech']
const implementationNotes = [
  'Impressum und Datenschutz enthalten klar markierte Platzhalter, bis die finalen Rechts- und Kontaktdaten vorliegen.',
  'Track-Record-Logos wurden absichtlich nicht simuliert. Stattdessen zeigt die Seite nur belastbare Branchenfelder.',
  'HTTPS wird fuer den Livegang vorausgesetzt, kann aber erst auf Hosting-Ebene final bestaetigt werden.',
]

export default function HomePage() {
  return (
    <div className="page-shell">
      <Header />

      <main>
        <section className="hero-shell">
          <div className="section hero-grid">
            <div className="hero-main">
              <span className="eyebrow">{siteData.heroLabel}</span>
              <p className="hero-intro">
                {siteData.name} | {siteData.title}
              </p>
              <h1 className="hero-heading">{siteData.heroHeadline}</h1>
              <p className="hero-copy">{siteData.heroCopy}</p>

              <div className="button-row">
                <a className="button-primary" href="#kontakt">
                  Vertrauliche Anfrage
                </a>
                <a className="button-secondary" href="#kriterien">
                  Akquisitionskriterien ansehen
                </a>
              </div>

              <div className="hero-signal-row">
                {heroSignals.map((item) => (
                  <div key={item} className="hero-signal">
                    {item}
                  </div>
                ))}
              </div>

              <div className="hero-note-box">
                Die neue Positionierung ist bewusst sachlich und selektiv. Die Seite soll qualifizierte Gespraeche
                anziehen, nicht moeglichst viel Reichweite simulieren.
              </div>
            </div>

            <aside className="hero-dossier">
              <div className="dossier-portrait">
                <Image
                  src="/mohsen_bild.jpeg"
                  alt="Mohsen Abyari Business Portrait"
                  width={960}
                  height={1180}
                  priority
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'center top',
                    filter: 'grayscale(10%) saturate(0.82) contrast(1.04)',
                  }}
                />
              </div>

              <div className="dossier-body">
                <span className="section-kicker">Positionierung</span>
                <p className="portrait-meta-copy">
                  Persoenliche Praesenz fuer qualifizierte, vertrauliche Erstgespraeche mit Unternehmern, Verkaeufern
                  und professionellen Partnern.
                </p>

                <div className="meta-list">
                  <div className="meta-row">
                    <span className="meta-label">Fokus</span>
                    <strong>Nachfolge, Kauf, Struktur</strong>
                  </div>
                  <div className="meta-row">
                    <span className="meta-label">Kontext</span>
                    <strong>Industrie, MedTech, Fertigung</strong>
                  </div>
                  <div className="meta-row">
                    <span className="meta-label">Haltung</span>
                    <strong>Diskret, praezise, unternehmerisch</strong>
                  </div>
                </div>

                <div className="dossier-caption">
                  Kein Hero-Portraet als Selbstdarstellung, sondern als persoenliche Verankerung einer diskreten,
                  unternehmerischen Positionierung.
                </div>
              </div>
            </aside>
          </div>
        </section>

        <section id="profil" className="section section-shell section-shell--clear">
          <div className="section-header">
            <div className="section-heading-block">
              <span className="section-kicker">Profil</span>
              <h2 className="section-title" style={{ maxWidth: '11ch' }}>
                Unternehmerische Glaubwuerdigkeit statt Lebenslauf-Rhetorik
              </h2>
              <p className="section-copy">
                Die Seite muss nicht moeglichst viel ueber Mohsen sagen. Sie muss die richtigen Signale senden:
                Urteilskraft, Branchennaehe und ruhige Seriositaet.
              </p>
            </div>

            <div className="profile-lead panel">
              <p className="section-copy" style={{ marginTop: 0 }}>
                {siteData.about}
              </p>
            </div>
          </div>

          <div className="grid-three" style={{ marginTop: '2rem' }}>
            {siteData.pillars.map((pillar, index) => (
              <article key={pillar.title} className="pillar-card panel">
                <p className="card-index">0{index + 1}</p>
                <h3 style={{ margin: '0.75rem 0 0', fontSize: '1.2rem' }}>{pillar.title}</h3>
                <p className="muted-note" style={{ margin: '0.8rem 0 0' }}>
                  {pillar.copy}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="section section-shell acquisition-shell">
          <div className="acquisition-grid">
            <div>
              <span className="section-kicker" style={{ color: 'var(--accent-soft)' }}>
                Akquisitionsfenster
              </span>
              <h2 className="section-title acquisition-title">{siteData.acquisitionBox}</h2>
              <p className="acquisition-copy">
                Die Suchposition soll nicht laut wirken, sondern glaubwuerdig. Sie zeigt, in welchem Rahmen ein
                serioeses Gespraech sinnvoll ist und wo keine Zeit mit unklaren Konstellationen verloren geht.
              </p>
              <div className="acquisition-tags">
                <div className="acquisition-tag">Mittelstand mit technischer Substanz</div>
                <div className="acquisition-tag">D-A-CH als primaerer Suchraum</div>
                <div className="acquisition-tag">Diskrete Erstansprache ohne Inszenierung</div>
              </div>
            </div>

            <div className="acquisition-side">
              <div className="acquisition-card">
                <p className="acquisition-note">
                  Die Ansprache richtet sich an Unternehmer, Gesellschafter und Nachfolgesituationen, die ein
                  serioeses und vertrauliches Gegenueber fuer ein erstes qualifiziertes Gespraech suchen.
                </p>
              </div>
              <div className="signal-plate">
                Eine klare Suchposition schafft Vertrauen, weil sie Selektion zeigt. Es geht um passende Gespraeche,
                nicht um breite Selbstdarstellung.
              </div>
              <div className="button-row" style={{ marginTop: 0 }}>
                <a className="button-primary" href="#kontakt">
                  Vertraulichen Kontakt anbahnen
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="kriterien" className="section section-shell section-shell--soft">
          <span className="section-kicker">Anforderungsprofil</span>
          <div className="section-header" style={{ marginTop: '1rem' }}>
            <div className="section-heading-block">
              <h2 className="section-title" style={{ maxWidth: '11ch', marginTop: 0 }}>
                Akquisitionskriterien mit klarer Passung
              </h2>
            </div>
            <div className="section-side-note">
              Statt moeglichst breit aufzutreten, setzt die Positionierung auf nachvollziehbare Kriterien. Das schafft
              Vertrauen und filtert frueh die richtigen Gespraeche.
            </div>
          </div>

          <div className="grid-three" style={{ marginTop: '2rem' }}>
            {siteData.criteria.map((item) => (
              <article key={item.title} className="criteria-card panel">
                <p className="criteria-label">{item.title}</p>
                <h3 className="criteria-value">{item.value}</h3>
                <p className="muted-note" style={{ margin: '0.95rem 0 0' }}>
                  {item.detail}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section id="ansatz" className="section section-shell section-shell--clear">
          <div className="trust-intro">
            <div>
              <span className="section-kicker">Vertrauen</span>
              <h2 className="section-title" style={{ maxWidth: '12ch' }}>
                Glaubwuerdigkeit durch Relevanz, Diskretion und Prozessklarheit
              </h2>
              <p className="section-copy">
                Diese Seite baut Vertrauen nicht ueber geliehene Prestige-Signale auf, sondern ueber nachvollziehbare
                Branchennaehe und einen ruhigen, strukturierten Gespraechsrahmen.
              </p>
            </div>

            <div className="trust-note-card panel">
              <p className="trust-note-label">Warum hier keine Logos stehen</p>
              <p className="muted-note" style={{ margin: '0.7rem 0 0' }}>
                Fuer diese Version wurden bewusst keine Logos oder Referenzen erfunden. Gezeigt werden nur die
                Kontexte und die Arbeitsweise, in denen belastbare Erstgespraeche sinnvoll sind.
              </p>
            </div>
          </div>

          <div className="trust-core">
            <div className="trust-domain-card panel">
              <div className="trust-card-header">
                <span className="section-kicker">Relevante Kontexte</span>
                <p className="muted-note" style={{ margin: '0.9rem 0 0' }}>
                  Der Fokus liegt auf Umfeldern, in denen technische Substanz, Regulierung oder operative Komplexitaet
                  eine serioese Einschaetzung verlangen.
                </p>
              </div>

              <div className="sector-grid">
                {siteData.sectorTiles.map((tile, index) => (
                  <div key={tile} className="sector-tile">
                    <span className="sector-index">0{index + 1}</span>
                    <strong>{tile}</strong>
                  </div>
                ))}
              </div>
            </div>

            <div className="trust-process-card panel">
              <div className="trust-card-header">
                <span className="section-kicker">Wie ein Erstkontakt verlaeuft</span>
                <p className="muted-note" style={{ margin: '0.9rem 0 0' }}>
                  Vertrauen entsteht auch dadurch, dass der erste Austausch nicht diffus bleibt, sondern diszipliniert
                  und vertraulich angelegt ist.
                </p>
              </div>

              <div className="process-rail">
                {siteData.process.map((step, index) => (
                  <article key={step.title} className="process-step">
                    <div className="process-marker">
                      <span className="card-index">0{index + 1}</span>
                    </div>
                    <div className="process-content">
                      <h3 style={{ margin: 0, fontSize: '1.18rem' }}>{step.title}</h3>
                      <p className="muted-note" style={{ margin: '0.65rem 0 0' }}>
                        {step.copy}
                      </p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="kontakt" className="section section-shell">
          <div className="contact-grid">
            <div className="contact-card dark-panel">
              <div>
                <span className="section-kicker" style={{ color: 'var(--accent-soft)' }}>
                  Kontakt
                </span>
                <h2 className="section-title" style={{ color: 'var(--text-inverse)', maxWidth: '12ch' }}>
                  Diskreter Erstkontakt fuer vertrauliche Anliegen
                </h2>
              </div>

              <p className="acquisition-note">
                Diese erste Version enthaelt bereits eine klare, diskrete Kontaktstrecke. Fuer den Livegang sollte das
                Formular an einen sicheren serverseitigen Prozess angebunden werden.
              </p>

              <div className="contact-list">
                <div className="contact-item">
                  <span>E-Mail</span>
                  <a href={`mailto:${siteData.contact.email}`}>{siteData.contact.email}</a>
                </div>
                <div className="contact-item">
                  <span>Telefon</span>
                  <a href={`tel:${siteData.contact.phone.replace(/\s+/g, '')}`}>{siteData.contact.phone}</a>
                </div>
                <div className="contact-item">
                  <span>Standort</span>
                  <strong>{siteData.contact.location}</strong>
                </div>
                <div className="contact-item">
                  <span>Netzwerk</span>
                  <a href={siteData.contact.linkedin} target="_blank" rel="noreferrer">
                    LinkedIn Profil
                  </a>
                </div>
              </div>

              <div className="contact-quiet">
                Bitte sensible Details erst nach abgestimmtem Folgegespraech teilen. Die Seite soll den ersten
                qualifizierten Kontakt ermoeglichen, nicht den gesamten Prozess vorwegnehmen.
              </div>
            </div>

            <form className="form-card panel">
              <div>
                <span className="section-kicker">Vertrauliche Kurzanfrage</span>
                <p className="section-copy" style={{ marginTop: '0.8rem' }}>
                  Kurz, sachlich und ohne zu fruehe Offenlegung. Das Formular dient als diskreter Einstieg.
                </p>
              </div>

              <div className="form-grid">
                <div>
                  <label htmlFor="name" className="field-label">
                    Name
                  </label>
                  <input id="name" name="name" type="text" placeholder="Ihr Name" className="field-input" />
                </div>

                <div>
                  <label htmlFor="company" className="field-label">
                    Unternehmen
                  </label>
                  <input
                    id="company"
                    name="company"
                    type="text"
                    placeholder="Unternehmen oder Beteiligungskontext"
                    className="field-input"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="field-label">
                    E-Mail
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="name@unternehmen.de"
                    className="field-input"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="field-label">
                    Anlass
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    placeholder="Kurzer Anlass Ihres Anliegens. Detaillierte Informationen sollten erst nach abgestimmtem Folgegespraech geteilt werden."
                    className="field-input"
                    style={{ resize: 'vertical', minHeight: '10rem' }}
                  />
                </div>
              </div>

              <div className="form-alert">
                Platzhalter-Hinweis: Die Formularoberflaeche steht. Vor Produktion sollte eine sichere HTTPS-gestuetzte
                Serveranbindung mit sauberer Datenschutzdokumentation ergaenzt werden.
              </div>

              <div className="button-row" style={{ marginTop: 0 }}>
                <a className="button-primary" href={`mailto:${siteData.contact.email}?subject=Vertrauliche%20Anfrage`}>
                  Vertrauliche Anfrage vorbereiten
                </a>
              </div>
            </form>
          </div>
        </section>

        <section className="section section-shell section-shell--soft">
          <span className="section-kicker">Hinweis zur Umsetzung</span>
          <div className="section-header" style={{ marginTop: '1rem' }}>
            <div className="section-heading-block">
              <h2 className="section-title" style={{ marginTop: 0, maxWidth: '11ch' }}>
                Was in dieser ersten Version bewusst offen bleibt
              </h2>
            </div>
            <div className="section-side-note">
              Die Seite ist so gestaltet, dass sie bereits glaubwuerdig wirkt, ohne Fakten zu simulieren, die noch
              nicht verifiziert sind.
            </div>
          </div>

          <div className="note-grid">
            {implementationNotes.map((note) => (
              <div key={note} className="note-card panel">
                <p className="muted-note" style={{ margin: 0 }}>
                  {note}
                </p>
              </div>
            ))}
          </div>

          <div className="cta-strip">
            <p className="muted-note">
              Wenn die Richtung steht, lassen sich im zweiten Pass rechtliche Daten, echte Referenzbausteine und eine
              sichere Formularlogik ergaenzen.
            </p>
            <div className="legal-actions" style={{ marginTop: 0 }}>
              <Link href="/datenschutz" style={{ color: 'var(--accent)', fontWeight: 700 }}>
                Datenschutz ansehen
              </Link>
              <Link href="/impressum" style={{ color: 'var(--accent)', fontWeight: 700 }}>
                Impressum ansehen
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
