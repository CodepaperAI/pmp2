"use client";

import { useEffect } from "react";

export default function ThankYouPage() {
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const course = params.get("course") || "Not specified";

    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: "generate_lead",
      form_name: "PMP Contact Form",
      course_selected: course,
      value: 50,
      currency: "CAD",
    });
  }, []);

  return (
    <main className="thankyou-page">
      <section className="thankyou-hero">
        <div className="wrap thankyou-layout">
          <div className="thankyou-card">
            <span className="section-num">Submission received</span>
            <h1>Thank you. Your request is in with Education Edge.</h1>
            <p className="lead">
              Someone from the team should follow up with your consultation details and next steps for the
              PMP cohort. You&apos;re now in the fast lane before the July 9 exam change.
            </p>

            <div className="thankyou-steps">
              <div className="thankyou-step">
                <span className="thankyou-step-num">01</span>
                <div>
                  <strong>Watch your inbox and phone</strong>
                  <p>Education Edge can use the details you just submitted to reach out.</p>
                </div>
              </div>
              <div className="thankyou-step">
                <span className="thankyou-step-num">02</span>
                <div>
                  <strong>Keep your timeline tight</strong>
                  <p>The May 30 cohort is the best runway to prepare before the new rules take effect.</p>
                </div>
              </div>
              <div className="thankyou-step">
                <span className="thankyou-step-num">03</span>
                <div>
                  <strong>Need help now?</strong>
                  <p>Call directly if you want to move faster than email follow-up.</p>
                </div>
              </div>
            </div>

            <div className="cta-row">
              <a href="tel:6476209490" className="btn btn-gold">
                Call (647) 620-9490
              </a>
              <a href="/lp-campaign2-pmp-exam-change-urgency" className="btn thankyou-outline">
                Back to Landing Page
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
