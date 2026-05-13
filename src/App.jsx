import { useEffect, useState } from "react";
import { tripData } from "./data/tripData";

const currentDateFormatter = new Intl.DateTimeFormat("en-GB", {
  weekday: "long",
  day: "numeric",
  month: "long",
  year: "numeric",
  timeZone: "Asia/Kuala_Lumpur",
});

function getCountdownParts() {
  const target = new Date("2026-11-05T09:00:00+08:00").getTime();
  const now = Date.now();
  const diff = Math.max(0, target - now);

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  return { days, hours, minutes, seconds };
}

function SectionHeading({ eyebrow, title, copy }) {
  return (
    <div className="section-heading">
      {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
      <h2>{title}</h2>
      {copy ? <p className="section-copy">{copy}</p> : null}
    </div>
  );
}

function App() {
  const [countdown, setCountdown] = useState(getCountdownParts());
  const currentDateLabel = currentDateFormatter.format(new Date());
  const itineraryRows = [tripData.itinerary.slice(0, 4), tripData.itinerary.slice(4, 8)];

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown(getCountdownParts());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="page-shell">
      <header className="hero">
        <div className="hero-top">
          <div className="hero-brand">
            <img
              className="hero-logo"
              src="/branding/help-school-logo.png"
              alt="HELP International School Kuala Lumpur logo"
            />
          </div>

          <div className="hero-panel">
            <div className="countdown-card">
              <span className="countdown-label">Countdown</span>
              <div className="countdown-grid">
                <div className="countdown-unit">
                  <strong>{countdown.days}</strong>
                  <span>Days</span>
                </div>
                <div className="countdown-unit">
                  <strong>{String(countdown.hours).padStart(2, "0")}</strong>
                  <span>Hours</span>
                </div>
                <div className="countdown-unit">
                  <strong>{String(countdown.minutes).padStart(2, "0")}</strong>
                  <span>Minutes</span>
                </div>
                <div className="countdown-unit">
                  <strong>{String(countdown.seconds).padStart(2, "0")}</strong>
                  <span>Seconds</span>
                </div>
              </div>
              <span className="countdown-subtitle">Until 5 November 2026, 9:00 AM KL time</span>
            </div>
          </div>
        </div>

        <div className="hero-copy">
          <p className="eyebrow">{tripData.hero.eyebrow}</p>
          <h1>{tripData.hero.headline}</h1>
          <p className="hero-summary">{tripData.hero.summary}</p>
          <div className="hero-actions">
            <a className="primary-button" href={tripData.formUrl} target="_blank" rel="noreferrer">
              {tripData.formLabel}
            </a>
            <a className="secondary-button" href={tripData.pdfPath} target="_blank" rel="noreferrer">
              View full PDF pack
            </a>
          </div>
        </div>

        <div className="fact-grid">
          {tripData.quickFacts.map((fact) => (
            <article className="fact-card" key={fact.label}>
              <span>{fact.label}</span>
              <strong>{fact.value}</strong>
            </article>
          ))}
          {tripData.flightTickets.map((ticket) => (
            <article className={`ticket-card ticket-${ticket.direction}`} key={ticket.flightNumber}>
              <div className="ticket-stub" aria-hidden="true">
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
              </div>
              <div className="ticket-main">
                <div className="ticket-topline">
                  <span className="ticket-airline">{ticket.airline}</span>
                  <span className="ticket-badge">Boarding Pass</span>
                </div>
                <div className="ticket-meta">
                  <span>{ticket.label}</span>
                  <strong>{ticket.flightNumber}</strong>
                </div>
                <div className="ticket-route-row">
                  <strong>{ticket.route}</strong>
                  <span className="ticket-plane" aria-hidden="true">
                    ✈
                  </span>
                </div>
                <div className="ticket-bottom">
                  <div className="ticket-bottom-block">
                    <span>Date</span>
                    <strong>{ticket.date}</strong>
                  </div>
                  <div className="ticket-bottom-block">
                    <span>Time</span>
                    <strong>{ticket.time}</strong>
                  </div>
                </div>
                <p className="ticket-note">{ticket.terminalNote}</p>
              </div>
            </article>
          ))}
        </div>
      </header>

      <main>
        <section className="next-steps-section">
          <div className="next-steps-header">
            <h2>Next Steps</h2>
          </div>
          <div className="notice-strip">
            {tripData.noticeBoard.map((notice) => (
              <article className={`notice-card tone-${notice.tone}`} key={notice.title}>
                <h3>{notice.title}</h3>
                <p>{notice.detail}</p>
              </article>
            ))}
          </div>
          <div className="next-steps-footer">
            Further travel information will be shared during Term 1 of AY 2026-2027, including airport
            meeting procedures and final departure arrangements.
          </div>
        </section>

        <section className="section-card updates-section">
          <SectionHeading
            eyebrow="Live Updates"
            title={currentDateLabel}
            copy={`Last updated on ${currentDateLabel}`}
          />
          <div className="update-list">
            {tripData.latestUpdates.map((update) => (
              <article className="update-card" key={`${update.date}-${update.title}`}>
                <span>{update.date}</span>
                <h3>{update.title}</h3>
                <p>{update.detail}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section-card why-matters-section">
          <h2 className="why-matters-title">Why This Trip Matters</h2>
          <div className="why-matters-list">
            {tripData.reasons.map((reason) => (
              <article className="why-matters-row" key={reason.title}>
                <div className="why-matters-icon-column" aria-hidden="true">
                  <div className="why-matters-icon-frame">
                    <img className="why-matters-icon-image" src={reason.icon} alt="" />
                  </div>
                </div>
                <div className="why-matters-copy">
                  <h3>{reason.title}</h3>
                  <p>{reason.detail}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section-card itinerary-section">
          <SectionHeading
            eyebrow="Itinerary"
            title="Our journey at a glance"
            copy="An easy-to-follow overview of the London Trip schedule, activities, and key experiences across the full journey."
          />
          <div className="itinerary-poster">
            {itineraryRows.map((row, rowIndex) => (
              <div className="itinerary-row" key={`itinerary-row-${rowIndex + 1}`}>
                {row.map((item) => (
                  <article className="itinerary-stop" key={item.day}>
                    <div className="itinerary-symbol">
                      <img src={item.icon} alt="" />
                    </div>
                    <div className="itinerary-stop-copy">
                      <strong>{item.day}</strong>
                      <span>{item.date}</span>
                      <h3>{item.title}</h3>
                      <p>{item.highlights.join(", ")}</p>
                    </div>
                  </article>
                ))}
              </div>
            ))}
          </div>
        </section>

        <section className="section-grid travel-entry-row">
          <div className="section-card compact-section-card">
            <SectionHeading
              eyebrow="Travel"
              title="Flights and long-haul guidance"
              copy="A compact version of the information parents will keep looking for."
            />
            <div className="info-stack">
              <article className="info-card">
                <h3>Flight duration</h3>
                <p>{tripData.travel.flights.duration}</p>
              </article>
              <article className="info-card">
                <h3>Jet lag guidance</h3>
                <ul className="mini-list">
                  {tripData.travel.jetLagTips.map((tip) => (
                    <li key={tip}>{tip}</li>
                  ))}
                </ul>
              </article>
            </div>
          </div>

          <div className="section-card compact-section-card">
            <SectionHeading
              eyebrow="Entry"
              title="UK entry requirements"
              copy="Keep these items current, because visa policies are the most time-sensitive part of the trip information."
            />
            <ul className="checklist">
              {tripData.entryRequirements.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <a
              className="secondary-button eta-button"
              href="https://www.gov.uk/eta/apply"
              target="_blank"
              rel="noreferrer"
            >
              Apply for UK ETA
            </a>
          </div>
        </section>

        <section className="section-grid">
          <div className="section-card">
            <SectionHeading
              eyebrow="Packing"
              title="Weather, documents, and essentials"
              copy="Students should prepare for cool weather, rain, long walking days, and multiple public transport journeys."
            />
            <div className="two-column-list">
              <article>
                <h3>London weather in November</h3>
                <ul>
                  {tripData.travel.londonWeather.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
              <article>
                <h3>Essential documents</h3>
                <ul>
                  {tripData.packing.documents.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
              <article>
                <h3>Clothing checklist</h3>
                <ul>
                  {tripData.packing.clothing.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
              <article>
                <h3>Official gear and theatre nights</h3>
                <ul>
                  {tripData.packing.officialGear.concat(tripData.packing.theatreDressCode).map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            </div>
          </div>

          <div className="section-card">
            <SectionHeading
              eyebrow="Payments"
              title="Cashless travel recommendations"
              copy="The source material strongly points parents toward prepaid travel cards rather than cash."
            />
            <div className="info-stack">
              {tripData.payments.map((item) => (
                <article className="info-card" key={item.title}>
                  <h3>{item.title}</h3>
                  <p>{item.detail}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section-card">
          <SectionHeading
            eyebrow="Learning Design"
            title="What students will experience on the ground"
            copy="These are the three strongest content clusters from the trip deck and make a good middle section for the site."
          />
          <div className="track-grid">
            {tripData.learningTracks.map((track) => (
              <article className="track-card" key={track.title}>
                <h3>{track.title}</h3>
                <ul>
                  {track.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="section-grid">
          <div className="section-card">
            <SectionHeading
              eyebrow="Expectations"
              title="What students are expected to bring and do"
              copy="This section keeps behavioural and practical expectations visible without parents digging through slides."
            />
            <ul className="checklist">
              {tripData.expectations.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="section-card">
            <SectionHeading
              eyebrow="Safety"
              title="How safeguarding is being handled"
              copy="This content is positioned prominently because it is one of the highest-interest areas for parents."
            />
            <div className="info-stack">
              {tripData.safety.map((item) => (
                <article className="info-card" key={item.title}>
                  <h3>{item.title}</h3>
                  <p>{item.detail}</p>
                </article>
              ))}
            </div>
            <ul className="mini-list">
              {tripData.supervision.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </section>

        <section className="section-grid">
          <div className="section-card">
            <SectionHeading
              eyebrow="Next Steps"
              title="What parents should do next"
              copy="This mirrors the final action slide and gives you a natural place for future reminders."
            />
            <ol className="numbered-list">
              {tripData.nextSteps.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ol>
          </div>

          <div className="section-card">
            <SectionHeading
              eyebrow="FAQ"
              title="Useful implementation notes"
              copy="These answers are for you as the site owner, so the handoff into Replit is smoother."
            />
            <div className="faq-list">
              {tripData.faqs.map((faq) => (
                <details key={faq.question}>
                  <summary>{faq.question}</summary>
                  <p>{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div>
          <p className="eyebrow">Before You Publish</p>
          <h2>Privacy and live-data reminder</h2>
          <p>{tripData.emergencyNote}</p>
        </div>
        <a className="secondary-button" href={tripData.pdfPath} target="_blank" rel="noreferrer">
          Open source PDF
        </a>
      </footer>
    </div>
  );
}

export default App;
