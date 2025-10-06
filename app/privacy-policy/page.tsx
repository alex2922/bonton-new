import React from "react";

export default function PrivacyPolicy() {
  return (
    <>
      <div className="parent py-[50px]">
        <div className="container">
          <h1 className="text-4xl font-bold text-center text-black mb-10">
            Privacy Policy
          </h1>
          
          {/* Download Button */}
          <div className="text-center mb-8">
            <a
              href="/privacy/Privacy_Policy.pdf"
              download="Bonton_Cables_Privacy_Policy.pdf"
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-200 shadow-md hover:shadow-lg"
            >
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
              Download Privacy Policy PDF
            </a>
          </div>

          {/* 1. Introduction */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-black mb-2">
              1. Introduction and Scope
            </h2>
            <p className="text-gray-700">
              We respect your privacy and are committed to protecting your
              personal data. This policy describes how we collect, use, disclose,
              and protect personal data through our website. Global laws
              increasingly require businesses to inform users about data
              practices; therefore this policy applies to visitors from India and
              all other jurisdictions where our services are accessible.
            </p>
          </section>

          {/* 2. Information We Collect */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-black mb-2">
              2. Information We Collect
            </h2>
            <ul className="list-disc ml-6 text-gray-700 space-y-2">
              <li>
                <strong>Contact and identity information</strong> – name,
                company, job title, postal address, telephone number, email, or
                other identifiers you provide voluntarily.
              </li>
              <li>
                <strong>Usage and technical data</strong> – IP address, browser
                type, device identifiers, pages visited, referring URLs, and
                cookies.
              </li>
              <li>
                <strong>Transactional data</strong> – purchase information, order
                history, payment details, and shipping info.
              </li>
              <li>
                <strong>Recruitment data</strong> – CVs, cover letters, and other
                employment-related details.
              </li>
              <li>
                <strong>Other voluntary information</strong> – testimonials,
                survey responses, or support requests.
              </li>
            </ul>
            <p className="mt-2 text-gray-700">
              We do not knowingly collect data from children; if you believe a
              child has provided personal data, please contact us so we may
              delete it promptly.
            </p>
          </section>

          {/* 3. Purpose */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-black mb-2">
              3. Purpose and Legal Basis
            </h2>
            <p className="text-gray-700">
              We only process personal data when there is a lawful basis to do
              so. Our purposes include fulfilling contracts, responding to
              enquiries, marketing communications, analytics, compliance, and
              legal obligations. Depending on your jurisdiction, we rely on
              consent, legitimate interests, contract performance, or legal
              obligation.
            </p>
          </section>

          {/* 4. How We Share */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-black mb-2">
              4. How We Share Information
            </h2>
            <p className="text-gray-700">
              We may share personal data with service providers, affiliates,
              regulators, legal authorities, or prospective buyers. We do not
              sell personal data. Consent will be requested when required by law.
            </p>
          </section>

          {/* 5. Cross-Border Transfers */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-black mb-2">
              5. Cross-Border Data Transfers
            </h2>
            <p className="text-gray-700">
              Bonton Cables operates from India but may store or process data on
              servers outside your jurisdiction. Safeguards such as contractual
              clauses and adequacy decisions are applied.
            </p>
          </section>

          {/* 6. Security */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-black mb-2">
              6. Data Security
            </h2>
            <p className="text-gray-700">
              We implement encryption, access controls, secure servers, and
              employee training to protect personal data. No system is 100%
              secure; if a data breach occurs, we will notify relevant
              authorities and individuals as required.
            </p>
          </section>

          {/* 7. Retention */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-black mb-2">
              7. Data Retention
            </h2>
            <p className="text-gray-700">
              We retain personal data only as long as necessary or legally
              required. Data is securely deleted or anonymized after retention
              periods expire.
            </p>
          </section>

          {/* 8. Rights */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-black mb-2">
              8. Your Rights
            </h2>
            <p className="text-gray-700">
              Depending on applicable laws (DPDP Act, GDPR, etc.), you may have
              rights including access, rectification, deletion, consent
              withdrawal, objection, restriction, portability, and complaint
              filing.
            </p>
          </section>

          {/* 9. Cookies */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-black mb-2">
              9. Cookies and Similar Technologies
            </h2>
            <p className="text-gray-700">
              We use cookies and similar technologies to improve site
              performance, personalize content, and analyze traffic. You can
              manage cookies via browser settings or our cookie banner.
            </p>
          </section>

          {/* 10. Children */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-black mb-2">
              10. Children’s Privacy
            </h2>
            <p className="text-gray-700">
              Our services are not directed to children under 18. If we discover
              data collected from minors without consent, we will promptly delete
              it.
            </p>
          </section>

          {/* 11. Links */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-black mb-2">
              11. Links to Other Websites
            </h2>
            <p className="text-gray-700">
              Our website may contain links to third-party sites. We are not
              responsible for their privacy practices. Please review their
              policies before sharing data.
            </p>
          </section>

          {/* 12. Contact */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-black mb-2">
              12. Contact Us
            </h2>
            <div className="text-gray-700">
              <p>
                <strong>Bonton Cables (India) Pvt. Ltd.</strong>
              </p>
              <p>
                DLF Epitome Tower, 18th Floor, Building No. 5B,
                <br />
                DLF Cyber City, Phase III, Gurugram, Haryana - 122002
              </p>
              <p>Email: marketing@bontoncables.com</p>
              <p>Mobile: +91 8130299001</p>
            </div>
          </section>

          {/* 13. Updates */}
          <section>
            <h2 className="text-2xl font-semibold text-black mb-2">
              13. Updates to This Policy
            </h2>
            <p className="text-gray-700">
              We may update this privacy policy to reflect changes in practices
              or legal requirements. Updated policies will be posted here with a
              new “Last Updated” date.
            </p>
          </section>
        </div>
      </div>
    </>
  );
}
