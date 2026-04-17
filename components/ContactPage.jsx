import Script from "next/script";

const GHL_FORM_ID = "52ZS4tF96kmCcQV5uQFR";
const GHL_FORM_NAME = "Contact Us - Copy";

const contactCards = [
  {
    label: "Call Education Edge",
    title: "(647) 620-9490",
    description: "Talk directly with the team if you want help choosing the fastest path to your PMP.",
    href: "tel:6476209490",
    linkLabel: "Call now",
  },
  {
    label: "Next Cohort",
    title: "May 30 Start",
    description: "The strongest runway for preparing before the July 9 exam change takes effect.",
    href: "https://www.educationedge.ca/course-start-dates",
    linkLabel: "View dates",
    external: true,
  },
  {
    label: "Why Reach Out Now",
    title: "Before July 9",
    description: "Get clarity on eligibility, schedule, and how to avoid sitting the harder rule set.",
  },
];

const contactReasons = [
  "Use this page to submit a direct consultation request to Education Edge.",
  "Ask about the May 30 cohort, eligibility, and the July 9 exam-rule change.",
  "Get routed into the live Education Edge lead flow and onto the branded thank-you page.",
];

export default function ContactPage() {
  return (
    <>
      <Script src="https://api.educationedge.ca/js/form_embed.js" strategy="afterInteractive" />

      <div className="announce-bar">
        <div className="wrap announce-inner">
          <div className="announce-left">
            <span className="announce-tag">Advisor Access</span>
            <span className="announce-text">
              Contact Education Edge for PMP guidance before the July 9 exam change.
            </span>
          </div>
          <a href="tel:6476209490" className="announce-link">
            Call (647) 620-9490
          </a>
        </div>
      </div>

      <nav className="navbar">
        <div className="wrap navbar-inner">
          <a
            href="https://www.educationedge.ca/"
            className="nav-logo"
            target="_blank"
            rel="noreferrer"
            aria-label="Education Edge home"
          >
            <img
              src="https://www.educationedge.ca/wp-content/uploads/2022/10/EE-logo-new2.png"
              alt="Education Edge - Knowledge Beyond Borders"
            />
          </a>
          <div className="nav-right">
            <a href="tel:6476209490" className="nav-phone">
              <span className="nav-phone-icon" aria-hidden="true">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </span>
              (647) 620-9490
            </a>
            <a href="/lp-campaign2-pmp-exam-change-urgency" className="nav-consult">
              Back to Landing Page
            </a>
          </div>
        </div>
      </nav>

      <main className="contactpage">
        <section className="contactpage-hero">
          <div className="wrap contactpage-hero-layout">
            <div className="contactpage-hero-copy">
              <span className="section-num">Dedicated contact page</span>
              <h1>The standalone Education Edge contact form page.</h1>
              <p className="lead">
                This page is built specifically for contact and consultation requests. Use the live form
                on the right to ask about the May 30 cohort, your PMP timing, and how to move before the
                July 9 exam changes take effect.
              </p>

              <div className="cta-row">
                <a href="/lp-campaign2-pmp-exam-change-urgency" className="btn btn-gold">
                  Back to Landing Page
                </a>
                <a href="tel:6476209490" className="contactpage-call-link">
                  Call (647) 620-9490
                </a>
              </div>

              <div className="contactpage-reasons">
                {contactReasons.map((reason) => (
                  <div className="contactpage-reason" key={reason}>
                    <span className="contactpage-reason-dot" />
                    <span>{reason}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="contact-form-card contactpage-form-card" id="contact-form">
              <div className="contact-card-kicker">Education Edge Form</div>
              <h2 className="contact-card-title">Start the conversation</h2>
              <p className="contact-card-copy">
                Complete the form and an Education Edge advisor can help you choose the right next step.
              </p>

              <div className="ghl-form-shell">
                <iframe
                  src={`https://api.educationedge.ca/widget/form/${GHL_FORM_ID}`}
                  style={{ width: "100%", height: "100%", border: "none", borderRadius: "3px" }}
                  id={`inline-${GHL_FORM_ID}`}
                  data-layout="{'id':'INLINE'}"
                  data-trigger-type="alwaysShow"
                  data-trigger-value=""
                  data-activation-type="alwaysActivated"
                  data-activation-value=""
                  data-deactivation-type="neverDeactivate"
                  data-deactivation-value=""
                  data-form-name={GHL_FORM_NAME}
                  data-height="undefined"
                  data-layout-iframe-id={`inline-${GHL_FORM_ID}`}
                  data-form-id={GHL_FORM_ID}
                  title={GHL_FORM_NAME}
                />
              </div>

              <p className="contact-card-note">
                After a successful submission, the flow can redirect to the branded thank-you page while
                Education Edge receives your request.
              </p>
            </div>
          </div>
        </section>

        <section className="section section-soft">
          <div className="wrap">
            <div className="text-center">
              <span className="section-num">Additional contact options</span>
              <h2>Prefer another way to reach Education Edge?</h2>
              <p className="lead center-lead">
                The form on this page is the primary contact path, but you can also call directly or check
                upcoming course dates if that helps you move faster.
              </p>
            </div>

            <div className="contactpage-card-grid">
              {contactCards.map((card) => (
                <div className="contactpage-card" key={card.label}>
                  <div className="contactpage-card-label">{card.label}</div>
                  <h3>{card.title}</h3>
                  <p>{card.description}</p>
                  {card.href ? (
                    <a
                      href={card.href}
                      className="contactpage-card-link"
                      target={card.external ? "_blank" : undefined}
                      rel={card.external ? "noreferrer" : undefined}
                    >
                      {card.linkLabel} &rarr;
                    </a>
                  ) : null}
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="wrap">
          <div className="footer-logo">
            <img
              src="https://www.educationedge.ca/wp-content/uploads/2022/10/EE-logo-new2.png"
              alt="Education Edge"
            />
          </div>
          <p>
            PMI Authorized Training Partner #4456 &middot; Mississauga, ON &middot;{" "}
            <a href="tel:6476209490">(647) 620-9490</a>
          </p>
          <p className="footer-copy">&copy; 2026 Education Edge. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}
