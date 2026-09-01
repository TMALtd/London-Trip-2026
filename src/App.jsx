import { useEffect, useState } from "react";
import { tripData } from "./data/tripData";

const currentDateFormatter = new Intl.DateTimeFormat("en-GB", {
  weekday: "long",
  day: "numeric",
  month: "long",
  year: "numeric",
  timeZone: "Asia/Kuala_Lumpur",
});

const URGENT_WINDOW_MS = 14 * 24 * 60 * 60 * 1000;

function getUpdateStatus(update, now) {
  if (update.completed) return "completed";
  if (!update.deadlineDate) return "urgent";

  const deadline = new Date(update.deadlineDate).getTime();
  if (deadline < now.getTime()) return "expired";
  if (deadline - now.getTime() <= URGENT_WINDOW_MS) return "urgent";
  return "upcoming";
}

const updateStatusOrder = { urgent: 0, upcoming: 1, expired: 2, completed: 2 };

function sortUpdates(updates, now) {
  return updates
    .map((update) => ({ ...update, status: getUpdateStatus(update, now) }))
    .sort((a, b) => {
      const orderDiff = updateStatusOrder[a.status] - updateStatusOrder[b.status];
      if (orderDiff !== 0) return orderDiff;

      const aTime = a.deadlineDate ? new Date(a.deadlineDate).getTime() : Infinity;
      const bTime = b.deadlineDate ? new Date(b.deadlineDate).getTime() : Infinity;
      return aTime - bTime;
    });
}

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

function renderItineraryHighlights(highlights) {
  return (
    <ul className="itinerary-highlights">
      {highlights.map((highlight) => {
        if (typeof highlight === "string") {
          return <li key={highlight}>{highlight}</li>;
        }

        return (
          <li key={highlight.label}>
            <span>{highlight.label}</span>
            {highlight.children?.length ? (
              <ul className="itinerary-subhighlights">
                {highlight.children.map((child) => (
                  <li key={child}>{child}</li>
                ))}
              </ul>
            ) : null}
          </li>
        );
      })}
    </ul>
  );
}

function App() {
  const [countdown, setCountdown] = useState(getCountdownParts());
  const currentDateLabel = currentDateFormatter.format(new Date());
  const sortedUpdates = sortUpdates(tripData.latestUpdates, new Date());
  const itineraryRows = [tripData.itinerary.slice(0, 4), tripData.itinerary.slice(4, 8)];
  const paymentIcons = ["wallet", "lock", "train"];

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown(getCountdownParts());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <nav className="site-nav">
        <div className="site-nav-inner">
          <a href="#live-updates">Live Updates</a>
          <a href="#itinerary">Itinerary</a>
          <a href="#travel">Travel</a>
          <a href="#entry">Entry</a>
          <a href="#weather">Weather</a>
          <a href="#money">Money</a>
          <a href="#packing">Packing</a>
          <a href="#safety">Safety</a>
        </div>
      </nav>
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
                  <div className="ticket-bottom-block">
                    <span>Luggage</span>
                    <strong>{ticket.luggageAllowance}</strong>
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
            Full Trip Briefing - Wednesday 23rd September 2026 - 3:30 - 5:00pm, Level 5 Auditorium - attendance
            is preferred.
          </div>
        </section>

        <section className="section-card updates-section" id="live-updates">
          <SectionHeading
            eyebrow="Live Updates"
            title={currentDateLabel}
            copy={`Last updated on ${currentDateLabel}`}
          />
          <div className="update-list">
            {sortedUpdates.map((update) => (
              <article
                className={`update-card status-${update.status}`}
                key={`${update.date}-${update.title}`}
              >
                {update.status === "urgent" && <span className="update-badge badge-urgent">Urgent</span>}
                {update.status === "completed" && (
                  <span className="update-badge badge-completed">Completed</span>
                )}
                {update.status === "expired" && <span className="update-badge badge-expired">Expired</span>}
                <span>{update.date}</span>
                <h3>{update.title}</h3>
                <p>{update.detail}</p>
                {update.link && (
                  <a className="update-link" href={update.link} target="_blank" rel="noreferrer">
                    {update.linkLabel || "Open link"}
                  </a>
                )}
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

        <section className="section-card itinerary-section" id="itinerary">
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
                      {renderItineraryHighlights(item.highlights)}
                    </div>
                  </article>
                ))}
              </div>
            ))}
          </div>
        </section>

        <section className="travel-entry-stack">
          <div className="section-card compact-section-card no-wrap-subtitle" id="travel">
            <SectionHeading
              eyebrow="Travel"
              title="Flights and long-haul guidance"
              copy="Important information to help students travel safely, comfortably, and confidently throughout the journey."
            />
            <div className="info-stack">
              <article className="info-card">
                <h3>Flight duration</h3>
                <p>{tripData.travel.flights.duration}</p>
              </article>
              <div className="travel-tip-grid">
                <article className="info-card">
                  <h3>Flight time tips</h3>
                  <ul className="mini-list">
                    {tripData.travel.flightTimeTips.map((tip) => (
                      <li key={tip}>{tip}</li>
                    ))}
                  </ul>
                </article>
                <article className="info-card">
                  <h3>Jet lag recovery tips after arrival</h3>
                  <ul className="mini-list">
                    {tripData.travel.jetLagRecoveryTips.map((tip) => (
                      <li key={tip}>{tip}</li>
                    ))}
                  </ul>
                </article>
              </div>
            </div>
          </div>

          <div className="section-card compact-section-card no-wrap-subtitle" id="entry">
            <SectionHeading
              eyebrow="Entry"
              title="UK entry requirements"
              copy="Important UK entry and visa information for students travelling on the London Trip."
            />
            <div className="entry-content">
              <ul className="checklist">
                {tripData.entryRequirements.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <div className="entry-image-wrap">
                <img src="/entry/passport-image.png" alt="UK passport and border control stamp graphic" />
              </div>
            </div>
            <div className="entry-links">
              <a
                className="secondary-button eta-button"
                href="https://www.gov.uk/eta/apply"
                target="_blank"
                rel="noreferrer"
              >
                Apply for UK ETA
              </a>
              <a
                className="secondary-button eta-button"
                href="https://www.gov.uk/standard-visitor/apply-standard-visitor-visa"
                target="_blank"
                rel="noreferrer"
              >
                Apply for Standard Visitor Visa
              </a>
            </div>
          </div>
        </section>

        <section className="section-grid weather-row" id="weather">
          <div className="section-card weather-text-card">
            <SectionHeading
              eyebrow="Weather"
              title="London weather in November"
              copy="A focused weather snapshot for planning clothing, daily comfort, and outdoor activities."
            />
            <ul className="checklist weather-checklist">
              {tripData.travel.londonWeather.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="section-card weather-widget-card">
            <p className="eyebrow">Widget</p>
            <h3>Live forecast</h3>
            <div className="weather-widget-wrap">
              <iframe
                src="https://commoninja.site/fb9bb00b-ab02-43fa-b071-11b9fbf7d21f"
                title="London weather widget"
                loading="lazy"
              />
            </div>
          </div>

        </section>

        <section className="weather-money-stack" id="money">
          <div className="section-card no-wrap-subtitle">
            <SectionHeading
              eyebrow="Money"
              title="Money"
              copy="The FX rate is currently quite strong against GBP, so this is a good time to buy in preparation for later."
            />
            <p className="payments-fx-note">
              Students should not need more than 100 GBP in additional funds for souvenirs and incidentals across the trip.
            </p>
            <div className="payments-layout">
              <div className="payments-points">
                {tripData.payments.map((item, index) => (
                  <article className="payment-point" key={item.title}>
                    <span className="payment-icon" aria-hidden="true">
                      {paymentIcons[index] === "wallet" ? "💳" : null}
                      {paymentIcons[index] === "lock" ? "🔒" : null}
                      {paymentIcons[index] === "train" ? "🚇" : null}
                    </span>
                    <div>
                      <h3>{item.title}</h3>
                      <p>{item.detail}</p>
                    </div>
                  </article>
                ))}
                <p className="payments-note">
                  Students are strongly encouraged to travel cashless where possible.
                </p>
              </div>

              <div className="payments-card-rail">
                <article className="payment-brand-card">
                  <h3>Wise International Card</h3>
                  <a
                    href="https://wise.com/my/card/?lang=en&utm_source=google&matchtype=e&device=c&userlocation=9197077&keyword=wise%20card&campaignid=20934525112&adgroupid=161278430847&utm_campaign=20934525112___161278430847&gad_source=1&gad_campaignid=20934525112&gbraid=0AAAAADqE2bBKXyrjLtrkThj84DSkZ_NJP&gclid=Cj0KCQjwk_bPBhDXARIsACiq8R31UcmgsIpF3dX4oxEv89A-TFcgJpg2AOHF6sb73oDYoZfX2LL96jIaAmKSEALw_wcB"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src="/payments/wise-card.png" alt="Wise card in use for contactless payment" />
                  </a>
                  <ul>
                    <li>Multi-currency travel card</li>
                    <li>Easy GBP spending</li>
                    <li>Contactless Tube travel</li>
                  </ul>
                </article>
                <article className="payment-brand-card">
                  <h3>Touch 'n Go Visa Card</h3>
                  <a
                    href="https://www.touchngo.com.my/gofinance/visa-card/?srsltid=AfmBOorz5Hj9yvwsSjlOYl4nvdA7P32KDs6JKvkCBBwOStfohllhDKlh"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src="/payments/touchngo-card.png" alt="Touch 'n Go Visa card for travel payments" />
                  </a>
                  <ul>
                    <li>Easy Malaysian top-up</li>
                    <li>Contactless payment support</li>
                    <li>Safer than carrying cash</li>
                  </ul>
                </article>
              </div>
            </div>
          </div>
        </section>

        <section className="section-card" id="packing">
          <SectionHeading
            eyebrow="Packing"
            title="Documents and essentials"
            copy="Everything students should have prepared before departure."
          />
          <div className="two-column-list">
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
              <h3>Official gear</h3>
              <ul>
                {tripData.packing.officialGear.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <div className="packing-wear-gallery">
                <figure className="packing-wear-card">
                  <img src="/packing/hoody-design.png" alt="School London Trip 2026 hoodie design" />
                  <figcaption>Official trip hoodie</figcaption>
                </figure>
                <figure className="packing-wear-card">
                  <img src="/packing/tshirt-design.png" alt="School London Trip 2026 t-shirt design" />
                  <figcaption>Official trip t-shirt</figcaption>
                </figure>
              </div>
            </article>
            <article>
              <h3>Theatre nights</h3>
              <ul>
                {tripData.packing.theatreDressCode.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          </div>
        </section>

        <section className="section-card">
          <SectionHeading
            eyebrow="Learning Design"
            title="What students will experience on the ground"
            copy="From West End productions to museum visits and industry workshops, students will engage in immersive real-world learning across London."
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
              copy="Clear expectations help ensure the trip remains safe, organised, and enjoyable for all students."
            />
            <ul className="checklist">
              {tripData.expectations.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="section-card" id="safety">
            <SectionHeading
              eyebrow="Safety"
              title="How safeguarding is being handled"
              copy="Clear safeguarding systems, supervision structures, and travel procedures will remain in place throughout the trip."
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

      </main>
      </div>
    </>
  );
}

export default App;
