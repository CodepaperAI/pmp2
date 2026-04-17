"use client";

import { useEffect, useState } from "react";

const EXAM_CHANGE_DATE = new Date("2026-07-09T00:00:00-04:00");

const reasons = [
  {
    number: "01",
    title: "You already know this format.",
    description:
      "The current exam uses scenario-based questions you can study for with thousands of available practice tests, guides, and prep courses. The new format introduces untested case-study blocks that no one has practiced yet.",
  },
  {
    number: "02",
    title: "More resources exist right now.",
    description:
      "Every major PMP prep book, question bank, and mock exam is built for the current ECO. After July 9, it will take months for publishers and training providers to release reliable material for the new exam.",
  },
  {
    number: "03",
    title: "Do not be a guinea pig.",
    description:
      "First cohorts on a new exam always face uncertainty: unclear scoring benchmarks, limited practice material, and unfamiliar question formats. Let someone else be the test group. Pass on the proven format.",
  },
];

const features = [
  ["&#127908;", "fi-blue", "60 Hours Live Instruction", "In-person in Mississauga or join live online. Not pre-recorded. PMI-certified trainers who scored near-perfect on their own PMP exams."],
  ["&#128197;", "fi-gold", "7-Week Saturday Program", "Saturdays, 9 AM - 5 PM. Start May 30, finish mid-July. Just enough time to sit the current exam before the format changes."],
  ["&#128203;", "fi-green", "Strategic Study Plan", "A week-by-week roadmap from enrollment to exam day. Exactly what to study, when, and how - no wasted time."],
  ["&#128218;", "fi-blue", "2,000+ Practice Questions", "Full-length mock exams that mirror the real PMP in format, difficulty, and scenario structure. Know exactly what to expect."],
  ["&#129309;", "fi-gold", "Post-Course Coaching", "Your relationship does not end when the course ends. We coach you through weak areas right up to your exam date."],
  ["&#9989;", "fi-green", "100% Pass or Refund", "Follow the program, take the exam within 90 days. If you do not pass, you get every dollar back. No exceptions, no fine print."],
];

const timelineSteps = [
  ["tl-dot-gold", "&#10003;", "Today", "Reserve your seat", "in the May 30 cohort", false],
  ["tl-dot-blue", "&#10003;", "May 30", "Training begins", "7 live Saturday sessions", false],
  ["tl-dot-blue", "&#10003;", "Mid-June", "Mock exam drilling", "until you score 75%+", false],
  ["tl-dot-green", "&#10003;", "Late June", "Sit the PMP exam", "on the current format", false],
  ["tl-dot-red", "&#10005;", "July 9", "New exam launches", "harder format, fewer resources", true],
];

const testimonials = [
  [
    "Passed with top scores AT/AT/AT. Hemant's team monitored progress every week and ensured I was ready before I booked my exam. The structured approach made all the difference.",
    "Roland Isberto",
    "PMP Certified",
  ],
  [
    "Best PMP exam prep I could have chosen. The study materials, coaching, and guarantee gave me confidence I never had with self-study. Passed on my first attempt.",
    "Kangni Ayivi",
    "PMP Certified",
  ],
  [
    "Education Edge is a gold mine. Hemant and the team are incredible - they do not just teach you the material, they teach you how to think through the exam. Highly recommend.",
    "Rohail Mohammed",
    "PMP Certified",
  ],
];

const stats = [
  ["10,000+", "PMPs Trained"],
  ["1,141", "Google Reviews"],
  ["5.0 &#9733;", "Only 5-Star Rated"],
  ["May 30", "Next Cohort Start"],
];

const heroRuleHighlights = [
  ["Business Environment", "8%", "26%", "3x weight", "red"],
  ["Question Types", "Current format", "Case blocks + graphics", "Harder", "red"],
  ["New Content", "Core PMP scope", "AI + ESG topics", "Added", "gold"],
];

const faqItems = [
  [
    "What exactly is changing about the PMP exam on July 9?",
    "PMI is releasing a new Examination Content Outline. The Business Environment domain jumps from 8% to 26% of the exam. New topics include AI, sustainability, and ESG. The question count increases from 180 to 185, time extends to 240 minutes, and two new question formats are introduced: case or scenario blocks and graphic-based items.",
  ],
  [
    "Is the PMP I earn on the current exam still valid after July 9?",
    "Absolutely. Your PMP certification is identical regardless of which exam version you passed. Same credential, same recognition, same career value. The exam format changes, but the certification itself remains the same.",
  ],
  [
    "Can I realistically prepare in time if I start May 30?",
    "Yes. The 7-week program is designed for exactly this timeline. Most students are exam-ready within 6 to 10 weeks of starting. Beginning on May 30 puts you in position to sit the exam by late June or early July, before the changeover.",
  ],
  [
    "What if I am not ready by July 9?",
    "Education Edge only greenlights students to sit the exam when they are scoring 75%+ on mock exams. If you are not there by July 8, the team continues coaching you through the new exam format. The guarantee still applies.",
  ],
  [
    "How does the 100% pass guarantee work?",
    "Attend all 7 sessions, complete the mock exams, and sit the exam within 90 days of course completion. If you do not pass, you get a full refund. It is positioned as a straightforward outcome-based guarantee.",
  ],
  [
    "Is Education Edge a PMI Authorized Training Partner?",
    "Yes. Education Edge presents itself as PMI ATP #4456, and the 60-hour program is framed to satisfy PMI's 35 contact hour requirement for PMP eligibility.",
  ],
  [
    "Can my employer pay for the course?",
    "Yes. The page positions the program as employer-friendly and notes that corporate invoices and supporting documentation can be provided for HR or learning and development approval.",
  ],
];

function getCountdownState() {
  const difference = Math.max(0, EXAM_CHANGE_DATE.getTime() - Date.now());

  return {
    days: Math.floor(difference / 86400000),
    hours: Math.floor((difference % 86400000) / 3600000),
    minutes: Math.floor((difference % 3600000) / 60000),
    seconds: Math.floor((difference % 60000) / 1000),
    expired: difference <= 0,
  };
}

function CountdownBlocks({ countdown, variant = "hero" }) {
  if (countdown.expired) {
    return <div className="countdown-ended">The exam has changed.</div>;
  }

  const wrapperClass = variant === "hero" ? "countdown-blocks" : "final-countdown";
  const blockClass = variant === "hero" ? "cd-block" : "fc-block";
  const numberClass = variant === "hero" ? "cd-num" : "fc-num";
  const unitClass = variant === "hero" ? "cd-unit" : "fc-unit";

  return (
    <div className={wrapperClass}>
      {[
        ["Days", countdown.days],
        ["Hours", countdown.hours],
        ["Min", countdown.minutes],
        ["Sec", countdown.seconds],
      ].map(([label, value]) => (
        <div className={blockClass} key={label}>
          <span className={numberClass}>{value}</span>
          <span className={unitClass}>{label}</span>
        </div>
      ))}
    </div>
  );
}

export default function PmpUrgencyLandingPage() {
  const [countdown, setCountdown] = useState(getCountdownState);
  const [openFaqIndex, setOpenFaqIndex] = useState(null);
  const [showStickyBar, setShowStickyBar] = useState(false);

  useEffect(() => {
    const intervalId = window.setInterval(() => setCountdown(getCountdownState()), 1000);
    return () => window.clearInterval(intervalId);
  }, []);

  useEffect(() => {
    const onScroll = () => setShowStickyBar(window.scrollY > 500);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const revealItems = document.querySelectorAll(".reveal");
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) {
      revealItems.forEach((item) => item.classList.add("visible"));
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" },
    );

    revealItems.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div className="announce-bar">
        <div className="wrap announce-inner">
          <div className="announce-left">
            <span className="announce-tag">Next Cohort</span>
            <span className="announce-text">Starts May 30. Reserve your seat before this batch closes.</span>
          </div>
          <a
            href="https://www.educationedge.ca/course-start-dates"
            className="announce-link"
            target="_blank"
            rel="noreferrer"
          >
            View course dates
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
            <a href="/contact" className="nav-consult">
              Book Consultation
            </a>
          </div>
        </div>
      </nav>

      <main>
        <section className="hero">
          <div className="wrap">
            <div className="hero-layout">
              <div className="hero-copy">
                <div className="countdown-hero anim-fade-down anim-d1">
                  <div className="countdown-label">
                    <small>Exam change countdown</small>
                    The PMP exam changes in:
                  </div>
                  <CountdownBlocks countdown={countdown} variant="hero" />
                </div>

                <h1 className="anim-fade-up anim-d2">
                  The PMP exam changes <em>July 9</em>.
                  <br />
                  Get certified before it does.
                </h1>
                <p className="lead anim-fade-up anim-d3">
                  New domains. New AI content. Harder question types. The smartest move is to pass on the
                  current exam format - the one with more study resources, a proven structure, and a format
                  you can prepare for right now.
                </p>

                <div className="cta-row anim-fade-up anim-d4">
                  <a href="/contact" className="btn btn-gold">
                    Book Consultation &rarr;
                  </a>
                  <a href="#changes" className="btn btn-outline">
                    See What&apos;s Changing
                  </a>
                </div>
              </div>

              <aside className="hero-change-board anim-fade-up anim-d4" aria-label="PMP exam change highlights">
                <div className="hero-board-label">Rulebook Update</div>
                <h3 className="hero-board-title">What changes after July 9</h3>
                <p className="hero-board-copy">
                  PMI is rolling out a broader, less familiar exam with new weighting, new content, and
                  new item styles.
                </p>

                <div className="hero-board-compare">
                  <div className="hero-stage">
                    <span className="hero-stage-label">Until July 8</span>
                    <strong>Current PMP Rules</strong>
                    <span>180 questions · known prep resources</span>
                  </div>
                  <div className="hero-stage-arrow" aria-hidden="true">
                    &rarr;
                  </div>
                  <div className="hero-stage hero-stage-new">
                    <span className="hero-stage-label">From July 9</span>
                    <strong>New Rulebook</strong>
                    <span>185 questions · AI, ESG, case and graphic items</span>
                  </div>
                </div>

                <div className="hero-rules-stack">
                  {heroRuleHighlights.map(([label, before, after, chip, tone]) => (
                    <div className="hero-rule-row" key={label}>
                      <div className="hero-rule-copy">
                        <div className="hero-rule-label">{label}</div>
                        <div className="hero-rule-shift">
                          <span>{before}</span>
                          <span className="hero-rule-arrow">&rarr;</span>
                          <strong>{after}</strong>
                        </div>
                      </div>
                      <span className={`hero-rule-chip hero-rule-chip-${tone}`}>{chip}</span>
                    </div>
                  ))}
                </div>

                <div className="hero-board-warning">Same PMP credential. Tougher exam path.</div>
              </aside>
            </div>

            <div className="guarantee-strip">
              <div className="guarantee-strip-inner">
                <div className="guarantee-seal">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                </div>
                <div className="guarantee-content">
                  <div className="guarantee-headline">100% Pass Guarantee - In Writing</div>
                  <div className="guarantee-sub">
                    Pass the PMP on your first attempt, or get <strong>every dollar back</strong>. No
                    exceptions. No fine print.
                  </div>
                </div>
              </div>
            </div>

            <div className="trust-bar anim-fade-up anim-d5">
              <div className="trust-item">
                <span className="trust-dot" />
                <strong>PMI</strong>&nbsp;Authorized Training Partner
              </div>
              <div className="trust-item">
                <span className="trust-dot" />
                <strong>100%</strong>&nbsp;Pass Guarantee
              </div>
              <div className="trust-item">
                <span className="trust-dot" />
                <strong>5 &#9733;</strong>&nbsp;Google Reviews
              </div>
              <div className="trust-item">
                <span className="trust-dot" />
                <strong>60 hrs</strong>&nbsp;Live Instruction
              </div>
            </div>
          </div>
        </section>

        <div className="alert-bar">
          <div className="wrap">
            <div className="alert-inner">
              <span className="alert-icon" aria-hidden="true">
                &#9888;&#65039;
              </span>
              <span>
                <strong>Deadline alert:</strong> PMI has confirmed the new PMP Examination Content
                Outline takes effect July 9, 2026. The current exam retires on July 8. The May 30 cohort
                is framed as the last full-length cohort before the cutoff.
              </span>
            </div>
          </div>
        </div>

        <section className="section" id="changes">
          <div className="wrap">
            <span className="section-num reveal">01 / What&apos;s changing</span>
            <h2 className="reveal reveal-delay-1">
              The PMP exam is being restructured.
              <br />
              Here&apos;s exactly what&apos;s different.
            </h2>
            <p className="lead reveal reveal-delay-2">
              PMI is overhauling the exam content outline on July 9, 2026. Domains are re-weighted, new
              topics are added, and the question format is getting harder. Here is the breakdown:
            </p>

            <div className="change-grid">
              <div className="change-card reveal">
                <span className="change-tag tag-red">Biggest shift</span>
                <div className="domain-name">Business Environment</div>
                <div className="domain-shift">
                  <span className="domain-old">8%</span>
                  <span className="domain-arrow">&rarr;</span>
                  <span className="domain-new">26%</span>
                </div>
                <p className="body-copy">
                  More than tripling its weight. Covers organizational strategy, compliance, governance,
                  and sustainability - topics many test-takers have not studied deeply yet.
                </p>
              </div>

              <div className="change-card reveal">
                <div className="domain-name">People Domain</div>
                <div className="domain-shift">
                  <span className="domain-old">42%</span>
                  <span className="domain-arrow">&rarr;</span>
                  <span className="domain-new">33%</span>
                </div>
                <p className="body-copy">
                  Still critical, but re-focused toward leadership, stakeholder engagement, and team
                  performance.
                </p>
              </div>

              <div className="change-card reveal">
                <div className="domain-name">Process Domain</div>
                <div className="domain-shift">
                  <span className="domain-old">50%</span>
                  <span className="domain-arrow">&rarr;</span>
                  <span className="domain-new">41%</span>
                </div>
                <p className="body-copy">
                  Less weight on traditional process knowledge. More emphasis on tailoring and integration
                  across methodologies.
                </p>
              </div>

              <div className="change-card reveal">
                <span className="change-tag tag-gold">Brand new</span>
                <div className="domain-name">New Content Areas</div>
                <h3 className="card-heading">AI, Sustainability &amp; ESG</h3>
                <p className="body-copy card-spacing">
                  Artificial intelligence in planning, estimation, and risk prediction. Plus
                  environmental and social responsibility in project decision-making - topics not tested
                  on prior versions.
                </p>
              </div>

              <div className="change-card full-span reveal">
                <span className="change-tag tag-red">Harder format</span>
                <h3>New Question Types &amp; Exam Structure</h3>
                <table className="compare-table">
                  <thead>
                    <tr>
                      <th>Element</th>
                      <th>Current Exam (Before July 9)</th>
                      <th>New Exam (After July 9)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Total Questions</td>
                      <td className="val-old">180</td>
                      <td className="val-new">185</td>
                    </tr>
                    <tr>
                      <td>Duration</td>
                      <td className="val-old">230 minutes</td>
                      <td className="val-new">240 minutes</td>
                    </tr>
                    <tr>
                      <td>Question Types</td>
                      <td className="val-old">Multiple choice, multi-select, drag-drop, hotspot</td>
                      <td className="val-new">+ Case or scenario blocks + Graphic-based items</td>
                    </tr>
                    <tr>
                      <td>AI &amp; Sustainability</td>
                      <td className="val-old">Not tested</td>
                      <td className="val-new">Formal exam domains</td>
                    </tr>
                    <tr>
                      <td>Study Resources Available</td>
                      <td className="val-old">Thousands of books, courses, question banks</td>
                      <td className="val-new">Very limited at launch</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        <section className="section section-dark">
          <div className="wrap">
            <div className="text-center">
              <span className="section-num reveal">02 / Why pass now</span>
              <h2 className="reveal reveal-delay-1">3 reasons to get certified on the current exam.</h2>
              <p className="lead lead-white reveal reveal-delay-2 center-lead">
                Your PMP is valid regardless of which exam version you passed. But the version you take
                matters for your success rate.
              </p>
            </div>

            <div className="reason-grid">
              {reasons.map((reason) => (
                <div className="reason-card reveal" key={reason.number}>
                  <div className="reason-num">{reason.number}</div>
                  <h3>{reason.title}</h3>
                  <p>{reason.description}</p>
                </div>
              ))}
            </div>

            <div className="validity-note">
              <span className="validity-icon" aria-hidden="true">
                &#9989;
              </span>
              <p>
                <strong>Your PMP credential remains the same.</strong> Whether someone passes on the
                current exam or the new one, the certification outcome is identical. The real difference
                is the difficulty and predictability of the path to passing.
              </p>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="wrap">
            <div className="text-center">
              <span className="section-num reveal">03 / The program</span>
              <h2 className="reveal reveal-delay-1">Everything you need to pass before July 9.</h2>
              <p className="lead reveal reveal-delay-2 center-lead">
                Education Edge&apos;s program is designed to get you exam-ready in under 90 days - with a
                100% pass guarantee in writing.
              </p>
            </div>

            <div className="feature-grid">
              {features.map(([icon, iconClass, title, description]) => (
                <div className="feature-card reveal" key={title}>
                  <div className={`feature-icon ${iconClass}`} aria-hidden="true">
                    <span dangerouslySetInnerHTML={{ __html: icon }} />
                  </div>
                  <h3>{title}</h3>
                  <p>{description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      <section className="section section-soft">
        <div className="wrap">
          <div className="text-center">
            <span className="section-num reveal">04 / Your timeline</span>
            <h2 className="reveal reveal-delay-1">From enrollment to PMP before the exam changes.</h2>
            <p className="lead center-lead">Start May 30. Finish before July 9. Here is the critical path.</p>
          </div>

          <div className="timeline-track">
            {timelineSteps.map(([dotClass, icon, date, label, description, highlight]) => (
              <div className="tl-step" key={`${date}-${label}`}>
                <div className={`tl-dot ${dotClass}`} aria-hidden="true">
                  <span dangerouslySetInnerHTML={{ __html: icon }} />
                </div>
                <div>
                  <div className="tl-date">{date}</div>
                  <div className={`tl-label${highlight ? " red" : ""}`}>
                    <strong>{label}</strong> - {description}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-dark">
        <div className="wrap">
          <div className="text-center">
            <span className="section-num reveal">05 / Results</span>
            <h2 className="reveal reveal-delay-1">
              10,000+ project managers trained.
              <br />
              Here&apos;s what they say.
            </h2>
          </div>

          <div className="test-grid">
            {testimonials.map(([quote, author, role]) => (
              <div className="test-card reveal" key={author}>
                <div className="test-stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
                <div className="test-quote">&quot;{quote}&quot;</div>
                <div className="test-author">{author}</div>
                <div className="test-role">{role}</div>
              </div>
            ))}
          </div>

          <div className="stats-row">
            {stats.map(([number, label]) => (
              <div className="stat-block" key={label}>
                <span className="stat-num" dangerouslySetInnerHTML={{ __html: number }} />
                <span className="stat-label">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="text-center">
            <span className="section-num reveal">06 / Questions</span>
            <h2 className="reveal reveal-delay-1">Common questions about the exam change.</h2>
          </div>

          <div className="faq-list">
            {faqItems.map(([question, answer], index) => {
              const isOpen = openFaqIndex === index;

              return (
                <div className="faq-item" key={question}>
                  <button
                    type="button"
                    className="faq-q"
                    aria-expanded={isOpen}
                    onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                  >
                    {question}
                    <span className="faq-chevron">&#9662;</span>
                  </button>
                  <div className={`faq-a${isOpen ? " open" : ""}`}>
                    <div className="faq-a-inner">{answer}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="final-cta">
        <div className="wrap">
          <span className="section-num">07 / Contact Education Edge</span>
          <h2>Use the dedicated contact page to reach the team.</h2>

          <CountdownBlocks countdown={countdown} variant="final" />

          <p>
            The live contact form now lives on its own standalone Education Edge page so the inquiry
            experience is cleaner, more focused, and easier to share with campaign traffic.
          </p>

          <div className="cta-row cta-row-center">
            <a href="/contact" className="btn btn-gold">
              Book Consultation &rarr;
            </a>
            <a href="tel:6476209490" className="btn btn-outline">
              Call (647) 620-9490
            </a>
          </div>

          <p className="guarantee-line">
            &#128274; 100% Pass Guarantee - pass the PMP on your first attempt, or get every dollar
            back.
          </p>
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

      <div className={`sticky-bar${showStickyBar ? " is-visible" : ""}`}>
        <a href="/contact" className="btn btn-gold btn-block">
          Book Consultation &rarr;
        </a>
      </div>
    </>
  );
}
