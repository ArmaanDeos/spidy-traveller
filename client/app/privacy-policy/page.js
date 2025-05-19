"use client";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function PrivacyPolicy() {
  return (
    <>
      <Header />
      <main className="max-w-5xl mx-auto px-4 py-16 mt-12">
        <section>
          <h1 className="text-4xl font-bold text-gray-800 mb-6">
            Privacy Policy
          </h1>
          <p className="text-gray-600 mb-8">
            At spidytraveller.com, your privacy isn’t just important — it’s a
            priority. This Privacy Policy explains how we collect, use, and
            safeguard your data when you explore our platform. By using our
            services, you agree to the terms outlined below.
          </p>

          <div className="space-y-10 text-gray-700">
            {/* Who We Are */}
            <div>
              <h2 className="text-2xl font-semibold mb-2">Who We Are</h2>
              <p>
                spidytraveller.com is an online travel platform owned and
                operated by SpidyTraveller Pvt. Ltd. We help young explorers
                discover budget-friendly adventures, and we&apos;re committed to
                protecting your digital footprint.
              </p>
            </div>

            {/* What We Collect */}
            <div>
              <h2 className="text-2xl font-semibold mb-2">What We Collect</h2>
              <p>
                When you browse our site or use our features, we may collect:
              </p>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>Device info like browser, IP address, and cookies</li>
                <li>
                  Pages you visit, buttons you click, and referral sources
                </li>
                <li>
                  Info you provide like your name, email, and phone number when
                  submitting forms or bookings
                </li>
                <li>
                  Payment details via secure third-party processors (we never
                  store this directly)
                </li>
              </ul>
            </div>

            {/* How We Use Your Data */}
            <div>
              <h2 className="text-2xl font-semibold mb-2">
                How We Use Your Info
              </h2>
              <p>
                Your data helps us personalize your travel experience, recommend
                cool destinations, and keep our platform secure. Here’s how:
              </p>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>Improving our website based on how you use it</li>
                <li>Sending updates, offers, or travel tips if you opt in</li>
                <li>Responding to your messages or booking inquiries</li>
                <li>Complying with legal obligations</li>
              </ul>
            </div>

            {/* Cookies & Tracking */}
            <div>
              <h2 className="text-2xl font-semibold mb-2">
                Cookies & Tracking
              </h2>
              <p>
                We use cookies to enhance site performance and remember your
                preferences. You can manage or disable cookies through your
                browser settings.
              </p>
            </div>

            {/* Your Rights */}
            <div>
              <h2 className="text-2xl font-semibold mb-2">
                Your Privacy Rights
              </h2>
              <p>
                If you&apos;re located in the EU or other regions with privacy
                laws, you have rights such as:
              </p>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>Access your data</li>
                <li>Request corrections or deletions</li>
                <li>Withdraw consent at any time</li>
                <li>Opt-out of marketing</li>
              </ul>
              <p className="mt-2">
                To make a request, email us at:{" "}
                <a
                  href="mailto:info@spidytraveller.com"
                  className="text-blue-600 underline"
                >
                  info@spidytraveller.com
                </a>
              </p>
            </div>

            {/* Third-Party Links */}
            <div>
              <h2 className="text-2xl font-semibold mb-2">
                Links to Other Sites
              </h2>
              <p>
                We might link to awesome travel tools, but once you leave our
                site, their privacy practices apply — not ours. Check out their
                policies before sharing info.
              </p>
            </div>

            {/* Data Security */}
            <div>
              <h2 className="text-2xl font-semibold mb-2">Data Security</h2>
              <p>
                We protect your data using encryption, firewalls, and secure
                storage — but remember, no system is 100% bulletproof online.
              </p>
            </div>

            {/* International Transfers */}
            <div>
              <h2 className="text-2xl font-semibold mb-2">Global Users</h2>
              <p>
                By using spidytraveller.com, you consent to having your data
                transferred to, and processed in, the United States or other
                countries where we or our partners operate.
              </p>
            </div>

            {/* Legal Disclosure */}
            <div>
              <h2 className="text-2xl font-semibold mb-2">Legal Stuff</h2>
              <p>
                We might disclose your data if legally required or to defend
                against fraud, protect our rights, or comply with authorities.
              </p>
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="text-2xl font-semibold mb-2">Got Questions?</h2>
              <p>
                Hit us up at{" "}
                <a
                  href="mailto:info@spidytraveller.com"
                  className="text-blue-600 underline"
                >
                  info@spidytraveller.com
                </a>{" "}
                if you need clarity, want to opt-out, or just want to know more.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
