import Header from "@/Layout/Header";

export default function PrivacyPolicy() {
  return (
    <>
      <Header />
      <div style={{ marginTop: '40px' }}>
        <div className="bg-gray-50 py-8 px-6 sm:px-10 md:px-20">
          <header className="text-center mb-12">
            <h1 className="text-4xl font-semibold text-pink-600">Privacy Policy</h1>
          </header>

          <section className="mb-12">
            <h2 className="text-3xl font-semibold text-pinks mb-4">Introduction</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              At Suncareshining Solution Private Limited, your privacy is our priority. This Privacy Policy outlines how we collect, use, and protect your personal information when you shop for kids` clothing and other products on our website.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-semibold text-pinks mb-4">Information We Collect</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              We may collect the following types of information:
            </p>
            <ul className="list-disc pl-6 text-lg text-gray-700">
              <li>Personal details such as your name, email, phone number, and address.</li>
              <li>Browsing behavior, such as pages viewed, time spent on the site, and items added to your cart.</li>
              <li>Payment details to process and fulfill your orders securely.</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-semibold text-pinks mb-4">How We Use Your Information</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              We use the collected information to:
            </p>
            <ul className="list-disc pl-6 text-lg text-gray-700">
              <li>Facilitate the processing and delivery of your orders, including kids` clothing items.</li>
              <li>Enhance your shopping experience by personalizing the website based on your preferences.</li>
              <li>Communicate with you about offers, updates, or important notifications.</li>
              <li>Maintain the security and integrity of our platform by preventing fraudulent activity.</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-semibold text-pinks mb-4">Data Protection</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              We are committed to safeguarding your personal information. Our security measures include encryption, firewalls, and regular audits to protect your data from unauthorized access or misuse.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-semibold text-pinks mb-4">Sharing Your Information</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              We do not sell or share your personal information with third parties, except when required to fulfill your order (e.g., shipping providers) or comply with legal obligations.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-semibold text-pinks mb-4">Changes to This Policy</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              We may revise this Privacy Policy from time to time. Updates will be posted on this page, and we encourage you to review the policy periodically to stay informed.
            </p>
          </section>
        </div>
      </div>
    </>
  );
}
