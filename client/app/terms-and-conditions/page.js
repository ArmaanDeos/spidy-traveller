"use client";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function TermsPage() {
  return (
    <>
      <Header />
      <main className="max-w-5xl mx-auto px-4 py-16 mt-12">
        <section>
          <h1 className="text-4xl font-bold text-gray-800 mb-6">
            Terms and Conditions
          </h1>
          <p className="text-gray-600 mb-8">
            Welcome to SpidyTraveller! By accessing or using our website
            (spidytraveller.com), you agree to comply with and be bound by the
            following terms and conditions. If you disagree with any part of
            these terms, please do not use our services.
          </p>

          <div className="space-y-10 text-gray-700">
            {/* Use of Website */}
            <div>
              <h2 className="text-2xl font-semibold mb-2">Use of Website</h2>
              <p>
                SpidyTraveller provides information and services related to
                flights, hotels, and vacation bookings. You agree to use this
                website only for lawful purposes and in a manner that does not
                infringe on the rights of, or restrict the use of this website
                by, any third party.
              </p>
            </div>

            {/* Cookies */}
            <div>
              <h2 className="text-2xl font-semibold mb-2">Cookies</h2>
              <p>
                We use cookies to enhance your browsing experience. By using our
                website, you consent to the use of cookies in accordance with
                our Privacy Policy. These cookies help improve functionality,
                gather usage analytics, and may assist in marketing efforts.
              </p>
            </div>

            {/* Intellectual Property */}
            <div>
              <h2 className="text-2xl font-semibold mb-2">
                Intellectual Property
              </h2>
              <p>
                All content on spidytraveller.com, including logos, text,
                graphics, and images, is the property of SpidyTraveller or its
                content suppliers and is protected by copyright and intellectual
                property laws. You may not copy, reproduce, or use our content
                without written consent.
              </p>
            </div>

            {/* User Content */}
            <div>
              <h2 className="text-2xl font-semibold mb-2">User Comments</h2>
              <p>
                You may post reviews or comments as long as they are not
                unlawful, abusive, or misleading. SpidyTraveller is not
                responsible for user-generated content but reserves the right to
                remove content that violates these terms or applicable laws.
              </p>
            </div>

            {/* External Links */}
            <div>
              <h2 className="text-2xl font-semibold mb-2">Third-Party Links</h2>
              <p>
                Our website may contain links to external websites. We do not
                endorse or assume responsibility for the content or privacy
                practices of those sites. Use them at your own risk.
              </p>
            </div>

            {/* Booking Terms */}
            <div>
              <h2 className="text-2xl font-semibold mb-2">
                Booking and Payments
              </h2>
              <p>
                All travel bookings made through our platform are subject to
                availability and third-party supplier terms. SpidyTraveller acts
                as an intermediary and is not responsible for service
                disruptions or pricing changes made by airlines, hotels, or
                operators.
              </p>
            </div>

            {/* Limitation of Liability */}
            <div>
              <h2 className="text-2xl font-semibold mb-2">
                Limitation of Liability
              </h2>
              <p>
                SpidyTraveller shall not be liable for any indirect or
                consequential loss or damage arising out of or in connection
                with the use of this website. We provide our services “as is”,
                and do not guarantee uninterrupted access, accuracy, or
                completeness.
              </p>
            </div>

            {/* Changes to Terms */}
            <div>
              <h2 className="text-2xl font-semibold mb-2">
                Changes to These Terms
              </h2>
              <p>
                We may revise these terms at any time without notice. By using
                this site, you agree to be bound by the current version of the
                Terms and Conditions. Please review this page periodically.
              </p>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-2xl font-semibold mb-2">Contact Us</h2>
              <p>
                If you have any questions about these Terms and Conditions,
                please contact us at:
              </p>
              <p className="mt-2">
                <a
                  href="mailto:info@spidytraveller.com"
                  className="text-blue-600 underline"
                >
                  info@spidytraveller.com
                </a>
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
