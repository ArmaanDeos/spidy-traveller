"use client";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ReturnsPolicy() {
  return (
    <>
      <Header />
      <main className="max-w-5xl mx-auto px-4 py-16 mt-12">
        <section>
          <h1 className="text-4xl font-bold text-gray-800 mb-6">
            Returns & Refunds Policy
          </h1>
          <p className="text-gray-600 mb-8">
            At spidytraveller.com, we want your experience with us to be smooth
            and stress-free. This policy explains how cancellations, returns,
            and refunds work with our services.
          </p>

          <div className="space-y-10 text-gray-700">
            {/* Cancellation Section */}
            <div>
              <h2 className="text-2xl font-semibold mb-2">
                Booking Cancellation
              </h2>
              <p>
                You can request a cancellation within <strong>30 days</strong>{" "}
                of making a booking, as long as the travel service
                provider&apos;s policy allows it. Some bookings (like certain
                flights or hotels) may be non-refundable.
              </p>
              <p className="mt-2">
                To cancel, send us an email with your booking reference at:{" "}
                <a
                  href="mailto:info@spidytraveller.com"
                  className="text-blue-600 underline"
                >
                  info@spidytraveller.com
                </a>
              </p>
            </div>

            {/* Refunds Section */}
            <div>
              <h2 className="text-2xl font-semibold mb-2">Refunds</h2>
              <p>
                If your booking is eligible for a refund, we’ll process it to
                your original payment method within 7–10 business days of
                cancellation confirmation. Timing may vary based on the
                provider’s policies.
              </p>
              <p className="mt-2">
                We’ll notify you via email once your refund is initiated.
              </p>
            </div>

            {/* Return Conditions */}
            <div>
              <h2 className="text-2xl font-semibold mb-2">Return Conditions</h2>
              <p>
                For services like travel packages or digital travel documents:
              </p>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>Requests must be made within 30 days of purchase</li>
                <li>The service must not have been used or partially used</li>
              </ul>

              <p className="mt-4">We do not offer refunds on:</p>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>Non-refundable airline or hotel bookings</li>
                <li>Last-minute deals or flash offers</li>
                <li>Used or partially used travel services</li>
              </ul>

              <p className="mt-2">
                We reserve the right to deny refunds that don’t meet the policy
                criteria.
              </p>
            </div>

            {/* Digital Goods or Vouchers */}
            <div>
              <h2 className="text-2xl font-semibold mb-2">
                E-Tickets & Vouchers
              </h2>
              <p>
                For downloadable content like flight vouchers or package
                itineraries, we unfortunately can&apos;t offer returns once
                they&apos;ve been emailed or accessed.
              </p>
              <p className="mt-2">
                If you have a technical issue with your booking, reach out and
                we’ll help resolve it.
              </p>
            </div>

            {/* Gift Bookings */}
            <div>
              <h2 className="text-2xl font-semibold mb-2">Gifted Bookings</h2>
              <p>
                If the booking was marked as a gift and sent directly to the
                recipient, we’ll issue a refund or travel credit in the
                recipient’s name.
              </p>
              <p className="mt-2">
                If the gift was sent to the giver, any refund will go back to
                the original purchaser.
              </p>
            </div>

            {/* Contact */}
            <div>
              <h2 className="text-2xl font-semibold mb-2">Need Help?</h2>
              <p>
                Still have questions about returns or refunds? Reach out to our
                support team at: <br />
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
